import { google } from "googleapis";

// Interfaces
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    author: string;
    category: string;
    readTime: string;
    image: string;
    content: string; // HTML content
    publishedAt: string;
}

// Credentials
// Ideally these should be in .env.local
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || "";
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL || "";
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || "";

// Mock Data for Fallback
// Mock Data removed


async function getAuthClient() {
    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
        return null;
    }
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: GOOGLE_CLIENT_EMAIL,
            private_key: GOOGLE_PRIVATE_KEY,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    return auth.getClient();
}

/**
 * Transforms a Google Drive share link into a direct download/view link.
 */
function transformGoogleDriveURL(url: string): string {
    if (!url) return "";

    // Check if it's a Drive link
    if (url.includes("drive.google.com")) {
        // Extract ID
        // Patterns:
        // 1. .../file/d/FILE_ID/view...
        // 2. ...id=FILE_ID...
        const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);

        if (fileIdMatch && fileIdMatch[1]) {
            return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
        }
    }
    return url;
}

/**
 * Fetches all blogs from the "Blogs" sheet.
 * Assumes Sheet headers: id, title, slug, author, category, readTime, image, content, publishedAt
 */
/**
 * Fetches blogs from the "Blogs" sheet with optional pagination.
 * Assumes Sheet headers: id, title, slug, author, category, readTime, image, content, publishedAt
 * Rows start at 2 (1-indexed, header is 1).
 */
export async function getBlogs(limit?: number, offset: number = 0): Promise<BlogPost[]> {
    const client = await getAuthClient();
    if (!client || !SPREADSHEET_ID) {
        console.warn("Google Sheets credentials missing. Returning mock data.");
        // Mock pagination logic
        if (offset > 0) return [];
        return [];

    }

    try {
        const sheets = google.sheets({ version: "v4", auth: client as any });

        let range = "Blogs!A2:I";
        if (limit) {
            // Calculate specific range to save bandwidth
            // Row 1 is header. Row 2 is first data.
            // Start Row = 2 + offset
            // End Row = Start Row + limit - 1
            const startRow = 2 + offset;
            const endRow = startRow + limit - 1;
            range = `Blogs!A${startRow}:I${endRow}`;
        }

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: range,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) return [];

        return rows.map((row) => ({
            id: row[0] || "",
            title: row[1] || "",
            slug: row[2] || "",
            author: row[3] || "",
            category: row[4] || "",
            readTime: row[5] || "",
            image: transformGoogleDriveURL(row[6] || ""),
            content: row[7] || "",
            publishedAt: row[8] || "",
        }));
    } catch (error) {
        console.error("Error fetching blogs from Sheets:", error);
        return [];

    }
}

export async function getLatestBlog(): Promise<BlogPost | null> {
    const blogs = await getBlogs();
    if (blogs.length === 0) return null;

    // Assuming the last row is the latest, or we sort by date.
    // For now, let's take the first one or the last one? 
    // Usually new rows are added at bottom.
    return blogs[blogs.length - 1];
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
    const blogs = await getBlogs();
    return blogs.find((blog) => blog.slug === slug) || null;
}

/**
 * Adds a subscriber email to the "Subscribers" sheet.
 */
export async function addSubscriber(email: string): Promise<boolean> {
    const client = await getAuthClient();
    if (!client || !SPREADSHEET_ID) {
        console.warn("Google Sheets credentials missing. Cannot add subscriber.");
        return false; // Fail if no DB
    }

    try {
        const sheets = google.sheets({ version: "v4", auth: client as any });
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: "Subscribers!A:B",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[email, new Date().toISOString()]],
            },
        });
        return true;
    } catch (error) {
        console.error("Error adding subscriber:", error);
        return false;
    }
}

import type { Metadata } from "next";
import { Nanum_Myeongjo, BBH_Sans_Hegarty, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const bbhSansHegarty = BBH_Sans_Hegarty({
    variable: "--font-bbh-sans-hegarty",
    subsets: ["latin"],
    weight: "400",
});

const nanumMyeongjo = Nanum_Myeongjo({
    variable: "--font-nanum-myeongjo",
    subsets: ["latin"],
    weight: ["400", "700", "800"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
    title: "Law Journal | Modern Legal Magazine",
    description: "Dive into well-crafted stories, interviews, and guides designed to inform and inspire.",
    openGraph: {
        title: "Law Journal",
        description: "A modern magazine for curious minds.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${bbhSansHegarty.variable} ${nanumMyeongjo.variable} ${inter.variable} antialiased`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}

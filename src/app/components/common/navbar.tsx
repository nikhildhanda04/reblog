import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-b border-neutral-600 mx-4 md:mx-6 px-4 md:px-8 gap-6 md:gap-0">

                <div className="text-5xl font-primary tracking-wide font-bold">
                    Law Journal
                </div>

                <div className="flex flex-wrap justify-center items-center font-inter font-medium text-neutral-700 text-sm gap-4">
                    <Link href="/" className="hover:text-black transition-colors">HOME</Link>
                    <Link href="/all-blogs" className="hover:text-black transition-colors">BLOGS</Link>
                    {/* <Link href="/contact">CONTACT</Link> */}

                    <Link href="/subscribe">
                        <div className="text-sm bg-black px-2 py-1 rounded-md text-white ml-4 cursor-pointer hover:bg-neutral-800 transition-colors">
                            SUBSCRIBE
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
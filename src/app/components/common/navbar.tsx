export default function Navbar() {
    return(
        <>
        <div className="flex items-center justify-between py-8 border-b border-neutral-600 mx-6 px-8">

            <div className="text-5xl font-primary tracking-wide font-bold"    >
                Reado
            </div>

            <div className="flex items-center font-inter font-medium text-neutral-700 text-sm gap-4">

                <div>HOME</div>
                <div>BLOG</div>
                <div>CONTACT</div>

                <div className="text-sm bg-black px-2 py-1 rounded-md text-white ml-4">SUBSCRIBE</div>

            </div>
        </div>
        </>
    )
}
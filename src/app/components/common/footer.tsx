
export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 px-4 md:px-12 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto">
               
                <div className="relative w-full h-px bg-white/20 mb-16">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
                    
                    <div className="lg:col-span-6 flex flex-col gap-8 pr-0 lg:pr-12">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-bold tracking-tighter uppercase font-primary">
                                Reado<span className="text-xs align-top ml-1">TM</span>
                            </h2>
                            <p className="text-2xl font-secondary">Never miss an update</p>
                        </div>

                        <div className="w-full max-w-md">
                            <div className="relative flex items-center border border-white/20 rounded-md p-1 focus-within:border-white transition-colors">
                                <input
                                    type="email"
                                    placeholder="Subscribe with your email"
                                    className="grow bg-transparent border-none outline-none text-sm px-4 py-2 placeholder:text-white/50 text-white"
                                />
                                <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded uppercase tracking-wide hover:bg-neutral-200 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-xs text-white/40 mt-3 font-inter">
                                By subscribing to Reado's newsletter, you agree to our Privacy Policy.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px bg-white/20 mx-auto h-full"></div>

                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <h3 className="font-secondary text-2xl">Pages</h3>
                        <div className="flex flex-col gap-3 font-inter text-sm text-white/70 uppercase tracking-widest">
                            <a href="#" className="hover:text-white transition-colors">Home</a>
                            <a href="#" className="hover:text-white transition-colors">Blogs</a>
                            <a href="#" className="hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px bg-white/20 mx-auto h-full"></div>

                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <h3 className="font-secondary text-2xl">Socials</h3>
                        <div className="flex flex-col gap-3 font-inter text-sm text-white/70 uppercase tracking-widest">
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-px bg-white/20 mb-8">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-inter gap-4">
                    <div>Developed by Nikhil Dhanda, Powered by Web Mantra Solutions</div>
                    <div>© 2025 Reado. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

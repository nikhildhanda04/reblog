
import Image from "next/image";

export default function Quote() {
    return (
        <section className="flex flex-col items-center justify-center py-24 px-4 bg-[#EAE8E4]">
      
            <div className="border border-black p-3 bg-white max-w-[500px] w-full mb-12">
                <div className="flex items-center justify-between mb-2 opacity-60">
                    <div className="grow h-px border-t border-dashed border-black mx-2"></div>
                    <span className="text-[10px] tracking-widest">ooo</span>
                    <div className="grow h-px border-t border-dashed border-black mx-2"></div>
                </div>

                <div className="relative aspect-4/3 w-full border border-black overflow-hidden bg-neutral-200">
                  
                    <Image 
                    src="/quote.png"
                    alt="quote"

                    fill
                    className="absolute inset-0 flex items-center object-cover justify-center text-neutral-500">
                        
                    </Image>
                </div>
            </div>

            <div className="max-w-4xl text-center flex flex-col items-center gap-8">
                <p className="text-2xl md:text-2xl font-secondary leading-tight font-bold text-neutral-900">
                    This platform was started with a simple idea: to share stories that spark curiosity and inspire conversations. Our team of writers and creators is dedicated to bringing thoughtful and diverse voices together. We hope you find value in every read.
                </p>

                <div className="flex items-center justify-center w-64 opacity-60 my-4">
                    <div className="grow h-px border-t border-dotted border-black mx-2"></div>
                    <span className="text-[10px] tracking-widest mx-2">ooo</span>
                    <div className="grow h-px border-t border-dotted border-black mx-2"></div>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <div className="font-secondary text-xl">Lokansha</div>
                    <div className="font-inter text-sm text-neutral-600 uppercase tracking-wide">Founder & Law Student</div>
                </div>
            </div>
        </section>
    )
}

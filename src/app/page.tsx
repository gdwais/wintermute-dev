import Link from "next/link";
import React from "react";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-tl from-[#002451]  to-[#002451] -z-2">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0  to-zinc-300/0" />
      <h1 className=" text-xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        wintermute dev
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 to-white/0" />
      <div className="my-12 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-300 flex flex-grow">
        <div>💡</div> <div className="mx-12">
            Fractional Development 
          </div>
          <div>💻</div> <div className="mx-12"> Consultation </div>
          <div> 🚀 </div>
          
        </h2>
      </div>
    </div>
  );
}

import React from 'react';
import bannerimg from '../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='max-w-[80%] mx-auto my-5'>
            <div className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-[#0a0a0a] text-white">
  
  <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-pink-500/20 blur-[100px]"></div>
  
  <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]"></div>

  <div className="relative z-10 flex flex-col items-center text-center">
    <img src={bannerimg} alt="Cricket" className="mb-6 w-48" />

    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
      Assemble Your Ultimate Dream 11 Cricket Team
    </h1>
    
    <p className="mt-4 text-lg text-gray-400">
      Beyond Boundaries Beyond Limits
    </p>

    <button className="mt-8 rounded-xl bg-[#e2ff3d] px-8 py-3 font-bold text-black transition-transform hover:scale-105">
      Claim Free Credit
    </button>
  </div>
</div>
        </div>
    );
};

export default Banner;
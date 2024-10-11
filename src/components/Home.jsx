import React from 'react';
import Work from './work';

const Home = () => {
  // bg-gradient-to-tr from-[#578CFF]   to-[#FDE047] 
  return (
    <>
    <div className="py-16 px-16 min-h-screen w-full bg-gradient-to-tr from-[#578CFF]  to-[#FDE047]">
    <div className='flex justify-between gap-5'>
       <div className="w-2/3">
       <h1 className='font-fre text-4xl font-semibold text-[#1F2937] leading-[3rem] tracking-wide'><span className='text-5xl text-[#578CFF]'>Empowering</span> the future, one child at a time through accessible and transformative learning opportunities</h1>
       <p className='text-xl mt-4 leading-8 text-[#1F2937]'> At InspireClimb, we are dedicated to breaking barriers and creating opportunities for children by providing high-quality education. Our mission is to nurture young minds and guide them towards a brighter future. Join us in our journey to empower communities, inspire curiosity, and foster growth—locally and globally.</p>
       <button className="mt-8 bg-[#FDE047] py-2 px-8 text-lg rounded-full shadow-xl text-[#1F2937] font-semibold ">Join us</button>
       </div>
       <div className="img">
        <img src="https://images.unsplash.com/photo-1560785496-3c9d27877182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNoaWxkcyUyMGxlYXJuaW5nfGVufDB8fDB8fHww" alt="" className='rounded-xl w-[45vw]' />
       </div>
    </div>
       <Work/> 
    </div>
    </>
  )
}

export default Home

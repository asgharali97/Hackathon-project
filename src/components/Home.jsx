import React from 'react';
import Work from './Work';
import About from './About';
import Join from './Join';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from('.home-img',{
      x:200,
      duration:1,
    })
    gsap.from('.text',{
      scale:0,
      duration:1,
    })
  })
  return (
    <>
    <div className="py-16 px-16 min-h-screen w-full bg-gradient-to-tr from-[#578CFF]  to-[#FDE047] overflow-hidden">
    <div className='flex flex-col lg:flex-row justify-between gap-5'>
       <div className="text w-full lg:w-2/3 mb-4">
       <h1 className='font-fre text-4xl font-semibold text-[#1F2937] leading-[3rem] tracking-wide'><span className='text-5xl text-[#578CFF]'>Empowering</span> the future, one child at a time through accessible and transformative learning opportunities</h1>
       <p className='text-xl mt-4 leading-8 text-[#1F2937]'> At InspireClimb, we are dedicated to breaking barriers and creating opportunities for children by providing high-quality education. Our mission is to nurture young minds and guide them towards a brighter future. Join us in our journey to empower communities, inspire curiosity, and foster growth—locally and globally.</p>
       <button className="mt-8 bg-[#FDE047] py-2 px-8 text-lg rounded-full shadow-xl text-[#1F2937] font-semibold ">Join us</button>
       </div>
       <div className="home-img">
        <img src="https://images.unsplash.com/photo-1560785496-3c9d27877182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNoaWxkcyUyMGxlYXJuaW5nfGVufDB8fDB8fHww" alt="" className='rounded-xl w-full lg:min-w-[45vw]' />
       </div>
    </div>
       <Work/> 
       <About bgColor="transparent" px='px-0'/>
       <Join bgColor="transparent" px='px-0'/>
    </div>
    </>
  )
}

export default Home

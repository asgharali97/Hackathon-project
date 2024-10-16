import React, { useState } from "react";
import Input from "./Input";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Join = ({
  bgColor = 'bg-gradient-to-tr from-[#FDE047]  to-[#578CFF]',
  px = 'px-16'
}) => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const handleForm = (e)=>{
    e.preventDefault();
    setName('')
    setEmail('')
  }

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.from('.join-head',{
      y:-100,
      duration:1.2,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:'.join-head',
      }
    })

    gsap.from('.join-head-text',{
      scale:0,
      duration:1.2,
      opacity:0,
      scrollTrigger:{
        trigger:'.join-head-text',
      }
    })

    gsap.from('.ar1',{
      x:-100,
      duration:0.8,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:'.ar1',
      }
    })

    gsap.from('.p1',{
      x:-100,
      duration:1,
      delay:0.5,
      opacity:0,
      scrollTrigger:{
        trigger:'.p1',
      }
    })

    gsap.from('.ar2',{
      x:100,
      duration:0.8,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:'.ar2',
      }
    })

    gsap.from('.p2',{
      x:100,
      duration:1,
      delay:0.5,
      opacity:0,
      scrollTrigger:{
        trigger:'.p2',
      }
    })

    gsap.from('.ar3',{
      x:-100,
      duration:0.8,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:'.ar3',
        start:'top 90%'
      }
    })

    gsap.from('.p3',{
      x:-100,
      duration:1,
      delay:0.5,
      opacity:0,
      scrollTrigger:{
        trigger:'.ar3',
        start:'top 90%'
      }
    })

    gsap.from('.join-img',{
      scale:0,
      duration:1.5,
      opacity:0,
      scrollTrigger:{
        trigger:'.join-img',
      }
    })

    gsap.from('.join-form',{
      x:100,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:'.join-form',
        start:'top 90%'
      }
    })
  })
  return (
    <>
      <div className={`py-16 ${px} min-h-screen flex flex-wrap w-full ${bgColor} gap-5 overflow-hidden`}>
        <div className="flex flex-col w-full justify-center items-center mt-12">
          <h3 className="join-head font-fre text-4xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047] mb-4">
            Why Join us
          </h3>
          <p className="join-head-text ma:px-16 text-xl mt-4 leading-8 text-[#fff]">
            By joining InspireClimb, you become a part of a movement that is
            dedicated to reshaping the future. Whether you contribute as a
            mentor, volunteer, or supporter, your involvement direcgsapy impacts
            the lives of children. Together, we can ensure that every child, no
            matter their circumstances, has the chance to learn, grow, and
            succeed.
          </p>
        </div>
        <div className="w-full relative">
          <div className="ma:w-2/4 w-full mt-8">
            <h4 className="ar1 font-fre text-center ma:text-start text-2xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
              Impact Lives
            </h4>
            <p className="p1 text-xl mt-4 leading-8 text-[#fff]">
              Help provide the foundation for a child’s lifelong learning
              journey.
            </p>
          </div>
          <div className="w-full flex flex-col items-end">
            <div className="ma:w-2/4 w-full mt-8">
              <h4 className="ar2 font-fre text-center ma:text-start text-2xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
                Support Global Education
              </h4>
              <p className="p2 text-xl mt-4 leading-8 text-[#fff]">
                Be a part of our mission to expand educational opportunities
                worldwide.
              </p>
            </div>
          </div>
          <div className="w-full ma:w-2/4 mt-8">
            <h4 className="ar3 font-fre text-center ma:text-start text-2xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
              Community Driven
            </h4>
            <p className="p3 text-xl mt-4 leading-8 text-[#fff]">
              Collaborate with like-minded individuals passionate about creating
              change.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-40 mt-16 ">
          <div className="join-img w-full lg:w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1656087813550-d5cdae8ee57c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGRzJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
              className="rounded-xl shadow-lg w-full"
              alt="image"
            />
          </div>
          <div className="join-form info w-2/3 lg:w-[50%]">
            <form onSubmit={handleForm} >
            <Input 
            label="Name" 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            <Input 
            label="Email"
            type="email"
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
            />
            <button type="submit" className="bg-[#FDE047] py-2 px-8 text-lg rounded-full shadow-md text-[#1F2937] font-semibold mt-8 hover:bg-[#578CFF] hover:text-white transition ease-in-out duration-150">
              Join us
            </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;

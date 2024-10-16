import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const work = () => {
  
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
    gsap.from('.head',{
      y:-90,
      opacity:0,
      delay:0.3,
      duration:1,
      scrollTrigger:{
        trigger:'.head',
        start:90
      }
    })
    gsap.from('.parh1',{
      x:-100,
      duration:1.5,
      delay:0.2,
      opacity:0,
      scrollTrigger:{
        trigger:".parh1",
        start:"top 70%",
      }
    })
    gsap.from('.parh2',{
      x:100,
      duration:1.5,
      delay:0.2,
      opacity:0,
      scrollTrigger:{
        trigger:".parh2",
        start:"top 70%",
      }
    })
    gsap.from('.parh3',{
      x:-100,
      duration:1.5,
      delay:0.2,
      opacity:0,
      scrollTrigger:{
        trigger:".parh3",
        start:"top 80%",

      }
    })
  })

  return (
    <>
      <div className="head flex w-full justify-center mt-32">
          <h3 className="font-fre text-4xl font-semibold text-[#ffff] tracking-wide ">
            What We Do
          </h3>
        </div>
        <div className="w-full relative">
          <div className="parh1 w-full ma:w-2/4 mt-8">
            <h4 className="font-fre ma:text-start text-center text-2xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
              Holistic Learning
            </h4>
            <p className="text-xl mt-4 leading-8 text-[#fff]">
              We provide a comprehensive curriculum that goes beyond academics
              to foster creativity, critical thinking, and problem-solving
              skills.
            </p>
          </div>
          <div className="w-full flex flex-col items-end">
            <div className="parh2 w-full ma:w-2/4 mt-8">
              <h4 className="font-fre ma:text-start text-center text-2xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
              Community Engagement
              </h4>
              <p className="text-xl mt-4 leading-8 text-[#fff]">
              We believe that education thrives when the whole community is involved. Our programs are designed to empower families and communities to play a central role in a child’s educational journey.
              </p>
            </div>
          </div>
          <div className="parh3 ma:w-2/4 w-full mt-8">
            <h4 className="font-fre ma:text-start text-center text-2xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
            Global Impact
            </h4>
            <p className="text-xl mt-4 leading-8 text-[#fff]">
            Starting from one school, our long-term goal is to create a network of learning centers worldwide, so no child is left behind.
            </p>
          </div>
        </div>
    </>
  )
}

export default work

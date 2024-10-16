import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = ({
  bgColor = 'bg-gradient-to-tr from-[#578CFF]  to-[#FDE047]',
  px = 'px-16'
}) => {
  
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.from('.text1',{
      x:-100,
      delay:0.1,
      duration:1,
      opacity:0,scrollTrigger:{
        trigger:".text1",
      }
    })
    gsap.from('.about-img',{
      x:100,
      delay:0.3,
      duration:1.5,
      opacity:0,
      scrollTrigger:{
        trigger:".about-img",
      }
    })

    gsap.from('.about-img1',{
      x:-100,
      duration:1.5,
      delay:0.2,
      opacity:0,
      scrollTrigger:{
        trigger:".about-img1",
        start:"top 70%",
      }
    })
    gsap.from('.text2',{
      x:100,
      duration:1.5,
      delay:0.2,
      opacity:0,
      scrollTrigger:{
        trigger:".text2",
        start:"top 70%",
      }
    })
  })

  return (
    <>
      <div className={`py-16 ${px} min-h-screen w-full ${bgColor} gap-5 overflow-hidden`}>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
          <div className="text1 w-full lg:w-2/4 ">
            <h1 className="font-fre mb-3 text-5xl lg:text-4xl text-center lg:text-start font-semibold text-[#1F2937] tracking-wide w-full">
              Our Mission
            </h1>
            <p className="text-xl mt-4 leading-8 text-[#1F2937] w-full">
              Our mission is to make high-quality learning experiences available
              to every child. We focus on cultivating a supportive and engaging
              environment where children can explore, grow, and thrive. Through
              innovative teaching methods, mentorship programs, and community
              involvement, we work to open doors to knowledge and opportunity.
            </p>
          </div>
          <div className="about-img w-full lg:w-2/4 mt-8 lg:mt-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1663040197283-fae88b360dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1ha2UlMjBoaWdoJTIwcXVhbGl0eSUyMGxlYXJuaW5nJTIwZXhwZXJpZW5jZXN8ZW58MHx8MHx8fDA%3D"
              className="rounded-xl shadow-xl w-full"
              alt="image"
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col lg:flex-row justify-between w-full gap-8">
          <div className="about-img1 w-full">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fFdlJTIwYWltJTIwdG8lMjBidWlsZCUyMGxlYXJuaW5nJTIwY2VudGVycyUyMGFjcm9zcyUyMHRoZSUyMGdsb2JlfGVufDB8fDB8fHww"
              alt="image"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
          <div className="text2 w-full mt-10 lg:mt-0">
            <h1 className="font-fre mb-3 text-5xl lg:text-4xl text-center lg:text-start font-semibold text-[#1F2937] tracking-wide w-full">
              Our Vision
            </h1>
            <p className="text-xl mt-4 leading-8 text-[#1F2937] w-full">
              Our vision is to create a world where every child, regardless of
              background, has access to the tools and knowledge they need to
              reach their full potential. We aim to build learning centers
              across the globe, ensuring that education is within reach for
              every child. By expanding our reach, we hope to nurture the next
              generation of thinkers, leaders, and changeMakers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
  
  
};

export default About;

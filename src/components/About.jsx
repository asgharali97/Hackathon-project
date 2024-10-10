import React from "react";
import Work from "./work";

const About = () => {
  return (
    <>
      <div className="py-16 px-16 min-h-screen flex flex-wrap w-full bg-gradient-to-tr from-[#578CFF]  to-[#FDE047] gap-5">
        <div className="flex justify-between ">
          <div className="w-2/4">
            <h1 className="font-fre text-3xl font-semibold text-[#1F2937] tracking-wide">
              Our Mission
            </h1>
            <p className="text-xl mt-4 leading-8 text-[#1F2937]">
              Our mission is to make high-quality learning experiences available
              to every child. We focus on cultivating a supportive and engaging
              environment where children can explore, grow, and thrive. Through
              innovative teaching methods, mentorship programs, and community
              involvement, we work to open doors to knowledge and opportunity.
            </p>
          </div>
          <div className="img">
            <img
              src="https://plus.unsplash.com/premium_photo-1663040197283-fae88b360dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1ha2UlMjBoaWdoJTIwcXVhbGl0eSUyMGxlYXJuaW5nJTIwZXhwZXJpZW5jZXN8ZW58MHx8MHx8fDA%3D"
              className="rounded-xl shadow-xl"
              alt="image"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fFdlJTIwYWltJTIwdG8lMjBidWlsZCUyMGxlYXJuaW5nJTIwY2VudGVycyUyMGFjcm9zcyUyMHRoZSUyMGdsb2JlfGVufDB8fDB8fHww"
              alt="image"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="w-2/4 mt-10">
            <h1 className="font-fre text-3xl font-semibold text-[#1F2937] tracking-wide ">
              Our Vision
            </h1>
            <p className="text-xl mt-4 leading-8 text-[#1F2937]">
              Our vision is to create a world where every child, regardless of
              background, has access to the tools and knowledge they need to
              reach their full potential. We aim to build learning centers
              across the globe, ensuring that education is within reach for
              every child. By expanding our reach, we hope to nurture the next
              generation of thinkers, leaders, and changeMakers.
            </p>
          </div>
        </div>
        <Work />
      </div>
    </>
  );
};

export default About;

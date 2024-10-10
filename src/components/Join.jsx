import React from "react";
import Input from "./Input";

const Join = () => {
  return (
    <>
      <div className="py-16 px-16 min-h-screen flex flex-wrap w-full bg-gradient-to-tr from-[#FDE047]  to-[#578CFF] gap-5">
        <div className="flex flex-col w-full justify-center items-center mt-12">
          <h3 className="font-fre text-4xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
            Why Join us
          </h3>
          <p className="px-16 text-xl mt-4 leading-8 text-[#fff]">
            By joining InspireClimb, you become a part of a movement that is
            dedicated to reshaping the future. Whether you contribute as a
            mentor, volunteer, or supporter, your involvement directly impacts
            the lives of children. Together, we can ensure that every child, no
            matter their circumstances, has the chance to learn, grow, and
            succeed.
          </p>
        </div>
        <div className="w-full relative">
          <div className="w-2/4 mt-8">
            <h4 className="font-fre text-2xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
              Impact Lives
            </h4>
            <p className="text-xl mt-4 leading-8 text-[#fff]">
              Help provide the foundation for a child’s lifelong learning
              journey.
            </p>
          </div>
          <div className="w-full flex flex-col items-end">
            <div className="w-2/4 mt-8">
              <h4 className="font-fre text-2xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
                Support Global Education
              </h4>
              <p className="text-xl mt-4 leading-8 text-[#fff]">
                Be a part of our mission to expand educational opportunities
                worldwide.
              </p>
            </div>
          </div>
          <div className="w-2/4 mt-8">
            <h4 className="font-fre text-2xl font-semibold text-[#1F2937] tracking-wide underline underline-offset-8 decoration-[#FDE047]">
              Community Driven
            </h4>
            <p className="text-xl mt-4 leading-8 text-[#fff]">
              Collaborate with like-minded individuals passionate about creating
              change.
            </p>
          </div>
        </div>
        <div className="w-full flex gap-40 mt-16 ">
          <div className="img w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1656087813550-d5cdae8ee57c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGRzJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
              className="rounded-xl shadow-lg"
              alt="image"
            />
          </div>
          <div className="info w-[50%]">
            <Input label="Name" />
            <Input label="Email" type="email" />
            <div className="w-[15vw]">
              <label className="inline-block mb-2 pl-1 font-semibold">
                How will you join
              </label>
              <select
                className={`py-3 px-2 rounded-full text-black bg-white outline-none focus:bg-gray-50 duration-200 w-full`}
              >
                <option className="text-[#1F2937] rounded-2xl">
                  Volunteer with Us
                </option>
                <option className="text-[#1F2937] rounded-2xl">
                  Mentorship Opportunities
                </option>
                <option className="text-[#1F2937] rounded-2xl">Donate</option>
              </select>
            </div>
            <button className="bg-[#FDE047] py-2 px-8 text-lg rounded-full shadow-md text-[#1F2937] font-semibold mt-8 hover:bg-[#578CFF] hover:text-white transition ease-in-out duration-150">
              Join us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;

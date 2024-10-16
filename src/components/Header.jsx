import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(".logo", {
      opacity: 0,
      delay: 0.3,
      y: -20,
      duration: 1,
      ease: "power.in",
    });

    gsap.from(".li", {
      opacity: 0,
      delay: 0.3,
      y: -40,
      duration: 0.5,
      ease: "power.in",
    });

    gsap.from(".btn", {
      opacity: 0,
      delay: 0.3,
      y: -20,
      ease: "power.in",
    });
  });
  const navigate = useNavigate();

  const navItem = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About",
      slug: "/about",
    },
    {
      name: "Join us",
      slug: "/join",
    },
  ];

  return (
    <>
      <header
        className={`relative ${
          isOpen ? "h-40 items-baseline" : ""
        } px-10 py-4 flex items-center justify-between font-fre bg-[#E5E7EB]`}
      >
        <div className="logo flex items-center text-2xl font-bold cursor-pointer tracking-wider text-[#1F2937]">
          InspireClimb
        </div>
        <nav
          className={`ma:flex ${
            isOpen ? "absolute top-16 " : "hidden"
          } items-center justify-center text-[#1F2937] border border-black py-3 px-8  min-w-[20vw]  border-solid rounded-full font-medium capitalize fixed top-2 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm z-50 dark:bg-[#d1d1d1] mt-2`}
        >
          <ul className="flex items-center">
            {navItem.map((item) => (
              <li key={item.name} className="li">
                <button
                  onClick={() => navigate(item.slug)}
                  className="font-fre mx-2 tracking-wide w-16"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`ma:flex hidden items-center`}>
          <Link to="/join">
            <button className="btn bg-[#FDE047] py-2 px-8 text-lg rounded-full shadow-md text-[#1F2937] font-semibold ">
              Join us
            </button>
          </Link>
        </div>
        <button className="ma:hidden" onClick={handleToggle}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#1f2937"
              fill="none"
            >
              <path
                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#1f2937"
              fill="none"
            >
              <path
                d="M4 5L14 5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </button>
      </header>
    </>
  );
};

export default Header;

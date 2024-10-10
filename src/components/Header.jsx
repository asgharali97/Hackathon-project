import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

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
      <header className="px-10 py-4 flex items-center justify-between font-fre bg-[#E5E7EB]">
        <div className="flex items-center text-2xl font-bold cursor-pointer tracking-wider text-[#1F2937]">
          InspireClimb
        </div>
        <nav className="flex items-center text-[#1F2937] border border-black py-3 px-8  min-w-[20vw]  border-solid rounded-full font-medium capitalize fixed top-2 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm z-50 dark:bg-[#d1d1d1] mt-2">
          <ul className="flex items-center">
            {navItem.map((item) =>
              (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="font-fre mx-2 tracking-wide w-16"
                  >
                    {item.name}
                  </button>
                </li>
              ) 
            )}
        
          </ul>
        </nav>
        <div className="flex items-center">
          <Link to='/join'>
           <button className="bg-[#FDE047] py-2 px-8 text-lg rounded-full shadow-md text-[#1F2937] font-semibold ">Join us</button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

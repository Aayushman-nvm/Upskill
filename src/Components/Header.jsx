import { Link, NavLink } from "react-router-dom";
import upSkillLogo from "../../U/UpSkill-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);

  function handleToggle() {
    setSideBar(!sideBar);
  }

  return (
    <div className="w-full md:h-16 h-14 bg-[#494949] text-[#eeeeee] flex justify-between items-center md:px-6  mx-auto">
      {/*Logo*/}
      <div className="md:ml-4">
        <Link to="/">
          <img src={upSkillLogo} alt="UpSkill Logo" className="h-10" />
        </Link>
      </div>

      {/*Navigation Desktop*/}
      {/*PC View*/}
      <div className="hidden md:flex">
        <ul className="flex gap-6 mr-4">
          <li className="border-[3px] h-8 w-14 rounded-md border-[#ea4a4a] hover:border-[#fd6363] text-center flex items-center justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#fd6363]" : "text-[#eeeeee]"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="border-[3px] h-8 w-14 rounded-md border-[#ea4a4a] hover:border-[#fd6363] text-center flex items-center justify-center">
            <NavLink
              to="study"
              className={({ isActive }) =>
                `${isActive ? "text-[#fd6363]" : "text-[#eeeeee]"}`
              }
            >
              Study
            </NavLink>
          </li>
          {/*<li className="border-[3px] h-8 w-14 rounded-md border-[#ea4a4a] hover:border-[#fd6363] text-center flex items-center justify-center">
            <NavLink
              to="about"
              className={({ isActive }) =>
                `${isActive ? "text-[#fd6363]" : "text-[#eeeeee]"}`
              }
            >
              About
            </NavLink>
          </li>*/}
          <li className="border-[3px] h-8 w-14 rounded-md border-[#ea4a4a] hover:border-[#fd6363] text-center flex items-center justify-center">
            <NavLink
              to="login"
              className={({ isActive }) =>
                `${isActive ? "text-[#fd6363]" : "text-[#eeeeee]"}`
              }
            >
              Log In
            </NavLink>
          </li>
        </ul>
      </div>
      {/*Hamburger button for mobile screens*/}
      <button className="mr-5 md:hidden">
        <MenuIcon className="text-[#ff914d]" onClick={handleToggle} />
      </button>
      {/*sidebar mobile view*/}
      {sideBar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleToggle} // Clicking outside closes sidebar
        ></div>
      )}
      {/*Navigation Mobile*/}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-end p-4">
          {/*Overlay Close button*/}
          <button>
            <ClearIcon className="text-white" onClick={handleToggle} />
          </button>
        </div>
        {/*Sidebar links*/}
        <ul className="flex flex-col items-center gap-6 p-6">
          <li className="border-[3px] h-8 w-14 rounded-md border-[#ea4a4a] hover:border-[#fd6363] text-center flex items-center justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#fd6363]" : "text-[#eeeeee]"}`
              }
              onClick={handleToggle}
            >
              Home
            </NavLink>
          </li>
          <li className="border-[3px] h-8 w-14 rounded-md border-[#ea4a4a] hover:border-[#fd6363] text-center flex items-center justify-center">
            <NavLink
              to="study"
              className={({ isActive }) =>
                `${isActive ? "text-[#fd6363]" : "text-[#eeeeee]"}`
              }
              onClick={handleToggle}
            >
              Study
            </NavLink>
          </li>
          {/*<li className="border-[3px] h-8 w-14 rounded-md border-[#ea4a4a] hover:border-[#fd6363] text-center flex items-center justify-center">
            <NavLink
              to="about"
              className={({ isActive }) =>
                `${isActive ? "text-[#fd6363]" : "text-[#eeeeee]"}`
              }
              onClick={handleToggle}
            >
              About
            </NavLink>
          </li>*/}
          <li className="border-[3px] h-8 w-14 rounded-md border-[#ea4a4a] hover:border-[#fd6363] text-center flex items-center justify-center">
            <NavLink
              to="login"
              className={({ isActive }) =>
                `${isActive ? "text-[#fd6363]" : "text-[#eeeeee]"}`
              }
              onClick={handleToggle}
            >
              Log In
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

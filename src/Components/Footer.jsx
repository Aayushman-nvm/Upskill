import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full md:h-72 h-60 bg-[#494949] text-[#eeeeee] flex flex-col justify-center items-center gap-10">
      {/*Navigation*/}
      <ul className="hidden md:flex gap-6">
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
      </ul>
      <div className="bg-[#3e3e3e] w-full md:h-24 h-16 rounded-xl flex justify-center items-center ">
        <p className="text-center">Made with ❤️ by Aayushman</p>
      </div>
    </div>
  );
}

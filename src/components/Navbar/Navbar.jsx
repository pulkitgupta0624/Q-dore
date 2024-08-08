import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaCartPlus,
  FaUser,
  FaCaretDown,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";
import Logo from "../../assets/logoMain.png";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Our Story", link: "/ourStory" },
  { id: 3, name: "Contact Us", link: "/contactUs" },
  { id: 4, name: "B2B", link: "/b2b" },
  { id: 5, name: "Videos", link: "/videos" },
];

const DropdownLinks = [
  { id: 1, name: "Furniture", link: "/furniture" },
  { id: 2, name: "Decor", link: "/decor" },
  { id: 3, name: "Serveware", link: "/servewares" },
  { id: 4, name: "Planters & Vases", link: "/planters&vases" },
  { id: 5, name: "Wooden Collection", link: "/woodenCollection" },
  { id: 6, name: "Mercury Collection", link: "/mercuryCollection" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const isLoggedIn = !!userInfo;

  const handleNavigation = (link) => {
    navigate(link);
    setMenuOpen(false);
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="shadow-md bg-black dark:bg-black dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div
        className="bg-black py-2 flex items-center"
        style={{ height: "100px" }}
      >
        <div
          className="container flex justify-between items-center relative"
          style={{ marginLeft: "10px" }}
        >
          <div className="flex items-center">
            <a
              onClick={() => handleNavigation("/")}
              className="font-bold text-2xl sm:text-3xl flex items-center cursor-pointer"
            >
              <img
                src={Logo}
                alt="Logo"
                className="logo-animation drop-shadow-lg"
                style={{
                  height: "100px",
                  width: "auto",
                  animation: "pulse 2s infinite",
                  transition: "transform 0.3s ease",
                }}
              />
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleNavigation("/cart")}
              className="bg-gradient-to-r from-golden-yellow to-golden-orange transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartPlus className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* User Icon for Login/Signup/Profile */}
            <button
              onClick={handleProfileClick}
              className="text-white transition-all duration-200 py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              {isLoggedIn ? (
                <FaUserCircle className="text-xl drop-shadow-sm cursor-pointer" />
              ) : (
                <FaUser className="text-xl drop-shadow-sm cursor-pointer" />
              )}
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div
        data-aos="zoom-in"
        className="bg-white flex justify-center p-2 sm:p-0"
      >
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                onClick={() => handleNavigation(data.link)}
                className="inline-block px-4 text-black relative cursor-pointer transform transition-transform hover:scale-105"
              >
                {data.name}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-golden-yellow scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <div
              className="flex items-center gap-[2px] py-2 text-black"
              onClick={() => handleNavigation("/shop")}
            >
              Shop All
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </div>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-[#001f3f] p-2 text-white shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      onClick={() => handleNavigation(data.link)}
                      className="inline-block w-full rounded-md p-2 cursor-pointer transform transition-transform hover:scale-105 relative"
                    >
                      {data.name}
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-golden-yellow scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* Menubar button for small screens */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className="bg-white sm:hidden flex flex-col items-start p-4 shadow-md">
          {Menu.map((data) => (
            <a
              key={data.id}
              onClick={() => handleNavigation(data.link)}
              className="block w-full py-2 text-black hover:text-golden-yellow duration-200 cursor-pointer transform transition-transform hover:scale-105 relative"
            >
              {data.name}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-golden-yellow scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
            </a>
          ))}
          <div className="relative w-full">
            <div className="group">
              <button
                className="flex items-center w-full py-2 text-black focus:outline-none"
                onClick={() => handleNavigation("/shop")}
              >
                Shop All
                <FaCaretDown className="ml-2" />
              </button>
              <div className="hidden group-hover:block w-full mt-2 bg-white shadow-md rounded-md">
                {DropdownLinks.map((data) => (
                  <a
                    key={data.id}
                    onClick={() => handleNavigation(data.link)}
                    className="block w-full py-2 px-4 cursor-pointer transform transition-transform hover:scale-105 relative"
                  >
                    {data.name}
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-golden-yellow scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: scale(1);
          }
        }

        .logo-animation:hover {
          transform: scale(1.1);
        }

        .scale-x-100 {
          transform: scaleX(1);
        }
      `}</style>
    </div>
  );
};

export default Navbar;

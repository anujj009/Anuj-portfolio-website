import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import resume from "../assets/anuj_fs_resume.pdf";

const Header = () => {
  const [brandName, setBrandName] = useState("Anuj");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      id: 1,
    },
    {
      title: "About",
      id: 2,
    },
    {
      title: "Projects",
      id: 3,
    },
    {
      title: "Skills",
      id: 4,
    },
    {
      title: "Contact",
      id: 5,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Resume",
    onClick: () => window.open(resume),
  });

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="h-auto py-3 sm:h-20 sm:p-10 shadow-lg  sticky top-0 items-center w-full  bg-black text-white main flex justify-between px-10">
        <div>
          {" "}
          {/*brand logo*/}
          <h1 className="text-3xl sm:text-4xl font-semibold font-signature">{brandName}</h1>
        </div>

        <div className=" md:max-lg:flex  md:flex-row lg:mt-0 ">
          <div className="block md:hidden max-md: max-w-md" onClick={toggleNav}>
            <i class="fa-solid text-3xl fa-bars"></i>
          </div>
          {isNavOpen && (
            <div className="{`md:${isNavOpen ? 'hidden' : 'block'} bg-slate-600 absolute p-5 space-y-2 flex  flex-col items-center justify-center">
              {menuLinks.map((link) => (
                <Link
                  className="hover:text-blue-700 text-lg hover:cursor-pointer md:max-md:flex "
                  to={link.id}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}

          <div className=" md:block hidden max-w-md md:max-md:flex md:space-x-6 lg:mt-0  items-center justify-center">
            {menuLinks.map((link) => (
              <Link
                className="hover:text-blue-700 text-lg hover:cursor-pointer md:max-md:flex "
                to={link.id}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          {/*buttons */}

          <button
            title="resume download"
            onClick={actionButton.onClick}
            className=" px-3 py-1 sm:px-4 sm:py-2 bg-blue-700 rounded-full hover:bg-blue-800 shadow text-white "
          >
            {actionButton.title}
            <i class="fa-solid fa-download ml-3"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

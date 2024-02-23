import React, { useEffect, useState } from "react";
import "./nav.scss";
// import logo from "./Sea Transparant 1.svg";

// import jwt from 'jsonwebtoken';

import { Link } from "react-router-dom";
const Navbar = () => {
  let [width, setWidth] = useState(window.innerWidth);
  let [active, setactive] = useState(false);
  const token = localStorage.getItem("token");
  // const decodedToken = jwt.decode(token);
  // const userName = decodedToken.username;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const hamburger = () => {
    setactive(!active);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setactive(false);
  };
  return (
    <>
      {width <= 900 ? (
        <>
          <nav>
            <div class=" mobile navbar flex items-start justify-between mx-12 -full relative min-[1700px]:mx-20 pt-2">
              <div class="logo">
                <Link to={"/"} className="cursor-pointer" onClick={scrollToTop}>
                  {/* <img class=" logo-img" src={logo} alt="" /> */}
                  Logo
                </Link>
              </div>
              {/* {active ? ( */}
              <>
                <div
                  class={`lists flex items-center justify-between flex-col ${
                    active ? "active " : ""
                  }`}
                >
                  <div class="ul mr16 ">
                    <ul class="unorders flex items-center flex-col">
                      <li class="items">
                        {/* <Link onClick={scrollToTop} to={"/freetrail"}> */}
                        Acceseries
                        {/* </Link> */}
                      </li>

                      <li class="items">
                        {/* <Link onClick={scrollToTop} to={"/product"}> */}
                        Other Tools {/* </Link> */}
                      </li>
                      <li class="items">
                        {/* <Link onClick={scrollToTop} to={"/price"}> */}
                        Laptops
                        {/* </Link> */}
                      </li>

                      <li class="items">
                        {/* <Link onClick={scrollToTop} to={"/blog"}> */}
                        Blogs {/* </Link> */}
                      </li>
                      <li class="items">
                        {/* <Link onClick={scrollToTop} to={"/contact"}> */}
                        Contact Us {/* </Link> */}
                      </li>
                    </ul>
                  </div>
                  {token ? (
                    "logged in "
                  ) : (
                    <div class="nav-buttons flex items-center justify-center flex-col">
                      <button class="contact-btn">
                        <Link onClick={scrollToTop} to={"/login"}>
                          Login
                        </Link>
                      </button>
                      <button class="Login-btn ml-4">
                        <Link onClick={scrollToTop} to={"/signup"}>
                          Sign up
                        </Link>
                      </button>
                    </div>
                  )}
                </div>
              </>
              {/* ) : ( */}
              <button className="btn-ham" onClick={hamburger}>
                {active ? "X" : "||"}
                ||
              </button>
              {/* )} */}
            </div>
          </nav>
        </>
      ) : (
        <>
          {/* desktop */}
          <nav>
            <div class="navbar flex items-center justify-between mx-12 -full relative min-[1700px]:mx-20 pt-2">
              <div class="logo">
                <Link className="cursor-pointer" onClick={scrollToTop} to={"/"}>
                  {/* <img class=" logo-img" src={logo} alt="" /> */}
                  logo
                </Link>
              </div>
              <div class="lists flex items-center justify-between">
                <div class="ul mr-16 kl max-xl:mr-0">
                  <ul class="unorders flex items-center">
                    <li class="items">
                      {/* <Link onClick={scrollToTop} to={"/freetrail"}> */}
                      Acceseries
                      {/* </Link> */}
                    </li>
                    {/* <li class="items">
                  <Link to={"/"}>How it works</Link>
                </li> */}
                    <li class="items">
                      {/* <Link onClick={scrollToTop} to={"/product"}> */}
                      Other Tools
                      {/* </Link> */}
                    </li>
                    <li class="items">
                      {/* <Link onClick={scrollToTop} to={"/price"}> */}
                      Laptops
                      {/* </Link> */}
                    </li>

                    <li class="items">
                      {/* <Link onClick={scrollToTop} to={"/blog"}> */}
                      Blogs
                      {/* </Link> */}
                    </li>
                    <li class="items">
                      {/* <Link onClick={scrollToTop} to={"/contact"}> */}
                      Contact Us
                      {/* </Link> */}
                    </li>
                  </ul>
                </div>
                {token ? (
                  <>
                    <div className="logout flex gap-10 items-center">
                      <div className="log">
                        <button
                          className="logout-btn"
                          onClick={(e) => {
                            localStorage.removeItem("token");
                            window.location.reload();
                          }}
                        >
                          Log Out
                        </button>
                      </div>

                      <Link to="/user">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                        >
                          <path
                            d="M8.60352 1.94043C9.47868 1.94043 10.318 2.28809 10.9368 2.90692C11.5557 3.52575 11.9033 4.36507 11.9033 5.24023C11.9033 6.1154 11.5557 6.95472 10.9368 7.57355C10.318 8.19238 9.47868 8.54004 8.60352 8.54004C7.72835 8.54004 6.88903 8.19238 6.2702 7.57355C5.65137 6.95472 5.30371 6.1154 5.30371 5.24023C5.30371 4.36507 5.65137 3.52575 6.2702 2.90692C6.88903 2.28809 7.72835 1.94043 8.60352 1.94043ZM8.60352 10.1899C12.2498 10.1899 15.2031 11.6666 15.2031 13.4897V15.1396H2.00391V13.4897C2.00391 11.6666 4.95723 10.1899 8.60352 10.1899Z"
                            fill="#3040D0"
                          />
                        </svg>
                      </Link>
                    </div>
                  </>
                ) : (
                  <div class="nav-buttons flex items-center justify-center">
                    <button class="contact-btn">
                      <Link onClick={scrollToTop} to={"/login"}>
                        Login
                      </Link>
                    </button>
                    <button class="Login-btn ml-">
                      <Link onClick={scrollToTop} to={"/signup"}>
                        Sign up
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;

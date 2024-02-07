import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";

const NavComponent = () => {
  return (
    <nav>
      <Container>
        <div className="fixed top-[50%] right-[30px] flex items-center z-10 -translate-y-[50%]">
          <ul className="flex flex-col items-end ">
            <NavLink to={"/"}>
              <li className="w-[50px] h-[50px] group relative flex items-center duration-300 justify-center my-5 bg-warning rounded-full text-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>

                <button
                  className="flex font-semibold text-[15px] items-center text-center rounded-[35px]  py-4 absolute h-[50px] 
             ps-[25px] pe-[50px] leading-6 text-light -z-[1] opacity-0 group-hover:opacity-100
              ease  top-0 right-0 bg-warning transition-all duration-300 group-hover:right-[5px] tracking-[2px]"
                >
                  HOME
                </button>
              </li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className="w-[50px] h-[50px] group relative flex items-center justify-center my-5 bg-gray rounded-full text-light hover:bg-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <button
                  className="flex font-semibold text-[15px] items-center text-center rounded-[35px]  py-4 absolute h-[50px] 
             ps-[25px] pe-[50px] leading-6 text-light -z-[1] opacity-0 group-hover:opacity-100
              ease  top-0 right-0 bg-warning transition-all duration-300 group-hover:right-[5px] tracking-[2px]"
                >
                  ABOUT
                </button>
              </li>
            </NavLink>
            <NavLink to={"/portfolio"}>
              <li className="w-[50px] h-[50px] group relative flex items-center justify-center my-5 bg-gray rounded-full text-light hover:bg-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <button
                  className="flex font-semibold text-[15px] items-center text-center rounded-[35px]  py-4 absolute h-[50px] 
             ps-[25px] pe-[50px] leading-6 text-light -z-[1] opacity-0 group-hover:opacity-100
              ease  top-0 right-0 bg-warning transition-all duration-300 group-hover:right-[5px] tracking-[2px]"
                >
                  PORTFOLIO
                </button>
              </li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li className="w-[50px] h-[50px] group relative flex items-center justify-center my-5 bg-gray rounded-full text-light hover:bg-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
                <button
                  className="flex font-semibold text-[15px] items-center text-center rounded-[35px]  py-4 absolute h-[50px] 
             ps-[25px] pe-[50px] leading-6 text-light -z-[1] opacity-0 group-hover:opacity-100
              ease  top-0 right-0 bg-warning transition-all duration-300 group-hover:right-[5px] tracking-[2px]"
                >
                  CONTACT
                </button>
              </li>
            </NavLink>
            <NavLink to={"/blog"}>
              <li className="w-[50px] h-[50px] group relative flex items-center justify-center my-5 bg-gray rounded-full text-light hover:bg-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <button
                  className="flex font-semibold text-[15px] items-center text-center rounded-[35px]  py-4 absolute h-[50px] 
           ps-[25px] pe-[50px] leading-6 text-light -z-[1] opacity-0 group-hover:opacity-100
            ease  top-0 right-0 bg-warning transition-all duration-300 group-hover:right-[5px] tracking-[2px]"
                >
                  BLOG
                  {/* <button
                    className="group overflow-hidden flex font-semibold text-[15px] bg-transparent text-center rounded-[35px] relative py-4
             ps-[35px] pe-[70px] leading-6 text-light border border-warning z-10 duration-500"
                  >
                    <span className=" absolute bottom-0 right-0 h-full w-0 bg-warning transition-all duration-300 group-hover:w-full"></span>
                  </button> */}
                </button>
              </li>
            </NavLink>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavComponent;

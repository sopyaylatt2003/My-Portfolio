import React from "react";
import Container from "./Container";

const AboutMe = () => {
  return (
    <Container>
      <section className="relative  w-full mx-auto text-center py-[80px]">
        <h1 className="font-black text-[56px] text-light z-10">
          ABOUT <span className="text-warning">ME</span>
        </h1>
        <span
          className="text-[110px] left-0 absolute right-0 top-[50%] font-extrabold
          text-[hsla(0,0%,100%,.07)] leading-[0.7rem]  tracking-[10px] -translate-y-[50%]"
        >
          RESUME
        </span>
      </section>

      <section className="mb-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-6 px-[15px]">
              <div className="grid grid-cols-12">
                <div className="col-span-12 ">
                  <h1 className="text-[26px] pb-[22px] font-semibold font-header">
                    PERSONAL INFOS
                  </h1>
                </div>
                {/* <div className="col-span-12"></div> */}
                <div className="col-span-12">
                  <ul className="grid grid-cols-2 font-open font-semibold mb-4 ">
                    <li className="pb-5">
                      <span className="opacity-80"> Name: </span>
                      <span className="font-semibold">So Pyay Latt</span>
                    </li>

                    <li className="pb-5">
                      <span className="opacity-80">Age: </span>
                      <span>20 Years</span>
                    </li>
                    <li className="pb-5">
                      <span className="opacity-80">Nationality: </span>
                      <span>Burmese</span>
                    </li>
                    <li className="pb-5">
                      <span className="opacity-80">Freelance: </span>
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block green">
                        Available
                      </span>
                    </li>
                    <li className="pb-5">
                      <span className="opacity-80">Address: </span>
                      <span>Myanmar</span>
                    </li>
                    <li className="pb-5">
                      <span className="opacity-80">phone: </span>
                      <span>09693489224</span>
                    </li>
                    <li className="pb-5">
                      <span className="opacity-80">Email: </span>
                      <span>sopyaylatt.digital@mail.com</span>
                    </li>

                    <li className="pb-5">
                      <span className="opacity-80">languages: </span>
                      <span>Burmese, English</span>
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 mt-1">
                  <a href="">
                    {" "}
                    <button
                      className="group overflow-hidden flex font-semibold text-[15px] bg-transparent text-center rounded-[35px] relative py-4
             ps-[35px] pe-[70px] leading-[1.3rem] text-light border border-warning z-10 duration-500"
                    >
                      <span className="z-20">DOWNLOAD CV</span>
                      <span className="ease absolute bottom-0 right-0 h-full w-0 bg-warning transition-all duration-500 group-hover:w-full"></span>

                      <span
                        className="absolute flex items-center justify-center w-[55px] h-[55px] rounded-full text-[19px] bg-warning ms-5
               -right-[1px] -top-[1px] bottom-0"
                      >
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
                            d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                          />
                        </svg>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-6 px-[15px]">
              <div className="grid grid-cols-12 gap-x-7">
                <div className="col-span-6 mb-[30px] border border-gray ps-[40px] pt-[20px] pe-[30px] pb-[25px] rounded-[5px]">
                  <h3 className="font-header text-[50px] font-bold inline-block relative text-warning">
                    1{" "}
                    <span className="after:content-['+'] text-[33px] font-normal absolute top-[2px] -right-[24px]"></span>
                  </h3>
                  <p className="relative group font-open ps-[45px]">
                    <span className="absolute bg-[#777] left-0 top-[13px] h-[1px] w-[30px] rounded-[10px]"></span>{" "}
                    YEARS OF <span className="block">EXPERIENCE</span>
                  </p>
                </div>

                <div className="col-span-6 mb-[30px] border border-gray ps-[40px] pt-[20px] pe-[30px] pb-[25px] rounded-[5px]">
                  <h3 className="font-header text-[50px] font-bold inline-block relative text-warning">
                    5{" "}
                    <span className="after:content-['+'] text-[33px] font-normal absolute top-[2px] -right-[24px]"></span>
                  </h3>
                  <p className="relative group font-open ps-[45px]">
                    <span className="absolute bg-[#777] left-0 top-[13px] h-[1px] w-[30px] rounded-[10px]"></span>{" "}
                    COMPLETED <span className="block">PROJECTS</span>
                  </p>
                </div>

                <div className="col-span-6 mb-[30px] border border-gray ps-[40px] pt-[20px] pe-[30px] pb-[25px] rounded-[5px]">
                  <h3 className="font-header text-[50px] font-bold inline-block relative text-warning">
                    0{" "}
                    {/* <span className="after:content-['+'] text-[33px] font-normal absolute top-[2px] -right-[24px]"></span> */}
                  </h3>
                  <p className="relative group font-open ps-[45px]">
                    <span className="absolute bg-[#777] left-0 top-[13px] h-[1px] w-[30px] rounded-[10px]"></span>{" "}
                    HAPPY <span className="block">CUSTOMERS</span>
                  </p>
                </div>

                <div className="col-span-6 mb-[30px] border border-gray ps-[40px] pt-[20px] pe-[30px] pb-[25px] rounded-[5px]">
                  <h3 className="font-header text-[50px] font-bold inline-block relative text-warning">
                    0{" "}
                    {/* <span className="after:content-['+'] text-[33px] font-normal absolute top-[2px] -right-[24px]"></span> */}
                  </h3>
                  <p className="relative group font-open ps-[45px]">
                    <span className="absolute bg-[#777] left-0 top-[13px] h-[1px] w-[30px] rounded-[10px]"></span>{" "}
                    AWARDS <span className="block">WON</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-t border-gray max-w-[40%] mt-[70px] mb-[55px] mx-auto"></hr>

          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-[3rem]">
              <h3 className="text-[26px] font-semibold text-center">
                MY SKILLS
              </h3>
            </div>

            <div className="col-span-3 mb-[3rem]">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32">
                  <svg
                    className="h-full w-full"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Circle */}
                    <circle
                      cx={18}
                      cy={18}
                      r={16}
                      fill="none"
                      className="stroke-current text-gray"
                      strokeWidth={3}
                    />
                    {/* Progress Circle inside a group with rotation */}
                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx={18}
                        cy={18}
                        r={16}
                        fill="none"
                        className="stroke-current text-warning"
                        strokeWidth={3}
                        strokeDasharray={100}
                        strokeDashoffset={20}
                      />
                    </g>
                  </svg>
                  {/* Percentage Text */}
                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-white">
                      80%
                    </span>
                  </div>
                </div>

                <h6 className="font-open mt-[1rem]">HTML</h6>
              </div>
            </div>

            <div className="col-span-3 mb-[3rem]">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32">
                  <svg
                    className="h-full w-full"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Circle */}
                    <circle
                      cx={18}
                      cy={18}
                      r={16}
                      fill="none"
                      className="stroke-current text-gray"
                      strokeWidth={3}
                    />
                    {/* Progress Circle inside a group with rotation */}
                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx={18}
                        cy={18}
                        r={16}
                        fill="none"
                        className="stroke-current text-warning"
                        strokeWidth={3}
                        strokeDasharray={100}
                        strokeDashoffset={39}
                      />
                    </g>
                  </svg>
                  {/* Percentage Text */}
                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-white">
                      61%
                    </span>
                  </div>
                </div>

                <h6 className="font-open mt-[1rem]">JAVASCRIPT</h6>
              </div>
            </div>
            <div className="col-span-3 mb-[3rem]">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32">
                  <svg
                    className="h-full w-full"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Circle */}
                    <circle
                      cx={18}
                      cy={18}
                      r={16}
                      fill="none"
                      className="stroke-current text-gray"
                      strokeWidth={3}
                    />
                    {/* Progress Circle inside a group with rotation */}
                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx={18}
                        cy={18}
                        r={16}
                        fill="none"
                        className="stroke-current text-warning"
                        strokeWidth={3}
                        strokeDasharray={100}
                        strokeDashoffset={13}
                      />
                    </g>
                  </svg>
                  {/* Percentage Text */}
                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-white">
                      87%
                    </span>
                  </div>
                </div>

                <h6 className="font-open mt-[1rem]">TAILWIND</h6>
              </div>
            </div>
            <div className="col-span-3 mb-[3rem]">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32">
                  <svg
                    className="h-full w-full"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Circle */}
                    <circle
                      cx={18}
                      cy={18}
                      r={16}
                      fill="none"
                      className="stroke-current text-gray"
                      strokeWidth={3}
                    />
                    {/* Progress Circle inside a group with rotation */}
                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx={18}
                        cy={18}
                        r={16}
                        fill="none"
                        className="stroke-current text-warning"
                        strokeWidth={3}
                        strokeDasharray={100}
                        strokeDashoffset={80}
                      />
                    </g>
                  </svg>
                  {/* Percentage Text */}
                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-white">
                      20%
                    </span>
                  </div>
                </div>

                <h6 className="font-open mt-[1rem]">PHP</h6>
              </div>
            </div>
            <div className="col-span-3 mb-[3rem]">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32">
                  <svg
                    className="h-full w-full"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Circle */}
                    <circle
                      cx={18}
                      cy={18}
                      r={16}
                      fill="none"
                      className="stroke-current text-gray"
                      strokeWidth={3}
                    />
                    {/* Progress Circle inside a group with rotation */}
                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx={18}
                        cy={18}
                        r={16}
                        fill="none"
                        className="stroke-current text-warning"
                        strokeWidth={3}
                        strokeDasharray={100}
                        strokeDashoffset={50}
                      />
                    </g>
                  </svg>
                  {/* Percentage Text */}
                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-white">
                      50%
                    </span>
                  </div>
                </div>

                <h6 className="font-open mt-[1rem]">REACT</h6>
              </div>
            </div>
            <div className="col-span-3 mb-[3rem]">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32">
                  <svg
                    className="h-full w-full"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Circle */}
                    <circle
                      cx={18}
                      cy={18}
                      r={16}
                      fill="none"
                      className="stroke-current text-gray"
                      strokeWidth={3}
                    />
                    {/* Progress Circle inside a group with rotation */}
                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx={18}
                        cy={18}
                        r={16}
                        fill="none"
                        className="stroke-current text-warning"
                        strokeWidth={3}
                        strokeDasharray={100}
                        strokeDashoffset={90}
                      />
                    </g>
                  </svg>
                  {/* Percentage Text */}
                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-white">
                      10%
                    </span>
                  </div>
                </div>

                <h6 className="font-open mt-[1rem]">NEXT.JS</h6>
              </div>
            </div>
            <div className="col-span-3 mb-[3rem]">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32">
                  <svg
                    className="h-full w-full"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Circle */}
                    <circle
                      cx={18}
                      cy={18}
                      r={16}
                      fill="none"
                      className="stroke-current text-gray"
                      strokeWidth={3}
                    />
                    {/* Progress Circle inside a group with rotation */}
                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx={18}
                        cy={18}
                        r={16}
                        fill="none"
                        className="stroke-current text-warning"
                        strokeWidth={3}
                        strokeDasharray={100}
                        strokeDashoffset={90}
                      />
                    </g>
                  </svg>
                  {/* Percentage Text */}
                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-white">
                      10%
                    </span>
                  </div>
                </div>

                <h6 className="font-open mt-[1rem]">LARAVEL</h6>
              </div>
            </div>
            <div className="col-span-3 mb-[3rem]">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32">
                  <svg
                    className="h-full w-full"
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Circle */}
                    <circle
                      cx={18}
                      cy={18}
                      r={16}
                      fill="none"
                      className="stroke-current text-gray"
                      strokeWidth={3}
                    />
                    {/* Progress Circle inside a group with rotation */}
                    <g className="origin-center -rotate-90 transform">
                      <circle
                        cx={18}
                        cy={18}
                        r={16}
                        fill="none"
                        className="stroke-current text-warning"
                        strokeWidth={3}
                        strokeDasharray={100}
                        strokeDashoffset={27}
                      />
                    </g>
                  </svg>
                  {/* Percentage Text */}
                  <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className="text-center text-2xl font-bold text-white">
                      73%
                    </span>
                  </div>
                </div>

                <h6 className="font-open mt-[1rem]">GIT</h6>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray max-w-[40%] mt-[70px] mb-[55px] mx-auto"></hr>

          <div className="grid grid-cols-12">
            <div className="col-span-12 mb-[3rem]">
              <h3 className="text-[26px] font-semibold font-header text-center">
                EXPERIENCE & EDUCATION
              </h3>
            </div>

            <div className="col-span-6">
              <div>
                <ul>
                  <li className="relative mb-[50px] ps-[60px] pe-[20px]">
                    <div className="w-[40px] h-[40px] absolute left-0 right-0 z-10 flex items-center justify-center bg-warning rounded-full text-light">
                      {" "}
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
                    </div>
                    <span className="font-open text-[12px] py-[1px] px-2.5 mb-3 rounded-[20px] bg-gray opacity-80 inline-block">
                      2018 - PRESENT
                    </span>
                    <h3 className="my-[7px] text-[18px] font-header font-medium">
                      WEB DEVELOPER{" "}
                      <span className="relative text-[15px] font-semibold font-open ps-[26px] opacity-80">
                        <span className="absolute left-[7px] top-[9px] h-[2px] w-[10px] bg-light "></span>{" "}
                        ENVATO
                      </span>
                    </h3>
                    <p className="text-[14px] text-[#eee] font-open ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque commodi adipisci laborum necessitat
                      <span className="absolute left-[20px] top-0 bottom-0 border-l border-[#333] "></span>
                    </p>
                  </li>

                  <li className="relative mb-[50px] ps-[60px] pe-[20px]">
                    <div className="w-[40px] h-[40px] absolute left-0 right-0 z-10 flex items-center justify-center bg-warning rounded-full text-light">
                      {" "}
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
                    </div>
                    <span className="font-open text-[12px] py-[1px] px-2.5 mb-3 rounded-[20px] bg-gray opacity-80 inline-block">
                      2018 - PRESENT
                    </span>
                    <h3 className="my-[7px] text-[18px] font-header font-medium">
                      WEB DEVELOPER{" "}
                      <span className="relative text-[15px] font-semibold font-open ps-[26px] opacity-80">
                        <span className="absolute left-[7px] top-[9px] h-[2px] w-[10px] bg-light "></span>{" "}
                        ENVATO
                      </span>
                    </h3>
                    <p className="text-[14px] text-[#eee] font-open ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque commodi adipisci laborum necessitat
                      <span className="absolute left-[20px] top-0 bottom-0 border-l border-[#333] "></span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-6">
              <div>
                <ul>
                  <li className="relative mb-[50px] ps-[60px] pe-[20px]">
                    <div className="w-[40px] h-[40px] absolute left-0 right-0 z-10 flex items-center justify-center bg-warning rounded-full text-light">
                      {" "}
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
                    </div>
                    <span className="font-open text-[12px] py-[1px] px-2.5 mb-3 rounded-[20px] bg-gray opacity-80 inline-block">
                      2018 - PRESENT
                    </span>
                    <h3 className="my-[7px] text-[18px] font-header font-medium">
                      WEB DEVELOPER{" "}
                      <span className="relative text-[15px] font-semibold font-open ps-[26px] opacity-80">
                        <span className="absolute left-[7px] top-[9px] h-[2px] w-[10px] bg-light "></span>{" "}
                        ENVATO
                      </span>
                    </h3>
                    <p className="text-[14px] text-[#eee] font-open ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque commodi adipisci laborum necessitat
                      <span className="absolute left-[20px] top-0 bottom-0 border-l border-[#333] "></span>
                    </p>
                  </li>

                  <li className="relative mb-[50px] ps-[60px] pe-[20px]">
                    <div className="w-[40px] h-[40px] absolute left-0 right-0 z-10 flex items-center justify-center bg-warning rounded-full text-light">
                      {" "}
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
                    </div>
                    <span className="font-open text-[12px] py-[1px] px-2.5 mb-3 rounded-[20px] bg-gray opacity-80 inline-block">
                      2018 - PRESENT
                    </span>
                    <h3 className="my-[7px] text-[18px] font-header font-medium">
                      WEB DEVELOPER{" "}
                      <span className="relative text-[15px] font-semibold font-open ps-[26px] opacity-80">
                        <span className="absolute left-[7px] top-[9px] h-[2px] w-[10px] bg-light "></span>{" "}
                        ENVATO
                      </span>
                    </h3>
                    <p className="text-[14px] text-[#eee] font-open ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque commodi adipisci laborum necessitat
                      <span className="absolute left-[20px] top-0 bottom-0 border-l border-[#333] "></span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AboutMe;

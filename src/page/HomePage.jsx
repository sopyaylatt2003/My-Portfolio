import React from "react";
import Container from "../components/Container";

const HomePage = () => {
  return (
    <Container>
      <div className="h-[200%] w-[100%] fixed -left-[83%] -top-[50%] -rotate-[15deg] bg-warning"></div>

      <div className="grid grid-cols-12 px-[15px] items-center h-screen">
        <div className="col-span-4 z-10 left-[40px] top-[40px] h-[86vh] ">
          <img
            className=" shadow-[rgba(0,0,0,.9)] bg-center  rounded-[30px] bg-cover bg-no-repeat"
            src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/380999285_727796952484961_6041737732846763017_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHNLZvBhxvVtWmart3XaHOX7G_PxpKUdtbsb8_GkpR21lJW7N6tCI219Qq_sHjG48M9RzNzAO8Y2HgqIyYWjfc4&_nc_ohc=Css1Yy4_Ih8AX9cheP5&_nc_ht=scontent-sin6-2.xx&oh=00_AfBkoYvc1Oa7N278aVhdnVvLYfb6VD3CvI42kxxHIiZabQ&oe=65C20A6D"
            alt=""
          />
        </div>

        <div className="col-span-8">
          <div className="max-w-[550px] ms-32">
            <h1 className="group relative text-warning text-[51px] leading-[62px] font-bold ps-[70px] mt-[18px] mb2.5">
              <span className="bg-warning absolute left-0 top-[29px] h-[4px] w-[49px] rounded-[10px]"></span>
              I'M SO PYAY LATT. <br />{" "}
              <span className="text-light">WEB DESIGNER</span>
            </h1>
            <p className="text-light text-[16px] leading-[35px] mt-[15px] mb-[28px]">
              I'm a Burmese based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <button
              className="group overflow-hidden flex font-semibold text-[15px] bg-transparent text-center rounded-[35px] relative py-4
             ps-[35px] pe-[70px] leading-[1.3rem] text-light border border-warning z-10 duration-500"
            >
              <span className="z-20">MORE ABOUT ME</span>
              <span className="ease absolute bottom-0 right-0 h-full w-0 bg-warning transition-all duration-500 group-hover:w-full"></span>

              <span
                className="absolute flex items-center justify-center w-[55px] h-[55px] rounded-full text-[19px] bg-warning ms-5
               -right-[1px] -top-[1px] bottom-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={5}
                  stroke="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;

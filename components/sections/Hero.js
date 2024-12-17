import React from "react";
import Button from "../element/Button";
import ActivityCard from "../cards/ActivityCard";
import Link from "next/link";

const Hero = ({ dataHero, dataCard }) => {
  return (
    <div className="max-w-[1224px] mx-auto mt-[180px] flex flex-col lg:flex-row justify-between items-center w-full h-auto lg:h-[819px] px-4 lg:px-0">
      <div className="w-full lg:w-[35%] mb-12 lg:mb-0 text-center lg:text-left">
        <h2 className="text-[50px] lg:text-[90px] font-[700] leading-[60px] lg:leading-[120px] mb-6">
          Fəaliyyət <br /> kartları
        </h2>
        <p className="text-[18px] lg:text-[20px] leading-[28px]">
          {/* {dataHero?.desc} */}
          Fəaliyyət kartları şagird və tələbələrin əmək bazarında mövcud olan və
          gələcəkdə meydana çıxacaq peşələr ilə uyğunluğunu müəyyənləşdirmək
          üçün istifadə olunan innovativ alətdir.
        </p>
        <div className="mt-[40px] lg:mt-[68px] flex flex-col lg:flex-row gap-4 lg:gap-[20px] justify-center lg:justify-start">
          <Link href="/test">
          <Button className="flex items-center justify-center gap-2 text-[18px] lg:text-[20px] h-[56px] w-[208px]">
            Testə başla
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M18.6667 8.66675L24.5 14.5001M24.5 14.5001L18.6667 20.3334M24.5 14.5001H3.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          </Link>
          <Link href="/">
          <button className="text-[18px] lg:text-[20px] h-[56px] w-[160px] text-textSecondary bg-buttonSecondary rounded-[8px] hover:bg-gray-100">
            Qaydaları oxu
          </button>
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-[57%] relative h-[500px] lg:h-[819px] flex justify-center">
        <div className="absolute top-[25%] left-0 translate-y-[-25%] z-[50]">
          <ActivityCard dataCard={dataCard?.[0]} />
        </div>
        <div className="absolute bottom-[0] left-[55%] translate-x-[-55%] z-[40]">
          <ActivityCard dataCard={dataCard?.[1]} />
        </div>
        <div className="absolute top-[0] right-[0%] z-[30]">
          <ActivityCard dataCard={dataCard?.[2]} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

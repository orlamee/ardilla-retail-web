"use-client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import arrowcircle from "../../assets/arrow circle.svg";
import Image from "next/image";

function Hero() {
  const [hideBalance, setHideBalance] = useState(false);
  return (
    <div className="dashboard-hero my-[50px] h-[250px] rounded-[16px] flex flex-wrap justify-between bg-primary items-center px-10 relative">
      <div>
        <h1 className=" text-white font-[500] text-[14px] flex">
          Wallet Balance{" "}
          <span
            className="ml-4 cursor-pointer"
            onClick={() => setHideBalance(!hideBalance)}
          >
            {hideBalance ? <Eye /> : <EyeOff />}
          </span>
        </h1>
        <h2 className="font-[700] text-white text-[22px] md:text-[35px] lg:text-[50px] mb-5">
          {hideBalance ? "*******" : " N 10,000,000.00"}
        </h2>
        <Link href={"/dashboard/account"}>
          <div className="text-white text-[12px] font-[500] flex">
            View Account Details{" "}
            <span className="ml-3">
              <Image
                src={arrowcircle}
                width={16}
                height={16}
                alt="right direction"
              />
            </span>
          </div>
        </Link>
      </div>
      <button className="bg-white text-primary font-[700] text-[12px] py-5 px-10 rounded-full lg:px-[100px] 2xl:px-[130px]">
        Add Money
      </button>
      <div className="absolute text-white bottom-[-20px] z-[-1] bg-[#D2B7FB] rounded-[16px] w-[97%] mx-auto inset-0 h-[262px] overflow-hidden">
        hello world
      </div>
      <div className="absolute text-white bottom-[-90px] z-[-2] bg-[#F0E7FE] rounded-[16px] w-[94%] mx-auto inset-0 h-[273px] overflow-hidden">
        hello world
      </div>
    </div>
  );
}

export default Hero;

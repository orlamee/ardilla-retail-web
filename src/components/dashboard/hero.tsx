"use-client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import arrowcircle from "../../assets/arrow circle.svg";
import Image from "next/image";

function Hero() {
  const [hideBalance, setHideBalance] = useState(false);
  return (
    <div className="dashboard-hero my-[50px] h-[250px] rounded-[16px] flex flex-wrap justify-between items-center px-10">
      <div>
        <h1 className=" text-black font-[500] text-[14px] flex">
          Wallet Balance{" "}
          <span
            className="ml-4 cursor-pointer"
            onClick={() => setHideBalance(!hideBalance)}
          >
            {hideBalance ? <Eye /> : <EyeOff />}
          </span>
        </h1>
        <h2 className="font-[700] text-[#3D0072] text-[22px] md:text-[35px] lg:text-[50px] mb-5">
          {hideBalance ? "*******" : " N 10,000,000.00"}
        </h2>
        <Link href={"/dashboard"}>
          <div className="text-black text-[12px] font-[500] flex">
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
      <button className="bg-[#3D0072] text-white font-[700] text-[12px] py-5 px-10 rounded-full lg:px-[100px] 2xl:px-[130px]">
        Add Money
      </button>
    </div>
  );
}

export default Hero;

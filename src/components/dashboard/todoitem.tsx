import React from "react";
import Image from "next/image";
import { Progress } from "../ui/progress";
import check from "../../assets/dashboard check.svg";

type props = {
  title: string;
  subtitle: string;
  button: string;
};

function Todoitem({ title, subtitle, button }: props) {
  return (
    <div className="w-full mb-[60px] bg-white  flex flex-col justify-between rounded-[8px] border-[1px] border-black shadow-[10px_10px_#240552] h-[00px] md:h-full xl:h-[190px] p-5 sm:pt-6 sm:px-8 sm:pb-8">
      <div className="flex justify-between w-full items-center mb-4">
        <div className="basis-[65%] flex flex-wrap items-center gap-1">
          <Image
            src={check}
            width={32}
            height={32}
            alt="verified"
            className="mr-2"
          />

          <h1 className="font-[500] text-[14px] flex text-black">{title}</h1>
        </div>
        <div className="basis-[30%]">
          {" "}
          <Progress
            value={40}
            className="w-full h-[4px] text-primary rounded-[10px]"
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <p className="w-full font-[400] text-[12px] text-gray400">
          {subtitle}
        </p>

        <div className="w-full 2xl:basis-[30%]  flex flex-col justify-between h-auto">
          <button className="rounded-[4px] block w-full bg-[#240552] text-white p-3 text-[10px] font-[500] mt-auto">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;

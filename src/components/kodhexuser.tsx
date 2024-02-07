import React from "react";
import { ChevronRight, Code2 } from "lucide-react";
import Image from "next/image";
import kodex from "../assets/kodex 1.png";

function KodhexUser() {
  return (
    <div className="flex items-start  h-[47.31px] mb-4 cursor-pointer last:mb-0">
      <Image src={kodex} width={39} height={39} alt="kodex user" />
      <div className="flex items-center justify-between w-full ml-3">
        <div>
          <h1 className="text-[12.23px] font-medium">Joy Rebecca</h1>
          <p className="text-[#9CA3AF] text-[11px] flex items-center">
            Becca{" "}
            <span className="shadow-md bg-white rounded-full flex justify-center items-center w-[22px] h-[22px] ml-1">
              <Code2 className="text-primary w-[13px]" />
            </span>
          </p>
        </div>
        <ChevronRight className="text-primary" />
      </div>
    </div>
  );
}

export default KodhexUser;

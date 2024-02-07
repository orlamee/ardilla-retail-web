import Image from "next/image";
import React from "react";
import cardandbank from "../assets/card and bank.svg";
import { ChevronLeft } from "lucide-react";

type props = {
  title: string;
  subtitle: string;
  step: string;
  handleBack: () => void;
};

function PageTitle({ title, subtitle, step, handleBack }: props) {
  return (
    <div className="text-center mb-8">
      <Image
        src={cardandbank}
        width={67}
        height={67}
        alt="card and bank"
        className="mx-auto"
      />
      <div className="max-w-[450px] mx-auto relative">
        <h1 className="font-[founder] text-[30px] text-primary mb-[6px] mt-1 ">
          {title}
        </h1>
        <div
          className={`absolute left-0 bottom-[15px] flex justify-center items-center bg-white rounded-full shadow-md w-[30px] h-[30px] cursor-pointer ${
            step === "card and bank" ? "opacity-0" : "opacity-1"
          }`}
          onClick={handleBack}
        >
          <ChevronLeft className="text-[11px] text-primary" />
        </div>
      </div>
      <p className="text-gray400 font-[500] text-[14px] max-w-[450px] mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

export default PageTitle;

import React from "react";
import { ChevronRight } from "lucide-react";

type props = {
  title: string;
  isActive: boolean;
  Icon: React.ReactNode;
  onClick?: () => void;
};

function Accounttab({ title, isActive, Icon, onClick }: props) {
  return (
    <button
      className={`w-full py-4 px-4 rounded-[8px] flex items-center  mb-2 hover:bg-[#F9FAFB] ${
        isActive ? "bg-[#F9FAFB]" : ""
      }`}
      onClick={onClick}
    >
      <div>{Icon}</div>
      <div className="ml-3 flex justify-between items-center flex-1 text-[12px] font-[500] text-[#4B5563]">
        <p>{title}</p>
        <ChevronRight
          className={`mr-1 text-[#240552] ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </button>
  );
}

export default Accounttab;

import Link from "next/link";
import React from "react";
import Image from "next/image";

type props = {
  title: string;
  link: string;
  isActive: boolean;
  icon?: React.ReactNode | string;
  image?: string;
};

function Sidebaritem({ link, title, icon, isActive, image }: props) {
  return (
    <Link
      href={link}
      className={`px-6 py-4 flex items-center gap-4 border-[0px] rounded-[5px] mb-2 hover:bg-[#2A0660] ${
        isActive ? "bg-[#2A0660]  border-[#31076F]" : "border-primary"
      }`}
    >
      <span>
        <span>{icon}</span>
      </span>
      <span className="text-white text-[14px] font-[500]">{title}</span>
    </Link>
  );
}

export default Sidebaritem;

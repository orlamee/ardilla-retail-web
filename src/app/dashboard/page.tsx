"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import groupavatar from "../../assets/group avatar.png";
import calc from "../../assets/cal.svg";
import plane from "../../assets/plane.svg";
import withdraw from "../../assets/withdraw.svg";
import deposit from "../../assets/deposit.svg";
import Hero from "@/components/dashboard/hero";
import Quickaction from "./quickaction";
import TodoGroup from "@/components/dashboard/todoGroup";
import Buildwealth from "@/components/dashboard/buildwealth";
// import Buildwealth from "@/components/dashboard/buildwealth";
// import Hero from "@/components/dashboard/hero";
function Dashboard() {
  return (
    <section>
      <NavBar>
        <div>
          <p className="text-[14px] font-[500] text-gray400">Good morning</p>
          <h1 className="text-[26px] font-[700]">Moyosore</h1>
        </div>
      </NavBar>
      <main className="px-4 lg:px-8">
        <Hero/>
        <div className="bg-[#F9FAFB] rounded-[16px] p-8">
          <Quickaction/>
          <TodoGroup />
          <div className="mt-[50px]">
            <div className="bg-[#FCB40C] px-10 py-16 rounded-[8px]">
              <div className="w-3/4">
                <h6 className="text-[22px] font-[400] text-black leading-[34px]"><span className="font-[500]">Interest Calculator:</span> Explore our interest rates on your savings and find out how much interest you will  earn when you save on any of our saving plans.</h6>
              </div>
            </div>
            <Image src={calc} alt="calc" className="ml-auto mt-[-50px] mr-[40px]" />
          </div>
          <Buildwealth/>
        </div>
      </main>
    </section>
  );
}

export default Dashboard;

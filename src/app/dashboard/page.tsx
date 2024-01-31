"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import groupavatar from "../../assets/groupie.svg";
import calc from "../../assets/cal.svg";
import savefund from "../../assets/securefund.svg";
import plane from "../../assets/plane.svg";
import league from "../../assets/league.svg";
import withdraw from "../../assets/withdraw.svg";
import deposit from "../../assets/deposit.svg";
import Hero from "@/components/dashboard/hero";
import Quickaction from "./quickaction";
import TodoGroup from "@/components/dashboard/todoGroup";
import Buildwealth from "@/components/dashboard/buildwealth";
import Link from "next/link";
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
            <Link href={"/dashboard/interest-calculator"}>
              <Image src={calc} alt="calc" className="ml-auto mt-[-50px] mr-[40px]" />
            </Link>
          </div>
          <Buildwealth/>
          <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-[25px] md:gap-[40px]">
            <div className="flex-1 h-full w-full">
              <div className="p-10 h-full w-full flex justify-between items-center flex-1 border-[2px] border-[#000] bg-[#FCB40C] rounded-[12px] shadow-[0px_4px_30px_0px_#9494941A]">
                <div>
                  <h1 className="text-[17px] font-[400] text-center mb-1">
                    Find Your Fellow
                  </h1>
                  <button className="rounded-full w-full font-[600] flex justify-center items-center px-8 py-3 bg-white text-black shadow-[2px_3px_black]">
                    Ardilla User
                  </button>
                </div>
                <Image src={plane} width={90} height={30} alt="plane" />
                <div>
                  <p className="font-[500] text-[16px] text-[#000]">
                    Send money to KodHex
                  </p>
                  <Image
                    src={groupavatar}
                    alt="group users"
                    className="mx-auto mt-3"
                  />
                </div>
              </div>
              <Image src={savefund} alt="savefund" className="w-full" />
              <Image src={league} alt="league" className="w-full" />
            </div>
            <div className="flex-1 p-8 rounded-[12px] border-[1px] bg-white border-borderprimary shadow-[0px_4px_30px_0px_#9494941A]">
              <div className="flex justify-between mb-6">
                <h1 className="font-[500] text-[14px] text-gray-400">
                  Transaction History
                </h1>
                <p className="text-[12px] font-[500] text-primary">View More</p>
              </div>
              <div className="flex justify-between items-center rounded-[5px] bg-[#F9FAFB] mb-4 p-5">
                <div className="flex items-center">
                  <Image src={withdraw} width={40} height={40} alt="witdraw" />

                  <div className="ml-4">
                    <h1 className="text-[14px] font-[500] mb-[6px]">
                      Send Money to Lekan
                    </h1>
                    <p className="text-gray400 font-[400] text-[11px]">
                      Tue, 22nd December, 2023 09:40 PM
                    </p>
                  </div>
                </div>
                <div className="text-[16px] font-[500]">-₦ 4,000.00 </div>
              </div>
              <div className="flex justify-between items-center rounded-[5px] bg-[#F9FAFB] mb-4 p-5">
                <div className="flex items-center">
                  <Image src={deposit} width={40} height={40} alt="witdraw" />

                  <div className="ml-4">
                    <h1 className="text-[14px] font-[500] mb-[6px]">
                      Received Money from Daniel
                    </h1>
                    <p className="text-gray400 font-[400] text-[11px]">
                      Tue, 22nd December, 2023 09:40 PM
                    </p>
                  </div>
                </div>
                <div className="text-[16px] font-[500]">+₦ 4,000.00 </div>
              </div>
              <div className="flex justify-between items-center rounded-[5px] bg-[#F9FAFB] mb-4 p-5">
                <div className="flex items-center">
                  <Image src={withdraw} width={40} height={40} alt="witdraw" />

                  <div className="ml-4">
                    <h1 className="text-[14px] font-[500] mb-[6px]">
                      Send Money to Lekan
                    </h1>
                    <p className="text-gray400 font-[400] text-[11px]">
                      Tue, 22nd December, 2023 09:40 PM
                    </p>
                  </div>
                </div>
                <div className="text-[16px] font-[500]">-₦ 4,000.00 </div>
              </div>
              <div className="flex justify-between items-center rounded-[5px] bg-[#F9FAFB] mb-4 p-5">
                <div className="flex items-center">
                  <Image src={deposit} width={40} height={40} alt="witdraw" />

                  <div className="ml-4">
                    <h1 className="text-[14px] font-[500] mb-[6px]">
                      Received Money from Daniel
                    </h1>
                    <p className="text-gray400 font-[400] text-[11px]">
                      Tue, 22nd December, 2023 09:40 PM
                    </p>
                  </div>
                </div>
                <div className="text-[16px] font-[500]">+₦ 4,000.00 </div>
              </div>
              <div className="flex justify-between items-center rounded-[5px] bg-[#F9FAFB] mb-4 p-5">
                <div className="flex items-center">
                  <Image src={deposit} width={40} height={40} alt="witdraw" />

                  <div className="ml-4">
                    <h1 className="text-[14px] font-[500] mb-[6px]">
                      Received Money from Daniel
                    </h1>
                    <p className="text-gray400 font-[400] text-[11px]">
                      Tue, 22nd December, 2023 09:40 PM
                    </p>
                  </div>
                </div>
                <div className="text-[16px] font-[500]">+₦ 4,000.00 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Dashboard;

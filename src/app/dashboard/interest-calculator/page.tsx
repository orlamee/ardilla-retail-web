"use client";
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Calculator() {
  const [plan, setPlan] = useState("");
  const [frequency, setFrequency] = useState("");
  const [capital, setCapital] = useState<number>();
  const [length, setLength] = useState<number>(0);
  const [balance, setBalance] = useState<number>();

  const calculateBalance = () => {
    if (capital && length) {
      setBalance(
        (capital || 0) * Number(length) + (capital || 0) * 0.02 * Number(length)
      );
    }
    if (!capital || !length) {
      setBalance(0);
    }
  };

  return (
    <section>
      <NavBar>
        <div>
          <p className="text-[14px] font-[500] text-gray400">Good morning</p>
          <h1 className="text-[26px] font-[700]">Moyosore</h1>
        </div>
      </NavBar>
      <main className="bg-[#FDFAFF] px-4 lg:px-8 min-h-screen pt-[60px]">
        <h1 className="text-[24px] leading-[32px] font-[500] text-[#240552]">
          Interest Calculator
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-[50px] xl:gap-[80px] gap-[50px] mt-12">
          <div className="flex-1 lg:mb-5 w-full">
            <div>
              <h2 className="text-[12px] leading-[16px] font-[500] mb-6 text-[#240552]">
                Select what type of Savings plan
              </h2>
              <div className="flex flex-col md:flex-row md:flex-wrap gap-y-2 md:gap-x-4 md:gap-y-1.5 mb-11 w-full">
                <div
                  className={`rounded-[4px] border-[4px] border-black transition flex items-center justify-center hover:bg-[#E1CFFC] px-10 lg:flex-1 py-5 cursor-pointer ${
                    plan === "dib" ? "bg-[#E1CFFC]" : "bg-transparent"
                  }`}
                  onClick={() => setPlan("dib")}
                >
                  {/* <Image src={dib} alt="dib" /> */}
                  <p className="text-[18px] font-[500] ml-3">Vault Lite</p>
                </div>
                <div
                  className={`rounded-[4px] border-[4px] border-black transition flex items-center justify-center hover:bg-[#E1CFFC] px-10 lg:flex-1 py-5 cursor-pointer ${
                    plan === "grit" ? "bg-[#E1CFFC]" : "bg-transparent"
                  }`}
                  onClick={() => setPlan("grit")}
                >
                  {/* <Image src={grit} alt="grit" /> */}
                  <p className="text-[18px] font-[500] ml-3">Grit</p>
                </div>
                <div
                  className={`rounded-[4px] border-[4px] border-black transition flex items-center justify-center hover:bg-[#E1CFFC] px-10 py-5 lg:flex-1 cursor-pointer ${
                    plan === "dreams" ? "bg-[#E1CFFC]" : "bg-transparent"
                  }`}
                  onClick={() => setPlan("dreams")}
                >
                  {/* <Image src={dream} alt="dreams" /> */}
                  <p className="text-[18px] font-[500] ml-3">Dreams</p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-[12px] font-[500] text-[#9CA3AF]">
                Total Balance
              </h1>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

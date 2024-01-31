"use client";
import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import lite from "../../../assets/v-lite.svg";
import extra from "../../../assets/v-extra.svg";
import premium from "../../../assets/v-premium.svg";
import pig from "../../../assets/pig.svg";
import graph from "../../../assets/graph.svg";
import Link from "next/link";

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
        <Link href={"/dashboard"}>
          <div className="flex items-center">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8.89844"
                cy="8.5"
                r="8.22971"
                fill="white"
                stroke="#240552"
                stroke-width="0.540583"
              />
              <path
                d="M9.58715 12.3235C9.50935 12.3235 9.43156 12.2948 9.37014 12.2334L6.70051 9.56378C6.2665 9.12976 6.2665 8.41731 6.70051 7.98329L9.37014 5.31367C9.48888 5.19492 9.68542 5.19492 9.80416 5.31367C9.9229 5.43241 9.9229 5.62894 9.80416 5.74768L7.13453 8.41731C6.938 8.61385 6.938 8.93322 7.13453 9.12976L9.80416 11.7994C9.9229 11.9181 9.9229 12.1147 9.80416 12.2334C9.74274 12.2907 9.66495 12.3235 9.58715 12.3235Z"
                fill="#240552"
              />
            </svg>
            <h1 className="text-[12px] font-[500] text-[#9CA3AF] ms-3 leading-[20px]">
              Back To Dashboard
            </h1>
          </div>
        </Link>
      </NavBar>
      <main className="bg-[#FDFAFF] px-4 lg:px-8 pt-[60px]">
        <h1 className="text-[24px] leading-[32px] font-[500] text-[#240552]">
          Interest Calculator
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-[50px] xl:gap-[80px] gap-[50px] mt-12">
          <div className="flex-1 lg:mb-5 w-full">
            <div>
              <h2 className="text-[12px] leading-[16px] font-[500] mb-6 text-[#240552]">
                Select what type of Savings plan
              </h2>
              <div className="flex flex-col md:flex-row md:flex-wrap gap-y-2 md:gap-x-4 md:gap-y-1.5 mb-11">
                <div
                  className={`rounded-[4px] border-[4px] border-black transition flex items-center justify-center hover:bg-[#E1CFFC] px-10 py-2 cursor-pointer ${
                    plan === "dib" ? "bg-[#E1CFFC]" : "bg-transparent"
                  }`}
                  onClick={() => setPlan("dib")}
                >
                  <Image src={lite} alt="lite" />
                  <p className="text-[18px] font-[500] ml-3">Vault Lite</p>
                </div>
                <div
                  className={`rounded-[4px] border-[4px] border-black transition flex items-center justify-center hover:bg-[#E1CFFC] px-10  py-5 cursor-pointer ${
                    plan === "grit" ? "bg-[#E1CFFC]" : "bg-transparent"
                  }`}
                  onClick={() => setPlan("grit")}
                >
                  <Image src={extra} alt="extra" />
                  <p className="text-[18px] font-[500] ml-3">Vault Extra</p>
                </div>
                <div
                  className={`rounded-[4px] border-[4px] border-black transition flex items-center justify-center hover:bg-[#E1CFFC] px-10 py-5 cursor-pointer ${
                    plan === "dreams" ? "bg-[#E1CFFC]" : "bg-transparent"
                  }`}
                  onClick={() => setPlan("dreams")}
                >
                  <Image src={premium} alt="premium" />
                  <p className="text-[18px] font-[500] ml-3">Vault Premium</p>
                </div>
              </div>
              <h3 className="text-[12px] font-[500] mb-6 text-[#240552]">
                How often are you saving?
              </h3>
              <div className="flex flex-col md:flex-row md:flex-wrap gap-y-2 md:gap-x-4 md:gap-y-0 mb-11">
                <div
                  className={`rounded-[4px] border-[4px] border-black text-center transition text-[18px] font-[500] flex items-center justify-center hover:bg-[#E1CFFC] px-10 py-5 cursor-pointer ${
                    frequency === "daily" ? "bg-[#E1CFFC]" : "bg-transparent"
                  }`}
                  onClick={() => setFrequency("daily")}
                >
                  Daily
                </div>
                <div
                  className={`rounded-[4px] border-[4px] border-black text-center transition text-[18px] font-[500] flex items-center justify-center hover:bg-[#E1CFFC] px-10 py-5 cursor-pointer ${
                    frequency === "weekly" ? "bg-[#E1CFFC]" : "bg-transparent"
                  }`}
                  onClick={() => setFrequency("weekly")}
                >
                  Weekly
                </div>
                <div
                  className={`rounded-[4px] border-[4px] border-black text-center transition text-[18px] font-[500] flex items-center justify-center hover:bg-[#E1CFFC] px-10 py-5 cursor-pointer ${
                    frequency === "monthly" ? "bg-[#E1CFFC]" : "bg-transparent"
                  }`}
                  onClick={() => setFrequency("monthly")}
                >
                  Monthly
                </div>
              </div>
              <h3 className="text-[12px] font-[500] mb-5">
                How much are you saving?
              </h3>
              <div className="mb-11">
                <input
                  type="number"
                  className="outline-none bg-transparent text-[16px] font-[500] p-4 border-[1px] w-full rounded-[6px]"
                  value={capital}
                  onChange={(e) => setCapital(Number(e.target.value))}
                />
              </div>
              <h3 className="text-[12px] font-[500] mb-5">
                How long are you saving for? (In months)
              </h3>
              <div className="">
                <input
                  type="number"
                  className="outline-none bg-transparent text-[16px] font-[500] p-4 border-[1px] w-full rounded-[6px]"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                />
              </div>
              <button className="w-full text-[13px] font-[500] bg-[#240552] rounded-[8px] text-white p-5  mt-[50px] flex items-center justify-center gap-x-1">
                <Image src={pig} alt="start saving" className="w-auto h-auto" />
                Start Saving Now
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-5">
              <h1 className="text-[12px] font-[500] text-[#240552]">
                Total Balance
              </h1>
            </div>
            <div className="flex items-center gap-x-[50px]">
              <div className="w-1/4">
                <h2 className="text-[#240552] font-[700] text-[40px] leading-[54px]">N6, 000</h2>
              </div>
              <div className="w-3/4">
                <p className="text-[#240552] font-[400]">Saving ₦2,000 monthly for 3 months will result in a balance of ₦6,600</p>
              </div>
            </div>
            <div className="mb-2 mt-10 flex items-center gap-x-[50px]">
              <div className="w-1/4">
                <h1 className="text-[12px] font-[500] text-[#240552] mb-4">
                   Interest
                </h1>
                <h2 className="text-[#240552] font-[700] text-[20px] leading-[27px]">N600 <span className="font-[500]">( 2%)</span> </h2>
              </div>
              <div className="w-3/4">
                <h1 className="text-[12px] font-[500] text-[#240552] mb-4">
                   Interest
                </h1>
                <h2 className="text-[#240552] font-[700] text-[20px] leading-[27px]">N600 <span className="font-[500]">( 2%)</span> </h2>
              </div>
            </div>
            <div className="mt-8">
              <Image src={graph} alt="calc" className="w-full" />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

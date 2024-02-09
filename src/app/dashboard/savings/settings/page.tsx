"use client";
import Accounttab from "@/components/accounttab";
import NavBar from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import navback from "../../../../assets/nav back.svg";
import faq from "../../../../assets/settings-faq.svg";
import dividend from "../../../../assets/div-settings.svg";
import auto from "../../../../assets/pig-outline.svg";
import report from "../../../../assets/report.svg";
import rank from "../../../../assets/ranks.svg";
import Image from "next/image";
import Link from "next/link";
import SavingReports from "./components/savingreports";
import SavingsRanking from "./components/savingsRanking";
import Automaticsavings from "./components/automaticsavings";
import Dividendsettings from "./components/dividendsettings";
import Faq from "./components/faq";

function SavingsSetting() {
  const [activeTab, setActiveTab] = useState<
    | "Savings Report"
    | "Savings Ranking"
    | "faq"
    | "Automatic Settings"
    | "Dividends Settings"
  >("Savings Report");
  return (
    <section>
      <NavBar>
        <Link href={"/dashboard/savings"}>
          <div className="flex items-center">
            <Image src={navback} width={17} height={17} alt="back" />
            <p className="text-[12px] font-[500] mb-1 text-[#9CA3AF] ml-2 mt-1">
              Back To Savings Dashboard
            </p>
          </div>
        </Link>
      </NavBar>
      <main className="p-4 lg:px-8 flex py-7 justify-between">
        <ScrollArea className="basis-[40%] h-[83vh] pr-6">
          <div className="mb-5">
            <h1 className="text-gray400 text-[11px] font-[400] mb-2">
              REPORT
            </h1>
            <Accounttab
              title="Savings Report"
              Icon={
                <Image
                  src={report}
                  width={34}
                  height={34}
                  alt="rewards"
                />
              }
              isActive={activeTab === "Savings Report"}
              onClick={() => setActiveTab("Savings Report")}
            />
            <Accounttab
              title="Savings Ranking"
              Icon={
                <Image src={rank} width={34} height={34} alt="refer" />
              }
              isActive={activeTab === "Savings Ranking"}
              onClick={() => setActiveTab("Savings Ranking")}
            />
          </div>
          <div className="mb-5">
            <h1 className="text-gray400 text-[11px] font-[400] mb-2">
              SETTINGS
            </h1>
            <Accounttab
              title="Automatic Settings"
              Icon={
                <Image
                  src={auto}
                  width={34}
                  height={34}
                  alt="rewards"
                />
              }
              isActive={activeTab === "Automatic Settings"}
              onClick={() => setActiveTab("Automatic Settings")}
            />
            <Accounttab
              title="Dividends Settings"
              Icon={
                <Image
                  src={dividend}
                  width={34}
                  height={34}
                  alt="refer"
                />
              }
              isActive={activeTab === "Dividends Settings"}
              onClick={() => setActiveTab("Dividends Settings")}
            />
          </div>
          <div className="mb-5">
            <h1 className="text-gray400 text-[11px] font-[400] mb-2">
              FAQ
            </h1>
            <Accounttab
              title="FAQ"
              Icon={
                <Image src={faq} width={34} height={34} alt="rewards" />
              }
              isActive={activeTab === "faq"}
              onClick={() => setActiveTab("faq")}
            />
          </div>
        </ScrollArea>
        <ScrollArea className="basis-[55%] p-8 rounded-[8px] bg-white border-[1px] border-primaryborder box-shadow h-[83vh] w-full shadow-[0_4px_30px_0_#9494941A]">
          {activeTab === "Savings Report" && <SavingReports />}
          {activeTab === "Savings Ranking" && <SavingsRanking />}
          {activeTab === "Automatic Settings" && <Automaticsavings />}
          {activeTab === "Dividends Settings" && <Dividendsettings />}
          {activeTab === "faq" && <Faq />}
        </ScrollArea>
      </main>
    </section>
  );
}

export default SavingsSetting;

"use client";
import Accounttab from "@/components/accounttab";
import NavBar from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import rewards from "../../../assets/rewards.svg";
import refer from "../../../assets/refer.svg";
import Image from "next/image";
import RewardandRefer from "@/components/reward/rewards";
// import Refer from "@/components/Rewardcomponents/refer";

function Reward() {
  const [activeTab, setActiveTab] = useState<
    | "Rewards"
    | "Refer and Earn"
    | ""
  >("Rewards");
  return (
    <section>
      <NavBar>
        <div>
          <h1 className="text-[24px] leading-[33px] text-[#240552] font-[700] mb-1">Rewards</h1>
          <p className="text-[#9CA3AF] text-[12px] font-[500]">
            View your rewards on Ardila
          </p>
        </div>
      </NavBar>
      <main className="p-4 lg:px-8 flex py-7 justify-between">
        <ScrollArea className="basis-[40%] h-[83vh] pr-6">
          <div className="mb-5">
            <h1 className="text-[#9CA3AF] text-[11px] font-[400] mb-2">
              REWARDS
            </h1>
            <Accounttab
              title="Rewards"
              Icon={
                <Image src={rewards} width={34} height={34} alt="rewards" />
              }
              isActive={activeTab === "Rewards"}
              onClick={() => setActiveTab("Rewards")}
            />
            <Accounttab
              title="Refer and Earn"
              Icon={
                <Image src={refer} width={34} height={34} alt="refer" />
              }
              isActive={activeTab === "Refer and Earn"}
              onClick={() => setActiveTab("Refer and Earn")}
            />

          </div>
          
        </ScrollArea>
        <ScrollArea className="basis-[55%] p-8 rounded-[8px] bg-white border-[1px] border-primaryborder box-shadow h-[83vh] w-full shadow-[0_4px_30px_0_#9494941A]">
          {activeTab === "Rewards" && <RewardandRefer />}
          {/* {activeTab === "Refer and Earn" && <Refer />} */}
        </ScrollArea>
      </main>
    </section>
  );
}

export default Reward;

"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ChevronRight } from "lucide-react";
import debit from "../assets/debit.svg";
import bank from "../assets/bank.svg";
import master from "../assets/Mastercard logo.png";
import wema from "../assets/wema bank.png";
import Image from "next/image";

type props = {
  setStep: Dispatch<
    SetStateAction<
      | "card and bank"
      | "add new card"
      | "manage card"
      | "add bank"
      | "manage bank"
      | ""
    >
  >;
};
function Cardandbanktab({ setStep }: props) {
  return (
    <div>
      <Tabs defaultValue="card" className="max-w-[450px] mx-auto">
        <TabsList className="grid w-full grid-cols-2 h-[44px] rounded-[4px] bg-[#F9F5FF]">
          <TabsTrigger value="card" className="h-full text-[12px] font-[500]">
            Card
          </TabsTrigger>
          <TabsTrigger value="bank" className="h-full text-[12px] font-[500]">
            Bank
          </TabsTrigger>
        </TabsList>
        <TabsContent value="card">
          <div className="mt-8">
            <button
              className="flex justify-between items-center p-5 border-[1px] w-full rounded-[4px] border-primary mb-6"
              onClick={() => setStep("add new card")}
            >
              <div className="flex items-center flex-1">
                <Image src={debit} width={30} height={30} alt="debit card" />
                <h1 className="ml-[10px] text-[12px] font-[500] text-primary">
                  Add Debit Card
                </h1>
              </div>
              <ChevronRight className="text-primary" />
            </button>
            <p className="uppercase text-[14px] font-[500] text-gray400 text-center mb-5">
              Existing Cards
            </p>
            <div
              className="px-5 py-6 flex justify-between items-center bg-[#F9F9F9] rounded-[4px] mb-4 cursor-pointer"
              onClick={() => setStep("manage card")}
            >
              <div className="flex items-center">
                <Image src={master} width={28} height={28} alt="master card" />

                <p className="text-[12px] font-[500] ml-3">
                  Guaranty Trust Bank
                </p>
              </div>
              <div>
                <p className="text-[10px] font-[400]">Available Card</p>
                <p className="text-[12px] font-[500] text-right">*** 4574</p>
              </div>
            </div>
            <div
              className="px-5 py-6 flex justify-between items-center bg-[#F9F9F9] rounded-[4px] mb-4 cursor-pointer"
              onClick={() => setStep("manage card")}
            >
              <div className="flex items-center">
                <Image src={wema} width={28} height={28} alt="master card" />

                <p className="text-[12px] font-[500] ml-3">Wema Bank</p>
              </div>
              <div>
                <p className="text-[10px] font-[400]">Available Card</p>
                <p className="text-[12px] font-[500] text-right">*** 4574</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="bank">
          <div className="mt-8">
            <button
              className="flex justify-between items-center p-5 border-[1px] w-full rounded-[4px] border-primary  mb-6"
              onClick={() => setStep("add bank")}
            >
              <div className="flex items-center flex-1">
                <Image src={bank} width={30} height={30} alt="bank" />
                <h1 className="ml-[10px] text-[12px] font-[500] text-primary">
                  Add Bank
                </h1>
              </div>
              <ChevronRight className="text-primary" />
            </button>
            <p className="uppercase text-[14px] font-[500] text-gray400 text-center mb-5">
              Existing Bank Account
            </p>
            <div
              className="px-5 py-6 flex justify-between items-center bg-[#F9F9F9] rounded-[4px] mb-4 cursor-pointer"
              onClick={() => setStep("manage bank")}
            >
              <div className="flex items-center">
                <Image src={master} width={28} height={28} alt="master card" />

                <p className="text-[12px] font-[500] ml-3">
                  Guaranty Trust Bank
                </p>
              </div>
              <div>
                <p className="text-[10px] font-[400]">Oshodi David . O</p>
                <p className="text-[12px] font-[500] text-right">0163456890</p>
              </div>
            </div>
            <div
              className="px-5 py-6 flex justify-between items-center bg-[#F9F9F9] rounded-[4px] mb-4 cursor-pointer"
              onClick={() => setStep("manage bank")}
            >
              <div className="flex items-center">
                <Image src={wema} width={28} height={28} alt="master card" />

                <p className="text-[12px] font-[500] ml-3">Wema Bank</p>
              </div>
              <div>
                <p className="text-[10px] font-[400]">Oshodi David . O</p>
                <p className="text-[12px] font-[500] text-right">0163456890</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Cardandbanktab;

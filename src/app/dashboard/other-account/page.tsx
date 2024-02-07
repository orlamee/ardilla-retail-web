"use client";
import React, { useEffect, useRef, useState } from "react";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import bank from "../../../assets/Big Bank.svg";
import Image from "next/image";
import { ChevronRight, XCircleIcon } from "lucide-react";
import Modal from "@/components/modal";
import access from "../../../assets/access.png";
import wema from "../../../assets/wema bank.png";
import gtsmall from "../../../assets/gt small.png";
import search from "../../../assets/search-normal.svg";
import moyo from "../../../assets/moyo.svg";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import mastercard from "../../../assets/Mastercard logo.png";
import PageTitleWithArrow from "@/components/pagetitle";
import Enteramount from "@/components/enteramount";

function OtherAccount() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [modal, setModal] = useState<"select bank" | "">("");
  const [step, setStep] = useState<"other account" | "enter amount" | "">(
    "other account"
  );
  const [selectedBank, setSelectedBank] = useState("");
  const [account, setAccount] = useState("");
  const router = useRouter();

  useEffect(() => {
    inputRef?.current?.focus();
  }, [account]);

  const OtherAccount = () => (
    <>
      <PageTitleWithArrow
        title="Other Bank Account"
        subtitle="Send money to other bank accounts"
        image={bank}
        handleBack={() => router.push("/dashboard/send-money")}
      />

      <div className="max-w-[450px] mx-auto mt-[60px]">
        <input
          type="text"
          className="w-full p-5 outline-none border-[1px] border-[#D1D5DB] rounded-[4px] text-[12px] placeholder:text-[#9CA3AF] font-[500] mb-5 text-primary"
          placeholder="Enter Account Number"
          value={account}
          ref={inputRef}
          onChange={(e) => setAccount(e.target.value)}
        />

        <div
          className="flex justify-between items-center border-[1px] border-[#d1d5db] rounded-[4px] text-[12px] p-5 cursor-pointer"
          onClick={() => setModal("select bank")}
        >
          {selectedBank ? (
            <p className="text-[12px] font-[500]">{selectedBank}</p>
          ) : (
            <p className="text-[12px] font-[500] text-gray400">Choose Bank</p>
          )}
          <ChevronRight className="text-primary text-[]" />
        </div>

        {account && selectedBank && (
          <div className="mx-auto mt-6">
            <Image
              src={moyo}
              width={214}
              height={58}
              className="mx-auto mt-[10px]"
              alt="user"
              onClick={() => setStep("enter amount")}
            />
          </div>
        )}

        <BanksTabList />
      </div>
    </>
  );

  const BanksTabList = () => (
    <ScrollArea className="h-[210px] px-3 mt-[30px]">
      <Tabs defaultValue="recents" className="max-w-[450px] mx-auto">
        <TabsList className="grid w-full grid-cols-2 h-[44px] rounded-[4px] bg-[#F9F5FF]">
          <TabsTrigger
            value="recents"
            className="h-full text-[12px] font-[500]"
          >
            Recents
          </TabsTrigger>
          <TabsTrigger
            value="beneficiaries"
            className="h-full text-[12px] font-[500]"
          >
            Beneficiaries
          </TabsTrigger>
        </TabsList>
        <TabsContent value="recents">
          <div className=" mt-6  pr-1">
            <div
              className="rounded-[4px] bg-[#F9F9F9] flex justify-between items-center p-4 py-5 mb-4 cursor-pointer"
              onClick={() => setStep("enter amount")}
            >
              <div className="flex items-center">
                <Image
                  src={mastercard}
                  width={28}
                  height={22}
                  alt="master card"
                />
                <p className="ml-3 text-[12px] font-[500]">
                  Guaranty Trust Bank
                </p>
              </div>
              <div className="text-right">
                <h1 className="text-[12px] font-[500] mb-1">
                  Oshodi David . O
                </h1>
                <p className="text-[11px] font-[500] text-gray400">
                  0163456890
                </p>
              </div>
            </div>

            <div
              className="rounded-[4px] bg-[#F9F9F9] flex justify-between items-center p-4 py-5 mb-4 cursor-pointer"
              onClick={() => setStep("enter amount")}
            >
              <div className="flex items-center">
                <Image src={wema} width={28} height={22} alt="master card" />
                <p className="ml-3 text-[12px] font-[500]">Wema Bank</p>
              </div>
              <div className="text-right">
                <h1 className="text-[12px] font-[500] mb-1">
                  Oshodi David . O
                </h1>
                <p className="text-[11px] font-[500] text-gray400">
                  0163456890
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="beneficiaries">
          <div className=" mt-6  pr-1">
            <div
              className="rounded-[4px] bg-[#F9F9F9] flex justify-between items-center p-4 py-5 mb-4 cursor-pointer"
              onClick={() => setStep("enter amount")}
            >
              <div className="flex items-center">
                <Image
                  src={mastercard}
                  width={28}
                  height={22}
                  alt="master card"
                />
                <p className="ml-3 text-[12px] font-[500]">
                  Guaranty Trust Bank
                </p>
              </div>
              <div className="text-right">
                <h1 className="text-[12px] font-[500] mb-1">
                  Oshodi David . O
                </h1>
                <p className="text-[11px] font-[500] text-gray400">
                  0163456890
                </p>
              </div>
            </div>

            <div
              className="rounded-[4px] bg-[#F9F9F9] flex justify-between items-center p-4 py-5 mb-4 cursor-pointer"
              onClick={() => setStep("enter amount")}
            >
              <div className="flex items-center">
                <Image src={wema} width={28} height={22} alt="master card" />
                <p className="ml-3 text-[12px] font-[500]">Wema Bank</p>
              </div>
              <div className="text-right">
                <h1 className="text-[12px] font-[500] mb-1">
                  Oshodi David . O
                </h1>
                <p className="text-[11px] font-[500] text-gray400">
                  0163456890
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </ScrollArea>
  );

  const SelectBank = () => (
    <Modal>
      <div className="bg-white rounded-t-[30px] pt-[20px] px-[30px] w-[439px] pb-7">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[34px] font-[500]">Select Bank</h1>
          <XCircleIcon
            onClick={() => setModal("")}
            className="w-[16px] text-gray400 cursor-pointer"
          />
        </div>

        <div className="flex items-center px-5 w-full bg-[#F9F9F9] rounded-[4px] py-5 mb-5">
          <Image src={search} width={21} height={21} alt="search" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for bank"
            className="rounded-[4px] outline-none  ml-3 w-full bg-[#F9F9F9] h-full text-[12px] font-[400]"
          />
        </div>

        <div
          className="flex justify-between border-b-[1px] border-[#F3F4F6] py-4 cursor-pointer"
          onClick={() => setSelectedBank("Guaranty Trust Bank")}
        >
          <div className="flex items-center">
            <Image src={gtsmall} width={37} height={27} alt="gt bank" />

            <h1 className="ml-3 text-[13px] font-[500]">Guaranty Trust Bank</h1>
          </div>

          <button className="text-[10px] px-5 font-[500] rounded-[3px] bg-white text-black shadow-[4px_4px_#240552] border-[1px] border-primary">
            Matching Bank
          </button>
        </div>

        <div className="mt-[20px]">
          <div
            className="flex items-center w-full rounded-[4px] mb-5 cursor-pointer"
            onClick={() => setSelectedBank("Access Bank")}
          >
            <Image src={access} width={37} height={37} alt="access bank" />
            <p className="ml-3 text-[13px] font-[500] text-black">
              Access Bank
            </p>
          </div>
          <div
            className="flex items-center  w-full rounded-[4px] mb-5 cursor-pointer"
            onClick={() => setSelectedBank("Wema Bank")}
          >
            <Image src={wema} width={37} height={37} alt="access bank" />
            <p className="ml-3 text-[13px] font-[500] text-black">Wema Bank</p>
          </div>
          <div
            className="flex items-center  w-full rounded-[4px] mb-5 cursor-pointer"
            onClick={() => setSelectedBank("Wema Bank")}
          >
            <Image src={wema} width={37} height={37} alt="access bank" />
            <p className="ml-3 text-[13px] font-[500] text-black">Wema Bank</p>
          </div>
          <div
            className="flex items-center  w-full rounded-[4px] mb-5 cursor-pointer"
            onClick={() => setSelectedBank("Wema Bank")}
          >
            <Image src={wema} width={37} height={37} alt="access bank" />
            <p className="ml-3 text-[13px] font-[500] text-black">Wema Bank</p>
          </div>
        </div>
      </div>
    </Modal>
  );

  return (
    <section>
      {modal === "select bank" && <SelectBank />}
      <NavBar>
        <div>
          <h1 className="font-[600] text-primary text-[24px] mb-1">Payments</h1>
          <p className="text-gray400 text-[12px] font-[500]">
            Manage funds with ease
          </p>
        </div>
      </NavBar>
      <main className="flex items-center justify-center h-[88vh]">
        <div className=" p-9   w-full mx-4 sm:mx-[10%] lg:mx-0 lg:w-1/2 border-[1px] border-[#E5E7EB] rounded-[8px] container-gradient h-[90%]">
          <div className="my-8 bg-white w-full h-full rounded-[8px]">
            {step === "other account" && <OtherAccount />}
            {step === "enter amount" && (
              <Enteramount handleBack={() => setStep("other account")} />
            )}
          </div>
        </div>
      </main>
    </section>
  );
}

export default OtherAccount;

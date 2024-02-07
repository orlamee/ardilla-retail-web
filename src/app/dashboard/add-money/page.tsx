"use client";
import React, { useState } from "react";
import NavBar from "@/components/navbar";
import { useRouter, useSearchParams } from "next/navigation";
import addmoney from "../../../assets/add money t.svg";
import Image from "next/image";
import {
  ChevronDown,
  ChevronLeft,
  ChevronLeftCircle,
  ChevronRight,
  Code2,
  Files,
  FilesIcon,
  XCircleIcon,
} from "lucide-react";
import ardilla from "../../../assets/s ardilla.svg";
import otherbanks from "../../../assets/other banks.svg";
import card from "../../../assets/card.svg";
import cashdeposit from "../../../assets/cash deposit.svg";
import ussd from "../../../assets/ussd.svg";
import Link from "next/link";
import Modal from "../../../components/modal";
import master from "../../../assets/Mastercard logo.png";
import wema from "../../../assets/wema bank.png";
import { AnimatePresence, motion } from "framer-motion";
import success from "../../../assets/success.png";
import note from "../../../assets/note.svg";
import paymentsuccess from "../../../assets/payment success.png";
import download from "../../../assets/download.svg";
import chat from "../../../assets/chat.svg";
import gt from "../../../assets/gt large.png";
import globus from "../../../assets/globus_bank logo.svg";
import wemaL from "../../../assets/wema large.svg";
import nearly from "../../../assets/nearly.svg";
import clock from "../../../assets/clock.png";
import curved from "../../../assets/curved.png";
import PageTitleWithArrow from "@/components/pagetitle";

function AddMoney() {
  const banks = [
    "GTbank",
    "First Bank",
    "Globus Bank",
    "UBA Bank",
    "Union BANK",
  ];
  const [selectedBank, setSelectedBank] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  const [modal, setModal] = useState<
    | "debit card"
    | "topup success"
    | "receipt"
    | "bank transfer"
    | "ussd"
    | "inprogress"
    | "account details"
    | ""
  >("");
  const [step, setStep] = useState<"add money" | "">("add money");
  const id = useSearchParams().get("id") || "add money";
  const [topupStep, settopupStep] = useState<
    | "choose method"
    | "debit card"
    | "enter pin"
    | "bank transfer"
    | "ussd"
    | ""
    | "choose bank"
  >("");

  const router = useRouter();
  const Add = () => (
    <>
      <PageTitleWithArrow
        title="Add Money"
        subtitle="Fund your Kodhex account using any of our modes of payment."
        image={addmoney}
        handleBack={() => router.push("/dashboard/payment")}
      />

      <div className="max-w-[450px] mx-auto mt-[60px]">
        <Button
          image={ardilla}
          title="Account Details"
          handleClick={() => {
            setModal("account details");
          }}
        />
        <Button
          image={otherbanks}
          title="Bank Transfer"
          handleClick={() => {
            router.push("/dashboard/add-money?id=bank+transfer");
          }}
        />
        <Button
          image={card}
          title="Debit Card"
          handleClick={() => {
            router.push("/dashboard/add-money?id=debit+card");
          }}
        />
        <Button
          image={ussd}
          title="USSD"
          handleClick={() => {
            router.push("/dashboard/add-money?id=ussd");
          }}
        />
        <Button
          image={cashdeposit}
          title="Cash Deposit"
          handleClick={() => {}}
          comingsoon
        />
      </div>
    </>
  );

  const AccountDetails = () => (
    <Modal>
      <div className="bg-white w-[734px] rounded-t-[30px] pt-[30px] px-[30px] pb-[20px]">
        <div className="flex justify-between w-full items-center mb-6">
          <div></div>
          <div>
            <h1 className="font-[500] text-[40px] text-center text-primary mb-2">
              Account Details
            </h1>
            <p className="text-[14px] font-[500] text-gray400 text-center">
              View your account information for sending or receiving money.
            </p>
          </div>
          <XCircleIcon
            className="w-[17px] text-gray400 cursor-pointer mb-8"
            onClick={closeTopUpModal}
          />
        </div>
        <div className="flex justify-center mb-4">
          <div className="border-r-[1px] border-r-[#E5E7EB] pr-8">
            <h1 className="text-[12px] font-[500] text-primary mb-2 ">
              Account Status
            </h1>
            <p className="bg-[#F9F9F9F9] rounded-full text-center text-[10px] font-[500] px-3 py-2 text-primary shadow-[3px_3px_#240552]">
              Active
            </p>
          </div>
          <div className="border-r-[1px] border-r-[#E5E7EB] pr-8 pl-8">
            <h1 className="text-[12px] font-[500] text-primary mb-2 ">
              Customer ID
            </h1>
            <p className="bg-[#F9F9F9F9] rounded-full text-center text-[10px] font-[500] px-3 py-2 text-primary shadow-[3px_3px_#240552]">
              1234567
            </p>
          </div>
          <div className="pl-8">
            <h1 className="text-[12px] font-[500] text-primary mb-2 ">
              Account Tier
            </h1>
            <p className="bg-[#F9F9F9F9] rounded-full text-center text-[10px] font-[500] px-3 py-2 text-primary shadow-[3px_3px_#240552]">
              Tier 3
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-[1px] border-[#F3F4F6] rounded-[8px] px-5 py-6 mt-10 mb-5">
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Bank Name
            </h1>
            <Image src={globus} width={75} height={17} alt="globusbank" />
          </div>
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Account Name
            </h1>
            <p className="text-[10px] font-[500] text-center">Onwa - Ltd</p>
          </div>
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Account Number
            </h1>
            <p className="text-[10px] font-[500] flex items-center">
              1234567890{" "}
              <span className="ml-2">
                <FilesIcon className="w-[12px] text-[#23A323]" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-[1px] border-[#F3F4F6] rounded-[8px] px-5 py-6  mb-5">
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Bank Name
            </h1>
            <Image src={wemaL} width={75} height={17} alt="globusbank" />
          </div>
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Account Name
            </h1>
            <p className="text-[10px] font-[500] text-center">Onwa - Ltd</p>
          </div>
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Account Number
            </h1>
            <p className="text-[10px] font-[500] flex items-center">
              1234567890{" "}
              <span className="ml-2">
                <FilesIcon className="w-[12px] text-[#23A323]" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-[1px] border-[#F3F4F6] rounded-[8px] px-5 py-6  mb-5">
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Bank Name
            </h1>
            <Image src={curved} width={143} height={30} alt="globusbank" />
          </div>
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Account Name
            </h1>
            <p className="text-[10px] font-[500] text-center">Onwa - Ltd</p>
          </div>
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Account Number
            </h1>
            <p className="text-[10px] font-[500] flex items-center">
              1234567890{" "}
              <span className="ml-2">
                <FilesIcon className="w-[12px] text-[#23A323]" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-[1px] border-[#F3F4F6] rounded-[8px] px-5 py-6  mb-5">
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Bank Name
            </h1>
            <Image src={nearly} width={75} height={17} alt="globusbank" />
          </div>
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Account Name
            </h1>
            <p className="text-[10px] font-[500] text-center">Onwa - Ltd</p>
          </div>
          <div>
            <h1 className="text-gray400 text-[10px] font-[500] mb-1">
              Account Number
            </h1>
            <p className="text-[10px] font-[500] flex items-center">
              1234567890{" "}
              <span className="ml-2">
                <FilesIcon className="w-[12px] text-[#23A323]" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
  const Debit = () => (
    <>
      <div className="text-center mb-8">
        <div className="max-w-[450px] mx-auto relative">
          <h1 className="font-[700] text-[18px] text-primary mb-[6px] mt-1 ">
            Top up using card
          </h1>

          <Link
            href={"/dashboard/add-money"}
            className={`absolute left-0 bottom-[0px] flex justify-center items-center bg-white rounded-full shadow-md w-[30px] h-[30px] cursor-pointer `}
          >
            <ChevronLeft className="text-[11px] text-primary" />
          </Link>
        </div>
        <p className="text-primary font-[400] text-[16px] max-w-[450px] mx-auto px-2">
          How much would you like to top up
        </p>
        <div className="bg-[#F9F5FF] rounded-[8px] mx-auto inline-block text-[#8E50E9] text-[11px] font-[500] px-5 py-3 mt-6">
          KodHex Balance: N200.00
        </div>

        <div className="max-w-[450px] mx-auto mt-10">
          <input
            type="text"
            className="w-full outline-none border-[1px] border-[#D1D5DB] rounded-[4px] p-5 text-[12px] font-[500] placeholder:text-gray400 mb-1"
            placeholder="Enter Amount"
          />

          <button
            className="bg-primary w-full text-white p-5 rounded-[8px] text-[14px] font-[500] mt-8"
            onClick={() => {
              setModal("debit card");
              settopupStep("debit card");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );

  const BankTransfer = () => (
    <>
      <div className="text-center mb-8">
        <div className="max-w-[450px] mx-auto relative">
          <h1 className="font-[700] text-[18px] text-primary mb-[6px] mt-1 ">
            Top up using Bank Transfer
          </h1>

          <Link
            href={"/dashboard/add-money"}
            className={`absolute left-0 bottom-[0px] flex justify-center items-center bg-white rounded-full shadow-md w-[30px] h-[30px] cursor-pointer `}
          >
            <ChevronLeft className="text-[11px] text-primary" />
          </Link>
        </div>
        <p className="text-primary font-[400] text-[16px] max-w-[450px] mx-auto px-2">
          How much would you like to top up
        </p>
        <div className="bg-[#F9F5FF] rounded-[8px] mx-auto inline-block text-[#8E50E9] text-[11px] font-[500] px-5 py-3 mt-6">
          KodHex Balance: N200.00
        </div>

        <div className="max-w-[450px] mx-auto mt-10">
          <input
            type="text"
            className="w-full outline-none border-[1px] border-[#D1D5DB] rounded-[4px] p-5 text-[12px] font-[500] placeholder:text-gray400 mb-1"
            placeholder="Enter Amount"
          />

          <button
            className="bg-primary w-full text-white p-5 rounded-[8px] text-[14px] font-[500] mt-8"
            onClick={() => {
              setModal("bank transfer");
              settopupStep("choose bank");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
  const Ussd = () => (
    <>
      <div className="text-center mb-8">
        <div className="max-w-[450px] mx-auto relative">
          <h1 className="font-[700] text-[18px] text-primary mb-[6px] mt-1 ">
            Top up using USSD
          </h1>

          <Link
            href={"/dashboard/add-money"}
            className={`absolute left-0 bottom-[0px] flex justify-center items-center bg-white rounded-full shadow-md w-[30px] h-[30px] cursor-pointer `}
          >
            <ChevronLeft className="text-[11px] text-primary" />
          </Link>
        </div>
        <p className="text-primary font-[400] text-[16px] max-w-[450px] mx-auto px-2">
          How much would you like to top up
        </p>
        <div className="bg-[#F9F5FF] rounded-[8px] mx-auto inline-block text-[#8E50E9] text-[11px] font-[500] px-5 py-3 mt-6">
          KodHex Balance: N200.00
        </div>

        <div className="max-w-[450px] mx-auto mt-10">
          <input
            type="text"
            className="w-full outline-none border-[1px] border-[#D1D5DB] rounded-[4px] p-5 text-[12px] font-[500] placeholder:text-gray400 mb-1"
            placeholder="Enter Amount"
          />

          <button
            className="bg-primary w-full text-white p-5 rounded-[8px] text-[14px] font-[500] mt-8"
            onClick={() => {
              setModal("ussd");
              settopupStep("choose bank");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );

  const handleTopUpback = () => {
    if (topupStep === "debit card") {
      settopupStep("choose method");
    } else if (topupStep === "enter pin") {
      settopupStep("debit card");
    } else if (topupStep === "bank transfer") {
      settopupStep("choose bank");
    } else if (topupStep === "ussd") {
      settopupStep("choose bank");
    } else {
      setModal("");
    }
  };

  const closeTopUpModal = () => {
    setModal("");
    settopupStep("");
  };

  const DebitCardModal = () => (
    <Modal>
      <div className="w-[439px] bg-white rounded-t-[30px] pt-[20px] px-[30px] relative">
        {topupStep === "debit card" && (
          <>
            <div className="flex justify-center w-full items-center">
              <div></div>
              <div>
                <h1 className="font-[500] text-[26px] text-center text-primary">
                  Debit Card
                </h1>
                <p className="text-[12px] font-[500] text-gray400 text-center">
                  Top up kodhex account using debit card
                </p>
              </div>
              <XCircleIcon
                className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
                onClick={closeTopUpModal}
              />
            </div>

            <div className="w-full pb-7 mt-6">
              <Button
                title="Add Debit Card"
                image={card}
                handleClick={() => {}}
              />

              <p className="text-[14px] font-[500] text-center text-gray400 mt-7 mb-4">
                Use Existing Cards
              </p>

              <div
                className="rounded-[4px] bg-[#FAFAFA] px-4 py-5 flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => settopupStep("enter pin")}
              >
                <div className="flex items-center">
                  <Image src={master} width={28} height={22} alt="mastercard" />
                  <h1 className="text-[12px] font-[500] ml-3">GTBank</h1>
                </div>
                <p className="text-[12px] font-[500]">**** . 4789</p>
              </div>
              <div
                className="rounded-[4px] bg-[#FAFAFA] px-4 py-5 flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => settopupStep("enter pin")}
              >
                <div className="flex items-center">
                  <Image src={master} width={28} height={22} alt="mastercard" />
                  <h1 className="text-[12px] font-[500] ml-3">GTBank</h1>
                </div>
                <p className="text-[12px] font-[500]">**** . 4789</p>
              </div>
              <div
                className="rounded-[4px] bg-[#FAFAFA] px-4 py-5 flex justify-between items-center cursor-pointer"
                onClick={() => settopupStep("enter pin")}
              >
                <div className="flex items-center">
                  <Image src={wema} width={30} height={30} alt="mastercard" />
                  <h1 className="text-[12px] font-[500] ml-3">Wema Bank</h1>
                </div>
                <p className="text-[12px] font-[500]">**** . 4789</p>
              </div>
            </div>
          </>
        )}

        {topupStep === "enter pin" && (
          <>
            <div className="flex justify-center w-full items-center">
              <div
                className="flex items-center text-gray400 cursor-pointer absolute left-[30px] top-[30px]"
                onClick={handleTopUpback}
              >
                <ChevronLeftCircle className="mr-[6px] w-[17px]" />
                <span className="text-[12px] font-[500]">Back</span>
              </div>
              <div>
                <h1 className="font-[500] text-[26px] text-center text-primary">
                  Enter PIN
                </h1>
                <p className="text-[12px] font-[500] text-gray400 text-center">
                  Enter six (6) digit transaction pin
                </p>
              </div>
              <XCircleIcon
                className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
                onClick={closeTopUpModal}
              />
            </div>

            <div className="w-full pb-7 mt-6">
              <input
                type="text"
                name=""
                id=""
                className="w-full outline-none rounded-[4px] bg-[#F9FAFB] px-5 py-5 text-[12px] font-[500]"
                placeholder="Enter Pin"
              />
              <button
                className="p-5 rounded-[10px] w-full text-white bg-primary text-[14px] font-[500] mt-10"
                onClick={() => {
                  setModal("topup success");
                  settopupStep("");
                }}
              >
                Continue
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );

  const BankTransferModal = () => (
    <Modal>
      <div className="w-[439px] bg-white rounded-t-[30px] pt-[20px] px-[30px] relative">
        {topupStep === "choose bank" && (
          <>
            <div className="flex justify-center w-full items-center">
              <div></div>
              <div>
                <h1 className="font-[500] text-[26px] text-center text-primary">
                  Choose Bank
                </h1>
                <p className="text-[12px] font-[500] text-gray400 text-center">
                  Choose preferred bank you want to top up to
                </p>
              </div>
              <XCircleIcon
                className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
                onClick={closeTopUpModal}
              />
            </div>
            <div className="mt-8 pb-6">
              <BankButton
                image={
                  <Image src={globus} width={96} height={22} alt="globus" />
                }
                handleClick={() => settopupStep("bank transfer")}
              />
              <BankButton
                image={<Image src={wemaL} width={96} height={22} alt="wema" />}
                handleClick={() => settopupStep("bank transfer")}
              />
              <BankButton
                image={
                  <Image src={nearly} width={96} height={22} alt="nearly" />
                }
                handleClick={() => {}}
                comingsoon
              />
            </div>
          </>
        )}
        {topupStep === "bank transfer" && (
          <>
            <div className="flex justify-center w-full items-center">
              <div
                className="flex items-center text-gray400 cursor-pointer absolute left-[30px] top-[30px]"
                onClick={handleTopUpback}
              >
                <ChevronLeftCircle className="mr-[6px] w-[17px]" />
                <span className="text-[12px] font-[500]">Back</span>
              </div>
              <div>
                <h1 className="font-[500] text-[26px] text-center text-primary">
                  Bank Transfer
                </h1>
                <p className="text-[12px] font-[500] text-gray400 text-center">
                  Transfer to the designated account
                </p>
              </div>
              <XCircleIcon
                className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
                onClick={closeTopUpModal}
              />
            </div>

            <div className="w-full mt-10 pb-7">
              <div className="rounded-[4px] bg-[#FAFAFA] flex justify-between items-center py-4 px-5 mb-4">
                <p className="text-[12px] font-[500] text-gray400">
                  Amount to Transfer
                </p>
                <p className="text-[24px] font-[700] text-primary">₦ 50,000 </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">
                  Account Number
                </p>
                <p className="text-[14px] font-[500] text-primary flex items-center">
                  20076542316{" "}
                  <span className="ml-2">
                    <Files className="w-[12px]" />
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">Bank</p>
                <p className="text-[14px] font-[500] text-primary">
                  Curved Microfinance Bank
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">Name</p>
                <p className="text-[14px] font-[500] text-primary">
                  Oshodi David - Ardila
                </p>
              </div>
              <div className="flex justify-between items-center py-4 mb-4">
                <p className="text-[12px] font-[500] text-gray400">Narration</p>
                <p className="text-[14px] font-[500] text-primary">Levijazz</p>
              </div>
              <div className="flex justify-center w-full items-center mb-9">
                <div className="text-center">
                  <h1 className="text-[30px] font-[500] mb-1">3:00</h1>
                  <p className="text-gray400 text-[12px] font-[500]">MINUTES</p>
                </div>
              </div>
              <button
                className="p-5 rounded-[10px] w-full text-white bg-primary text-[14px] font-[500]"
                onClick={() => {
                  setModal("topup success");
                  settopupStep("choose method");
                }}
              >
                I Have Made The Transfer
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
  const UssdModal = () => (
    <Modal>
      <div className="w-[439px] bg-white rounded-t-[30px] pt-[20px] px-[30px] relative">
        {topupStep === "choose bank" && (
          <>
            <div className="flex justify-center w-full items-center">
              <div></div>
              <div>
                <h1 className="font-[500] text-[26px] text-center text-primary">
                  Choose Bank
                </h1>
                <p className="text-[12px] font-[500] text-gray400 text-center">
                  Choose preferred bank you want to top up to
                </p>
              </div>
              <XCircleIcon
                className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
                onClick={closeTopUpModal}
              />
            </div>
            <div className="mt-8 pb-6">
              <BankButton
                image={
                  <Image src={globus} width={96} height={22} alt="globus" />
                }
                handleClick={() => settopupStep("ussd")}
              />
              <BankButton
                image={<Image src={wemaL} width={96} height={22} alt="wema" />}
                handleClick={() => settopupStep("ussd")}
              />
              <BankButton
                image={
                  <Image src={nearly} width={96} height={22} alt="nearly" />
                }
                handleClick={() => {}}
                comingsoon
              />
            </div>
          </>
        )}
        {topupStep === "ussd" && (
          <>
            <div className="flex justify-center w-full items-center">
              <div
                className="flex items-center text-gray400 cursor-pointer absolute left-[30px] top-[30px]"
                onClick={handleTopUpback}
              >
                <ChevronLeftCircle className="mr-[6px] w-[17px]" />
                <span className="text-[12px] font-[500]">Back</span>
              </div>
              <div>
                <h1 className="font-[500] text-[26px] text-center text-primary">
                  USSD
                </h1>
                <p className="text-[12px] font-[500] text-gray400 text-center">
                  Top up your KodHex using ussd
                </p>
              </div>
              <XCircleIcon
                className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
                onClick={closeTopUpModal}
              />
            </div>

            <div className="w-full mt-10 pb-7">
              <div className="rounded-[4px] bg-[#FAFAFA] flex justify-between items-center py-4 px-5 mb-4">
                <p className="text-[12px] font-[500] text-gray400">
                  Amount to Transfer
                </p>
                <p className="text-[24px] font-[700] text-primary">₦ 50,000 </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">
                  Account Number
                </p>
                <p className="text-[14px] font-[500] text-primary flex items-center">
                  20076542316{" "}
                  <span className="ml-2">
                    <Files className="w-[12px]" />
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">Bank</p>
                <p className="text-[14px] font-[500] text-primary">
                  Curved Microfinance Bank
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">Name</p>
                <p className="text-[14px] font-[500] text-primary">
                  Oshodi David - Ardila
                </p>
              </div>

              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">Narration</p>
                <p className="text-[14px] font-[500] text-primary">Levijazz</p>
              </div>

              <div className="flex justify-between items-center py-4">
                <p className="text-[12px] font-[500] text-gray400">
                  Select Bank
                </p>

                <div className="relative">
                  <button
                    className="flex items-center"
                    onClick={() => setShowDropDown(!showDropDown)}
                  >
                    <span className="text-[14px] text-[#23A323] mr-[6px]">
                      {" "}
                      {selectedBank}
                    </span>
                    <ChevronDown className="w-[14px] h-[14px] text-[#23A323]" />
                  </button>
                  {showDropDown && (
                    <div className="w-[101px] bg-white rounded-[6px] absolute right-0 top-6 dropdown p-[5px] py-[7px] shadow-lg">
                      {banks.map((b) => (
                        <p
                          key={b}
                          className={`text-[10px] cursor-pointer font-medium  rounded-[4px] py-[6px] pl-[10px] mb-[5px] last:mb-0 hover:bg-[#F3F4F6] ${
                            selectedBank === b ? "bg-[#F3F4F6]" : "bg-white"
                          }`}
                          onClick={() => setSelectedBank(b)}
                        >
                          {b}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-center w-full items-center mb-9">
                <div className="text-center">
                  <h1 className="text-[30px] font-[500] mb-1">3:00</h1>
                  <p className="text-gray400 text-[12px] font-[500]">MINUTES</p>
                </div>
              </div>
              <button
                className="p-5 rounded-[10px] w-full text-white bg-primary text-[14px] font-[500]"
                onClick={() => {
                  setModal("topup success");
                  settopupStep("choose method");
                }}
              >
                I Have Made The Transfer
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );

  const TopupSuccessModal = () => (
    <Modal>
      <AnimatePresence>
        <motion.div
          className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-10"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <div className="flex justify-end w-full">
            <XCircleIcon
              className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
              onClick={() => {
                setModal("");
              }}
            />
          </div>
          <div className="mx-auto flex justify-center">
            <Image
              src={success}
              width={179}
              height={179}
              alt="success"
              className="flex justify-center"
            />
          </div>

          <h1 className="text-[26px] font-[500] text-center mt-6 mb-2">
            Top Up Successful
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400 max-w-[329px] mx-auto">
            Your just attempted top up is been processed, You would receive a
            confirmation message as soon as its done successfully
          </p>

          <div
            className="text-primary mt-5 cursor-pointer mb-5 text-[10px] mx-auto justify-center text-center bg-[#F9FAFB] rounded-[8px] w-[125px] h-[33px] flex items-center"
            // onClick={() => setModal("receipt")}
          >
            <Image
              src={note}
              alt="note"
              width={17}
              height={17}
              className="mr-[6px]"
            />
            View Receipt
          </div>

          <button
            className="w-full p-5 text-[14px] font-[500] bg-primary text-white rounded-[10px]"
            // onClick={() => setModal("overview")}
          >
            Return To Overview
          </button>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  const closeModal = () => {
    setModal("");
  };

  const ReceiptModal = () => (
    <Modal>
      <AnimatePresence>
        <motion.div
          className="rounded-t-[30px] bg-white pt-[20px] w-[439px] px-[30px] pb-12"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <div className="flex justify-between w-full items-center">
            <div></div>
            <div>
              <h1 className="font-[500] text-[26px] text-center text-primary">
                Transaction Details
              </h1>
              <p className="text-[12px] font-[500] text-gray400 text-center">
                Here is the summary of all your transactions
              </p>
            </div>
            <XCircleIcon
              className="w-[17px] text-gray400 cursor-pointer"
              onClick={closeModal}
            />
          </div>

          <div className="mt-5 mb-7">
            <Image
              src={gt}
              width={63}
              height={58}
              alt="user"
              className="mb-3 mx-auto"
            />
            <h2 className="text-center text-[25px] font-[500] text-primary mt-1 mb-1">
              <span className="text-[9px]">N</span>50,000
            </h2>

            <Image
              src={paymentsuccess}
              width={71}
              height={27}
              alt="success"
              className="mx-auto"
            />
            <p className="text-[9px] font-[500] mt-[10px] text-center">
              Transfer to Globus Account
            </p>

            <div className="flex w-[245px] mx-auto my-4">
              <div className="pr-10 border-r-[1px] border-borderprimary text-left flex-1">
                <h1 className="text-[10px] font-[500] text-gray400 mb-2 uppercase">
                  Amount
                </h1>
                <p className="text-[12px] font-[500] text-primary">N100.00</p>
              </div>
              <div className="pl-10  flex-1 text-center">
                <h1 className="text-[10px] font-[500] text-gray400 mb-2 uppercase">
                  Fee
                </h1>
                <p className="text-[12px] font-[500] text-primary">N0.00</p>
              </div>
            </div>

            <div className="px-5 pt-5 pb-7 rounded-[11px] bg-primary">
              <p className="border-b-[1px] text-white border-dashed border-gray400 pb-4 pt-1 text-center text-[12px] font-[500] mb-4">
                Transaction Summary
              </p>
              <div className="flex justify-between items-center py-2">
                <p className="text-[12px] font-[400] text-gray400">
                  Transaction Type
                </p>
                <p className="text-[12px] font-[500] text-white">
                  Bank Transfer
                </p>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-[12px] font-[400] text-gray400">
                  Sender Details
                </p>
                <div className="text-[12px] font-[500] text-white justify-center flex items-center">
                  <span className="w-[17px] h-[17px] rounded-full flex justify-center items-center bg-white mr-2">
                    <Code2 className="w-[10px] text-primary" />
                  </span>
                  <span>Levi</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-[12px] font-[400] text-gray400">Remark</p>
                <p className="text-[12px] font-[500] text-white">
                  Food and Drinks
                </p>
              </div>

              <div className="flex justify-between items-center py-2">
                <p className="text-[12px] font-[400] text-gray400">
                  Credited to
                </p>
                <div className=" text-[12px] font-[500] text-white text-right items-end w-[145px]">
                  <h1>Leapsail limited 0123456787 | Access Bank</h1>
                </div>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-[12px] font-[400] text-gray400">
                  Transaction Number
                </p>
                <p className="text-[12px] font-[500] text-white">
                  1278129883274728342
                </p>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-[12px] font-[400] text-gray400">
                  Transaction Date
                </p>
                <p className="text-[12px] font-[500] text-white">
                  10:23am | 12th December, 2023
                </p>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-[12px] font-[400] text-gray400">
                  Session ID
                </p>
                <p className="text-[12px] font-[500] text-white">
                  12345678987654343234
                </p>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center p-4 rounded-[10px] text-white bg-primary text-[14px] font-[500] w-full mb-4">
            <Image src={download} width={24} height={24} alt="download" />
            <span className="ml-[10px]">Download Receipt</span>
          </button>

          <button className="flex items-center justify-center rounded-[10px] text-primary bg-white text-[14px] font-[500] w-full">
            <Image src={chat} width={32} height={32} alt="chat" />
            <span className="ml-[10px]">Chat with Us </span>
          </button>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  const InprogressModal = () => (
    <Modal>
      <AnimatePresence>
        <motion.div
          className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-10"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <div className="flex justify-end w-full">
            <XCircleIcon
              className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
              onClick={() => {
                setModal("");
              }}
            />
          </div>
          <div className="mx-auto flex justify-center">
            <Image
              src={clock}
              width={138}
              height={138}
              alt="success"
              className="flex justify-center"
            />
          </div>

          <h1 className="text-[20px] font-[700] text-center mt-4 mb-2">
            Payment In Progress
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400  mx-auto">
            We are currently processing your payment and it may <br /> take a
            few minutes.
          </p>

          <button
            className="w-full p-5 text-[14px] font-[500] bg-primary text-white rounded-[10px] mt-11"
            onClick={() => setModal("")}
          >
            Return To Overview
          </button>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  return (
    <section>
      {modal === "account details" && <AccountDetails />}
      {modal === "debit card" && <DebitCardModal />}
      {modal === "bank transfer" && <BankTransferModal />}
      {modal === "ussd" && <UssdModal />}
      {modal === "topup success" && <TopupSuccessModal />}
      {modal === "receipt" && <ReceiptModal />}
      {modal === "inprogress" && <InprogressModal />}
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
            {id === "add money" && <Add />}
            {id === "debit card" && <Debit />}
            {id === "bank transfer" && <BankTransfer />}
            {id === "ussd" && <Ussd />}
            {/* {step === "enter amount" && (
            <Enteramount handleBack={() => setStep("other account")} />
          )} */}
          </div>
        </div>
      </main>
    </section>
  );
}

export default AddMoney;

type ButtonProp = {
  image: string;
  title: string;
  handleClick: () => void;
  comingsoon?: boolean;
};
function Button({ image, title, handleClick, comingsoon }: ButtonProp) {
  return (
    <button
      className="flex justify-between items-center p-5 border-[1px] rounded-[4px] border-primary mb-5 w-full"
      onClick={handleClick}
    >
      <div className="flex items-center flex-1">
        <Image src={image} width={30} height={30} alt="debit card" />
        <h1 className="ml-4 text-[12px] font-[500] text-primary">{title}</h1>
      </div>
      {comingsoon ? (
        <span className="text-white bg-primary text-[9px] font-[500] rounded-full px-4 py-2">
          Coimng Soon
        </span>
      ) : (
        <ChevronRight className="text-primary" />
      )}
    </button>
  );
}

type BankButtonProp = {
  image: React.ReactNode;
  title?: string;
  handleClick: () => void;
  comingsoon?: boolean;
};

function BankButton({ image, title, handleClick, comingsoon }: BankButtonProp) {
  return (
    <button
      className="flex justify-between items-center p-5 border-[1px] rounded-[4px] border-primary mb-5 w-full"
      onClick={handleClick}
    >
      <div className="flex items-center flex-1">
        {image}
        <h1 className="ml-4 text-[12px] font-[500] text-primary">{title}</h1>
      </div>
      {comingsoon ? (
        <span className="text-white bg-primary text-[9px] font-[500] rounded-full px-4 py-2">
          Coimng Soon
        </span>
      ) : (
        <ChevronRight className="text-primary" />
      )}
    </button>
  );
}

"use client";
import React, { useState, useRef, useEffect, CSSProperties } from "react";
import user from "../assets/user amount.png";
import {
  ChevronLeft,
  ChevronLeftCircle,
  ChevronRight,
  CheckCircle2,
  Code2,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { XCircleIcon, Files } from "lucide-react";
import refresh from "../assets/refresh.png";
import kodhex from "../assets/kodhex.png";
import { AnimatePresence, motion } from "framer-motion";
import success from "../assets/success.png";
import note from "../assets/note.svg";
import heart from "../assets/heart.svg";
import failed from "../assets/failed-ks1ODQxJMt.png";
import paymentsuccess from "../assets/payment success.png";
import download from "../assets/download.svg";
import chat from "../assets/chat.svg";
import master from "../assets/Mastercard logo.png";
import wema from "../assets/wema bank.png";
import bank from "../assets/bank.svg";
import card from "../assets/card.svg";
import ussd from "../assets/ussd.svg";
import clock from "../assets/clock.png";
import CurrencyInput from "react-currency-input-field";
import { kodhexUser } from "@/types";
import axios from "axios";
import { base_URL } from "@/baseurl";
import Modal from "./modal";

type props = {
  handleBack: () => void;
  kodhexUser?: kodhexUser;
};

function Enteramount({ handleBack, kodhexUser }: props) {
  const [isLoading, setIsLoading] = useState(false);

  const [amount, setAmount] = useState<string | undefined>("");
  const [recipient, setRecipient] = useState({ amount: "", creditedto: "" });
  const validateValue = (value: string | undefined): void => {
    const amount = value === undefined ? "" : value;
    setAmount(amount || " ");
  };
  const [remark, setRemark] = useState("");
  const pinRef = useRef<HTMLInputElement>(null);
  const [modal, setModal] = useState<
    | "overview"
    | "payment sent"
    | "payment failed"
    | "receipt"
    | "topup"
    | "topup success"
    | "topup failed"
    | "in progress"
    | ""
  >("");
  const [selectedBank, setSelectedBank] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [overviewStep, setOverviewStep] = useState<
    "overview" | "enter pin" | ""
  >("overview");
  const [topupStep, settopupStep] = useState<
    "choose method" | "debit card" | "enter pin" | "bank transfer" | "ussd" | ""
  >("choose method");

  const [topUpMethod, setTopUpMethod] = useState<
    "debit card" | "bank transfer" | "ussd" | "bank transfer" | "ussd" | ""
  >("");

  const closeModal = () => {
    setModal("");
    setOverviewStep("overview");
  };

  const goBack = () => {
    if (overviewStep === "overview") {
      setModal("");
    }
    if (overviewStep === "enter pin") {
      setOverviewStep("overview");
    }
  };

  const [pin, setPin] = useState("");

  useEffect(() => {
    pinRef?.current?.focus();
  }, [pin]);

  const banks = [
    "GTbank",
    "First Bank",
    "Globus Bank",
    "UBA Bank",
    "Union BANK",
  ];
  const handleTopUpback = () => {
    if (topupStep === "debit card") {
      settopupStep("choose method");
    } else if (topupStep === "enter pin") {
      settopupStep("debit card");
    } else if (topupStep === "bank transfer") {
      settopupStep("choose method");
    } else if (topupStep === "ussd") {
      settopupStep("choose method");
    } else {
      setModal("overview");
    }
  };

  const closeTopUpModal = () => {
    setModal("");
    settopupStep("choose method");
  };

  const Overview = () => (
    <Modal>
      <div className="w-[439px] bg-white rounded-t-[30px] pt-[20px] px-[30px]">
        {overviewStep === "overview" && (
          <>
            <div className="flex justify-between w-full items-center">
              <div
                className="flex items-center text-gray400 cursor-pointer"
                onClick={goBack}
              >
                <ChevronLeftCircle className="mr-[6px] w-[17px]" />
                <span className="text-[12px] font-[500]">Back</span>
              </div>
              <div className="text-center">
                <h1 className="font-[500] text-[26px] text-center text-primary">
                  Overview
                </h1>
                <p className="text-[12px] font-[500] text-gray400 text-center">
                  Summary of your transaction
                </p>
              </div>
              <XCircleIcon
                className="w-[17px] text-gray400 cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="mt-5">
              <div className="mx-auto w-[102px] h-[102px] relative rounded-full mb-4 bg-red-900">
                <Image
                  src={kodhexUser?.profile_photo || ""}
                  className="mx-auto mb-6 rounded-full object-cover"
                  alt={`${kodhexUser?.first_name} profile image`}
                  fill
                />
              </div>

              <div className="rounded-[4px] bg-[#FAFAFA] flex justify-between items-center py-4 px-5 mb-4">
                <p className="text-[12px] font-[500] text-gray400">
                  Amount to Pay
                </p>
                <p className="text-[24px] font-[700] text-primary">
                  ₦ {amount && Number(amount).toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">KodHex</p>
                <p className="text-[12px] font-[500]">{kodhexUser?.kodhex}</p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">Name</p>
                <p className="text-[12px] font-[500]">
                  {kodhexUser?.first_name} {kodhexUser?.last_name}
                </p>
              </div>
              <div className="flex justify-between items-center py-4 mb-4">
                <p className="text-[12px] font-[500] text-gray400">Note</p>
                <p className="text-[12px] font-[500]">{remark}</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <p className="text-[14px] font-[500] text-gray400">Pay With</p>
                <p className="text-[12px] font-[500] text-primary flex items-center">
                  <Image
                    src={refresh}
                    width={13}
                    height={13}
                    alt="refresh"
                    className="mr-2"
                  />
                  Click here to Refresh
                </p>
              </div>

              <div className="hidden">
                <div className="flex items-center p-4 border-[1px] w-full rounded-[4px] border-primary mb-1">
                  <Image src={kodhex} width={33} height={33} alt="kodhex" />
                  <div className="flex items-center flex-1 ml-3 w-full justify-between">
                    <div className="flex flex-col justify-between  items-start">
                      <h1 className="text-[12px] font-[500] text-primary text-left">
                        KodHex
                      </h1>
                      <p className="text-[12px] font-[500] text-[#23A323]">
                        Balance: N50,000
                      </p>
                    </div>
                    <ChevronRight className="text-primary" />
                  </div>
                </div>
                <div className="text-right text-[10px] font-[500] text-[#23A323] flex items-center justify-end mb-8">
                  <CheckCircle2 className="mr-2 w-[11px]" />
                  Sufficient Balance
                </div>
              </div>
              <div className="">
                <div className="flex items-center p-4 border-[1px] w-full rounded-[4px] border-primary mb-1">
                  <Image src={kodhex} width={33} height={33} alt="kodhex" />
                  <div className="flex items-center flex-1 ml-3 w-full justify-between">
                    <div className="flex flex-col justify-between  items-start">
                      <h1 className="text-[12px] font-[500] text-primary text-left">
                        KodHex
                      </h1>
                      <p className="text-[12px] font-[500] text-[#EF4444]">
                        Balance: N50,000
                      </p>
                    </div>

                    <span
                      className="px-4 py-2 bg-[#EF4444] rounded-full text-[10px] font-[500] text-white cursor-pointer"
                      onClick={() => setModal("topup")}
                    >
                      Top up
                    </span>
                  </div>
                </div>
                <div className="text-right text-[10px] font-[500] text-[#EF4444] flex items-center justify-end mb-8">
                  <CheckCircle2 className="mr-2 w-[11px]" />
                  Inufficient Balance
                </div>
              </div>

              <button
                className="bg-primary text-white p-4 rounded-[8px] w-full text-[14px] font-[500] mb-8"
                onClick={() => setOverviewStep("enter pin")}
              >
                Pay
              </button>
            </div>
          </>
        )}
        {overviewStep === "enter pin" && (
          <>
            <div className="flex justify-between w-full items-center">
              <div
                className="flex items-center text-gray400 cursor-pointer"
                onClick={goBack}
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
                className="w-[17px] text-gray400 cursor-pointer"
                onClick={closeModal}
              />
            </div>

            <form className="mb-5 mt-8">
              <input
                type="password"
                className="w-full p-5 outline-none border-[1px] border-[#D1D5DB] rounded-[4px] text-[12px] placeholder:text-[#9CA3AF] font-[500]"
                placeholder="Enter Pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                ref={pinRef}
              />

              <button
                className="bg-primary text-white p-4 rounded-[8px] w-full text-[14px] font-[500] mt-12 mb-8 disabled:bg-primary/60"
                disabled={!pin}
                onClick={(e) => {
                  e.preventDefault();

                  verifyPin();
                }}
              >
                Confirm
              </button>
            </form>
          </>
        )}
      </div>
    </Modal>
  );

  const TopUpModal = () => (
    <Modal>
      <div className="w-[439px] bg-white rounded-t-[30px] pt-[20px] px-[30px] relative">
        {topupStep === "choose method" && (
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
                  Top Up KodHex
                </h1>
                <p className="text-[12px] font-[500] text-gray400 text-center">
                  Add money to your KodHex Account
                </p>
                <div className="bg-[#F9F5FF] rounded-[8px] flex justify-center mx-auto w-[180px] text-center text-[#8E50E9] text-[11px] font-[500] px-3 py-3 mt-5">
                  KodHex Balance: N200.00
                </div>
              </div>
              <XCircleIcon
                className="w-[17px] text-gray400 cursor-pointer absolute right-[30px] top-[30px]"
                onClick={closeTopUpModal}
              />
            </div>

            <div>
              <CurrencyInput
                id="input-example"
                prefix="₦"
                name="input-name"
                decimalsLimit={2}
                // value={""}
                // onValueChange={(value) => {
                //   setAmount(value);
                //   console.log(value);
                // }}
                className="mt-5 outline-none bg-[#fff] text-center text-primary  text-[30px]  
                border-b-[1px] border-b-primary border-[#F0F0F0] font-[700] w-[260px] mx-auto
                   block pb-3"
              />
            </div>
            <p className="text-[14px] font-[500] text-center text-gray400 mb-5 mt-8">
              Choose Top Up Method
            </p>
            <div className="w-full pb-8">
              <Button
                title="Debit Card"
                image={card}
                onClick={() => settopupStep("debit card")}
              />
              <Button
                title="Bank Transfer"
                image={bank}
                onClick={() => settopupStep("bank transfer")}
              />
              <Button
                title="USSD"
                image={ussd}
                onClick={() => settopupStep("ussd")}
              />
            </div>
          </>
        )}
        {topupStep === "debit card" && (
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
              <Button title="Add Debit Card" image={card} onClick={() => {}} />

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
                className="w-full outline-none p-4 border-[1px] rounded-[4px] border-borderprimary text-[12px] text-black font-[500]"
              />
              <button
                className="p-5 rounded-[10px] w-full text-white bg-primary text-[14px] font-[500] mt-10"
                onClick={() => {
                  setModal("topup success");
                  settopupStep("choose method");
                }}
              >
                Continue
              </button>
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

  const PaymentSentModal = () => (
    <Modal>
      <AnimatePresence>
        <motion.div
          className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-12"
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

          <h1 className="text-[20px] font-[700] text-center mt-6 mb-2">
            Payment Sent Successfully
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400 max-w-[329px] mx-auto">
            Your payment of{" "}
            <span className="text-primary">N{recipient.amount}</span> has been
            sent successfully to{" "}
            <span className="text-primary">{recipient.creditedto}</span>
          </p>

          <div className="w-[275px] mx-auto flex justify-between gap-4 mt-6">
            <div className="text-primary text-[10px] justify-center text-center bg-[#F9FAFB] rounded-full w-[142px] h-[33px] flex items-center">
              <Image
                src={heart}
                alt="heart"
                width={15}
                height={15}
                className="mr-[6px]"
              />
              Add to Beneficiary
            </div>
            <div
              className="text-primary cursor-pointer text-[10px] justify-center text-center bg-[#F9FAFB] rounded-full w-[142px] h-[33px] flex items-center"
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
          </div>

          <div className="flex"></div>
        </motion.div>
      </AnimatePresence>
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
            onClick={() => setModal("overview")}
          >
            Return To Overview
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
            onClick={() => setModal("overview")}
          >
            Return To Overview
          </button>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  const TopupFailedModal = () => (
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
              src={failed}
              width={194}
              height={194}
              alt="failed"
              className="flex justify-center"
            />
          </div>

          <h1 className="text-[20px] font-[700] text-center mb-2">
            Top Up Declined
          </h1>
          <p className="text-center text-[12px] mb-6 font-[500] text-gray400 mx-auto max-w-[312px]">
            Your deposit was not processed successfully, <br /> Please retry
            later.
          </p>

          <button
            className="w-full p-5 text-[14px] font-[500] bg-primary text-white rounded-[10px]"
            onClick={() => setModal("overview")}
          >
            Return To Overview
          </button>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  const PaymentFailedModal = () => (
    <Modal>
      <AnimatePresence>
        <motion.div
          className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-12"
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
              src={failed}
              width={194}
              height={194}
              alt="failed"
              className="flex justify-center"
            />
          </div>

          <h1 className="text-[20px] font-[700] text-center mt-4 mb-2">
            Something Went Wrong
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400 mx-auto max-w-[312px]">
            Transaction failed. Please try again later
          </p>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

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
              src={user}
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
              Transfer to Olamilekan
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
                  Ardilla Transfer
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
                <div className="flex flex-col text-[12px] font-[500] text-white text-right items-end">
                  <h1>Olamilekan Kadiri</h1>
                  <div className="text-[12px] font-[500] text-white justify-center flex items-center">
                    <span className="w-[17px] h-[17px] rounded-full flex justify-center items-center bg-white mr-2">
                      <Code2 className="w-[10px] text-primary" />
                    </span>
                    <span>Lekan</span>
                  </div>
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

  const sendMoney = async () => {
    try {
      const { data } = await axios.post(
        `${base_URL}/payment/sendmoney/ardilla/vend`,
        {
          kodhex: kodhexUser?.kodhex,
          trans_pin: pin,
          amount: amount,
          payment_method: "kodhex",
          remark: remark,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZjRhN2FmNTktOWM1MC00YTBiLTk1NjktMGUyZmNkMzYxOTU4IiwicGxhdGZvcm0iOiJhcmRpbGxhIiwic291cmNlIjoibW9iaWxlIiwiaWF0IjoxNzAxMjU0MDc5LCJleHAiOjE3MDE4NTg4Nzl9.CQgMZQ_IV16OrLkbKzofWioLiI7BtJQZ2CvehUNmMrk`,
          },
        }
      );
      console.log({ data });
      if (data.code === 200) {
        setRecipient({
          amount: data.data.amount,
          creditedto: data.data.transaction_details.credited_to,
        });
        setAmount("");
        setModal("payment sent");
        setOverviewStep("overview");
        setPin("");
        setRemark("");
      }
    } catch (error) {}
  };

  const verifyPin = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${base_URL}/user/verify_trans_pin`,
        {
          trans_pin: pin,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZjRhN2FmNTktOWM1MC00YTBiLTk1NjktMGUyZmNkMzYxOTU4IiwicGxhdGZvcm0iOiJhcmRpbGxhIiwic291cmNlIjoibW9iaWxlIiwiaWF0IjoxNzAxMjU0MDc5LCJleHAiOjE3MDE4NTg4Nzl9.CQgMZQ_IV16OrLkbKzofWioLiI7BtJQZ2CvehUNmMrk`,
          },
        }
      );
      if (data.code === 200) {
        await sendMoney();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {modal === "overview" && <Overview />}
      {modal === "payment sent" && <PaymentSentModal />}
      {modal === "payment failed" && <PaymentFailedModal />}
      {modal === "receipt" && <ReceiptModal />}
      {modal === "topup" && <TopUpModal />}
      {modal === "topup success" && <TopupSuccessModal />}
      {modal === "topup failed" && <TopupFailedModal />}
      {modal === "in progress" && <InprogressModal />}
      <div className="text-center mb-8">
        <div className="rounded-full mx-auto w-[103px] h-[103px] relative object-cover">
          <Image
            src={kodhexUser?.profile_photo || ""}
            alt="user"
            className="mx-auto rounded-full object-cover object-center"
            fill
          />
        </div>

        <div className="max-w-[450px] mx-auto relative">
          <h1 className="font-[700] text-[18px] text-primary mb-[6px] mt-2 ">
            {kodhexUser?.first_name} {kodhexUser?.last_name}
          </h1>
          <p className="text-[16px] font-[400] mt-1 text-primary">
            {kodhexUser?.kodhex}
          </p>

          <div
            className={`absolute left-0 bottom-[110px] flex justify-center items-center bg-white rounded-full shadow-md w-[30px] h-[30px] cursor-pointer `}
            onClick={handleBack}
          >
            <ChevronLeft className="text-[11px] text-primary" />
          </div>
        </div>
        <div className="bg-[#F9F5FF] rounded-[8px] mx-auto inline-block text-[#8E50E9] text-[11px] font-[500] px-5 py-3 mt-4">
          KodHex Balance: N200.00
        </div>

        <div className="max-w-[450px] mx-auto mt-[60px]">
          <div className="relative mb-5">
            <CurrencyInput
              prefix="₦"
              type="text"
              allowDecimals={false}
              onValueChange={validateValue}
              className="w-full p-5 outline-none border-[1px] border-[#D1D5DB] rounded-[4px] text-[12px] placeholder:text-[#9CA3AF] font-[500]"
              placeholder="Enter Amount"
            />
            <span className="text-[11px] absolute -top-4  right-4 text-[#22C55E] font-[500] rounded-[8px] bg-[#F2FCF2] px-5 py-2">
              No transaction fees
            </span>
          </div>
          <input
            type="text"
            className="w-full p-5 outline-none border-[1px] border-[#D1D5DB] rounded-[4px] text-[12px] placeholder:text-[#9CA3AF] font-[500]"
            placeholder="Enter Narration (Optional)"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />

          <div className="rounded-[9px] px-6 h-[88px] bg-[#F9F5FF] flex justify-between gap-5 flex-wrap items-center mt-10">
            <div>
              <h1 className="font-[500] text-[16px] text-primary mb-1 text-left">
                Upgrade to Tier 2
              </h1>
              <p className="text-[10px] font-[500] text-primary">
                Upgrade Tier to qualify for higher transaction amount
              </p>
            </div>
            <button className="border-[1px] w-[116px] h-[50px] border-[#8E50E9] rounded-[4px]  text-primary text-[12px] font-[600] flex items-center justify-center">
              <span>Upgrade</span>
              <ChevronRight className=" text-primary" />
            </button>
          </div>

          <button
            className="p-4 text-white bg-primary text-[14px] font-[500] rounded-[10px] mt-8 w-full disabled:bg-primary/60"
            onClick={() => setModal("overview")}
            disabled={!amount || Number(amount) < 500}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Enteramount;

type ButtonProp = {
  image: string;
  title: string;
  onClick: () => void;
};
function Button({ image, title, onClick }: ButtonProp) {
  return (
    <div
      className="flex justify-between items-center p-5 border-[1px] w-full rounded-[4px] border-primary mb-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center flex-1">
        <Image src={image} width={30} height={30} alt="debit card" />
        <h1 className="ml-4 text-[12px] font-[500] text-primary">{title}</h1>
      </div>
      <ChevronRight className="text-primary" />
    </div>
  );
}

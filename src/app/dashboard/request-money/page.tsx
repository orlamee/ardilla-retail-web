"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronLeftCircle,
  ChevronRight,
  Code2,
  Files,
  XCircleIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/navbar";
import reqBig from "../../../assets/req Big.svg";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import matthew from "../../../assets/mattheww.png";
import A from "../../../assets/main ardilla user.png";
import olamilekan from "../../../assets/olamilekan.png";
import Modal from "@/components/modal";
import CurrencyInput from "react-currency-input-field";
import refresh from "../../../assets/refresh.png";
import kodhex from "../../../assets/kodex.svg";
import success from "../../../assets/success.png";
import note from "../../../assets/note.svg";
import heart from "../../../assets/heart.svg";
import failed from "../../../assets/failed-ks1ODQxJMt.png";
import paymentsuccess from "../../../assets/payment success.png";
import download from "../../../assets/download.svg";
import chat from "../../../assets/chat.svg";
import bank from "../../../assets/bank.svg";
import card from "../../../assets/card.svg";
import ussd from "../../../assets/ussd.svg";
import master from "../../../assets/Mastercard logo.png";
import wema from "../../../assets/wema bank.png";
import clock from "../../../assets/clock.png";
import { AnimatePresence, motion } from "framer-motion";
import PageTitleWithArrow from "@/components/pagetitle";
import KodhexUser from "@/components/kodhexuser";

function RequestMoney() {
  const inputRef = useRef<HTMLInputElement>(null);
  const ciRef = useRef<HTMLInputElement>(null);
  const [modal, setModal] = useState<
    | "new request overview"
    | "accept request overview"
    | "topup"
    | "payment sent"
    | "payment failed"
    | "receipt"
    | "topup success"
    | "topup failed"
    | "in progress"
    | "decline request"
    | "request declined"
    | ""
  >("");
  const [selectedBank, setSelectedBank] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [amount, setAmount] = useState("");
  const urlAmount = useSearchParams().get("amount") || "0";
  const [user, setUser] = useState("");
  const router = useRouter();
  const active = useSearchParams().get("active") || "all";
  const [overviewStep, setOverviewStep] = useState<
    "overview" | "enter pin" | ""
  >("overview");
  const [topupStep, settopupStep] = useState<
    "choose method" | "debit card" | "enter pin" | "bank transfer" | "ussd" | ""
  >("choose method");

  const banks = [
    "GTbank",
    "First Bank",
    "Globus Bank",
    "UBA Bank",
    "Union BANK",
  ];

  useEffect(() => {
    inputRef?.current?.focus();
  }, [user]);

  useEffect(() => {
    ciRef?.current?.focus();
  }, [urlAmount]);

  // type paymentlinkProp = {
  //   link: string;
  //   image: string;
  //   title: string;
  // };

  // const LinkButton = ({ link, image, title }: paymentlinkProp) => (
  //   <Link href={link}>
  //     <div className="flex justify-between items-center p-5 border-[2px] w-full rounded-[4px] border-primary mb-5">
  //       <div className="flex items-center flex-1">
  //         <Image src={image} width={30} height={30} alt="debit card" />
  //         <h1 className="ml-4 text-[12px] font-[500] text-primary">{title}</h1>
  //       </div>
  //       <ChevronRight className="text-primary" />
  //     </div>
  //   </Link>
  // );

  const All = () => (
    <>
      <PageTitleWithArrow
        title="Request Money"
        subtitle="Request money from family & friends using your unique link"
        image={reqBig}
        handleBack={() => router.push("/dashboard/request-and-receive-money")}
      />

      <div className="max-w-[450px] mx-auto">
        <SendandReceivedTabs />
        <Link
          href={"/dashboard/request-money?active=new+request"}
          className="bg-primary text-white p-5 rounded-[8px] w-full inline-block text-center text-[14px] font-[500]"
        >
          Make a New Request
        </Link>
      </div>
    </>
  );

  const NewRequest = () => (
    <>
      <PageTitleWithArrow
        title="Request Money"
        subtitle="Request money from family & friends using your unique link"
        image={reqBig}
        handleBack={() => router.push("/dashboard/request-money")}
      />
      <div className="mx-auto max-w-[450px] mt-10">
        <div className="p-5 border-[1px] rounded-[4px] border-[#D1D5DB] w-full outline-none  focus-within:border-[#6C06C4] flex items-center">
          <span className="border-r-[1px] pr-4">
            <Code2 className="text-primary" />
          </span>
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-4 h-full placeholder:text-gray400 outline-none text-[12px] font-[500]"
            placeholder="Enter KodHex"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            ref={inputRef}
          />
        </div>

        <div>
          {user && (
            <Image
              src={A}
              width={181}
              height={48}
              alt="ardilla user"
              className="mx-auto my-5 cursor-pointer"
              onClick={() =>
                router.push("/dashboard/request-money?active=send")
              }
            />
          )}
        </div>

        <UsersTablist />
      </div>
    </>
  );

  const Send = () => (
    <>
      <div className="text-center mb-8">
        <Image
          src={olamilekan}
          width={103}
          height={95}
          alt="user"
          className="mx-auto"
        />
        <div className="max-w-[450px] mx-auto relative">
          <h1 className="font-[700] text-[18px] text-primary mb-[6px] mt-2 ">
            Olamilekan Kadiri
          </h1>
          <p className="text-[16px] font-[400] mt-1 text-primary">Moyohsore</p>

          <div
            className={`absolute left-0 bottom-[100px] flex justify-center items-center bg-white rounded-full shadow-md w-[30px] h-[30px] cursor-pointer `}
            onClick={() =>
              router.push("/dashboard/request-money?active=new+request")
            }
          >
            <ChevronLeft className="text-[11px] text-primary" />
          </div>
        </div>
        <div className="bg-[#F9F5FF] rounded-[8px] mx-auto inline-block text-[#8E50E9] text-[11px] font-[500] px-5 py-3 mt-4">
          KodHex Balance: N200.00
        </div>

        <div className="max-w-[450px] mx-auto mt-[60px]">
          <div className="relative mb-5">
            <input
              type="text"
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
          />

          <button
            className="p-4 text-white bg-primary text-[14px] font-[500] rounded-[10px] mt-8 w-full"
            onClick={() => setModal("new request overview")}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );

  const AcceptRequest = () => (
    <>
      <div className="text-center mb-8">
        <Image
          src={olamilekan}
          width={103}
          height={95}
          alt="user"
          className="mx-auto"
        />
        <div className="max-w-[450px] mx-auto relative">
          <h1 className="font-[700] text-[18px] text-primary mb-[6px] mt-2 ">
            Olamilekan Kadiri
          </h1>
          <p className="text-[16px] font-[400] mt-1 text-primary">Moyohsore</p>

          <div
            className={`absolute left-0 bottom-[100px] flex justify-center items-center bg-white rounded-full shadow-md w-[30px] h-[30px] cursor-pointer `}
            onClick={() => router.push("/dashboard/request-money")}
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
              id="input-example"
              prefix="₦"
              name="input-name"
              decimalsLimit={2}
              value={urlAmount}
              onValueChange={(value) => {
                router.push(
                  `/dashboard/request-money?active=accept+request&amount=${value}`
                );
              }}
              placeholder="Enter Amount"
              className="w-full p-5 outline-none border-[1px] border-[#D1D5DB] rounded-[4px] text-[12px] placeholder:text-[#9CA3AF] font-[500]"
              ref={ciRef}
            />

            <span className="text-[11px] absolute -top-4  right-4 text-[#22C55E] font-[500] rounded-[8px] bg-[#F2FCF2] px-5 py-2">
              No transaction fees
            </span>
          </div>
          <input
            type="text"
            className="w-full p-5 outline-none border-[1px] border-[#D1D5DB] rounded-[4px] text-[12px] placeholder:text-[#9CA3AF] font-[500]"
            placeholder="Enter Narration (Optional)"
          />

          <button
            className="p-4 text-white bg-primary text-[14px] font-[500] rounded-[10px] mt-8 w-full"
            onClick={() => setModal("accept request overview")}
          >
            Send
          </button>
        </div>
      </div>
    </>
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
              src={olamilekan}
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
              <div>
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
              <Image
                src={olamilekan}
                width={102}
                height={95}
                className="mx-auto mb-6"
                alt="suer overview"
              />
              <div className="rounded-[4px] bg-[#FAFAFA] flex justify-between items-center py-4 px-5 mb-4">
                <p className="text-[12px] font-[500] text-gray400">
                  Amount to Pay
                </p>
                <p className="text-[24px] font-[700] text-primary">₦ 50,000 </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">KodHex</p>
                <p className="text-[12px] font-[500]">Levijazz</p>
              </div>
              <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
                <p className="text-[12px] font-[500] text-gray400">Name</p>
                <p className="text-[12px] font-[500]">Aiyeola Matthew</p>
              </div>
              <div className="flex justify-between items-center py-4 mb-4">
                <p className="text-[12px] font-[500] text-gray400">Note</p>
                <p className="text-[12px] font-[500]">Food & Drink</p>
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

              <div className="">
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
              <div className="hidden">
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

            <div className="mb-5 mt-8">
              <input
                type="text"
                name=""
                id=""
                className="p-5 w-full rounded-[4px] broder-[1px] text-[12px] font-[500] border-[#F9FAFB] outline-none bg-[#F9FAFB]"
                placeholder="Enter PIN"
              />

              <button
                className="bg-primary text-white p-4 rounded-[8px] w-full text-[14px] font-[500] mt-12 mb-8"
                onClick={() => {
                  setModal("payment sent");
                  setOverviewStep("overview");
                }}
              >
                Confirm
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
            Your payment of <span className="text-primary">N20,00.00</span> has
            been sent successfully to{" "}
            <span className="text-primary">David (Kodhex)</span>
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
              onClick={() => setModal("receipt")}
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

  const NewRequestOverviewModal = () => (
    <Modal>
      <div className="w-[439px] bg-white rounded-t-[30px] pt-[20px] px-[30px]">
        <div className="flex justify-between w-full items-center">
          <div></div>
          <div>
            <h1 className="font-[500] text-[26px] text-center text-primary">
              Overview
            </h1>
            <p className="text-[12px] font-[500] text-gray400 text-center">
              Summary of your transaction
            </p>
          </div>
          <XCircleIcon
            className="w-[17px] text-gray400 cursor-pointer"
            onClick={() => setModal("")}
          />
        </div>
        <div className="mt-5">
          <Image
            src={olamilekan}
            width={102}
            height={95}
            className="mx-auto mb-6"
            alt="suer overview"
          />
          <div className="rounded-[4px] bg-[#FAFAFA] flex justify-between items-center py-4 px-5 mb-4">
            <p className="text-[12px] font-[500] text-gray400">Amount to Pay</p>
            <p className="text-[24px] font-[700] text-primary">₦ 50,000 </p>
          </div>
          <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
            <p className="text-[12px] font-[500] text-gray400">KodHex</p>
            <p className="text-[12px] font-[500]">Levijazz</p>
          </div>
          <div className="flex justify-between items-center py-4 border-b-[1px] border-b-[#F3F4F6]">
            <p className="text-[12px] font-[500] text-gray400">Name</p>
            <p className="text-[12px] font-[500]">Aiyeola Matthew</p>
          </div>
          <div className="flex justify-between items-center py-4 mb-4">
            <p className="text-[12px] font-[500] text-gray400">Note</p>
            <p className="text-[12px] font-[500]">Food & Drink</p>
          </div>

          <button
            className="bg-primary text-white p-4 rounded-[8px] w-full text-[14px] font-[500] mb-8"
            onClick={() => {
              router.push("/dashboard/request-money?active=track");
              setModal("");
            }}
          >
            Pay
          </button>
        </div>
      </div>
    </Modal>
  );

  const Track = () => (
    <>
      <PageTitleWithArrow
        title="Request Money"
        subtitle="Request money from family & friends using your unique link"
        image={reqBig}
        handleBack={() => router.push("/dashboard/request-money")}
      />
      <div className="mx-auto max-w-[450px] mt-[50px]">
        <div className="h-[200px] relative">
          <div className="absolute h-full top-4 w-[2px] left-2 bg-[#D1D5DB]"></div>
          <div className="absolute h-[50%] top-4 w-[2px] left-2 bg-primary z-[1]"></div>
          <div className="flex-col justify-around h-[200px] relative hidden">
            <div className="absolute h-[150px] w-[2px] left-2 bg-[#D1D5DB]"></div>
            <div className="rounded-full w-[18px] h-[18px] bg-primary  relative z-[1]" />
            <div className="rounded-full w-[18px] h-[18px] bg-white border-[1px] border-[#D1D5DB] relative z-[1]" />
            <div className="rounded-full w-[18px] h-[18px] bg-white border-[1px] border-[#D1D5DB] relative z-[1]" />
          </div>

          <div className=" items-center mb-11 flex relative  z-[2]">
            <div className="rounded-full w-[18px] h-[18px] bg-primary relative" />

            <div className="ml-7">
              <h1 className="mb-2 text-[14px] font-[500]">Request sent</h1>
              <p className="text-[12px] font-[500] text-[#9CA3AF]">
                Your request has been successfully sent to{" "}
                <span className="text-primary">Aiyeola Mathew</span>
              </p>
            </div>
          </div>

          <div className="flex  items-center mb-11 relative z-[2]">
            <div className="rounded-full w-[18px] h-[18px] bg-white border-[1px] border-[#D1D5DB]" />
            <div className="ml-7">
              <h1 className="mb-2 text-[14px] font-[500]">Request sent</h1>
              <p className="text-[12px] font-[500] text-[#9CA3AF]">
                Your request has been processed and will be sent to Levi shortly
              </p>
            </div>
          </div>

          <div className="flex items-center mb-11 relative z-[2]">
            <div className="rounded-full w-[18px] h-[18px] bg-white border-[1px] border-[#D1D5DB]" />
            <div className="ml-7">
              <h1 className="mb-2 text-[14px] font-[500]">Request Status</h1>
              <p className="text-[12px] font-[500] text-[#9CA3AF]">
                We are processing your request and you will receive a
                notification <br /> when it has been sent but you can follow the
                status here
              </p>
            </div>
          </div>

          <button className="rounded-[8px] text-[14px] font-[500] bg-primary text-white p-5 w-full text-center">
            Copy Link To Notify User
          </button>

          {/* <div>
            <div className="rounded-full w-[18px] h-[18px] bg-primary mb-10" />
            <div className="rounded-full w-[18px] h-[18px] bg-white mb-10 border-[1px] border-[#D1D5DB]" />
          </div> */}
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
      settopupStep("choose method");
    } else if (topupStep === "ussd") {
      settopupStep("choose method");
    } else {
      setModal("accept request overview");
    }
  };

  const closeTopUpModal = () => {
    setModal("");
    settopupStep("choose method");
  };

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
            onClick={() => setModal("accept request overview")}
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
            onClick={() => setModal("accept request overview")}
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
            onClick={() => setModal("accept request overview")}
          >
            Return To Overview
          </button>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  const DeclineRequest = () => (
    <Modal>
      <AnimatePresence>
        <motion.div
          className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-10"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <div className="flex justify-between w-full">
            <h1 className="text-[12px] font-[500]">
              Are you sure you want to{" "}
              <span className="text-[#EF4444]">decline</span>
            </h1>
            <XCircleIcon
              className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
              onClick={() => {
                setModal("");
              }}
            />
          </div>
          <div className=" flex justify-end gap-4 mt-[50px] ">
            <button
              className="text-[12px] font-[700] text-[#EF4444]"
              onClick={() => setModal("request declined")}
            >
              YES, DECLINE
            </button>
            <button
              className="text-[12px] font-[700] text-black"
              onClick={() => setModal("")}
            >
              CANCEL
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  const RequestDeclined = () => (
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

          <h1 className="text-[20px] font-[700] text-center mb-2">
            Request Declined
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400 mx-auto max-w-[312px]">
            <span className="text-primary">Levijazz</span> request of{" "}
            <span className="text-primary"> N100.00 </span> has been{" "}
            <span className="text-primary">declined</span>
          </p>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  return (
    <section>
      {modal === "new request overview" && <NewRequestOverviewModal />}
      {modal === "accept request overview" && <Overview />}
      {modal === "payment sent" && <PaymentSentModal />}
      {modal === "payment failed" && <PaymentFailedModal />}
      {modal === "receipt" && <ReceiptModal />}
      {modal === "topup" && <TopUpModal />}
      {modal === "topup success" && <TopupSuccessModal />}
      {modal === "topup failed" && <TopupFailedModal />}
      {modal === "in progress" && <InprogressModal />}
      {modal === "decline request" && <DeclineRequest />}
      {modal === "request declined" && <RequestDeclined />}
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
            {active === "all" && <All />}
            {active === "new request" && <NewRequest />}
            {active === "send" && <Send />}
            {active === "track" && <Track />}
            {active === "accept request" && <AcceptRequest />}
          </div>
        </div>
      </main>
    </section>
  );

  function SendandReceivedTabs() {
    return (
      <div className="mb-7">
        <Tabs defaultValue="sent" className="max-w-[450px] mx-auto">
          <TabsList className="grid w-full grid-cols-2 h-[44px] rounded-[4px] bg-[#F9F5FF]">
            <TabsTrigger value="sent" className="h-full text-[12px] font-[500]">
              Sent
            </TabsTrigger>
            <TabsTrigger
              value="received"
              className="h-full text-[12px] font-[500]"
            >
              Received
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sent">
            <div className="mt-8">
              <div className="flex items-center justify-between bg-[#F9F9F9] rounded-[4px] p-5 mb-5">
                <div className="flex items-center">
                  <Image src={matthew} width={47} height={47} alt="user" />
                  <div className="ml-3">
                    <h1 className="mb-1 text-[12px] font-[500]">
                      Aiyeola Mathew
                    </h1>
                    <p className="mb-1 text-[10px] font-[400] text-[#6B7280] flex items-center">
                      Levijazz{" "}
                      <span className="ml-2 bg-white rounded-full flex justify-center items-center w-4 h-4">
                        <Code2 className="text-[#23A323] w-[10px]" />
                      </span>
                    </p>
                    <p className="text-[10px] font-[500] text-[#6B7280]">
                      12th September, 2023 | 12:00pm
                    </p>
                  </div>
                </div>
                <div>
                  <p className="bg-[#FCB40C] text-white rounded-[4px] text-[8px] font-[500] px-4 py-2 mb-1 text-center w-[60px] h-[24px] flex justify-center items-center">
                    Pending
                  </p>
                  <p className="text-[12px] font-[500] text-center">N100.00</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#F9F9F9] rounded-[4px] p-5 mb-5">
                <div className="flex items-center">
                  <Image src={matthew} width={47} height={47} alt="user" />
                  <div className="ml-3">
                    <h1 className="mb-1 text-[12px] font-[500]">
                      Aiyeola Mathew
                    </h1>
                    <p className="mb-1 text-[10px] font-[400] text-[#6B7280] flex items-center">
                      Levijazz{" "}
                      <span className="ml-2 bg-white rounded-full flex justify-center items-center w-4 h-4">
                        <Code2 className="text-[#23A323] w-[10px]" />
                      </span>
                    </p>
                    <p className="text-[10px] font-[500] text-[#6B7280]">
                      12th September, 2023 | 12:00pm
                    </p>
                  </div>
                </div>
                <div>
                  <p className="bg-[#22C55E] text-white rounded-[4px] text-[8px] font-[500] px-4 py-2 mb-1 text-center w-[60px] h-[24px] flex justify-center items-center">
                    Successful
                  </p>
                  <p className="text-[12px] font-[500] text-center">N100.00</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#F9F9F9] rounded-[4px] p-5 mb-5">
                <div className="flex items-center">
                  <Image src={matthew} width={47} height={47} alt="user" />
                  <div className="ml-3">
                    <h1 className="mb-1 text-[12px] font-[500]">
                      Aiyeola Mathew
                    </h1>
                    <p className="mb-1 text-[10px] font-[400] text-[#6B7280] flex items-center">
                      Levijazz{" "}
                      <span className="ml-2 bg-white rounded-full flex justify-center items-center w-4 h-4">
                        <Code2 className="text-[#23A323] w-[10px]" />
                      </span>
                    </p>
                    <p className="text-[10px] font-[500] text-[#6B7280]">
                      12th September, 2023 | 12:00pm
                    </p>
                  </div>
                </div>
                <div>
                  <p className="bg-[#EF4444] text-white rounded-[4px] text-[8px] font-[500] px-4 py-2 mb-1 text-center w-[60px] h-[24px] flex justify-center items-center">
                    Declined
                  </p>
                  <p className="text-[12px] font-[500] text-center">N100.00</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="received">
            <div className="mt-8">
              <div className="flex items-center justify-between bg-[#F9F9F9] rounded-[4px] p-5 mb-5">
                <div className="flex items-center">
                  <Image src={matthew} width={47} height={47} alt="user" />
                  <div className="ml-3">
                    <h1 className="mb-1 text-[12px] font-[500]">
                      Aiyeola Mathew
                    </h1>
                    <p className="mb-1 text-[10px] font-[400] text-[#6B7280] flex items-center">
                      Levijazz{" "}
                      <span className="ml-2 bg-white rounded-full flex justify-center items-center w-4 h-4">
                        <Code2 className="text-[#23A323] w-[10px]" />
                      </span>
                    </p>
                    <p className="text-[10px] font-[500] text-[#6B7280]">
                      12th September, 2023 | 12:00pm
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <p
                      className="cursor-pointer bg-[#22C55E] text-white rounded-[4px] text-[8px] font-[500] px-4 py-2 mb-1 text-center w-[60px] h-[24px] flex justify-center items-center"
                      onClick={() =>
                        router.push(
                          "/dashboard/request-money?active=accept+request&amount=100"
                        )
                      }
                    >
                      Accept
                    </p>
                    <p
                      className=" cursor-pointer bg-[#EF4444] text-white rounded-[4px] text-[8px] font-[500] px-4 py-2 mb-1 text-center w-[60px] h-[24px] flex justify-center items-center"
                      onClick={() => setModal("decline request")}
                    >
                      Decline
                    </p>
                  </div>
                  <p className="text-[12px] font-[500] text-end">N100.00</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#F9F9F9] rounded-[4px] p-5 mb-5">
                <div className="flex items-center">
                  <Image src={matthew} width={47} height={47} alt="user" />
                  <div className="ml-3">
                    <h1 className="mb-1 text-[12px] font-[500]">
                      Aiyeola Mathew
                    </h1>
                    <p className="mb-1 text-[10px] font-[400] text-[#6B7280] flex items-center">
                      Levijazz{" "}
                      <span className="ml-2 bg-white rounded-full flex justify-center items-center w-4 h-4">
                        <Code2 className="text-[#23A323] w-[10px]" />
                      </span>
                    </p>
                    <p className="text-[10px] font-[500] text-[#6B7280]">
                      12th September, 2023 | 12:00pm
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <p
                      className="cursor-pointer bg-[#22C55E] text-white rounded-[4px] text-[8px] font-[500] px-4 py-2 mb-1 text-center w-[60px] h-[24px] flex justify-center items-center"
                      onClick={() =>
                        router.push(
                          "/dashboard/request-money?active=accept+request&amount=500"
                        )
                      }
                    >
                      Accept
                    </p>
                    <p
                      className=" cursor-pointer bg-[#EF4444] text-white rounded-[4px] text-[8px] font-[500] px-4 py-2 mb-1 text-center w-[60px] h-[24px] flex justify-center items-center"
                      onClick={() => setModal("decline request")}
                    >
                      Decline
                    </p>
                  </div>
                  <p className="text-[12px] font-[500] text-end">N500.00</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

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
}

export default RequestMoney;

const UsersTablist = () => (
  <div>
    <Tabs defaultValue="recents" className="max-w-[450px] mx-auto mt-[30px]">
      <TabsList className="grid w-full grid-cols-2 h-[44px] rounded-[4px] bg-[#F9F5FF]">
        <TabsTrigger value="recents" className="h-full text-[12px] font-[500]">
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
        <div className="overflow-y-auto mt-5 h-[250px] pr-1">
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
        </div>
      </TabsContent>
      <TabsContent value="beneficiaries">
        <div className="overflow-y-auto mt-5 h-[250px] pr-1">
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
        </div>
      </TabsContent>
    </Tabs>
  </div>
);

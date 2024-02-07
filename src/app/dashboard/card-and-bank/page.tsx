"use client";
import React, { useState } from "react";
import NavBar from "@/components/navbar";
import paystack from "../../../assets/paystack.svg";
import Image from "next/image";
import Modal from "@/components/modal";
import { AnimatePresence, motion } from "framer-motion";
import success from "../../../assets/success.png";
import failed from "../../../assets/failed-ks1ODQxJMt.png";
import { XCircleIcon } from "lucide-react";
import master from "../../../assets/Mastercard logo.png";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import Cardandbanktab from "@/components/cardandbanktab";
import PageTitle from "@/components/pagetitlebank";

function CardandBank() {
  const [step, setStep] = useState<
    | "card and bank"
    | "add new card"
    | "manage card"
    | "add bank"
    | "manage bank"
    | ""
  >("card and bank");

  const [modal, setModal] = useState<
    "card added" | "card added failed" | "bank added" | "add bank failed" | ""
  >("");

  const [selectedBank, setSelectedBank] = useState("");
  const banks = [
    {
      bankname: "Guaranty Trust Bank",
      bankImage: "",
      accountname: "Moyohsore kadiri",
    },
    {
      bankname: "Wema Bank",
      bankImage: "",
      accountname: "Moyohsore kadiri",
    },
  ];
  const bankDetails = banks.find((b) => b.bankname === selectedBank);

  const handleBack = () => {
    if (step === "add new card") {
      setStep("card and bank");
    }
    if (step === "manage card") {
      setStep("card and bank");
    }
    if (step === "add bank") {
      setStep("card and bank");
    }
    if (step === "manage bank") {
      setStep("card and bank");
    }
  };

  const Overview = () => (
    <div className="">
      <div className="text-center mb-7">
        <PageTitle
          title="Card and Bank"
          step={step}
          subtitle="All your debit card and bank account"
          handleBack={handleBack}
        />
      </div>
      <Cardandbanktab setStep={setStep} />
    </div>
  );

  const AddNewCard = () => (
    <div>
      <div className="text-center mb-7">
        <PageTitle
          title="Add New Card"
          step={step}
          subtitle="Add a new card that belongs to you"
          handleBack={handleBack}
        />

        <div className="max-w-[450px] mx-auto">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full rounded-[4px] border-[1px] border-[#D1D5DB] p-5 text-[12px] font-[500] mb-4 text-primary outline-none placeholder:text-gray400"
          />
          <div className="grid grid-cols-2 gap-x-4">
            <input
              type="text"
              placeholder="Expiry Date"
              className="w-full rounded-[4px] border-[1px] border-[#D1D5DB] p-5 text-[12px] font-[500] mb-4 text-primary outline-none placeholder:text-gray400"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full rounded-[4px] border-[1px] border-[#D1D5DB] p-5 text-[12px] font-[500] mb-4 text-primary outline-none placeholder:text-gray400"
            />
          </div>

          <input
            type="text"
            placeholder="Card Holder’s Name"
            className="w-full rounded-[4px] border-[1px] border-[#D1D5DB] p-5 text-[12px] font-[500] mb-4 text-primary outline-none placeholder:text-gray400"
          />

          <div className="mt-6 ">
            <p className="mb-2 text-[12px] font-[500] flex items-center justify-center">
              Secured with{" "}
              <span className="ml-2 flex items-center">
                <Image
                  src={paystack}
                  width={12}
                  height={12}
                  alt="pay stack"
                  className="mr-1"
                />
                <span className="text-[12px] font-[400] text-[#0BA4DB]">
                  {" "}
                  Paystack
                </span>
              </span>
            </p>
            <button
              className="w-full p-5 text-[14px] font-[500] bg-primary rounded-[8px] text-white"
              onClick={() => setModal("card added")}
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const ManageCard = () => (
    <div>
      <div className="text-center mb-7">
        <PageTitle
          title="Manage Card"
          step={step}
          subtitle="Manage your debit card"
          handleBack={handleBack}
        />

        <div className="max-w-[450px] mx-auto">
          <div className="mb-9">
            <p className="text-[12px] font-[500] text-gray400 text-left">
              CARD DETAILS
            </p>
            <div
              className="flex py-4 justify-between items-center bg-white rounded-[4px] mb-4 cursor-pointer"
              // onClick={() => setStep("manage card")}
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
          </div>
          <div className="mb-6">
            <p className="text-[12px] font-[500] text-gray400 text-left mb-4">
              PAYMENT OPTIONS
            </p>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-left text-[14px] font-[500] mb-2">
                  Default Card
                </h1>
                <p className="text-[12px] text-[400] text-[#6B7280]">
                  This is your default Card for all payments and transactions
                </p>
              </div>
              <Switch />
            </div>
          </div>
          <div className="mt-14 ">
            <button className="mb-6 text-black mx-auto px-14 py-3 border-[1px] border-[#EF4444] rounded-[6px] text-[12px] font-[500] shadow-[5px_5px_#EF4444]">
              Delete Card
            </button>
            <button
              className="w-full p-5 text-[14px] font-[500] bg-primary rounded-[8px] text-white"
              // onClick={() => setModal("card added")}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ManageBank = () => (
    <div>
      <div className="text-center mb-7">
        <PageTitle
          title="Manage Bank"
          step={step}
          subtitle="Manage your bank account"
          handleBack={handleBack}
        />

        <div className="max-w-[450px] mx-auto">
          <div className="mb-9">
            <p className="text-[12px] font-[500] text-gray400 text-left">
              BANK DETAILS
            </p>
            <div
              className="flex py-4 justify-between items-center bg-white rounded-[4px] mb-4 cursor-pointer"
              // onClick={() => setStep("manage card")}
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
          </div>
          <div className="mb-6">
            <p className="text-[12px] font-[500] text-gray400 text-left mb-4">
              PAYMENT OPTIONS
            </p>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-left text-[14px] font-[500] mb-2">
                  Default Bank
                </h1>
                <p className="text-[12px] text-[400] text-[#6B7280]">
                  This is your default bank account all withdrawals would be
                  made to
                </p>
              </div>
              <Switch />
            </div>
          </div>
          <div className="mt-14 ">
            <button className="mb-6 text-black mx-auto px-14 py-3 border-[1px] border-[#EF4444] rounded-[6px] text-[12px] font-[500] shadow-[5px_5px_#EF4444]">
              Delete Bank
            </button>
            <button
              className="w-full p-5 text-[14px] font-[500] bg-primary rounded-[8px] text-white"
              // onClick={() => setModal("card added")}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AddBank = () => (
    <div>
      <div className="text-center mb-7">
        <PageTitle
          title="Add Bank"
          step={step}
          subtitle="In order to guarantee your funds security. You can only add the bank account linked to your BVN"
          handleBack={handleBack}
        />

        <div className="max-w-[450px] mx-auto">
          <input
            type="text"
            placeholder="Enter Account Number"
            className="w-full rounded-[4px] border-[1px] border-[#D1D5DB] p-5 text-[12px] font-[500] mb-4 text-primary outline-none placeholder:text-gray400"
          />

          <div>
            <Select onValueChange={(value) => setSelectedBank(value)}>
              <SelectTrigger
                className="w-full h-[60px] px-5 border-[1px] border-[#D1D5DB]"
                // onChange={(value) => console.log(value)}
              >
                <SelectValue
                  placeholder="Choose Bank"
                  className="p-5 text-[90px]"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Bank</SelectLabel>
                  {banks.map((b) => (
                    <SelectItem
                      key={b.bankname}
                      value={b.bankname}
                      className="cursor-pointer"
                    >
                      {b.bankname}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {bankDetails && (
              <div className=" rounded-[4px] border-[1px] items-center border-primary mt-[50px] px-7 py-3 shadow-[5px_5px_#240552] w-[200px] mx-auto flex justify-center">
                <CheckCircle2 className="text-primary mr-2" />
                <p className="text-[12px] font-[500]">
                  {bankDetails?.accountname}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const CardAddedSuccessModal = () => (
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
            Card Added Successfully
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400">
            Hurray! your card have been added successfully
          </p>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
  const CardAddedDeclinedModal = () => (
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
              alt="success"
              className="flex justify-center"
            />
          </div>

          <h1 className="text-[20px] font-[700] text-center mt-4 mb-2">
            Declined
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400 mx-auto max-w-[312px]">
            Sorry, your bank account could not be added at this time. Please try
            again
          </p>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  const BankAddedSuccessModal = () => (
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
            Success
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400">
            Hurray! your bank account have been added successfully
          </p>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  const AddBankDeclinedModal = () => (
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
              alt="success"
              className="flex justify-center"
            />
          </div>

          <h1 className="text-[20px] font-[700] text-center mt-4 mb-2">
            Declined
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400 mx-auto max-w-[312px]">
            Sorry, your bank account could not be added at this time. Please try
            again
          </p>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );

  return (
    <section>
      {modal === "card added" && <CardAddedSuccessModal />}
      {modal === "card added failed" && <CardAddedDeclinedModal />}
      {modal === "bank added" && <BankAddedSuccessModal />}
      {modal === "add bank failed" && <AddBankDeclinedModal />}
      <NavBar>
        <div>
          <h1 className="font-[600] text-primary text-[24px] mb-1">
            Card and Bank
          </h1>
          <p className="text-gray400 text-[12px] font-[500]">
            All your debit card and bank account
          </p>
        </div>
      </NavBar>
      <main className="flex items-center justify-center h-[88vh]">
        <div className=" p-9  w-full mx-4 sm:mx-[10%] lg:mx-0 lg:w-1/2 border-[1px] border-[#E5E7EB] rounded-[8px] container-gradient h-[90%]">
          <div className="my-8 bg-white w-full h-full rounded-[8px]">
            {step === "card and bank" && <Overview />}
            {step === "add new card" && <AddNewCard />}
            {step === "manage card" && <ManageCard />}
            {step === "add bank" && <AddBank />}
            {step === "manage bank" && <ManageBank />}
          </div>
        </div>
      </main>
    </section>
  );
}

export default CardandBank;

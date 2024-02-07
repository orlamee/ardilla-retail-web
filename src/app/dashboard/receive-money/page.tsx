"use client";
import React, { useState } from "react";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/modal";
import { Code2, XCircleIcon } from "lucide-react";
import matthew from "../../../assets/mattheww.png";
import failed from "../../../assets/failed-ks1ODQxJMt.png";
import Image from "next/image";
import receive from "../../../assets/receive big.svg";
import success from "../../../assets/success.png";
import note from "../../../assets/note.svg";
import download from "../../../assets/download.svg";
import chat from "../../../assets/chat.svg";
import paymentsuccess from "../../../assets/payment success.png";
import user from "../../../assets/olamilekan.png";
import PageTitleWithArrow from "@/components/pagetitle";

function ReceiveMoney() {
  const [modal, setModal] = useState<
    "decline request" | "request declined" | "request accepted" | "receipt" | ""
  >("");
  const router = useRouter();

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

  const RequestAccepted = () => (
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
            Money Received
          </h1>
          <p className="text-center text-[12px] font-[500] text-gray400 max-w-[329px] mx-auto">
            A sum of N20,00.00 from Aiyeola Mathew has been sent <br />{" "}
            successfully to your KodHex
          </p>

          <div className="w-[275px] mx-auto flex justify-between gap-4 mt-6">
            <div
              className="text-primary cursor-pointer text-[10px] justify-center text-center bg-[#F9FAFB] rounded-[8px] w-full h-[50px] flex items-center"
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
              onClick={() => setModal("")}
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
                  Money Received
                </p>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-[12px] font-[400] text-gray400">
                  Sender Details
                </p>
                <p className="text-[12px] font-[500] text-white">
                  Aiyeola Matthew
                </p>
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
                <p className="text-[12px] font-[500] text-white">Wallet</p>
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

  return (
    <section>
      {modal === "decline request" && <DeclineRequest />}
      {modal === "request declined" && <RequestDeclined />}
      {modal === "request accepted" && <RequestAccepted />}
      {modal === "receipt" && <ReceiptModal />}
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
            <PageTitleWithArrow
              title="Receive Money"
              subtitle="Accept or decline money sent to you from family and friends."
              image={receive}
              handleBack={() =>
                router.push("/dashboard/request-and-receive-money")
              }
            />

            <div className="max-w-[450px] mx-auto">
              <div className="mt-10">
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
                        onClick={() => setModal("request accepted")}
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
                        onClick={() => setModal("request accepted")}
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
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default ReceiveMoney;

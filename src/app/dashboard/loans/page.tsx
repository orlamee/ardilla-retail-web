"use client";
import NavBar from "@/components/navbar";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import loans from "../../../assets/loan.svg";
import bags from "../../../assets/bags.svg";
import Modal from "@/components/modal";
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "lucide-react";

function Loans() {
  const [hideBalance, setHideBalance] = useState(false);

  const [isModalLoansOpen, setIsModalLoansOpen] = useState(false);

  function openModalLoans() {
    setIsModalLoansOpen(true);
  }

  function closeModalLoans() {
    setIsModalLoansOpen(false);
  }

  return (
    <section>
      <NavBar>
        <div>
          <h1 className="text-[24px] text-[#240552] leading-[33px] font-[700] mb-1">
            Loans
          </h1>
          <p className="text-gray400 text-[12px] font-[500]">
            Get your loans with low interest
          </p>
        </div>
      </NavBar>
      <main className="px-4 lg:px-8">
        <div className="dashboard-hero my-[50px] h-[250px] rounded-[16px] flex flex-wrap justify-between items-center px-10">
          <div>
            <h1 className=" text-black font-[500] text-[14px] flex">
              Loan Balance{" "}
              <span
                className="ml-4 cursor-pointer"
                onClick={() => setHideBalance(!hideBalance)}
              >
                {hideBalance ? <Eye /> : <EyeOff />}
              </span>
            </h1>
            <h2 className="font-[700] text-[#3D0072] text-[22px] md:text-[35px] lg:text-[50px] mb-5">
              {hideBalance ? "*******" : " N 10,000,000.00"}
            </h2>
            <div className="flex flex-row gap-x-5">
              <button className="border border-[#3D0072] text-[#3D0072] rounded-[40px] text-[12px] font-[500] leading-[12px] px-10 py-4">
                Withdraw
              </button>
              <button className="border border-[#3D0072] text-[#3D0072] rounded-[40px] text-[12px] font-[500] leading-[12px] px-10 py-4">
                Repay
              </button>
            </div>
          </div>
          <button className="bg-[#3D0072] text-white font-[700] text-[12px] py-5 px-10 rounded-full lg:px-[100px] 2xl:px-[130px]" onClick={openModalLoans}>
            Apply for New Loan
          </button>
          {isModalLoansOpen && (
            <Modal>
              <AnimatePresence>
                <motion.div
                  className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[350px] z-[50]"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "tween", ease: "backOut" }}
                >
                  <div className="flex justify-end w-full">
                    <div>
                      <XCircleIcon
                        className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
                        onClick={closeModalLoans}
                      />
                    </div>
                  </div>
                  <div className="px-5 pb-6 text-center flex flex-col justify-center items-center">
                    <Image src={bags} alt="bags" />
                  </div>
                  <h2 className="text-[#3D0072] font-[700] text-[34px] leading-[46px] text-center mb-6">Oops</h2>
                  <p className="text-[#454545] font-[500] text-[12px] leading-[20px] text-center">Your account is not funded and you have no savings plan activated. Please do these to become eligible for a loan on Ardilla retail.</p>
                </motion.div>
              </AnimatePresence>
            </Modal>
          )}
        </div>
        <div className="bg-[#F9FAFB] rounded-[16px] p-16">
          <div className="w-1/3 mx-auto text-center">
            <Image src={loans} alt="loans" className="mx-auto mb-6" />
            <h6 className="text-[#9CA3AF] font-[500] text-[21px] leading-[29px]">You currently have no loan history</h6>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Loans;

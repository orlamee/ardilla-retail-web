"use client";

import Link from "next/link";
import { useState } from "react";
import movies from "../../../../assets/film.svg";
import allset from "../../../../assets/allset.svg";
import Image from "next/image";
import NavBar from "@/components/navbar";
import Modal from "@/components/modal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, XCircleIcon } from "lucide-react";

export default function Movies() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  const [isModalTicketSentOpen, setIsModalTicketSentOpen] = useState(false);
  function openModalTicketSent() {
    closeBothModals();
    setIsModalTicketSentOpen(true);
  }

  function closeModalTicketSent() {
    setIsModalTicketSentOpen(false);
  }

  function closeBothModals() {
    closeModal();
    closeModalTicketSent();
  }

  return (
    <section>
      <NavBar>
        <div>
          <h1 className="text-[24px] leading-[33px] text-[#240552] font-[700] mb-1">Rewards</h1>
          <p className="text-gray400 text-[12px] font-[500]">
            View your rewards on Ardila
          </p>
        </div>
      </NavBar>
      <main className="p-8 min-h-screen">
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="w-full sm:w-7/12">
            <div className="bg-white border p-8 rounded-[8px] border-[#E5E7EB] shadow-[0_4px_30px_0_#9494941A]">
              <Link href="/dashboard/rewards">
                <div className="flex flex-row">
                  <ChevronLeft
                    className="text-[#3D0072] text-[11px] mt-[9px] cursor-pointer me-[10px]"
                  />
                  <div className="mt-2">
                    <h3 className="text-[#240552] font-[founder] text-[30px] leading-[40px]">
                      Movies
                    </h3>
                    <p className="text-[#9CA3AF] text-[12px] font-[500] leading-[20px] w-[83%] mt-4">
                      A movie experience like no other. Explore and unlock free movie tickets as rewards for helping out Ardilla.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="grid grid-cols-4 gap-x-4 gap-y-16 cursor-pointer mt-10">
                <div onClick={openModal}>
                  <Image src={movies} alt="movies" className="w-full" />
                  <h2 className="text-[#000000] font-[600] text-[14px] leading-[10px] mt-5 mb-3">
                    MISEDUCATION
                  </h2>
                  <div className="flex flex-row">
                    <div>
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px] ">
                        2023
                      </span>
                    </div>
                    <div className="mx-4">
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px]">
                        1hr 7m
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#D1D5DB] font-[400] border border-[#D1D5DB] py-1 px-2 rounded-[3px]">
                        PG 15
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={movies} alt="movies" className="w-full" />
                  <h2 className="text-[#000000] font-[600] text-[14px] leading-[10px] mt-5 mb-3">
                    MISEDUCATION
                  </h2>
                  <div className="flex flex-row">
                    <div>
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px] ">
                        2023
                      </span>
                    </div>
                    <div className="mx-4">
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px]">
                        1hr 7m
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#D1D5DB] font-[400] border border-[#D1D5DB] py-1 px-2 rounded-[3px]">
                        PG 15
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={movies} alt="movies" className="w-full" />
                  <h2 className="text-[#000000] font-[600] text-[14px] leading-[10px] mt-5 mb-3">
                    MISEDUCATION
                  </h2>
                  <div className="flex flex-row">
                    <div>
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px] ">
                        2023
                      </span>
                    </div>
                    <div className="mx-4">
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px]">
                        1hr 7m
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#D1D5DB] font-[400] border border-[#D1D5DB] py-1 px-2 rounded-[3px]">
                        PG 15
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={movies} alt="movies" className="w-full" />
                  <h2 className="text-[#000000] font-[600] text-[14px] leading-[10px] mt-5 mb-3">
                    MISEDUCATION
                  </h2>
                  <div className="flex flex-row">
                    <div>
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px] ">
                        2023
                      </span>
                    </div>
                    <div className="mx-4">
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px]">
                        1hr 7m
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#D1D5DB] font-[400] border border-[#D1D5DB] py-1 px-2 rounded-[3px]">
                        PG 15
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={movies} alt="movies" className="w-full" />
                  <h2 className="text-[#000000] font-[600] text-[14px] leading-[10px] mt-5 mb-3">
                    MISEDUCATION
                  </h2>
                  <div className="flex flex-row">
                    <div>
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px] ">
                        2023
                      </span>
                    </div>
                    <div className="mx-4">
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px]">
                        1hr 7m
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#D1D5DB] font-[400] border border-[#D1D5DB] py-1 px-2 rounded-[3px]">
                        PG 15
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={movies} alt="movies" className="w-full" />
                  <h2 className="text-[#000000] font-[600] text-[14px] leading-[10px] mt-5 mb-3">
                    MISEDUCATION
                  </h2>
                  <div className="flex flex-row">
                    <div>
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px] ">
                        2023
                      </span>
                    </div>
                    <div className="mx-4">
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px]">
                        1hr 7m
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#D1D5DB] font-[400] border border-[#D1D5DB] py-1 px-2 rounded-[3px]">
                        PG 15
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={movies} alt="movies" className="w-full" />
                  <h2 className="text-[#000000] font-[600] text-[14px] leading-[10px] mt-5 mb-3">
                    MISEDUCATION
                  </h2>
                  <div className="flex flex-row">
                    <div>
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px] ">
                        2023
                      </span>
                    </div>
                    <div className="mx-4">
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px]">
                        1hr 7m
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#D1D5DB] font-[400] border border-[#D1D5DB] py-1 px-2 rounded-[3px]">
                        PG 15
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={movies} alt="movies" className="w-full" />
                  <h2 className="text-[#000000] font-[600] text-[14px] leading-[10px] mt-5 mb-3">
                    MISEDUCATION
                  </h2>
                  <div className="flex flex-row">
                    <div>
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px] ">
                        2023
                      </span>
                    </div>
                    <div className="mx-4">
                      <span className="text-[#000000] font-[400] text-[10px] leading-[10px]">
                        1hr 7m
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#D1D5DB] font-[400] border border-[#D1D5DB] py-1 px-2 rounded-[3px]">
                        PG 15
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {isModalOpen && (
        <Modal>
          <AnimatePresence>
            <motion.div
              className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[700px] z-[50]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", ease: "backOut" }}
            >
              <div className="flex justify-end w-full">
                <div>
                  <XCircleIcon
                    className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
                    onClick={closeModal}
                  />
                </div>
              </div>
              <div className="px-4 pb-6">
                <div className="grid grid-cols-2 gap-4">
                  <Image src={movies} alt="movies" className="w-full" />
                  <div>
                    <h3 className="uppercase text-[#D1D5DB] font-[400] text-[9px]">
                      Title:{" "}
                    </h3>
                    <h5 className="uppercase text-[#000] font-[600] text-[14px] mt-2">
                      MISEDUCATION
                    </h5>
                    <hr className="my-3 text-[#F3F4F6]" />
                    <div className="flex flex-row">
                      <p className="text-[#D1D5DB] font-[400] text-[9px] w-1/3">
                        DURATION:
                      </p>
                      <h3 className="text-[#000] font-[500] text-[9px] w-2/3">
                        1hr 7m
                      </h3>
                    </div>
                    <div className="flex flex-row my-5">
                      <p className="text-[#D1D5DB] font-[400] text-[9px] w-1/3">
                        AGE:
                      </p>
                      <h3 className="text-[#000] font-[500] text-[9px] w-2/3">
                        18+
                      </h3>
                    </div>
                    <div className="flex flex-row">
                      <p className="text-[#D1D5DB] font-[400] text-[9px] w-1/3">
                        SUBTITLE:
                      </p>
                      <h3 className="text-[#000] font-[500] text-[9px] w-2/3">
                        After a public humiliation, a wanna be influencer
                        enrolls in a small-town university, where she aspires to
                        regain her social status.
                      </h3>
                    </div>
                  </div>
                </div>
                <form className="mt-6">
                  <div className="mb-4">
                    <label
                      htmlFor="default-input"
                      className="block mb-2 text-[12px] font-[500] text-[#000]"
                    >
                      Cinema
                    </label>
                    <input
                      type="text"
                      id="default-input"
                      placeholder="Cinema"
                      className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="default-input"
                      className="block mb-2 text-[12px] font-[500] text-[#000]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="default-input"
                      className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="default-input"
                      className="block mb-2 text-[12px] font-[500] text-[#000]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="default-input"
                      className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px] mt-3"
                      onClick={openModalTicketSent}
                    >
                      Get Ticket
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </AnimatePresence>
        </Modal>
      )}
      {isModalTicketSentOpen && (
        <Modal>
          <AnimatePresence>
            <motion.div
              className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[400px] z-[50]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", ease: "backOut" }}
            >
              <div className="flex justify-end w-full">
                <div>
                  <XCircleIcon
                    className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
                    onClick={closeModalTicketSent}
                  />
                </div>
              </div>
              <div className="mt-6 text-center mx-10">
                <Image src={allset} alt="allset" className="mx-auto mb-5" />
                <h3 className="text-[#240552] font-[700] text-[20px] leading-[27px]">
                  Ticket Sent
                </h3>
                <p className="my-5 text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
                  Ticket has been sent to your email successfully
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </Modal>
      )}
    </section>
  );
}
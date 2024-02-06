"use client";
import React, { useState } from "react";
import Link from "next/link";
import circle from "../../../assets/card and bank.svg";
import icon from "../../../assets/kodex.svg";
import save from "../../../assets/save.svg";
import down from "../../../assets/file-down.svg";
import msg from "../../../assets/msg.svg";

import Image from "next/image";
import NavBar from "@/components/navbar";
import { Icon } from "@iconify-icon/react";
import FloatingLabelInput from "@/components/inputfield";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/modal";
import { XCircleIcon } from "lucide-react";

export default function Statements() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <section>
      <NavBar>
        <div>
          <h1 className="text-[24px] text-[#240552] leading-[33px] font-[700] mb-1">
            Generate Statement
          </h1>
          <p className="text-[#9CA3AF] text-[12px] font-[500]">
            Generate all your transaction statements
          </p>
        </div>
      </NavBar>
      <main className="flex items-center justify-center h-[88vh]">
        {activeStep === 0 && (
          <div className="bg-white p-9 md:w-1/2 border border-[#E5E7EB] rounded-[8px] container-gradient">
            <div className="w-2/3 mx-auto my-9">
              <Image src={circle} alt="circle" className="mx-auto" />
              <h2 className="text-center text-[#240552] text-[30px] leading-[40px] mt-5 font-[founder]">
                Generate Statement
              </h2>
              <p className="text-center text-[#9CA3AF] text-[14px] leading-[24px] font-[400] mb-9">
                Generate all your transaction statements
              </p>
              <div
                className="border border-[#240552] p-5 rounded-[4px] mb-4 cursor-pointer"
                onClick={handleNext}
              >
                <div className="flex flex-row items-center">
                  <div className="flex-none">
                    <Image src={icon} alt="kodex" />
                  </div>
                  <div className="grow mx-4">
                    <h2 className="text-[#240552] text-[14px] font-[700] leading-[20px] me-4">
                      KodHex
                    </h2>
                    <p className="text-[#9CA3AF] text-[10px] leading-[12px] font-[500]">
                      Generate statement for your Kodhex
                    </p>
                  </div>
                  <div className="flex-none">
                    <Icon
                      icon="teenyicons:right-outline"
                      className="text-[#240552]"
                    />
                  </div>
                </div>
              </div>
              <Link href="/dashboard/statement/savings">
                <div className="border border-[#240552] p-5 rounded-[4px]">
                  <div className="flex flex-row items-center">
                    <div className="flex-none">
                      <Image src={save} alt="kodex" />
                    </div>
                    <div className="grow mx-4">
                      <h2 className="text-[#240552] text-[14px] font-[700] leading-[20px] me-4">
                        Savings
                      </h2>
                      <p className="text-[#9CA3AF] text-[10px] leading-[12px] font-[500]">
                        Choose which savings plans you need a statement for
                      </p>
                    </div>
                    <div className="flex-none">
                      <Icon
                        icon="teenyicons:right-outline"
                        className="text-[#240552]"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="bg-white md:w-1/2 border border-[#E5E7EB] rounded-[8px] container-gradient">
            <div className="bg-[#FCB40C] p-5 text-center rounded-t-[8px]">
              <p className="text-white text-[12px] leading-[16px] font-[700]">
                You can only generate 1 year statement
              </p>
            </div>
            <div className="w-2/3 mx-auto my-16">
              <Image src={circle} alt="circle" className="mx-auto" />
              <h2 className="text-center text-[#240552] text-[30px] leading-[40px] mt-5 font-[founder]">
                Generate Statement
              </h2>
              <div className="mt-[-34px]">
                <button onClick={handleBack}>
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="15.0625"
                      cy="15.8398"
                      r="14.5"
                      fill="white"
                      stroke="#F3F4F6"
                    />
                    <path
                      d="M16.8875 21.1479L11.9729 16.2479C11.9146 16.1896 11.8734 16.1264 11.8492 16.0583C11.8247 15.9903 11.8125 15.9174 11.8125 15.8396C11.8125 15.7618 11.8247 15.6889 11.8492 15.6208C11.8734 15.5528 11.9146 15.4896 11.9729 15.4312L16.8875 10.5167C17.0236 10.3806 17.1937 10.3125 17.3979 10.3125C17.6021 10.3125 17.7771 10.3854 17.9229 10.5312C18.0687 10.6771 18.1417 10.8472 18.1417 11.0417C18.1417 11.2361 18.0687 11.4062 17.9229 11.5521L13.6354 15.8396L17.9229 20.1271C18.059 20.2632 18.1271 20.4308 18.1271 20.6299C18.1271 20.8294 18.0542 21.0021 17.9083 21.1479C17.7625 21.2937 17.5924 21.3667 17.3979 21.3667C17.2035 21.3667 17.0333 21.2937 16.8875 21.1479Z"
                      fill="#240552"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-center text-[#9CA3AF] text-[14px] leading-[24px] font-[400] mb-9">
                This statement will be sent to a***********w@gmail.com
              </p>
              <form>
                <FloatingLabelInput
                  id="firstName"
                  label="Start Date"
                  type="text"
                />
                <FloatingLabelInput
                  id="lastName"
                  label="End Date"
                  type="text"
                />
                <button
                  className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px] mt-3"
                  type="button"
                  onClick={openModal}
                >
                  Generate Statement
                </button>
                {isModalOpen && (
                  <Modal>
                    <AnimatePresence>
                      <motion.div
                        className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[30px] h-[300px] z-[50]"
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
                        <div className="mt-6">
                          <h3 className="text-[#240552] font-[founder] text-[20px] leading-[27px]">
                            Select Preference
                          </h3>
                          <div className="border border-[#240552] p-3 rounded-[4px] mb-4 cursor-pointer mt-6">
                            <div className="flex flex-row items-center">
                              <div className="flex-none">
                                <Image src={down} alt="kodex" />
                              </div>
                              <div className="grow mx-4">
                                <h2 className="text-[#051505] text-[12px] font-[500] leading-[20px] me-4">
                                  Download Statement
                                </h2>
                              </div>
                              <div className="flex-none">
                                <button className="bg-[#FFFBF0] border border-black py-2 px-3 rounded-[2px] text-[10px]">Download</button>
                              </div>
                            </div>
                          </div>
                          <div className="border border-[#240552] p-3 rounded-[4px] mb-4 cursor-pointer">
                            <div className="flex flex-row items-center">
                              <div className="flex-none">
                                <Image src={msg} alt="kodex" />
                              </div>
                              <div className="grow mx-4">
                                <h2 className="text-[#051505] text-[12px] font-[500] leading-[20px] me-4">
                                  Send Statement to my Email
                                </h2>
                              </div>
                              <div className="flex-none">
                                <svg
                                  width="33"
                                  height="32"
                                  viewBox="0 0 33 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="16.5386"
                                    cy="16.1948"
                                    r="14.9604"
                                    fill="#FCB40C"
                                    stroke="#240552"
                                    stroke-width="1.5"
                                  />
                                  <g clip-path="url(#clip0_630_35822)">
                                    <path
                                      d="M11.5391 17.7974C11.5391 16.327 11.5391 15.5913 11.9961 15.1348C12.4526 14.6777 13.1883 14.6777 14.6587 14.6777H18.8182C20.2886 14.6777 21.0243 14.6777 21.4808 15.1348C21.9378 15.5913 21.9378 16.327 21.9378 17.7974C21.9378 19.2677 21.9378 20.0035 21.4808 20.46C21.0243 20.917 20.2886 20.917 18.8182 20.917H14.6587C13.1883 20.917 12.4526 20.917 11.9961 20.46C11.5391 20.0035 11.5391 19.2677 11.5391 17.7974Z"
                                      stroke="#240552"
                                      stroke-width="0.779907"
                                    />
                                    <path
                                      d="M13.625 14.6771V13.6372C13.625 12.8098 13.9537 12.0163 14.5387 11.4313C15.1238 10.8463 15.9173 10.5176 16.7446 10.5176C17.572 10.5176 18.3655 10.8463 18.9505 11.4313C19.5356 12.0163 19.8643 12.8098 19.8643 13.6372V14.6771"
                                      stroke="#240552"
                                      stroke-width="0.779907"
                                      stroke-linecap="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_630_35822">
                                      <rect
                                        width="12.4785"
                                        height="12.4785"
                                        fill="white"
                                        transform="translate(10.5 9.47754)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </Modal>
                )}
              </form>
            </div>
          </div>
        )}
      </main>
    </section>
  );
}

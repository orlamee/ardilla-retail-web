"use client";
import React, { useState } from "react";
import circle from "../../../../assets/card and bank.svg";
import allset from "../../../../assets/allset.svg";

import Image from "next/image";
import NavBar from "@/components/navbar";
import { Icon } from "@iconify-icon/react";
import FloatingLabelInput from "@/components/inputfield";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/modal";
import { XCircleIcon } from "lucide-react";

export default function Dreams() {
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
          <p className="text-gray400 text-[12px] font-[500]">
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
                Select what dream plan you want to generate statement for
              </p>
              <div
                className="border border-[#240552] p-5 rounded-[4px] mb-4 cursor-pointer"
                onClick={handleNext}
              >
                <div className="flex flex-row items-center">
                  <div className="flex-none">
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.3648"
                        cy="19.0718"
                        r="17.574"
                        stroke="#240552"
                        stroke-width="1.23783"
                      />
                      <g clip-path="url(#clip0_2332_31611)">
                        <path
                          d="M11.5156 22.4577C11.5156 20.4174 11.5156 19.3965 12.1498 18.7631C12.7832 18.1289 13.8041 18.1289 15.8444 18.1289H21.6161C23.6565 18.1289 24.6773 18.1289 25.3108 18.7631C25.9449 19.3965 25.9449 20.4174 25.9449 22.4577C25.9449 24.498 25.9449 25.5189 25.3108 26.1523C24.6773 26.7865 23.6565 26.7865 21.6161 26.7865H15.8444C13.8041 26.7865 12.7832 26.7865 12.1498 26.1523C11.5156 25.5189 11.5156 24.498 11.5156 22.4577Z"
                          stroke="#240552"
                          stroke-width="1.0822"
                        />
                        <path
                          d="M14.4062 18.1272V16.6843C14.4062 15.5362 14.8623 14.4352 15.6741 13.6233C16.4859 12.8115 17.587 12.3555 18.735 12.3555C19.8831 12.3555 20.9842 12.8115 21.796 13.6233C22.6078 14.4352 23.0638 15.5362 23.0638 16.6843V18.1272"
                          stroke="#240552"
                          stroke-width="1.0822"
                          stroke-linecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2332_31611">
                          <rect
                            width="17.3152"
                            height="17.3152"
                            fill="white"
                            transform="translate(10.0703 10.9121)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="grow mx-4">
                    <h2 className="text-[#240552] text-[14px] font-[700] leading-[20px] me-4">
                      Car
                    </h2>
                  </div>
                  <div className="flex-none">
                    <Icon
                      icon="teenyicons:right-outline"
                      className="text-[#240552]"
                    />
                  </div>
                </div>
              </div>
              <div
                className="border border-[#240552] p-5 rounded-[4px] mb-4 cursor-pointer"
                onClick={handleNext}
              >
                <div className="flex flex-row items-center">
                  <div className="flex-none">
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.3648"
                        cy="19.0718"
                        r="17.574"
                        stroke="#240552"
                        stroke-width="1.23783"
                      />
                      <g clip-path="url(#clip0_2332_31611)">
                        <path
                          d="M11.5156 22.4577C11.5156 20.4174 11.5156 19.3965 12.1498 18.7631C12.7832 18.1289 13.8041 18.1289 15.8444 18.1289H21.6161C23.6565 18.1289 24.6773 18.1289 25.3108 18.7631C25.9449 19.3965 25.9449 20.4174 25.9449 22.4577C25.9449 24.498 25.9449 25.5189 25.3108 26.1523C24.6773 26.7865 23.6565 26.7865 21.6161 26.7865H15.8444C13.8041 26.7865 12.7832 26.7865 12.1498 26.1523C11.5156 25.5189 11.5156 24.498 11.5156 22.4577Z"
                          stroke="#240552"
                          stroke-width="1.0822"
                        />
                        <path
                          d="M14.4062 18.1272V16.6843C14.4062 15.5362 14.8623 14.4352 15.6741 13.6233C16.4859 12.8115 17.587 12.3555 18.735 12.3555C19.8831 12.3555 20.9842 12.8115 21.796 13.6233C22.6078 14.4352 23.0638 15.5362 23.0638 16.6843V18.1272"
                          stroke="#240552"
                          stroke-width="1.0822"
                          stroke-linecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2332_31611">
                          <rect
                            width="17.3152"
                            height="17.3152"
                            fill="white"
                            transform="translate(10.0703 10.9121)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="grow mx-4">
                    <h2 className="text-[#240552] text-[14px] font-[700] leading-[20px] me-4">
                      Phone
                    </h2>
                  </div>
                  <div className="flex-none">
                    <Icon
                      icon="teenyicons:right-outline"
                      className="text-[#240552]"
                    />
                  </div>
                </div>
              </div>
              <div
                className="border border-[#240552] p-5 rounded-[4px] mb-4 cursor-pointer"
                onClick={handleNext}
              >
                <div className="flex flex-row items-center">
                  <div className="flex-none">
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.3648"
                        cy="19.0718"
                        r="17.574"
                        stroke="#240552"
                        stroke-width="1.23783"
                      />
                      <g clip-path="url(#clip0_2332_31611)">
                        <path
                          d="M11.5156 22.4577C11.5156 20.4174 11.5156 19.3965 12.1498 18.7631C12.7832 18.1289 13.8041 18.1289 15.8444 18.1289H21.6161C23.6565 18.1289 24.6773 18.1289 25.3108 18.7631C25.9449 19.3965 25.9449 20.4174 25.9449 22.4577C25.9449 24.498 25.9449 25.5189 25.3108 26.1523C24.6773 26.7865 23.6565 26.7865 21.6161 26.7865H15.8444C13.8041 26.7865 12.7832 26.7865 12.1498 26.1523C11.5156 25.5189 11.5156 24.498 11.5156 22.4577Z"
                          stroke="#240552"
                          stroke-width="1.0822"
                        />
                        <path
                          d="M14.4062 18.1272V16.6843C14.4062 15.5362 14.8623 14.4352 15.6741 13.6233C16.4859 12.8115 17.587 12.3555 18.735 12.3555C19.8831 12.3555 20.9842 12.8115 21.796 13.6233C22.6078 14.4352 23.0638 15.5362 23.0638 16.6843V18.1272"
                          stroke="#240552"
                          stroke-width="1.0822"
                          stroke-linecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2332_31611">
                          <rect
                            width="17.3152"
                            height="17.3152"
                            fill="white"
                            transform="translate(10.0703 10.9121)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="grow mx-4">
                    <h2 className="text-[#240552] text-[14px] font-[700] leading-[20px] me-4">
                      House
                    </h2>
                  </div>
                  <div className="flex-none items-center">
                    <Icon
                      icon="teenyicons:right-outline"
                      className="text-[#240552]"
                    />
                  </div>
                </div>
              </div>
              <div
                className="border border-[#240552] p-5 rounded-[4px] mb-4 cursor-pointer"
                onClick={handleNext}
              >
                <div className="flex flex-row items-center">
                  <div className="flex-none">
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.3648"
                        cy="19.0718"
                        r="17.574"
                        stroke="#240552"
                        stroke-width="1.23783"
                      />
                      <g clip-path="url(#clip0_2332_31611)">
                        <path
                          d="M11.5156 22.4577C11.5156 20.4174 11.5156 19.3965 12.1498 18.7631C12.7832 18.1289 13.8041 18.1289 15.8444 18.1289H21.6161C23.6565 18.1289 24.6773 18.1289 25.3108 18.7631C25.9449 19.3965 25.9449 20.4174 25.9449 22.4577C25.9449 24.498 25.9449 25.5189 25.3108 26.1523C24.6773 26.7865 23.6565 26.7865 21.6161 26.7865H15.8444C13.8041 26.7865 12.7832 26.7865 12.1498 26.1523C11.5156 25.5189 11.5156 24.498 11.5156 22.4577Z"
                          stroke="#240552"
                          stroke-width="1.0822"
                        />
                        <path
                          d="M14.4062 18.1272V16.6843C14.4062 15.5362 14.8623 14.4352 15.6741 13.6233C16.4859 12.8115 17.587 12.3555 18.735 12.3555C19.8831 12.3555 20.9842 12.8115 21.796 13.6233C22.6078 14.4352 23.0638 15.5362 23.0638 16.6843V18.1272"
                          stroke="#240552"
                          stroke-width="1.0822"
                          stroke-linecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2332_31611">
                          <rect
                            width="17.3152"
                            height="17.3152"
                            fill="white"
                            transform="translate(10.0703 10.9121)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="grow mx-4">
                    <h2 className="text-[#240552] text-[14px] font-[700] leading-[20px] me-4">
                      Land
                    </h2>
                  </div>
                  <div className="flex-none">
                    <Icon
                      icon="teenyicons:right-outline"
                      className="text-[#240552]"
                    />
                  </div>
                </div>
              </div>
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
              <h2 className="text-center text-[#240552] text-[30px] leading-[40px] mt-5 font-[500]">
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
                        className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[400px] z-[50]"
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
                        <div className="mt-6 text-center mx-10">
                          <Image
                            src={allset}
                            alt="allset"
                            className="mx-auto mb-5"
                          />
                          <h3 className="text-[#240552] font-[700] text-[20px] leading-[27px]">
                            Statement Sent Successfully
                          </h3>
                          <p className="my-5 text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
                            Your statement has been sent to
                            a**************t@gmail.com
                          </p>
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

"use client";
import React, { useState } from "react";
import Link from "next/link";
import circle from "../../../../assets/card and bank.svg";
import allset from "../../../../assets/allset.svg";

import Image from "next/image";
import NavBar from "@/components/navbar";
import { Icon } from "@iconify-icon/react";
import FloatingLabelInput from "@/components/inputfield";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/modal";
import { XCircleIcon } from "lucide-react";

export default function Savings() {
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
                Select what savings plan you want to generate statement for
              </p>
              <div
                className="border border-[#240552] p-5 rounded-[4px] mb-4 cursor-pointer"
                onClick={handleNext}
              >
                <div className="flex flex-row items-center">
                  <div className="flex-none">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18.396"
                        cy="18.4468"
                        r="17.574"
                        stroke="#240552"
                        stroke-width="1.23783"
                      />
                      <path
                        d="M18.5926 23.0431L18.5956 23.0442C18.6389 23.0611 18.6966 23.0733 18.7746 23.0733C18.852 23.0733 18.9256 23.0612 18.9972 23.0372L18.9985 23.0368C19.0576 23.0172 19.0938 22.9925 19.1182 22.9681L19.1258 22.9604L19.1338 22.9532C19.7347 22.4095 20.2188 21.7295 20.5833 20.9054L20.5834 20.9053C20.9478 20.082 21.1265 19.2635 21.1265 18.4469C21.1265 17.6303 20.9478 16.8115 20.5834 15.9875L18.5926 23.0431ZM18.5926 23.0431C18.5428 23.0242 18.4884 22.9935 18.4298 22.9453C17.8171 22.4025 17.3285 21.725 16.966 20.9054L16.9659 20.9053M18.5926 23.0431L16.9659 20.9053M16.9659 20.9053C16.6015 20.082 16.4228 19.2635 16.4228 18.4469M16.9659 20.9053L16.4228 18.4469M16.4228 18.4469C16.4228 17.6303 16.6015 16.8115 16.9659 15.9875L16.4228 18.4469ZM21.3535 24.4043L21.3534 24.4043C21.2389 24.3819 21.1254 24.3559 21.013 24.3265C21.6587 23.7232 22.1805 22.9273 22.5862 21.956C23.1122 20.6967 23.3856 19.525 23.3856 18.4469C23.3856 17.3688 23.1122 16.1971 22.5862 14.9377C22.1805 13.9665 21.6587 13.1706 21.013 12.5673C21.1254 12.5378 21.2389 12.5119 21.3534 12.4894L21.3535 12.4894C21.7192 12.4177 22.0973 12.3815 22.4881 12.3815C24.1856 12.3815 25.6103 12.9676 26.7884 14.1457C27.9672 15.3245 28.5535 16.7495 28.5535 18.4469C28.5535 20.1442 27.9672 21.5689 26.7885 22.7471L26.7883 22.7472C25.6102 23.9259 24.1855 24.5123 22.4881 24.5123C22.0973 24.5123 21.7192 24.4761 21.3535 24.4043ZM10.761 22.7472L10.7608 22.7471C9.58211 21.5689 8.99574 20.1442 8.99574 18.4469C8.99574 16.7495 9.58212 15.3245 10.7609 14.1457C11.939 12.9676 13.3637 12.3815 15.0611 12.3815C15.452 12.3815 15.83 12.4177 16.1957 12.4894L16.1959 12.4894C16.3104 12.5119 16.4239 12.5378 16.5362 12.5673C15.8906 13.1706 15.3688 13.9665 14.9631 14.9377C14.437 16.1971 14.1637 17.3688 14.1637 18.4469C14.1637 19.525 14.437 20.6967 14.9631 21.956C15.3688 22.9273 15.8906 23.7232 16.5362 24.3265C16.4239 24.3559 16.3104 24.3819 16.1959 24.4043L16.1957 24.4043C15.83 24.4761 15.452 24.5123 15.0611 24.5123C13.3638 24.5123 11.9391 23.9259 10.761 22.7472ZM16.966 15.9874C17.329 15.1672 17.8107 14.4896 18.4084 13.947C18.468 13.8983 18.5307 13.8603 18.5972 13.8319L18.4265 13.4336L18.5972 13.8319C18.6488 13.8097 18.7065 13.7973 18.7746 13.7973C18.8428 13.7973 18.8923 13.8097 18.9301 13.827C18.9915 13.8555 19.0546 13.895 19.1194 13.9484C19.7321 14.4912 20.2208 15.1684 20.5833 15.9874H16.966ZM21.2701 12.0643L21.2701 12.0643L21.2701 12.0643Z"
                        stroke="#240552"
                        stroke-width="0.866484"
                      />
                    </svg>
                  </div>
                  <div className="grow mx-4">
                    <h2 className="text-[#240552] text-[14px] font-[700] leading-[20px] me-4">
                      Vault Lite
                    </h2>
                    <p className="text-[#9CA3AF] text-[10px] leading-[12px] font-[500]">
                      Generate statement for your Vault Lite
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
              <Link href="/dashboard/statement/others">
                <div className="border border-[#240552] p-5 rounded-[4px] mb-4">
                  <div className="flex flex-row">
                    <div className="flex-none">
                      <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="18.396"
                          cy="18.4468"
                          r="17.574"
                          stroke="#240552"
                          stroke-width="1.23783"
                        />
                        <path
                          d="M18.5926 23.0431L18.5956 23.0442C18.6389 23.0611 18.6966 23.0733 18.7746 23.0733C18.852 23.0733 18.9256 23.0612 18.9972 23.0372L18.9985 23.0368C19.0576 23.0172 19.0938 22.9925 19.1182 22.9681L19.1258 22.9604L19.1338 22.9532C19.7347 22.4095 20.2188 21.7295 20.5833 20.9054L20.5834 20.9053C20.9478 20.082 21.1265 19.2635 21.1265 18.4469C21.1265 17.6303 20.9478 16.8115 20.5834 15.9875L18.5926 23.0431ZM18.5926 23.0431C18.5428 23.0242 18.4884 22.9935 18.4298 22.9453C17.8171 22.4025 17.3285 21.725 16.966 20.9054L16.9659 20.9053M18.5926 23.0431L16.9659 20.9053M16.9659 20.9053C16.6015 20.082 16.4228 19.2635 16.4228 18.4469M16.9659 20.9053L16.4228 18.4469M16.4228 18.4469C16.4228 17.6303 16.6015 16.8115 16.9659 15.9875L16.4228 18.4469ZM21.3535 24.4043L21.3534 24.4043C21.2389 24.3819 21.1254 24.3559 21.013 24.3265C21.6587 23.7232 22.1805 22.9273 22.5862 21.956C23.1122 20.6967 23.3856 19.525 23.3856 18.4469C23.3856 17.3688 23.1122 16.1971 22.5862 14.9377C22.1805 13.9665 21.6587 13.1706 21.013 12.5673C21.1254 12.5378 21.2389 12.5119 21.3534 12.4894L21.3535 12.4894C21.7192 12.4177 22.0973 12.3815 22.4881 12.3815C24.1856 12.3815 25.6103 12.9676 26.7884 14.1457C27.9672 15.3245 28.5535 16.7495 28.5535 18.4469C28.5535 20.1442 27.9672 21.5689 26.7885 22.7471L26.7883 22.7472C25.6102 23.9259 24.1855 24.5123 22.4881 24.5123C22.0973 24.5123 21.7192 24.4761 21.3535 24.4043ZM10.761 22.7472L10.7608 22.7471C9.58211 21.5689 8.99574 20.1442 8.99574 18.4469C8.99574 16.7495 9.58212 15.3245 10.7609 14.1457C11.939 12.9676 13.3637 12.3815 15.0611 12.3815C15.452 12.3815 15.83 12.4177 16.1957 12.4894L16.1959 12.4894C16.3104 12.5119 16.4239 12.5378 16.5362 12.5673C15.8906 13.1706 15.3688 13.9665 14.9631 14.9377C14.437 16.1971 14.1637 17.3688 14.1637 18.4469C14.1637 19.525 14.437 20.6967 14.9631 21.956C15.3688 22.9273 15.8906 23.7232 16.5362 24.3265C16.4239 24.3559 16.3104 24.3819 16.1959 24.4043L16.1957 24.4043C15.83 24.4761 15.452 24.5123 15.0611 24.5123C13.3638 24.5123 11.9391 23.9259 10.761 22.7472ZM16.966 15.9874C17.329 15.1672 17.8107 14.4896 18.4084 13.947C18.468 13.8983 18.5307 13.8603 18.5972 13.8319L18.4265 13.4336L18.5972 13.8319C18.6488 13.8097 18.7065 13.7973 18.7746 13.7973C18.8428 13.7973 18.8923 13.8097 18.9301 13.827C18.9915 13.8555 19.0546 13.895 19.1194 13.9484C19.7321 14.4912 20.2208 15.1684 20.5833 15.9874H16.966ZM21.2701 12.0643L21.2701 12.0643L21.2701 12.0643Z"
                          stroke="#240552"
                          stroke-width="0.866484"
                        />
                      </svg>
                    </div>
                    <div className="grow mx-4">
                      <h2 className="text-[#240552] text-[14px] font-[700] leading-[20px] me-4">
                        Vault Extra
                      </h2>
                      <p className="text-[#9CA3AF] text-[10px] leading-[12px] font-[500]">
                        Generate statement for your Vault Extra
                      </p>
                    </div>
                    <div className="flex-none mt-[8px]">
                      <Icon
                        icon="teenyicons:right-outline"
                        className="text-[#240552]"
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/dashboard/statement/others">
                <div className="border border-[#240552] p-5 rounded-[4px] mb-4">
                  <div className="flex flex-row">
                    <div className="flex-none">
                      <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="18.396"
                          cy="18.4468"
                          r="17.574"
                          stroke="#240552"
                          stroke-width="1.23783"
                        />
                        <path
                          d="M18.5926 23.0431L18.5956 23.0442C18.6389 23.0611 18.6966 23.0733 18.7746 23.0733C18.852 23.0733 18.9256 23.0612 18.9972 23.0372L18.9985 23.0368C19.0576 23.0172 19.0938 22.9925 19.1182 22.9681L19.1258 22.9604L19.1338 22.9532C19.7347 22.4095 20.2188 21.7295 20.5833 20.9054L20.5834 20.9053C20.9478 20.082 21.1265 19.2635 21.1265 18.4469C21.1265 17.6303 20.9478 16.8115 20.5834 15.9875L18.5926 23.0431ZM18.5926 23.0431C18.5428 23.0242 18.4884 22.9935 18.4298 22.9453C17.8171 22.4025 17.3285 21.725 16.966 20.9054L16.9659 20.9053M18.5926 23.0431L16.9659 20.9053M16.9659 20.9053C16.6015 20.082 16.4228 19.2635 16.4228 18.4469M16.9659 20.9053L16.4228 18.4469M16.4228 18.4469C16.4228 17.6303 16.6015 16.8115 16.9659 15.9875L16.4228 18.4469ZM21.3535 24.4043L21.3534 24.4043C21.2389 24.3819 21.1254 24.3559 21.013 24.3265C21.6587 23.7232 22.1805 22.9273 22.5862 21.956C23.1122 20.6967 23.3856 19.525 23.3856 18.4469C23.3856 17.3688 23.1122 16.1971 22.5862 14.9377C22.1805 13.9665 21.6587 13.1706 21.013 12.5673C21.1254 12.5378 21.2389 12.5119 21.3534 12.4894L21.3535 12.4894C21.7192 12.4177 22.0973 12.3815 22.4881 12.3815C24.1856 12.3815 25.6103 12.9676 26.7884 14.1457C27.9672 15.3245 28.5535 16.7495 28.5535 18.4469C28.5535 20.1442 27.9672 21.5689 26.7885 22.7471L26.7883 22.7472C25.6102 23.9259 24.1855 24.5123 22.4881 24.5123C22.0973 24.5123 21.7192 24.4761 21.3535 24.4043ZM10.761 22.7472L10.7608 22.7471C9.58211 21.5689 8.99574 20.1442 8.99574 18.4469C8.99574 16.7495 9.58212 15.3245 10.7609 14.1457C11.939 12.9676 13.3637 12.3815 15.0611 12.3815C15.452 12.3815 15.83 12.4177 16.1957 12.4894L16.1959 12.4894C16.3104 12.5119 16.4239 12.5378 16.5362 12.5673C15.8906 13.1706 15.3688 13.9665 14.9631 14.9377C14.437 16.1971 14.1637 17.3688 14.1637 18.4469C14.1637 19.525 14.437 20.6967 14.9631 21.956C15.3688 22.9273 15.8906 23.7232 16.5362 24.3265C16.4239 24.3559 16.3104 24.3819 16.1959 24.4043L16.1957 24.4043C15.83 24.4761 15.452 24.5123 15.0611 24.5123C13.3638 24.5123 11.9391 23.9259 10.761 22.7472ZM16.966 15.9874C17.329 15.1672 17.8107 14.4896 18.4084 13.947C18.468 13.8983 18.5307 13.8603 18.5972 13.8319L18.4265 13.4336L18.5972 13.8319C18.6488 13.8097 18.7065 13.7973 18.7746 13.7973C18.8428 13.7973 18.8923 13.8097 18.9301 13.827C18.9915 13.8555 19.0546 13.895 19.1194 13.9484C19.7321 14.4912 20.2208 15.1684 20.5833 15.9874H16.966ZM21.2701 12.0643L21.2701 12.0643L21.2701 12.0643Z"
                          stroke="#240552"
                          stroke-width="0.866484"
                        />
                      </svg>
                    </div>
                    <div className="grow mx-4">
                      <h2 className="text-[#240552] text-[14px] font-[700] leading-[20px] me-4">
                        Vault Premium
                      </h2>
                      <p className="text-[#9CA3AF] text-[10px] leading-[12px] font-[500]">
                        Generate statement for your Vault Premium
                      </p>
                    </div>
                    <div className="flex-none mt-[8px]">
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

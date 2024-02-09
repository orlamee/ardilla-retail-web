"use client";
import NavBar from "@/components/navbar";
import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import Image from "next/image";
import vector from "../../../assets/green.svg";
import one from "../../../assets/one.svg";
import two from "../../../assets/two.svg";
import three from "../../../assets/three.svg";
import orange from "../../../assets/orange.svg";
import withdraw from "../../../assets/w-icon.svg";
import divider from "../../../assets/divider.svg";
import Link from "next/link";
import Modal from "@/components/modal";
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "lucide-react";

export default function Savings() {
  const [isAmountVisible, setIsAmountVisible] = useState(false);
  const toggleAmountVisibility = () => {
    setIsAmountVisible(!isAmountVisible);
  };

  const [dropdown, setShowDropDown] = useState(false);

  const [isModalHistoryOpen, setIsModalHistoryOpen] = useState(false);

  function openModalHistory() {
    setIsModalHistoryOpen(true);
  }

  function closeModalHistory() {
    setIsModalHistoryOpen(false);
  }

  return (
    <section>
      <NavBar>
        <div>
          <h1 className="text-[24px] text-[#240552] leading-[33px] font-[700] mb-1">
            Savings
          </h1>
          <p className="text-gray400 text-[12px] font-[500]">
            Set up your account
          </p>
        </div>
      </NavBar>
      <main className="p-4 lg:p-8 bg-[#F9FAFB]">
        <div className="bg-white border border-[#EEEFF2] p-9 rounded-tl-[16px] rounded-tr-[16px] rounded-b-none mb-9">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-9">
            <div className="flex items-center justify-start">
              <div className="w-7/12">
                <div className="flex flex-row mb-4">
                  <span className="text-[#240552] font-[500] text-[14px] leading-[16px] me-2">
                    Your Dividends
                  </span>
                  <button
                    onClick={toggleAmountVisibility}
                    className="text-[#240552]"
                  >
                    {isAmountVisible ? (
                      <Icon icon="pajamas:eye" className="text-[#240552]" />
                    ) : (
                      <Icon
                        icon="pajamas:eye-slash"
                        className="text-[#240552]"
                      />
                    )}
                  </button>
                </div>
                {isAmountVisible ? (
                  <h2 className="text-[#240552] font-[700] text-[40px] leading-[48px]">
                    ₦ 0.00
                  </h2>
                ) : (
                  <h2 className="text-[#240552] font-[400] text-[40px] leading-[48px]">
                    *********
                  </h2>
                )}
                <div className="flex flex-row mt-3">
                  <div className="flex items-center">
                    <h3 className="text-[#000] font-[500] text-[13px] leading-[16px] mt-[3px]">
                      Dividends
                    </h3>
                    <Image src={vector} alt="vector" className="mx-3" />
                  </div>
                  <Image
                    src={divider}
                    alt="divide"
                    className="mx-5 w-[3px] mt-[5px]"
                  />
                  <div className="flex items-center">
                    <h3 className="text-[#000] font-[500] text-[13px] leading-[16px] mt-[3px]">
                      Withdrawal
                    </h3>
                    <Image src={orange} alt="vector" className="mx-3" />
                  </div>
                </div>
              </div>
              <div className="relative w-1/3">
                <div
                  className="cursor-pointer flex-none"
                  onClick={() => setShowDropDown(!dropdown)}
                >
                  <Icon
                    icon="entypo:dots-three-vertical"
                    className="text-[#240552]"
                  />
                </div>
                {dropdown && (
                  <div className="absolute py-5 shadow z-10 px-5 top-[40px] w-[187px] right-0 lg:right-[40px] rounded-[6px] bg-white border-[1px] border-[#E5E7EB] more-shadow">
                    <Link href={"/dashboard/savings/settings"} className="mb-2">
                      <div className="flex items-center mb-4">
                        <span className="mr-2">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.26562 1.92188V3.9072"
                              stroke="#240552"
                              stroke-width="0.992661"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.5625 1.92188V3.9072"
                              stroke="#240552"
                              stroke-width="0.992661"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.60547 9.19531H10.8997"
                              stroke="#240552"
                              stroke-width="0.992661"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.60547 11.8438H8.91434"
                              stroke="#240552"
                              stroke-width="0.992661"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11.5601 2.90625C13.7638 3.02537 14.869 3.86582 14.869 6.97616V11.0659C14.869 13.7924 14.2072 15.1557 10.8983 15.1557H6.92767C3.6188 15.1557 2.95703 13.7924 2.95703 11.0659V6.97616C2.95703 3.86582 4.06219 3.03199 6.2659 2.90625H11.5601Z"
                              stroke="#240552"
                              stroke-width="0.992661"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-[11px] font-[500] text-[#240552]">
                          Report
                        </p>
                      </div>
                    </Link>
                    <Link href={""}>
                      <div className="flex items-center mb-4">
                        <span className="mr-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.06641 6.88647V10.9111C3.06641 12.3898 3.06641 12.3898 4.46143 13.3315L8.29773 15.5495C8.87666 15.8844 9.8183 15.8844 10.3903 15.5495L14.2266 13.3315C15.6216 12.3898 15.6216 12.3898 15.6216 10.9181V6.88647C15.6216 5.41473 15.6216 5.41473 14.2266 4.47309L10.3903 2.25501C9.8183 1.92021 8.87666 1.92021 8.29773 2.25501L4.46143 4.47309C3.06641 5.41473 3.06641 5.41473 3.06641 6.88647Z"
                              stroke="#240552"
                              stroke-width="1.04626"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.33862 11.0015C10.4943 11.0015 11.4312 10.0646 11.4312 8.90894C11.4312 7.75326 10.4943 6.81641 9.33862 6.81641C8.18295 6.81641 7.24609 7.75326 7.24609 8.90894C7.24609 10.0646 8.18295 11.0015 9.33862 11.0015Z"
                              stroke="#240552"
                              stroke-width="1.04626"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-[11px] font-[500] text-[#240552]">
                          Settings
                        </p>
                      </div>
                    </Link>
                    <Link href={""}>
                      <div className="flex items-center">
                        <span className="mr-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.8447 13.3047H10.0518L6.94457 15.3715C6.48373 15.6787 5.8623 15.3506 5.8623 14.792V13.3047C3.76758 13.3047 2.37109 11.9082 2.37109 9.81352V5.62402C2.37109 3.5293 3.76758 2.13281 5.8623 2.13281H12.8447C14.9395 2.13281 16.3359 3.5293 16.3359 5.62402V9.81352C16.3359 11.9082 14.9395 13.3047 12.8447 13.3047Z"
                              stroke="#240552"
                              stroke-width="1.04736"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.35047 8.36865V8.22205C9.35047 7.74724 9.64375 7.49586 9.93701 7.29337C10.2233 7.09787 10.5095 6.84651 10.5095 6.38567C10.5095 5.74329 9.99285 5.22656 9.35047 5.22656C8.70809 5.22656 8.19141 5.74329 8.19141 6.38567"
                              stroke="#240552"
                              stroke-width="1.04736"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.34598 10.0366H9.35226"
                              stroke="#240552"
                              stroke-width="1.04736"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-[11px] font-[500] text-[#240552]">
                          FAQ
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-end mt-10">
              <div className="flex-row flex">
                <p
                  className="text-[#240552] font-[500] text-[12px] leading-[16px] cursor-pointer"
                  onClick={openModalHistory}
                >
                  View History
                </p>
                <Icon
                  icon="mingcute:right-line"
                  className="ms-1 text-[#240552]"
                />
              </div>
              {isModalHistoryOpen && (
                <Modal>
                  <AnimatePresence>
                    <motion.div
                      className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[300px] z-[50]"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "tween", ease: "backOut" }}
                    >
                      <div className="flex justify-end w-full">
                        <div>
                          <XCircleIcon
                            className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
                            onClick={closeModalHistory}
                          />
                        </div>
                      </div>
                      <div className="px-5 pb-6 text-center flex flex-col justify-center items-center">
                        <h2 className="text-[#000] text-[20px] leading-[24px] font-[600]">
                          History
                        </h2>
                        <p className="text-[#9CA3AF] text-[12px] leading-[20px] font-[500]">
                          All your saving history
                        </p>
                      </div>
                      <div className="border border-[#F3F4F6] rounded-[8px] px-3 py-4 mx-2">
                        <div className="flex flex-row items-center mb-3">
                          <div className="flex-none">
                            <Image src={withdraw} alt="with" className="w-[50px]" />
                          </div>
                          <div className="grow mx-3">
                            <h3 className="text-black text-[12px] leading-[20px] font-[500]">
                              Withdrawal - Wallet
                            </h3>
                            <h6 className="text-[#9CA3AF] text-[10px] leading-[16px] font-[500]">
                              Tue, 22nd December, 2023 09:40 PM
                            </h6>
                          </div>
                          <div>
                            <p className="text-[#000] text-[12px] leading-[20px] font-[500]">
                              -₦ 4,000.00{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row mb-3 items-center">
                          <div className="flex-none">
                            <Image src={withdraw} alt="with" className="w-[50px]" />
                          </div>
                          <div className="grow mx-3">
                            <h3 className="text-black text-[12px] leading-[20px] font-[500]">
                              Withdrawal - Wallet
                            </h3>
                            <h6 className="text-[#9CA3AF] text-[10px] leading-[16px] font-[500]">
                              Tue, 22nd December, 2023 09:40 PM
                            </h6>
                          </div>
                          <div>
                            <p className="text-[#000] text-[12px] leading-[20px] font-[500]">
                              -₦ 4,000.00{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </Modal>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-20 mb-9">
          <Image src={one} alt="divide" className="w-full" />
          <Image src={two} alt="two" className="w-full" />
          <Image src={three} alt="three" className="w-full" />
        </div>
        <div className="bg-white border border-[#EEEFF2] px-6 py-4 rounded-tl-[16px] rounded-tr-[16px] rounded-b-none mb-4">
          <h6 className="text-[#240552] font-[500] text-[14px] leading-[19px]">
            Select a Savings Plan
          </h6>
        </div>
        <div className="bg-white border border-[#EEEFF2] p-9 mb-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
            <Link href={"/dashboard/vault/new"}>
              <div className="border-[#000] border rounded-[18px] p-9 shadow-[6px_6px_black]">
                <div className="flex items-center mb-4">
                  <div className="flex-none">
                    <svg
                      width="44"
                      height="45"
                      viewBox="0 0 44 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="21.8379"
                        cy="22.4473"
                        r="21.6504"
                        fill="#3B82F6"
                      />
                      <path
                        d="M21.5158 27.3193L21.5126 27.318C21.4584 27.2974 21.3994 27.2641 21.3356 27.2117C20.6699 26.6219 20.1389 25.8858 19.745 24.9951L19.7449 24.995C19.3489 24.1003 19.1547 23.2109 19.1547 22.3235C19.1547 21.4361 19.3489 20.5463 19.745 19.6509C20.1395 18.7596 20.663 18.0233 21.3124 17.4337C21.3771 17.3807 21.4453 17.3395 21.5175 17.3086C21.5737 17.2845 21.6364 17.271 21.7104 17.271C21.7845 17.271 21.8383 17.2845 21.8794 17.3033C21.946 17.3343 22.0147 17.3772 22.085 17.4352C22.7508 18.025 23.2818 18.7609 23.6758 19.6509C24.0719 20.5463 24.2661 21.4361 24.2661 22.3235C24.2661 23.2109 24.0719 24.1003 23.6758 24.995L23.6758 24.9951C23.2797 25.8906 22.7536 26.6296 22.1007 27.2203L22.092 27.2282L22.0837 27.2365C22.0571 27.263 22.0179 27.2899 21.9536 27.3112L21.9522 27.3117C21.8744 27.3377 21.7945 27.3508 21.7104 27.3508C21.6256 27.3508 21.5628 27.3376 21.5158 27.3193ZM24.5128 28.7972L24.5126 28.7972C24.3882 28.7728 24.2649 28.7446 24.1427 28.7126C24.8444 28.057 25.4114 27.1922 25.8522 26.1368C26.4239 24.7683 26.7209 23.4951 26.7209 22.3235C26.7209 21.152 26.4239 19.8787 25.8522 18.5103C25.4114 17.4548 24.8444 16.59 24.1427 15.9344C24.2649 15.9024 24.3882 15.8742 24.5126 15.8498L24.5128 15.8498C24.9102 15.7718 25.3209 15.7325 25.7457 15.7325C27.5902 15.7325 29.1384 16.3694 30.4186 17.6496C31.6995 18.9305 32.3367 20.4791 32.3367 22.3235C32.3367 24.1679 31.6995 25.7161 30.4187 26.9963L30.4185 26.9965C29.1383 28.2773 27.5901 28.9145 25.7457 28.9145C25.3209 28.9145 24.9102 28.8752 24.5128 28.7972ZM13.0022 26.9965L13.0021 26.9963C11.7213 25.7161 11.0841 24.1679 11.0841 22.3235C11.0841 20.4791 11.7213 18.9305 13.0022 17.6496C14.2824 16.3694 15.8306 15.7325 17.6751 15.7325C18.0998 15.7325 18.5106 15.7718 18.908 15.8498L18.9081 15.8498C19.0326 15.8742 19.1559 15.9024 19.278 15.9344C18.5764 16.59 18.0094 17.4548 17.5685 18.5103C16.9969 19.8787 16.6999 21.152 16.6999 22.3235C16.6999 23.4951 16.9969 24.7683 17.5685 26.1367C18.0094 27.1922 18.5764 28.057 19.278 28.7126C19.1559 28.7446 19.0326 28.7728 18.9081 28.7972L18.908 28.7972C18.5106 28.8752 18.0998 28.9145 17.6751 28.9145C15.8306 28.9145 14.2825 28.2773 13.0022 26.9965Z"
                        stroke="black"
                        stroke-width="0.941572"
                      />
                    </svg>
                  </div>
                  <div className="grow ms-3">
                    <h3 className="text-[24px] leading-[32px] font-[700] text-black">
                      Vault Lite
                    </h3>
                  </div>
                  <div className="flex-none">
                    <button className="bg-[#3B82F6] text-[#000] rounded-[7px] p-3 font-[500] text-[13px] leading-[18px]">
                      Create Vault Lite
                    </button>
                  </div>
                </div>
                <h6 className="text-[#000000] text-[16px] leading-[24px] font-[400]">
                  Start small at 8% perannum & win big on vault
                </h6>
              </div>
            </Link>
            <Link href={"/dashboard/vault/new"}>
              <div className="border-[#000] border rounded-[18px] p-9 shadow-[6px_6px_black]">
                <div className="flex items-center mb-4">
                  <div className="flex-none">
                    <svg
                      width="44"
                      height="45"
                      viewBox="0 0 44 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="22.0224"
                        cy="22.4473"
                        r="21.6504"
                        fill="#5342F2"
                      />
                      <path
                        d="M21.7004 27.3193L21.6971 27.318C21.643 27.2974 21.5839 27.2641 21.5202 27.2117C20.8545 26.6219 20.3235 25.8858 19.9295 24.9951L19.9295 24.995C19.5335 24.1003 19.3393 23.2109 19.3393 22.3235C19.3393 21.4361 19.5335 20.5463 19.9295 19.6509C20.3241 18.7596 20.8475 18.0233 21.497 17.4337C21.5617 17.3807 21.6299 17.3395 21.7021 17.3086C21.7582 17.2845 21.8209 17.271 21.895 17.271C21.9691 17.271 22.0228 17.2845 22.0639 17.3033C22.1306 17.3343 22.1992 17.3772 22.2696 17.4352C22.9354 18.025 23.4664 18.7609 23.8604 19.6509C24.2564 20.5463 24.4506 21.4361 24.4506 22.3235C24.4506 23.2109 24.2564 24.1003 23.8604 24.995L23.8604 24.9951C23.4643 25.8906 22.9382 26.6296 22.2853 27.2203L22.2766 27.2282L22.2682 27.2365C22.2417 27.263 22.2024 27.2899 22.1382 27.3112L22.1368 27.3117C22.059 27.3377 21.9791 27.3508 21.895 27.3508C21.8101 27.3508 21.7474 27.3376 21.7004 27.3193ZM24.6973 28.7972L24.6972 28.7972C24.5727 28.7728 24.4494 28.7446 24.3273 28.7126C25.0289 28.057 25.5959 27.1922 26.0368 26.1368C26.6084 24.7683 26.9055 23.4951 26.9055 22.3235C26.9055 21.152 26.6084 19.8787 26.0368 18.5103C25.5959 17.4548 25.0289 16.59 24.3273 15.9344C24.4494 15.9024 24.5727 15.8742 24.6972 15.8498L24.6973 15.8498C25.0947 15.7718 25.5055 15.7325 25.9303 15.7325C27.7748 15.7325 29.323 16.3694 30.6032 17.6496C31.8841 18.9305 32.5213 20.4791 32.5213 22.3235C32.5213 24.1679 31.8841 25.7161 30.6032 26.9963L30.6031 26.9965C29.3229 28.2773 27.7747 28.9145 25.9303 28.9145C25.5055 28.9145 25.0947 28.8752 24.6973 28.7972ZM13.1868 26.9965L13.1867 26.9963C11.9058 25.7161 11.2686 24.1679 11.2686 22.3235C11.2686 20.4791 11.9058 18.9305 13.1867 17.6496C14.4669 16.3694 16.0151 15.7325 17.8596 15.7325C18.2844 15.7325 18.6952 15.7718 19.0926 15.8498L19.0927 15.8498C19.2172 15.8742 19.3405 15.9024 19.4626 15.9344C18.761 16.59 18.194 17.4548 17.7531 18.5103C17.1815 19.8787 16.8844 21.152 16.8844 22.3235C16.8844 23.4951 17.1815 24.7683 17.7531 26.1367C18.194 27.1922 18.761 28.057 19.4626 28.7126C19.3405 28.7446 19.2172 28.7728 19.0927 28.7972L19.0926 28.7972C18.6952 28.8752 18.2844 28.9145 17.8596 28.9145C16.0152 28.9145 14.467 28.2773 13.1868 26.9965Z"
                        stroke="white"
                        stroke-width="0.941572"
                      />
                    </svg>
                  </div>
                  <div className="grow ms-3">
                    <h3 className="text-[24px] leading-[32px] font-[700] text-black">
                      Vault Extra
                    </h3>
                  </div>
                  <div className="flex-none">
                    <button className="bg-[#5342F2] rounded-[7px] p-3 font-[500] text-[13px] leading-[18px]">
                      Create Vault Extra
                    </button>
                  </div>
                </div>
                <h6 className="text-[#000000] text-[16px] leading-[24px] font-[400]">
                  Save with determination! You get to save for a short term and
                  grow your goals
                </h6>
              </div>
            </Link>
            <Link href={"/dashboard/vault/new"}>
              <div className="border-[#000] border rounded-[18px] p-9 shadow-[6px_6px_black]">
                <div className="flex items-center mb-4">
                  <div className="flex-none">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="21.8379"
                        cy="22.1404"
                        r="21.6504"
                        fill="#22C55E"
                      />
                      <path
                        d="M21.5158 27.0124L21.5126 27.0111C21.4584 26.9906 21.3994 26.9572 21.3356 26.9048C20.6699 26.315 20.1389 25.5789 19.745 24.6882L19.7449 24.6881C19.3489 23.7934 19.1547 22.904 19.1547 22.0166C19.1547 21.1292 19.3489 20.2395 19.745 19.344C20.1395 18.4527 20.663 17.7164 21.3124 17.1268C21.3771 17.0738 21.4453 17.0326 21.5175 17.0017C21.5737 16.9776 21.6364 16.9641 21.7104 16.9641C21.7845 16.9641 21.8383 16.9776 21.8794 16.9964C21.946 17.0274 22.0147 17.0703 22.085 17.1283C22.7508 17.7182 23.2818 18.454 23.6758 19.344C24.0719 20.2395 24.2661 21.1292 24.2661 22.0166C24.2661 22.904 24.0719 23.7934 23.6758 24.6881L23.6758 24.6882C23.2797 25.5838 22.7536 26.3227 22.1007 26.9134L22.092 26.9213L22.0837 26.9296C22.0571 26.9561 22.0179 26.983 21.9536 27.0043L21.9522 27.0048C21.8744 27.0309 21.7945 27.0439 21.7104 27.0439C21.6256 27.0439 21.5628 27.0307 21.5158 27.0124ZM24.5128 28.4903L24.5126 28.4903C24.3882 28.4659 24.2649 28.4377 24.1427 28.4057C24.8444 27.7501 25.4114 26.8853 25.8522 25.8299C26.4239 24.4614 26.7209 23.1882 26.7209 22.0166C26.7209 20.8451 26.4239 19.5718 25.8522 18.2034C25.4114 17.148 24.8444 16.2831 24.1427 15.6275C24.2649 15.5955 24.3882 15.5673 24.5126 15.5429L24.5128 15.5429C24.9102 15.4649 25.3209 15.4256 25.7457 15.4256C27.5902 15.4256 29.1384 16.0625 30.4186 17.3427C31.6995 18.6236 32.3367 20.1722 32.3367 22.0166C32.3367 23.8611 31.6995 25.4092 30.4187 26.6894L30.4185 26.6896C29.1383 27.9704 27.5901 28.6076 25.7457 28.6076C25.3209 28.6076 24.9102 28.5683 24.5128 28.4903ZM13.0022 26.6896L13.0021 26.6894C11.7213 25.4092 11.0841 23.8611 11.0841 22.0166C11.0841 20.1722 11.7213 18.6236 13.0022 17.3427C14.2824 16.0625 15.8306 15.4256 17.6751 15.4256C18.0998 15.4256 18.5106 15.4649 18.908 15.5429L18.9081 15.5429C19.0326 15.5673 19.1559 15.5955 19.278 15.6275C18.5764 16.2831 18.0094 17.148 17.5685 18.2034C16.9969 19.5718 16.6999 20.8451 16.6999 22.0166C16.6999 23.1882 16.9969 24.4614 17.5685 25.8299C18.0094 26.8853 18.5764 27.7501 19.278 28.4057C19.1559 28.4377 19.0326 28.4659 18.9081 28.4903L18.908 28.4903C18.5106 28.5683 18.0998 28.6076 17.6751 28.6076C15.8306 28.6076 14.2825 27.9704 13.0022 26.6896Z"
                        stroke="black"
                        stroke-width="0.941572"
                      />
                    </svg>
                  </div>
                  <div className="grow ms-3">
                    <h3 className="text-[24px] leading-[32px] font-[700] text-black">
                      Vault Premium
                    </h3>
                  </div>
                  <div className="flex-none">
                    <button className="bg-[#22C55E] rounded-[7px] p-3 font-[500] text-[13px] leading-[18px]">
                      Create Vault Premium
                    </button>
                  </div>
                </div>
                <h6 className="text-[#000000] text-[16px] leading-[24px] font-[400]">
                  Earn a whooping 12% on your extra cash and make your money count
                  for more
                </h6>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}

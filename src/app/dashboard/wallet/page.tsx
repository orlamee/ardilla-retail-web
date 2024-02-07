"use client";
import joy from "../../../assets/joy.svg";
import one from "../../../assets/user.svg";
import more from "../../../assets/savemore.svg";
import Image from "next/image";
import { useState } from "react";
import NavBar from "@/components/navbar";
import { Icon } from '@iconify-icon/react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import savefund from "../../../assets/securefund.svg";
import recent from "../../../assets/levi.svg";
import league from "../../../assets/league.svg";

export default function Wallet() {
  const [isAmountVisible, setIsAmountVisible] = useState(false);

  const toggleAmountVisibility = () => {
    setIsAmountVisible(!isAmountVisible);
  };
  return (
    <section>
      <NavBar>
        <div>
          <p className="text-[14px] font-[500] text-gray400">Good morning</p>
          <h1 className="text-[26px] font-[700]">Moyosore</h1>
        </div>
      </NavBar>
      <main className="px-4 lg:px-8 mt-[50px]">
        <div className="bg-[#F9F5FF] rounded-[16px] py-16 px-8">
          <div className="flex flex-row items-center justify-between">
            <div>
              <div className="flex flex-row mb-4">
                <span className="text-[#240552] font-[500] text-[14px] leading-[16px] me-2">
                  Wallet Balance
                </span>
                <button
                  onClick={toggleAmountVisibility}
                  className="text-[#240552]"
                >
                  {isAmountVisible ? (
                    <Icon icon="pajamas:eye" className="text-[#240552]" />
                  ) : (
                    <Icon icon="pajamas:eye-slash" className="text-[#240552]" />
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
            </div>
            <div className="">
              <button className="inline-flex items-center bg-[#22C55E] border border-[#000] py-4 px-5 shadow-[2px_3px_black] rounded-[8px]">
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0338 18.8568C15.6759 18.8568 19.4739 15.0587 19.4739 10.4167C19.4739 5.77461 15.6759 1.97656 11.0338 1.97656C6.39179 1.97656 2.59375 5.77461 2.59375 10.4167C2.59375 15.0587 6.39179 18.8568 11.0338 18.8568Z"
                    stroke="black"
                    stroke-width="1.26602"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.66016 10.418H14.4122"
                    stroke="black"
                    stroke-width="1.26602"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.0352 13.795V7.04297"
                    stroke="black"
                    stroke-width="1.26602"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="ms-2 text-[10px] leading-[15px] font-[700]">
                  Add
                </span>
              </button>
              <button className="inline-flex items-center bg-[#FCB40C] border border-[#000] py-4 px-5 shadow-[2px_3px_black] rounded-[8px] mx-6">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.36057 5.62521L13.5262 3.23666C16.7419 2.16477 18.489 3.92031 17.4255 7.13599L15.037 14.3016C13.4334 19.1209 10.8001 19.1209 9.19644 14.3016L8.48747 12.1747L6.36057 11.4658C1.54127 9.86214 1.54127 7.23727 6.36057 5.62521Z"
                    stroke="black"
                    stroke-width="1.26602"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.64453 11.8073L11.6661 8.77734"
                    stroke="black"
                    stroke-width="1.26602"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ms-2 text-[10px] leading-[15px] font-[700]">
                  Send
                </span>
              </button>
              <button className="inline-flex items-center bg-[#F97316] border border-[#000] py-4 px-5 shadow-[2px_3px_black] rounded-[8px] me-6">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.284 15.2107L7.11832 17.5993C3.90264 18.6712 2.15554 16.9156 3.21899 13.6999L5.60754 6.5343C7.21116 1.71501 9.84447 1.71501 11.4481 6.5343L12.1571 8.66121L14.284 9.37018C19.1033 10.9738 19.1033 13.5987 14.284 15.2107Z"
                    stroke="black"
                    stroke-width="1.26602"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 9.0286L8.97844 12.0586"
                    stroke="black"
                    stroke-width="1.26602"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ms-2 text-[10px] leading-[15px] font-[700]">
                  Receive
                </span>
              </button>
              <button className="inline-flex items-center bg-[#240552] border border-[#000] py-4 px-5 shadow-[2px_3px_black] rounded-[8px]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.66344 2.47425L16.3484 5.1482C16.6083 5.25219 16.8163 5.56415 16.8163 5.83897V8.30497C16.8163 8.71349 16.4821 9.04774 16.0735 9.04774H2.70371C2.29518 9.04774 1.96094 8.71349 1.96094 8.30497V5.83897C1.96094 5.56415 2.16892 5.25219 2.42889 5.1482L9.1138 2.47425C9.26235 2.41483 9.51489 2.41483 9.66344 2.47425Z"
                    stroke="white"
                    stroke-width="1.11415"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.8163 17.2133H1.96094V14.985C1.96094 14.5764 2.29518 14.2422 2.70371 14.2422H16.0735C16.4821 14.2422 16.8163 14.5764 16.8163 14.985V17.2133Z"
                    stroke="white"
                    stroke-width="1.11415"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.44531 14.2463V9.04688"
                    stroke="white"
                    stroke-width="1.11415"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.42188 14.2463V9.04688"
                    stroke="white"
                    stroke-width="1.11415"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.38281 14.2463V9.04688"
                    stroke="white"
                    stroke-width="1.11415"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.3594 14.2463V9.04688"
                    stroke="white"
                    stroke-width="1.11415"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3281 14.2463V9.04688"
                    stroke="white"
                    stroke-width="1.11415"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.21875 17.2148H17.5597"
                    stroke="white"
                    stroke-width="1.11415"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.38759 7.18534C10.0029 7.18534 10.5017 6.68651 10.5017 6.07118C10.5017 5.45585 10.0029 4.95703 9.38759 4.95703C8.77226 4.95703 8.27344 5.45585 8.27344 6.07118C8.27344 6.68651 8.77226 7.18534 9.38759 7.18534Z"
                    stroke="white"
                    stroke-width="1.11415"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="ms-2 text-[10px] text-[#fff] leading-[15px] font-[700]">
                  Account Details
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-[50px]">
          <div className="w-full sm:w-5/12">
            <div className="border border-[#E5E7EB] rounded-[8px] p-8">
              <h4 className="text-[#000] text-[12px] leading-16px] font-[500]">Recent Transactions</h4>
              <div className="mt-5 flex flex-row gap-x-7">
                <div className="text-center">
                  <Image src={recent} alt="recent" className="mx-auto mb-3" />
                  <h6 className="text-black text-[12px] font-[500] leading-[11px] mb-2">Aiyeola Mathew</h6>
                  <p className="text-[#9CA3AF] text-[10px] font-[500] leading-[9px]">Levijazz</p>
                </div>
                <div className="text-center">
                  <Image src={recent} alt="recent" className="mx-auto mb-3" />
                  <h6 className="text-black text-[12px] font-[500] leading-[11px] mb-2">Aiyeola Mathew</h6>
                  <p className="text-[#9CA3AF] text-[10px] font-[500] leading-[9px]">Levijazz</p>
                </div>
                <div className="text-center">
                  <Image src={recent} alt="recent" className="mx-auto mb-3" />
                  <h6 className="text-black text-[12px] font-[500] leading-[11px] mb-2">Aiyeola Mathew</h6>
                  <p className="text-[#9CA3AF] text-[10px] font-[500] leading-[9px]">Levijazz</p>
                </div>
                <div className="text-center">
                  <Image src={recent} alt="recent" className="mx-auto mb-3" />
                  <h6 className="text-black text-[12px] font-[500] leading-[11px] mb-2">Aiyeola Mathew</h6>
                  <p className="text-[#9CA3AF] text-[10px] font-[500] leading-[9px]">Levijazz</p>
                </div>
                <div className="text-center">
                  <Image src={recent} alt="recent" className="mx-auto mb-3" />
                  <h6 className="text-black text-[12px] font-[500] leading-[11px] mb-2">Aiyeola Mathew</h6>
                  <p className="text-[#9CA3AF] text-[10px] font-[500] leading-[9px]">Levijazz</p>
                </div>
              </div>
            </div>
            <div>
              <Image src={savefund} alt="add-friend" className="w-full" />
              <Image src={league} alt="league" className="w-full" />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <ScrollArea className="px-1">
              <div className="bg-white border border-[#E5E7EB] p-6 rounded-[8px] container-gradient">
                <Tabs defaultValue="trans">
                  <div className="w-3/4">
                    <TabsList className="w-full flex mb-9 h-[50px] px-1 py-5 text-[#9CA3AF]">
                      <TabsTrigger value="trans" className="flex-grow py-3">
                        Transaction History
                      </TabsTrigger>
                      <TabsTrigger value="friends" className="flex-grow py-3">
                        Friends
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="friends">
                    <div className="">
                      <p className="text-[#9CA3AF] text-[12px] leading-[20px] font-[500] mb-6">
                        All your friends onKodHex
                      </p>
                      <div className="flex flex-row mb-6">
                        <div className="flex-none me-3">
                          <Image src={joy} alt="joy" className="w-[50px]" />
                        </div>
                        <div className="grow mt-1">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-3">
                            Joy Rebecca
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            &lt;Becca/&gt;
                          </p>
                        </div>
                        <div className="flex-none mt-3">
                          <Icon
                            icon="teenyicons:right-outline"
                            className="text-[#240552]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row mb-6">
                        <div className="flex-none me-3">
                          <Image src={joy} alt="joy" className="w-[50px]" />
                        </div>
                        <div className="grow mt-1">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-3">
                            Joy Rebecca
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            &lt;Becca/&gt;
                          </p>
                        </div>
                        <div className="flex-none mt-3">
                          <Icon
                            icon="teenyicons:right-outline"
                            className="text-[#240552]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row mb-6">
                        <div className="flex-none me-3">
                          <Image src={joy} alt="joy" className="w-[50px]" />
                        </div>
                        <div className="grow mt-1">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-3">
                            Joy Rebecca
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            &lt;Becca/&gt;
                          </p>
                        </div>
                        <div className="flex-none mt-3">
                          <Icon
                            icon="teenyicons:right-outline"
                            className="text-[#240552]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row mb-6">
                        <div className="flex-none me-3">
                          <Image src={joy} alt="joy" className="w-[50px]" />
                        </div>
                        <div className="grow mt-1">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-3">
                            Joy Rebecca
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            &lt;Becca/&gt;
                          </p>
                        </div>
                        <div className="flex-none mt-3">
                          <Icon
                            icon="teenyicons:right-outline"
                            className="text-[#240552]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="flex-none me-3">
                          <Image src={joy} alt="joy" className="w-[50px]" />
                        </div>
                        <div className="grow mt-1">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-3">
                            Joy Rebecca
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            &lt;Becca/&gt;
                          </p>
                        </div>
                        <div className="flex-none mt-3">
                          <Icon
                            icon="teenyicons:right-outline"
                            className="text-[#240552]"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="trans">
                    <div>
                      <div className="flex flex-row mb-6">
                        <div className="me-3 flex-none">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 35 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_3051_89510)">
                              <circle
                                cx="17.6367"
                                cy="16.875"
                                r="16.7188"
                                fill="#FFF5F0"
                              />
                              <path
                                d="M15.3246 24.5647H19.9354C23.7777 24.5647 25.3147 23.0277 25.3147 19.1854V14.5746C25.3147 10.7322 23.7777 9.19531 19.9354 9.19531H15.3246C11.4822 9.19531 9.94531 10.7322 9.94531 14.5746V19.1854C9.94531 23.0277 11.4822 24.5647 15.3246 24.5647Z"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.3281 14.9617L17.6335 12.6562L19.9389 14.9617"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M17.6328 12.6562V18.804"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M13.0273 20.3438C16.0167 21.3428 19.2596 21.3428 22.2489 20.3438"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3051_89510">
                                <rect
                                  width="33.4375"
                                  height="33.4375"
                                  fill="white"
                                  transform="translate(0.917969 0.15625)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="grow mt-2">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-2">
                            Payment
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            12th September, 2023 | 12:00pm
                          </p>
                        </div>
                        <div className="flex-none">
                          <button className="bg-[#FCB40C] py-2 px-4 text-[8px] leading-[10px] rounded-[4px]">
                            Pending
                          </button>
                          <div>
                            <span className="text-[#000] text-[12px] leading-[20px] font-[600]">
                              ₦ 4,000.00{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-6">
                        <div className="me-3 flex-none">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 35 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_3051_89510)">
                              <circle
                                cx="17.6367"
                                cy="16.875"
                                r="16.7188"
                                fill="#FFF5F0"
                              />
                              <path
                                d="M15.3246 24.5647H19.9354C23.7777 24.5647 25.3147 23.0277 25.3147 19.1854V14.5746C25.3147 10.7322 23.7777 9.19531 19.9354 9.19531H15.3246C11.4822 9.19531 9.94531 10.7322 9.94531 14.5746V19.1854C9.94531 23.0277 11.4822 24.5647 15.3246 24.5647Z"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.3281 14.9617L17.6335 12.6562L19.9389 14.9617"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M17.6328 12.6562V18.804"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M13.0273 20.3438C16.0167 21.3428 19.2596 21.3428 22.2489 20.3438"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3051_89510">
                                <rect
                                  width="33.4375"
                                  height="33.4375"
                                  fill="white"
                                  transform="translate(0.917969 0.15625)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="grow mt-2">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-2">
                            Payment
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            12th September, 2023 | 12:00pm
                          </p>
                        </div>
                        <div className="flex-none">
                          <button className="bg-[#FCB40C] py-2 px-4 text-[8px] leading-[10px] rounded-[4px]">
                            Pending
                          </button>
                          <div>
                            <span className="text-[#000] text-[12px] leading-[20px] font-[600]">
                              ₦ 4,000.00{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-6">
                        <div className="me-3 flex-none">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 35 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_3051_89510)">
                              <circle
                                cx="17.6367"
                                cy="16.875"
                                r="16.7188"
                                fill="#FFF5F0"
                              />
                              <path
                                d="M15.3246 24.5647H19.9354C23.7777 24.5647 25.3147 23.0277 25.3147 19.1854V14.5746C25.3147 10.7322 23.7777 9.19531 19.9354 9.19531H15.3246C11.4822 9.19531 9.94531 10.7322 9.94531 14.5746V19.1854C9.94531 23.0277 11.4822 24.5647 15.3246 24.5647Z"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.3281 14.9617L17.6335 12.6562L19.9389 14.9617"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M17.6328 12.6562V18.804"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M13.0273 20.3438C16.0167 21.3428 19.2596 21.3428 22.2489 20.3438"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3051_89510">
                                <rect
                                  width="33.4375"
                                  height="33.4375"
                                  fill="white"
                                  transform="translate(0.917969 0.15625)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="grow mt-2">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-2">
                            Payment
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            12th September, 2023 | 12:00pm
                          </p>
                        </div>
                        <div className="flex-none">
                          <button className="bg-[#FCB40C] py-2 px-4 text-[8px] leading-[10px] rounded-[4px]">
                            Pending
                          </button>
                          <div>
                            <span className="text-[#000] text-[12px] leading-[20px] font-[600]">
                              ₦ 4,000.00{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row mb-6">
                        <div className="me-3 flex-none">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 35 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_3051_89510)">
                              <circle
                                cx="17.6367"
                                cy="16.875"
                                r="16.7188"
                                fill="#FFF5F0"
                              />
                              <path
                                d="M15.3246 24.5647H19.9354C23.7777 24.5647 25.3147 23.0277 25.3147 19.1854V14.5746C25.3147 10.7322 23.7777 9.19531 19.9354 9.19531H15.3246C11.4822 9.19531 9.94531 10.7322 9.94531 14.5746V19.1854C9.94531 23.0277 11.4822 24.5647 15.3246 24.5647Z"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M15.3281 14.9617L17.6335 12.6562L19.9389 14.9617"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M17.6328 12.6562V18.804"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M13.0273 20.3438C16.0167 21.3428 19.2596 21.3428 22.2489 20.3438"
                                stroke="#FF823B"
                                stroke-width="1.1527"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3051_89510">
                                <rect
                                  width="33.4375"
                                  height="33.4375"
                                  fill="white"
                                  transform="translate(0.917969 0.15625)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="grow mt-2">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-2">
                            Payment
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            12th September, 2023 | 12:00pm
                          </p>
                        </div>
                        <div className="flex-none">
                          <button className="bg-[#FCB40C] py-2 px-4 text-[8px] leading-[10px] rounded-[4px]">
                            Pending
                          </button>
                          <div>
                            <span className="text-[#000] text-[12px] leading-[20px] font-[600]">
                              ₦ 4,000.00{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="me-3 flex-none">
                          <svg
                            width="50"
                            height="50"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="17.6387"
                              cy="17.4434"
                              r="16.7207"
                              fill="#F2FCF2"
                            />
                            <path
                              d="M15.203 23.5588H19.348C22.8021 23.5588 24.1838 22.1771 24.1838 18.723V14.578C24.1838 11.1238 22.8021 9.74219 19.348 9.74219H15.203C11.7488 9.74219 10.3672 11.1238 10.3672 14.578V18.723C10.3672 22.1771 11.7488 23.5588 15.203 23.5588Z"
                              stroke="#23A323"
                              stroke-width="1.0871"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.1992 16.3125L17.2717 18.385L19.3442 16.3125"
                              stroke="#23A323"
                              stroke-width="1.0871"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17.2734 18.386V12.8594"
                              stroke="#23A323"
                              stroke-width="1.0871"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M13.1289 19.7656C15.8162 20.6637 18.7315 20.6637 21.4189 19.7656"
                              stroke="#23A323"
                              stroke-width="1.0871"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="grow mt-2">
                          <h2 className="text-[#000] text-[12px] leading-[12px] font-[500] mb-2">
                            Top Up
                          </h2>
                          <p className="text-[#9CA3AF] text-[10px] leading-[10px] font-[500]">
                            12th September, 2023 | 12:00pm
                          </p>
                        </div>
                        <div className="flex-none">
                          <button className="bg-[#22C55E] py-2 px-4 text-[8px] leading-[10px] rounded-[4px]">
                            Successful
                          </button>
                          <div>
                            <span className="text-[#000] text-[12px] leading-[20px] font-[600]">
                              ₦ 4,000.00{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </section>
  );
}

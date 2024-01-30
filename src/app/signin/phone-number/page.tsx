/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import React, { SetStateAction, useState } from "react";
import { Icon } from '@iconify-icon/react';

export default function PhoneNumber() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
    <section className="min-h-screen flex items-stretch ">
      <div className="lg:w-1/2 w-full flex items-center justify-start md:px-16 px-0 z-0 bg-half bg-no-repeat bg-cover">
        <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
          <div className="my-10">
            <div className="min-h-[650px]">
              <h2 className="text-[#240552] font-[founder] font-[700] text-[40px] leading-[55px]">
                Welcome Back !
              </h2>
              <p className="mt-2 text-[#9CA3AF] mb-9 font-[500] text-[12px] leading-[20px]">
                Here’s how to Log in to access your account
              </p>
              <form>
                <div className="mb-4">
                  <Link
                    href="/"
                    className="text-[#240552] float-right font-[500] text-[12px] leading-[20px]"
                  >
                    Log In with KodHex
                  </Link>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="bg-[#fff] border outline-none border-[#E5E7EB] text-[#9CA3AF] text-[13px] rounded-[6px] focus:border-[#240552] block w-full p-4 dark:placeholder-gray-400"
                  />
                </div>
                <div className="mb-1 relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password-input"
                    placeholder="Enter Password"
                    className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <Icon icon="ph:eye-slash" className="text-[#D1D5DB]" />
                    ) : (
                      <Icon icon="ph:eye" className="text-[#D1D5DB]" />
                    )}
                  </button>
                </div>
                <div className="flex-row flex justify-end">
                  <p className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
                    Forgot Password?{" "}
                    <Link href="/forgot-password" className="text-[#240552]">
                      Reset
                    </Link>
                  </p>
                </div>
              </form>
              <div className="text-center mt-10">
                <h3 className=" text-[#D1D5DB] leading-[#D1D5DB] font-[500] text-[12px]">
                  Powered by Dhata
                </h3>
                <Link href="/signin/security-question">
                  <button className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px] mt-3">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex w-1/2 hidden bg-no-repeat bg-cover items-center bg-login justify-center"></div>
    </section>
  );
}

"use client";

import React, { SetStateAction, useRef, useState } from "react";
import Image from "next/image";
import back from "../../assets/back.svg";
import Link from "next/link";
import code from "../../assets/code.svg";
import OtpInput from "react18-input-otp";
import { Icon } from '@iconify-icon/react';


export default function ForgotPassword() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp: SetStateAction<string>) => {
    setOtp(enteredOtp);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };

  const dateInputRef = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    if (dateInputRef.current) {
      dateInputRef.current.setAttribute('type', 'date');
      dateInputRef.current.removeAttribute('placeholder');
    }
  };

  const onBlur = () => {
    if (dateInputRef.current && !dateInputRef.current.value) {
      dateInputRef.current.setAttribute('type', 'text');
      dateInputRef.current.setAttribute('placeholder', 'Enter Date');
    }
  };

  return (
    <section className="min-h-screen flex items-stretch ">
      <div className="lg:w-1/2 w-full flex items-center justify-start md:px-16 px-0 z-0 bg-white">
        {activeStep === 0 && (
          <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="my-10">
              <div className="min-h-[650px]">
                <h2 className="text-[#240552] font-[founder] font-[700] text-[40px] leading-[55px]">
                  Forgot Password
                </h2>
                <p className="mt-2 text-[#9CA3AF] mb-9 font-[500] text-[12px] leading-[20px]">
                  Enter your phone number to reset your password
                </p>
                <form>
                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="bg-[#fff] border outline-none border-[#E5E7EB] text-[#9CA3AF] text-[13px] rounded-[6px] focus:border-[#240552] block w-full p-4 dark:placeholder-gray-400"
                    />
                  </div>
                </form>
                <div className="text-center mt-10">
                  <button
                    className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px] mt-3"
                    onClick={handleNext}
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="my-10">
              <div className="min-h-[650px]">
                <button onClick={handleBack}>
                  <Image src={back} alt="back" className="mb-6" />
                </button>
                <h2 className="text-[#240552] font-[founder] font-[700] text-[40px] leading-[55px]">
                  Quick Question
                </h2>
                <p className="mt-2 text-[#9CA3AF] mb-9 font-[500] text-[12px] leading-[20px]">
                  Just to be safe please answer the questions below
                </p>
                <form>
                  <div className="mb-4">
                    <input
                      type="number"
                      placeholder="Enter BVN"
                      className="bg-[#fff] border outline-none border-[#E5E7EB] text-[#9CA3AF] text-[13px] rounded-[6px] focus:border-[#240552] block w-full p-4 dark:placeholder-gray-400"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      ref={dateInputRef}
                      type="text"
                      placeholder="Enter Date"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      className="bg-[#fff] border outline-none border-[#E5E7EB] text-[#9CA3AF] text-[13px] rounded-[6px] focus:border-[#240552] block w-full p-4 dark:placeholder-gray-400"
                    />
                  </div>
                </form>
                <div className="text-center mt-10">
                  <button
                    className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px] mt-3"
                    onClick={handleNext}
                  >
                    Confirm My Details
                  </button>
                </div>
                <div className="text-center mt-3">
                  <h6 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
                    Remember PIN?{" "}
                    <Link href="/" className="text-[#240552]">
                      Sign Out
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeStep === 2 && (
          <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="my-10">
              <div className="min-h-[650px]">
                <Image src={code} alt="personal" className="mb-9" />
                <h2 className="text-[#240552] font-[founder] font-[700] text-[40px] leading-[55px]">
                  Enter Verification Code
                </h2>
                <p className="mt-2 text-[#9CA3AF] mb-9 font-[500] text-[12px] leading-[20px]">
                  Enter bank verification code sent to{" "}
                  <span className="text-[#3E0E87]">091****1234</span>
                </p>
                <form className="mb-5">
                  <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={4}
                    isInputNum={true}
                    inputStyle="form-control otp-form"
                  />
                </form>
                <h6 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
                  Didn’t get OTP?{" "}
                  <Link href="#" className="text-[#240552]">
                    Resend in 40 secs
                  </Link>
                </h6>
                <div className="text-center mt-10">
                  <button
                    className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px] mt-3"
                    onClick={handleNext}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeStep === 3 && (
          <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="my-10">
              <div className="min-h-[650px]">
                <button onClick={handleBack}>
                  <Image src={back} alt="back" className="mb-6" />
                </button>
                <h2 className="text-[#240552] font-[founder] font-[700] text-[40px] leading-[55px]">
                  Set Password
                </h2>
                <p className="mt-2 text-[#9CA3AF] mb-9 font-[500] text-[12px] leading-[20px]">
                  Enter new password to secure your account
                </p>
                <form className="mb-5">
                  <div className="mb-4 relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password-input"
                      placeholder="Create Password"
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
                  <div className="mb-4 relative">
                    <input
                      type={passwordVisible2 ? "text" : "password"}
                      id="password-input"
                      placeholder="Confirm Password"
                      className="bg-[#fff] border border-[#F0F0F0] text-[#9CA3AF] text-[13px] rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-[50%] transform -translate-y-1/2 cursor-pointer"
                      onClick={togglePasswordVisibility2}
                    >
                      {passwordVisible2 ? (
                        <Icon icon="ph:eye-slash" className="text-[#D1D5DB]" />
                      ) : (
                        <Icon icon="ph:eye" className="text-[#D1D5DB]" />
                      )}
                    </button>
                  </div>
                </form>
                <div>
                  <div className="flex flex-row mb-3">
                    <div className="me-2 mt-[1px]">
                      <Icon
                        icon="icon-park-outline:check-one"
                        className="text-[#9CA3AF]"
                      />
                    </div>
                    <div>
                      <h5 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
                        At least 8 characters
                      </h5>
                    </div>
                  </div>
                  <div className="flex flex-row mb-3">
                    <div className="me-2 mt-[1px]">
                      <Icon
                        icon="icon-park-outline:check-one"
                        className="text-[#9CA3AF]"
                      />
                    </div>
                    <div>
                      <h5 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
                        Consist of letters and numbers
                      </h5>
                    </div>
                  </div>
                  <div className="flex flex-row mb-3">
                    <div className="me-2 mt-[1px]">
                      <Icon
                        icon="icon-park-outline:check-one"
                        className="text-[#9CA3AF]"
                      />
                    </div>
                    <div>
                      <h5 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
                        Password must match
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-10">
                  <button
                    className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px] mt-3"
                  >
                    Set Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
      <div className="lg:flex w-1/2 hidden bg-no-repeat bg-cover items-center bg-login justify-center"></div>
    </section>
  );
}

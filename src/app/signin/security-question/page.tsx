/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

export default function SecurityQ() {

  return (
    <section className="min-h-screen flex items-stretch ">
      <div className="lg:w-1/2 w-full flex items-center justify-start md:px-16 px-0 z-0 bg-half bg-no-repeat bg-cover">
        <div className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
          <div className="my-10">
            <div className="min-h-[650px]">
              <h2 className="text-[#240552] font-[founder] font-[700] text-[40px] leading-[55px]">
                Security Question
              </h2>
              <p className="mt-2 text-[#9CA3AF] mb-9 font-[500] text-[12px] leading-[20px]">
                Answer security question
              </p>
              <form>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="What’s your Mother’s Maiden Name?"
                    className="bg-[#fff] border outline-none border-[#E5E7EB] text-[#9CA3AF] text-[13px] rounded-[6px] focus:border-[#240552] block w-full p-4 dark:placeholder-gray-400"
                  />
                </div>
                <Link href="/signin/pin">
                  <button className="bg-[#F6F1FE] text-[#240552] mb-9 font-[500] text-[12px] p-4 rounded-[4px]">
                    or Complete your Sign In with PIN
                  </button>
                </Link>
              </form>
              <div className="text-center">
                <Link href="/dashboard">
                  <button className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px]">
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

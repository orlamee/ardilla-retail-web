"use client";
import React, { useState } from "react";
import dib from "../../../assets/dibb.svg";
import grit from "../../../assets/grit.svg";
import vault from "../../../assets/vault.svg";
import dreams from "../../../assets/dream.svg";
import post from "../../../assets/post.svg";
import card from "../../../assets/earn-reward.svg";
import video from "../../../assets/video.svg";
import mp from "../../../assets/mp.svg";
import receive from "../../../assets/re.svg";
import add from "../../../assets/add.svg";
import send from "../../../assets/send.svg";
import Image from "next/image";
import NavBar from "@/components/navbar";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";

export default function Explore() {
  return (
    <section>
      <NavBar>
        <div>
          <h1 className="text-[24px] text-[#240552] leading-[33px] font-[700] mb-1">
            Explore
          </h1>
          <p className="text-gray400 text-[12px] font-[500]">
            Explore our features on Ardila
          </p>
        </div>
      </NavBar>
      <main className="px-4 lg:px-8 my-[50px]">
        <div className="border border-[#E5E7EB] p-6 rounded-[8px] shadow">
          <div className="flex flex-row">
            <Icon
              icon="iconamoon:search-light"
              className="text-[20px] text-[#D1D5DB] me-4"
            />
            <input
              type="text"
              placeholder="Explore varieties on Ardilla"
              className="text-[12px] leading-[20px] font-[500] w-full text-[#D1D5DB] border-none outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="mt-9">
          <h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
            SAVINGS
          </h2>
          <div className="grid grid-cols-3 gap-20 mt-4">
            <div className="border border-[#000] rounded-[10px] p-7 shadow-[7px_7px_black]">
              <div className="flex flex-row mb-4">
                <svg
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-3"
                >
                  <circle
                    cx="19.8038"
                    cy="19.6202"
                    r="19.2686"
                    fill="#3B82F6"
                  />
                  <path
                    d="M19.5196 23.9518L19.5166 23.9507C19.4685 23.9324 19.4159 23.9027 19.3592 23.8561C18.7667 23.3312 18.2941 22.676 17.9435 21.8833L17.9435 21.8832C17.591 21.0869 17.4182 20.2954 17.4182 19.5056C17.4182 18.7159 17.591 17.924 17.9435 17.1271C18.2946 16.3338 18.7605 15.6785 19.3385 15.1537C19.3961 15.1066 19.4568 15.0699 19.5211 15.0424C19.571 15.021 19.6268 15.0089 19.6927 15.0089C19.7587 15.0089 19.8065 15.0209 19.8431 15.0377C19.9024 15.0652 19.9635 15.1034 20.0261 15.1551C20.6187 15.68 21.0913 16.3349 21.4419 17.127C21.7944 17.924 21.9672 18.7158 21.9672 19.5056C21.9672 20.2954 21.7944 21.0869 21.4419 21.8832L21.4419 21.8833C21.0894 22.6803 20.6212 23.338 20.0401 23.8637L20.0323 23.8707L20.0249 23.8781C20.0013 23.9017 19.9664 23.9257 19.9092 23.9446L19.9079 23.945C19.8387 23.9682 19.7676 23.9799 19.6927 23.9799C19.6172 23.9799 19.5614 23.9681 19.5196 23.9518ZM22.1868 25.2672L22.1867 25.2671C22.0759 25.2454 21.9662 25.2203 21.8575 25.1919C22.4819 24.6084 22.9865 23.8387 23.3789 22.8994C23.8877 21.6814 24.152 20.5483 24.152 19.5056C24.152 18.463 23.8877 17.3298 23.3789 16.1119C22.9865 15.1726 22.4819 14.4029 21.8575 13.8194C21.9662 13.7909 22.0759 13.7658 22.1867 13.7441L22.1868 13.7441C22.5405 13.6747 22.9061 13.6397 23.2841 13.6397C24.9257 13.6397 26.3036 14.2065 27.4429 15.3459C28.5829 16.4859 29.15 17.8641 29.15 19.5056C29.15 21.1471 28.5829 22.525 27.443 23.6644L27.4428 23.6645C26.3035 24.8045 24.9256 25.3715 23.2841 25.3715C22.9061 25.3715 22.5405 25.3366 22.1868 25.2672ZM11.9426 23.6645L11.9424 23.6644C10.8025 22.525 10.2354 21.1471 10.2354 19.5056C10.2354 17.8641 10.8025 16.4859 11.9425 15.3459C13.0818 14.2065 14.4597 13.6397 16.1013 13.6397C16.4793 13.6397 16.8449 13.6747 17.1986 13.7441L17.1987 13.7441C17.3095 13.7658 17.4192 13.7909 17.5279 13.8194C16.9035 14.4029 16.3989 15.1726 16.0065 16.1119C15.4978 17.3298 15.2334 18.463 15.2334 19.5056C15.2334 20.5483 15.4978 21.6814 16.0065 22.8994C16.3989 23.8387 16.9035 24.6084 17.5279 25.1919C17.4192 25.2203 17.3095 25.2454 17.1987 25.2671L17.1986 25.2672C16.8449 25.3366 16.4793 25.3715 16.1013 25.3715C14.4598 25.3715 13.0819 24.8045 11.9426 23.6645ZM22.1061 13.3329L22.1061 13.3329L22.1061 13.3329Z"
                    stroke="black"
                    stroke-width="0.837989"
                  />
                </svg>

                <h2 className="text-[#000] leading-[21px] font-[700] text-[16px] mt-[6px]">
                  Vault Lite
                </h2>
              </div>
              <p className="text-[#000] w-[60%] font-[500] leading-[20px] text-[12px]">
                Start small at 8% per annum & win big time on Vault.
              </p>
              <div className="text-right mt-3">
                <button className="bg-[#3B82F6] rounded-[4px] text-black py-2 px-3 font-[500] text-[10px]">
                  Create Vault lite
                </button>
              </div>
            </div>
            <div className="border border-[#000] rounded-[10px] p-7 shadow-[7px_7px_black]">
              <div className="flex flex-row mb-4">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-3"
                >
                  <circle
                    cx="19.6045"
                    cy="19.5811"
                    r="19.2686"
                    fill="#5342F2"
                  />
                  <path
                    d="M19.3125 23.9127L19.3096 23.9116C19.2615 23.8933 19.2089 23.8636 19.1521 23.817C18.5596 23.2921 18.0871 22.6369 17.7365 21.8443L17.7364 21.8442C17.384 21.0479 17.2111 20.2564 17.2111 19.4666C17.2111 18.6768 17.384 17.885 17.7364 17.0881C18.0876 16.2948 18.5535 15.6394 19.1315 15.1147C19.1891 15.0675 19.2498 15.0309 19.314 15.0033C19.364 14.9819 19.4198 14.9698 19.4857 14.9698C19.5516 14.9698 19.5994 14.9819 19.636 14.9986C19.6954 15.0262 19.7565 15.0644 19.8191 15.116C20.4117 15.641 20.8843 16.2959 21.2349 17.088C21.5874 17.8849 21.7602 18.6768 21.7602 19.4666C21.7602 20.2564 21.5874 21.0479 21.2349 21.8442L21.2349 21.8443C20.8823 22.6413 20.4142 23.2989 19.8331 23.8247L19.8253 23.8317L19.8179 23.8391C19.7943 23.8627 19.7593 23.8866 19.7022 23.9055L19.7009 23.906C19.6317 23.9292 19.5605 23.9408 19.4857 23.9408C19.4102 23.9408 19.3544 23.929 19.3125 23.9127ZM21.9798 25.2281L21.9796 25.2281C21.8689 25.2064 21.7591 25.1813 21.6504 25.1528C22.2749 24.5693 22.7795 23.7996 23.1719 22.8603C23.6806 21.6424 23.945 20.5092 23.945 19.4666C23.945 18.4239 23.6806 17.2907 23.1719 16.0728C22.7795 15.1335 22.2749 14.3638 21.6505 13.7803C21.7591 13.7518 21.8689 13.7268 21.9796 13.705L21.9798 13.705C22.3334 13.6356 22.699 13.6006 23.0771 13.6006C24.7186 13.6006 26.0965 14.1675 27.2359 15.3068C28.3759 16.4468 28.943 17.825 28.943 19.4666C28.943 21.1081 28.3759 22.486 27.236 23.6253L27.2358 23.6255C26.0964 24.7654 24.7186 25.3325 23.0771 25.3325C22.699 25.3325 22.3334 25.2975 21.9798 25.2281ZM11.7355 23.6255L11.7354 23.6253C10.5955 22.486 10.0284 21.1081 10.0284 19.4666C10.0284 17.825 10.5955 16.4468 11.7355 15.3068C12.8748 14.1675 14.2527 13.6006 15.8943 13.6006C16.2723 13.6006 16.6379 13.6356 16.9916 13.705L16.9917 13.705C17.1025 13.7268 17.2122 13.7518 17.3209 13.7803C16.6965 14.3638 16.1918 15.1335 15.7995 16.0728C15.2907 17.2907 15.0264 18.4239 15.0264 19.4666C15.0264 20.5092 15.2907 21.6424 15.7995 22.8603C16.1918 23.7996 16.6965 24.5693 17.3209 25.1528C17.2122 25.1813 17.1025 25.2064 16.9917 25.2281L16.9916 25.2281C16.6379 25.2975 16.2723 25.3325 15.8943 25.3325C14.2528 25.3325 12.8749 24.7654 11.7355 23.6255ZM21.8991 13.2939L21.8991 13.2939L21.8991 13.2939Z"
                    stroke="white"
                    stroke-width="0.837989"
                  />
                </svg>

                <h2 className="text-[#000] leading-[21px] font-[700] text-[16px] mt-[6px]">
                  Vault Extra
                </h2>
              </div>
              <p className="text-[#000] w-[60%] font-[500] leading-[20px] text-[12px]">
                Go the distance, with what you have got and earn more from Vault
                at 10%
              </p>
              <div className="text-right mt-3">
                <button className="bg-[#5342F2] rounded-[4px] text-black py-2 px-3 font-[500] text-[10px]">
                  Create Vault Extra
                </button>
              </div>
            </div>
            <div className="border border-[#000] rounded-[10px] p-7 shadow-[7px_7px_black]">
              <div className="flex flex-row mb-4">
                <svg
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-3"
                >
                  <circle
                    cx="19.7725"
                    cy="19.6202"
                    r="19.2686"
                    fill="#22C55E"
                  />
                  <path
                    d="M19.4844 23.9518L19.4815 23.9507C19.4333 23.9324 19.3808 23.9027 19.324 23.8561C18.7315 23.3312 18.259 22.676 17.9083 21.8833L17.9083 21.8832C17.5558 21.0869 17.383 20.2954 17.383 19.5056C17.383 18.7159 17.5558 17.924 17.9083 17.1271C18.2594 16.3338 18.7253 15.6785 19.3033 15.1537C19.361 15.1066 19.4216 15.0699 19.4859 15.0424C19.5359 15.021 19.5917 15.0089 19.6575 15.0089C19.7235 15.0089 19.7713 15.0209 19.8079 15.0377C19.8673 15.0652 19.9283 15.1034 19.991 15.1551C20.5836 15.68 21.0561 16.3349 21.4067 17.127C21.7592 17.924 21.9321 18.7158 21.9321 19.5056C21.9321 20.2954 21.7593 21.0869 21.4068 21.8832L21.4067 21.8833C21.0542 22.6803 20.586 23.338 20.0049 23.8637L19.9972 23.8707L19.9898 23.8781C19.9662 23.9017 19.9312 23.9257 19.8741 23.9446L19.8728 23.945C19.8035 23.9682 19.7324 23.9799 19.6575 23.9799C19.5821 23.9799 19.5262 23.9681 19.4844 23.9518ZM22.1516 25.2672L22.1515 25.2671C22.0407 25.2454 21.931 25.2203 21.8223 25.1919C22.4468 24.6084 22.9514 23.8387 23.3438 22.8994C23.8525 21.6814 24.1168 20.5483 24.1168 19.5056C24.1168 18.463 23.8525 17.3298 23.3438 16.1119C22.9514 15.1726 22.4468 14.4029 21.8223 13.8194C21.931 13.7909 22.0407 13.7658 22.1515 13.7441L22.1516 13.7441C22.5053 13.6747 22.8709 13.6397 23.2489 13.6397C24.8905 13.6397 26.2684 14.2065 27.4078 15.3459C28.5478 16.4859 29.1149 17.8641 29.1149 19.5056C29.1149 21.1471 28.5478 22.525 27.4078 23.6644L27.4077 23.6645C26.2683 24.8045 24.8905 25.3715 23.2489 25.3715C22.8709 25.3715 22.5053 25.3366 22.1516 25.2672ZM11.9074 23.6645L11.9073 23.6644C10.7673 22.525 10.2002 21.1471 10.2002 19.5056C10.2002 17.8641 10.7673 16.4859 11.9073 15.3459C13.0467 14.2065 14.4246 13.6397 16.0662 13.6397C16.4442 13.6397 16.8098 13.6747 17.1635 13.7441L17.1636 13.7441C17.2744 13.7658 17.3841 13.7909 17.4928 13.8194C16.8683 14.4029 16.3637 15.1726 15.9713 16.1119C15.4626 17.3298 15.1983 18.463 15.1983 19.5056C15.1983 20.5483 15.4626 21.6814 15.9713 22.8994C16.3637 23.8387 16.8683 24.6084 17.4928 25.1919C17.3841 25.2203 17.2744 25.2454 17.1636 25.2671L17.1635 25.2672C16.8098 25.3366 16.4442 25.3715 16.0662 25.3715C14.4246 25.3715 13.0468 24.8045 11.9074 23.6645ZM22.071 13.3329L22.071 13.3329L22.071 13.3329Z"
                    stroke="black"
                    stroke-width="0.837989"
                  />
                </svg>

                <h2 className="text-[#000] leading-[21px] font-[700] text-[16px] mt-[6px]">
                  Vault Premium
                </h2>
              </div>
              <p className="text-[#000] w-[60%] font-[500] leading-[20px] text-[12px]">
                Earn a whopping 12% on your extra cash and make your money count
                for more
              </p>
              <div className="text-right mt-3">
                <button className="bg-[#22C55E] rounded-[4px] text-black py-2 px-3 font-[500] text-[10px]">
                  Create Vault Premium
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
            PAYMENT
          </h2>
          <div className="grid grid-cols-3 gap-10 mt-4">
            <div>
              <Image
                src={receive}
                alt="receive"
                className="float-right mt-[-25px]"
              />
              <div className="border-2 border-[#240552] px-6 py-12 rounded-[8px] bg-[#209020]  shadow-[-7px_7px_black]">
                <h2 className="text-[#fff] font-[500] leading-[24px] text-[17px] mb-6">
                  Receive Money
                </h2>
                <h6 className="text-[#fff] font-[500] leading-[16px] text-[11px]">
                  Receive money from family and friends
                </h6>
              </div>
            </div>
            <div>
              <Image
                src={send}
                alt="receive"
                className="float-right mt-[-25px]"
              />
              <div className="border-2 border-[#240552] px-6 py-12 rounded-[8px] bg-[#FFBD00]  shadow-[-7px_7px_black]">
                <h2 className="text-[#000] font-[500] leading-[24px] text-[17px] mb-6">
                  Send Money
                </h2>
                <h6 className="text-[#00] font-[500] leading-[16px] text-[11px]">
                  Send money from family and friends
                </h6>
              </div>
            </div>
            <div>
              <Image
                src={add}
                alt="receive"
                className="float-right mt-[-25px]"
              />
              <div className="border-2 border-[#240552] px-6 py-12 rounded-[8px] bg-[#FF823B]  shadow-[-7px_7px_black]">
                <h2 className="text-[#000] font-[500] leading-[24px] text-[17px] mb-6">
                  Add Money
                </h2>
                <h6 className="text-[#000] font-[500] leading-[16px] text-[11px]">
                  Add money from family and friends
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex flex-row justify-between">
            <h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
              KNOW MORE ABOUT ARDILA
            </h2>
            <Link
              href="#"
              className="text-[#240552] font-[500] leading-[20px] text-[12px]"
            >
              SEE ALL
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-4">
            <div>
              <Image src={video} alt="video" className="w-full" />
            </div>
            <div>
              <Image src={mp} alt="video" className="w-full" />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex flex-row justify-between">
            <h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
              QUICK READ
            </h2>
            <Link
              href="#"
              className="text-[#240552] font-[500] leading-[20px] text-[12px]"
            >
              SEE ALL
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-10 mt-4">
            <div className="border-2 border-[#240552] rounded-[8px] shadow-[7px_7px_black]">
              <Image
                src={post}
                alt="post"
                className="w-full rounded-tl-[8px] rounded-tr-[8px]"
              />
              <div className="p-8">
                <h3 className="text-[14px] font-[500] text-[#000] leading-[24px]">
                  Best business loans without collateral in Nigeria
                </h3>
                <p className="text-[11px] leading-[16px] font-[500] text-[#9CA3AF]">
                  14th february, 2023
                </p>
              </div>
            </div>
            <div className="border-2 border-[#240552] rounded-[8px] shadow-[7px_7px_black]">
              <Image
                src={post}
                alt="post"
                className="w-full rounded-tl-[8px] rounded-tr-[8px]"
              />
              <div className="p-8">
                <h3 className="text-[14px] font-[500] text-[#000] leading-[24px]">
                  Best business loans without collateral in Nigeria
                </h3>
                <p className="text-[11px] leading-[16px] font-[500] text-[#9CA3AF]">
                  14th february, 2023
                </p>
              </div>
            </div>
            <div className="border-2 border-[#240552] rounded-[8px] shadow-[7px_7px_black]">
              <Image
                src={post}
                alt="post"
                className="w-full rounded-tl-[8px] rounded-tr-[8px]"
              />
              <div className="p-8">
                <h3 className="text-[14px] font-[500] text-[#000] leading-[24px]">
                  Best business loans without collateral in Nigeria
                </h3>
                <p className="text-[11px] leading-[16px] font-[500] text-[#9CA3AF]">
                  14th february, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div>
            <h2 className="text-[#9CA3AF] font-[500] leading-[20px] text-[12px]">
              REFER AND EARN
            </h2>
          </div>
          <div className="mt-4">
            <Image src={card} alt="post" className="w-full" />
          </div>
        </div>
      </main>
    </section>
  );
}

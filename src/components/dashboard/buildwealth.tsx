import React from "react";
import lite from "../../assets/vault-lite.svg";
import extra from "../../assets/vault-extra.svg";
import premium from "../../assets/vault-premium.svg";
import Image from "next/image";

function Buildwealth() {
  return (
    <div className="mb-[50px]">
      <h1 className="text-[14px] font-[700] text-primary mb-6">Build Wealth</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-[70px]  bg-white px-16 py-[60px] rounded-[8px] border border-[#E5E7EB]">
        <div
          className="rounded-[16px] p-9  border-[2px] border-[#000]"
          style={{ backgroundColor: "#E7EFFE" }}
        >
          <div className="flex justify-between items-center flex-wrap">
            <Image
              src={lite}
              width={50}
              height={50}
              alt="dream"
              className="mb-2"
            />
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.24444 0.49654L14.0988 11.3187C14.2277 11.4476 14.3187 11.5871 14.372 11.7374C14.4261 11.8877 14.4531 12.0488 14.4531 12.2206C14.4531 12.3924 14.4261 12.5534 14.372 12.7037C14.3187 12.854 14.2277 12.9936 14.0988 13.1224L3.24444 23.9768C2.94382 24.2774 2.56805 24.4277 2.11713 24.4277C1.6662 24.4277 1.2797 24.2667 0.957608 23.9446C0.63552 23.6225 0.474475 23.2467 0.474475 22.8173C0.474475 22.3878 0.63552 22.0121 0.957608 21.69L10.427 12.2206L0.957608 2.75116C0.656992 2.45054 0.506683 2.08036 0.506683 1.6406C0.506683 1.19998 0.667728 0.818628 0.989817 0.49654C1.31191 0.17445 1.68768 0.0134068 2.11713 0.0134068C2.54658 0.0134068 2.92235 0.17445 3.24444 0.49654Z"
                fill="black"
              />
            </svg>
          </div>
          <h1 className="my-3 text-[22px] font-[700]">VAULT LITE</h1>
          <p className="text-[12px] leading-[20px] font-[400] text-[#000]">
            Savings for the 1%. Save and invest on one platform with
            mouthwatering returns.
          </p>
        </div>
        <div
          className="rounded-[16px] p-9  border-[2px] border-[#000000]"
          style={{ backgroundColor: "#E5E2FD" }}
        >
          <div className="flex justify-between items-center flex-wrap">
            <Image
              src={extra}
              width={50}
              height={50}
              alt="dream"
              className="mb-2"
            />
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.24444 0.49654L14.0988 11.3187C14.2277 11.4476 14.3187 11.5871 14.372 11.7374C14.4261 11.8877 14.4531 12.0488 14.4531 12.2206C14.4531 12.3924 14.4261 12.5534 14.372 12.7037C14.3187 12.854 14.2277 12.9936 14.0988 13.1224L3.24444 23.9768C2.94382 24.2774 2.56805 24.4277 2.11713 24.4277C1.6662 24.4277 1.2797 24.2667 0.957608 23.9446C0.63552 23.6225 0.474475 23.2467 0.474475 22.8173C0.474475 22.3878 0.63552 22.0121 0.957608 21.69L10.427 12.2206L0.957608 2.75116C0.656992 2.45054 0.506683 2.08036 0.506683 1.6406C0.506683 1.19998 0.667728 0.818628 0.989817 0.49654C1.31191 0.17445 1.68768 0.0134068 2.11713 0.0134068C2.54658 0.0134068 2.92235 0.17445 3.24444 0.49654Z"
                fill="black"
              />
            </svg>
          </div>
          <h1 className="my-3 text-[22px] font-[700]">VAULT EXTRA</h1>
          <p className="text-[12px] leading-[20px] font-[400] text-[#000]">
            Go the distance, with what you have got and earn more from Vault at 10%
          </p>
        </div>
        <div
          className="rounded-[16px] p-9 border-[2px] border-[#000]"
          style={{ backgroundColor: "#F0FDF4" }}
        >
          <div className="flex justify-between items-center flex-wrap">
            <Image
              src={premium}
              width={50}
              height={50}
              alt="dream"
              className="mb-2"
            />
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.24444 0.49654L14.0988 11.3187C14.2277 11.4476 14.3187 11.5871 14.372 11.7374C14.4261 11.8877 14.4531 12.0488 14.4531 12.2206C14.4531 12.3924 14.4261 12.5534 14.372 12.7037C14.3187 12.854 14.2277 12.9936 14.0988 13.1224L3.24444 23.9768C2.94382 24.2774 2.56805 24.4277 2.11713 24.4277C1.6662 24.4277 1.2797 24.2667 0.957608 23.9446C0.63552 23.6225 0.474475 23.2467 0.474475 22.8173C0.474475 22.3878 0.63552 22.0121 0.957608 21.69L10.427 12.2206L0.957608 2.75116C0.656992 2.45054 0.506683 2.08036 0.506683 1.6406C0.506683 1.19998 0.667728 0.818628 0.989817 0.49654C1.31191 0.17445 1.68768 0.0134068 2.11713 0.0134068C2.54658 0.0134068 2.92235 0.17445 3.24444 0.49654Z"
                fill="black"
              />
            </svg>
          </div>
          <h1 className="my-3 text-[22px] font-[700]">VAULT PREMIUM</h1>
          <p className="text-[12px] leading-[20px] font-[400] text-[#000]">
            Earn a whopping 12% on your extra cash and make your money count for more
          </p>
        </div>
      </div>
    </div>
  );
}

export default Buildwealth;

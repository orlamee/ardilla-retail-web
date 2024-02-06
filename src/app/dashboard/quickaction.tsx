import React from "react";
import Image from "next/image";
import send from "../../assets/send-2.svg";
import receive from "../../assets/recieve.svg";
import add from "../../assets/add-circle.svg";
import closed from "../../assets/closed.svg";
import refer from "../../assets/fluent-emoji-high-contrast_money-bag.svg";


function Quickaction() {
  return (
    <div className="mb-[50px]">
      <h1 className="text-[14px] leading-[19px] font-[700] text-primary mb-6">Quick Action</h1>
      <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-[25px] md:gap-[40px]">
        <div className="bg-white flex-1 rounded-[8px] border-[1px] border-borderprimary shadow-[0px_4px_30px_0px_#9494941A] flex flex-wrap p-8 justify-between">
          <div>
            <div className="rounded-[10px] py-6 px-6 border-[1px] border-black flex items-center justify-center shadow-[2px_3px_black]">
              <Image src={send} height={30} width={30} alt="send" />
            </div>
            <h1 className="mt-4 text-center font-[500] text-[13px] text-black">
              Send
            </h1>
          </div>

          <div className="mt-[-15px]">
            <Image src={closed} height={30} width={30} alt="send" className="ml-auto mb-[-15px]" />
            <div className="rounded-[10px] py-6 px-6 border-[1px] border-black flex items-center justify-center shadow-[2px_3px_black]">
              <Image src={receive} height={30} width={30} alt="send" />
            </div>
            <h1 className="mt-4 text-center font-[500] text-[13px] text-black">
              Receive
            </h1>
          </div>

          <div>
            <div className="rounded-[10px] py-6 px-6 border-[1px] border-black flex items-center justify-center shadow-[2px_3px_black]">
              <Image src={add} height={30} width={30} alt="send" />
            </div>
            <h1 className="mt-4 text-center font-[500] text-[13px] text-black">
              Add
            </h1>
          </div>

          <div>
            <div className="rounded-[10px] py-6 px-6 border-[1px] border-black flex items-center justify-center shadow-[2px_3px_black]">
              <Image src={refer} height={30} width={30} alt="send" />
            </div>
            <h1 className="mt-4 text-center font-[500] text-[13px] text-black">
              Refer & Earn
            </h1>
          </div>
        </div>
        <div className="bg-white flex-1 rounded-[8px] border-[1px] border-borderprimary shadow-[0px_4px_30px_0px_#9494941A] flex p-8 justify-between">
          <div className="flex items-center">
            <div className="">
              <div className="flex items-center gap-x-6 mb-4">
                <h2 className="font-[700] text-[14px] leading-[18px] text-black">Inflow</h2>
                <span className="bg-[#F6F1FE] py-0.5 px-3 rounded-[30px] text-black text-[10px]">0%</span>
              </div>
              <h4 className="font-[500] text-[12px] leading-[20px] text-[#9CA3AF]">You have no recent inflow</h4>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quickaction;

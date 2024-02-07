"use client";
import Image from "next/image";
import { Icon } from '@iconify-icon/react';
import PanelHeader from "./panelHeader";
import globus from "../../assets/globus.svg";


export default function AccountDetails() {
  return (
    <div>
      <PanelHeader
        title="Account Details"
        subtitle="You can receive money through the details below"
      />
      <div className="flex flex-row mt-6 text-center mb-16">
        <div className="">
          <h3 className="text-[#000000] text-[12px] font-[500] mb-2">
            Account Status
          </h3>
          <span className="bg-[#F9F9F9F9] py-2 px-5 font-[500] text-[#240552] text-[10px] rounded-[30px] shadow-[2px_3px_black]">
            Active
          </span>
        </div>
        <div className="mx-9">
          <h3 className="text-[#000000] text-[12px] font-[500] mb-2">
            Customer ID
          </h3>
          <span className="bg-[#F9F9F9F9] py-2 px-5 font-[500] text-[#240552] text-[10px] rounded-[30px] shadow-[2px_3px_black]">
            1234567
          </span>
        </div>
        <div className="">
          <h3 className="text-[#000000] text-[12px] font-[500] mb-2">
            Account Tier
          </h3>
          <span className="bg-[#F9F9F9F9] py-2 px-5 font-[500] text-[#240552] text-[10px] rounded-[30px] shadow-[2px_3px_black]">
            Tier 3
          </span>
        </div>
      </div>
      <div className="rounded-[8px] p-6 mb-4 bg-[#F9FAFB]">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[500] mb-2">
              Bank Name
            </p>
            <Image src={globus} alt="globus" className="w-[80px]"/>
          </div>
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[400] mb-2">
              Account Name
            </p>
            <p className="text-[#000] text-[12px] font-[500]">
              Onwa - Ltd
            </p>
          </div>
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[400] mb-2">
              Account Number
            </p>
            <div className="flex flex-row">
              <p className="text-[#000] text-[12px] font-[500]">
                8102017439
              </p>
              <Icon
                icon="solar:copy-linear"
                className="text-[#23A323] ms-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[8px] p-6 mb-4 bg-[#F9FAFB]">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[500] mb-2">
              Bank Name
            </p>
            <Image src={globus} alt="globus" className="w-[80px]"/>
          </div>
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[400] mb-2">
              Account Name
            </p>
            <p className="text-[#000] text-[12px] font-[500]">
              Onwa - Ltd
            </p>
          </div>
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[400] mb-2">
              Account Number
            </p>
            <div className="flex flex-row">
              <p className="text-[#000] text-[12px] font-[500]">
                8102017439
              </p>
              <Icon
                icon="solar:copy-linear"
                className="text-[#23A323] ms-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[8px] p-6 mb-4 bg-[#F9FAFB]">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[500] mb-2">
              Bank Name
            </p>
            <Image src={globus} alt="globus" className="w-[80px]"/>
          </div>
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[400] mb-2">
              Account Name
            </p>
            <p className="text-[#000] text-[12px] font-[500]">
              Onwa - Ltd
            </p>
          </div>
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[400] mb-2">
              Account Number
            </p>
            <div className="flex flex-row">
              <p className="text-[#000] text-[12px] font-[500]">
                8102017439
              </p>
              <Icon
                icon="solar:copy-linear"
                className="text-[#23A323] ms-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[8px] p-6 mb-4 bg-[#F9FAFB]">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[500] mb-2">
              Bank Name
            </p>
            <Image src={globus} alt="globus" className="w-[80px]"/>
          </div>
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[400] mb-2">
              Account Name
            </p>
            <p className="text-[#000] text-[12px] font-[500]">
              Onwa - Ltd
            </p>
          </div>
          <div>
            <p className="text-[#9CA3AF] text-[12px] font-[400] mb-2">
              Account Number
            </p>
            <div className="flex flex-row">
              <p className="text-[#000] text-[12px] font-[500]">
                8102017439
              </p>
              <Icon
                icon="solar:copy-linear"
                className="text-[#23A323] ms-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

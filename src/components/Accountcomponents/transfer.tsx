"use client";
import { Icon } from '@iconify-icon/react';
import PanelHeader from "./panelHeader";
import Image from "next/image";
import joy from "../../assets/joy.svg";
import allset from "../../assets/allset.svg";
import globus from "../../assets/globus.svg";
import { useState } from "react";
import Modal from "../modal";
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "lucide-react";

export default function Transfer() {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  function openModalDelete() {
    setIsModalDeleteOpen(true);
  }
  function closeModalDelete() {
    setIsModalDeleteOpen(false);
  }
  return (
    <div>
      <PanelHeader
        title="Beneficiary Management"
        subtitle="Manage all your beneficiaries here"
      />
      <select className="select select-primary max-w-xs border outline-none border-[#E5E7EB] px-3 py-2 rounded-[4px] text-[#9CA3AF] text-[13px] leading-[20px] font-[500]">
        <option disabled selected>
          All Categories
        </option>
        <option>All Categories</option>
        <option>All Categories</option>
        <option>All Categories</option>
      </select>
      <div className="mt-8">
        <h3 className="text-[#9CA3AF] font-[500] text-[11px] leading-[16px] mb-4">
          KODHEX USER
        </h3>
        <div className="bg-[#F9FAFB] p-6 rounded-[6px]">
          <div className="flex flex-row mb-8">
            <div className="flex-none">
              <Image src={joy} alt="joy" />
            </div>
            <div className="mx-4 grow">
              <h2 className="text-[#240552] text-[14px] leading-[19px] font-[500]">
                Joy Rebecca
              </h2>
              <p className="text-[#9CA3AF] text-[12px] leading-[18px] font-[500]">
                {"  <Becca />"}
              </p>
            </div>
            <div className="flex-none mt-2">
              <Icon
                icon="ic:outline-delete"
                className="text-[#EF4444] cursor-pointer"
                onClick={openModalDelete}
              />
            </div>
          </div>
          <div className="flex flex-row mb-8">
            <div className="flex-none">
              <Image src={joy} alt="joy" />
            </div>
            <div className="mx-4 grow">
              <h2 className="text-[#240552] text-[14px] leading-[19px] font-[500]">
                Joy Rebecca
              </h2>
              <p className="text-[#9CA3AF] text-[12px] leading-[18px] font-[500]">
                {"  <Becca />"}
              </p>
            </div>
            <div className="flex-none mt-2">
              <Icon
                icon="ic:outline-delete"
                className="text-[#EF4444] cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-none">
              <Image src={joy} alt="joy" />
            </div>
            <div className="mx-4 grow">
              <h2 className="text-[#240552] text-[14px] leading-[19px] font-[500]">
                Joy Rebecca
              </h2>
              <p className="text-[#9CA3AF] text-[12px] leading-[18px] font-[500]">
                {"  <Becca />"}
              </p>
            </div>
            <div className="flex-none mt-2">
              <Icon
                icon="ic:outline-delete"
                className="text-[#EF4444] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-[#9CA3AF] font-[500] text-[11px] leading-[16px] mb-4">
          PERSONAL BANKS
        </h3>
        <div className="bg-[#F9FAFB] p-6 rounded-[6px]">
          <div className="flex flex-row mb-8">
            <div className="grow">
              <Image src={globus} alt="globus" />
            </div>
            <div className="flex-none me-6 text-right">
              <h2 className="text-[#000000] text-[12px] leading-[20px] font-[500]">
                Aiyeola Mathew.T
              </h2>
              <p className="text-[#9CA3AF] font-[500] text-[12px] leading-[16px]">
                0214170263
              </p>
            </div>
            <div className="flex-none mt-2">
              <Icon icon="ic:outline-delete" className="text-[#EF4444]" />
            </div>
          </div>
          <div className="flex flex-row mb-8">
            <div className="grow">
              <Image src={globus} alt="globus" />
            </div>
            <div className="flex-none me-6 text-right">
              <h2 className="text-[#000000] text-[12px] leading-[20px] font-[500]">
                Aiyeola Mathew.T
              </h2>
              <p className="text-[#9CA3AF] font-[500] text-[12px] leading-[16px]">
                0214170263
              </p>
            </div>
            <div className="flex-none mt-2">
              <Icon icon="ic:outline-delete" className="text-[#EF4444]" />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="grow">
              <Image src={globus} alt="globus" />
            </div>
            <div className="flex-none me-6 text-right">
              <h2 className="text-[#000000] text-[12px] leading-[20px] font-[500]">
                Aiyeola Mathew.T
              </h2>
              <p className="text-[#9CA3AF] font-[500] text-[12px] leading-[16px]">
                0214170263
              </p>
            </div>
            <div className="flex-none mt-2">
              <Icon icon="ic:outline-delete" className="text-[#EF4444]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-[#9CA3AF] font-[500] text-[11px] leading-[16px] mb-4">
          OTHER BANKS
        </h3>
        <div className="bg-[#F9FAFB] p-6 rounded-[6px]">
          <div className="flex flex-row mb-8">
            <div className="grow">
              <Image src={globus} alt="globus" />
            </div>
            <div className="flex-none me-6 text-right">
              <h2 className="text-[#000000] text-[12px] leading-[20px] font-[500]">
                Aiyeola Mathew.T
              </h2>
              <p className="text-[#9CA3AF] font-[500] text-[12px] leading-[16px]">
                0214170263
              </p>
            </div>
            <div className="flex-none mt-2">
              <Icon icon="ic:outline-delete" className="text-[#EF4444]" />
            </div>
          </div>
          <div className="flex flex-row mb-8">
            <div className="grow">
              <Image src={globus} alt="globus" />
            </div>
            <div className="flex-none me-6 text-right">
              <h2 className="text-[#000000] text-[12px] leading-[20px] font-[500]">
                Aiyeola Mathew.T
              </h2>
              <p className="text-[#9CA3AF] font-[500] text-[12px] leading-[16px]">
                0214170263
              </p>
            </div>
            <div className="flex-none mt-2">
              <Icon icon="ic:outline-delete" className="text-[#EF4444]" />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="grow">
              <Image src={globus} alt="globus" />
            </div>
            <div className="flex-none me-6 text-right">
              <h2 className="text-[#000000] text-[12px] leading-[20px] font-[500]">
                Aiyeola Mathew.T
              </h2>
              <p className="text-[#9CA3AF] font-[500] text-[12px] leading-[16px]">
                0214170263
              </p>
            </div>
            <div className="flex-none mt-2">
              <Icon icon="ic:outline-delete" className="text-[#EF4444]" />
            </div>
          </div>
        </div>
      </div>
      {isModalDeleteOpen && (
        <Modal>
          <AnimatePresence>
            <motion.div
              className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[340px] z-[50]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", ease: "backOut" }}
            >
              <div className="flex justify-end w-full">
                <div>
                  <XCircleIcon
                    className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
                    onClick={closeModalDelete}
                  />
                </div>
              </div>
              <div className="mt-6 text-center mx-10">
                <Image src={allset} alt="allset" className="mx-auto mb-5" />
                <h3 className="text-[#000000] font-[700] text-[20px] leading-[27px]">
                  Beneficiary Deleted Successfully
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </Modal>
      )}
    </div>
  );
}

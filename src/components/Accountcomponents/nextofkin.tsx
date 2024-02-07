/* eslint-disable react/no-unescaped-entities */
"use client";

import { XCircleIcon } from "lucide-react";
import Modal from "../modal";
import PanelHeader from "./panelHeader";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Icon } from '@iconify-icon/react';
import FloatingLabelInput from "../inputfield";

export default function NextofKin() {
  const [isModalOpenNextkin, setIsModalOpenNextkin] = useState(false);
  function openModalNextkin() {
    setIsModalOpenNextkin(true);
  }
  function closeModalNextkin() {
    setIsModalOpenNextkin(false);
  }
  return (
    <div>
      <PanelHeader title="Next of Kin" subtitle="Set your next of kin" />
      <form>
        <FloatingLabelInput
          id="firstName"
          label="Enter First Name"
          type="text"
        />
        <FloatingLabelInput id="lastName" label="Enter Last Name" type="text" />
        <FloatingLabelInput
          id="number"
          label="Enter Phone Number"
          type="number"
        />
        <FloatingLabelInput
          id="email"
          label="Enter Email Address"
          type="email"
        />
        <FloatingLabelInput id="address" label="Enter Address" type="text" />
        <FloatingLabelInput
          id="relationship"
          label="Relationship"
          type="text"
        />
        <FloatingLabelInput id="gender" label="Gender" type="text" />
        <div className="mt-28">
          <button
            className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px] mt-3"
            type="button"
            onClick={openModalNextkin}
          >
            Save Changes
          </button>
        </div>
      </form>
      {isModalOpenNextkin && (
        <Modal>
          <AnimatePresence>
            <motion.div
              className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[420px] z-[50]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "tween", ease: "backOut" }}
            >
              <div className="flex justify-between w-full items-start">
                <div className="mb-2">
                  <h1 className="text-[20px] leading-[27px] font-[700] text-primary mb-2">
                    Next of Kin
                  </h1>
                  <p className="font-[500] text-[12px] text-[#9CA3AF] leading-[20px]">
                    The individual you're opting for should be a near family
                    member and a person in whom you have confidence
                  </p>
                </div>
                <div>
                  <XCircleIcon
                    className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
                    onClick={closeModalNextkin}
                  />
                </div>
              </div>
              <div className="bg-[#F9FAFB] p-6 rounded-[10px] my-6">
                <h3 className="font-[500] text-[12px] text-[#000] leading-[20px]">
                  Your designated next of kin will receive notifications{" "}
                </h3>
                <div className="mt-4">
                  <div className="flex flex-row mb-4">
                    <Icon
                      icon="material-symbols:circle"
                      className="text-[#23A323] me-3"
                    />
                    <p className="font-[400] text-[10px] text-[#000] leading-[13px] mt-[1px]">
                      In the event of emergencies
                    </p>
                  </div>
                  <div className="flex flex-row mb-4">
                    <Icon
                      icon="material-symbols:circle"
                      className="text-[#23A323] me-3"
                    />
                    <p className="font-[400] text-[10px] text-[#000] leading-[13px] mt-[1px]">
                      If your account remains inactive for a continuous period
                      of 12 months
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px] mt-3"
                type="button"
                onClick={openModalNextkin}
              >
                Save Changes
              </button>
            </motion.div>
          </AnimatePresence>
        </Modal>
      )}
    </div>
  );
}

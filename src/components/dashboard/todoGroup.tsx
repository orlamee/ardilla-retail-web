"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Todoitem from "./todoitem";

function TodoGroup() {
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setViewWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div className="mb-[50px]">
      <h1 className="text-[14px] font-[700] text-primary mb-6">To Do</h1>
      <div className="flex gap-[50px] justify-between bg-white px-9 pt-[60px] pb-[40px] rounded-[8px] border border-[#E5E7EB]">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={viewWidth > 1300 ? 3 : viewWidth > 768 ? 2 : 1}
          className="flex w-full border-0 outline-none overflow-hidden"
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay
        >
          <SwiperSlide>
            <Todoitem
              title="Verify your Identity"
              subtitle="Verify your identity and enjoy the full Ardilla experience. You can start by uploading relevant documents and completing the KYC."
              button="Complete KYC"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Todoitem
              title="Add Debit Card"
              subtitle="Add you debit card to your Ardilla dashboard and enjoy flexible deposits and withdrawals of funds."
              button="Add Debit Card"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Todoitem
              title="Enable Autosave"
              subtitle="Autosave simplifies your saving process and ensures you never miss an opportunity to build up your saving portfolio."
              button="Enable Now"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Todoitem
              title="Enable Biometrics"
              subtitle="Enabling your biometrics ensures you have more secure access to your Ardilla account."
              button="Enable Now"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Todoitem
              title="Verify your Address"
              subtitle="Verifying your address gives us more information on who you are and how we can tailor Ardilla to better serve you."
              button="Verify Now"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Todoitem
              title="Top up your Plan"
              subtitle="Fund your savings plan (DIB, Dreams, Grit and Shopwise) to enjoy the full effect of the Ardilla experience."
              button="Top up Now"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TodoGroup;

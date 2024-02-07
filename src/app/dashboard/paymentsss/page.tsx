import NavBar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import payment from "../../../assets/payment title.svg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import sm from "../../../assets/p send money.svg";
import am from "../../../assets/p add money.svg";
import pr from "../../../assets/p request money.svg";
import candb from "../../../assets/p card and bank.svg";

function Payment() {
  return (
    <section>
      <NavBar>
        <div>
          <h1 className="font-[600] text-primary text-[24px] mb-1">Payments</h1>
          <p className="text-gray400 text-[12px] font-[500]">
            Manage funds with ease
          </p>
        </div>
      </NavBar>
      <main className="flex items-center justify-center h-[88vh]">
        <div className=" p-9   w-full mx-4 sm:mx-[10%] lg:mx-0 lg:w-1/2 border-[1px] border-[#E5E7EB] rounded-[8px] container-gradient h-[90%]">
          <div className="my-8 bg-white w-full h-full rounded-[8px]">
            <Pagetitle title="Payment" subtitle="All your payment processes" />

            <div className="mx-auto max-w-[450px]">
              <LinkButton
                title="Send Money"
                image={sm}
                link="/dashboard/send-money"
              />
              <LinkButton
                title="Add Money"
                image={am}
                link="/dashboard/add-money"
              />
              <LinkButton
                title="Card and Bank"
                image={candb}
                link="/dashboard/card-and-bank"
              />
              <LinkButton
                title="Request and Receive Money"
                image={pr}
                link="/dashboard/request-and-receive-money"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

type props = {
  title: string;
  subtitle: string;
};
function Pagetitle({ title, subtitle }: props) {
  return (
    <div className="text-center mb-9">
      <Image
        src={payment}
        width={67}
        height={67}
        alt="payment"
        className="mx-auto"
      />
      <div className="max-w-[450px] mx-auto relative">
        <h1 className="font-[founder] text-[30px] text-primary mb-[6px] mt-1 ">
          {title}
        </h1>
      </div>
      <p className="text-gray400 font-[500] text-[14px] max-w-[450px] mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
type paymentlinkProp = {
  link: string;
  image: string;
  title: string;
};
function LinkButton({ link, image, title }: paymentlinkProp) {
  return (
    <Link
      href={link}
      className="flex justify-between items-center p-5 border-[2px] w-full rounded-[4px] border-[#240552] mb-5"
    >
      <div className="flex items-center flex-1">
        <Image src={image} width={30} height={30} alt="debit card" />
        <h1 className="ml-4 text-[12px] font-[500] text-primary">{title}</h1>
      </div>
      <ChevronRight className="text-primary" />
    </Link>
  );
}

export default Payment;

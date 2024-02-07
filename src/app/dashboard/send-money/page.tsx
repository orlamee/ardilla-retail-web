"use client";
import NavBar from "@/components/navbar";
import React from "react";
import sendmoney from "../../../assets/send money title.svg";
import Image from "next/image";
import ardilla from "../../../assets/s ardilla.svg";
import personal from "../../../assets/s personal.svg";
import otherbanks from "../../../assets/other banks.svg";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import secure from "../../../assets/secure.svg";
import PageTitleWithArrow from "@/components/pagetitle";

function SendMoney() {
  const router = useRouter();

  type paymentlinkProp = {
    link: string;
    image: string;
    title: string;
  };

  const LinkButton = ({ link, image, title }: paymentlinkProp) => (
    <Link href={link}>
      <div className="flex justify-between items-center p-5 border-[2px] w-full rounded-[4px] border-primary mb-5">
        <div className="flex items-center flex-1">
          <Image src={image} width={30} height={30} alt="debit card" />
          <h1 className="ml-4 text-[12px] font-[500] text-primary">{title}</h1>
        </div>
        <ChevronRight className="text-primary" />
      </div>
    </Link>
  );

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
            <PageTitleWithArrow
              title="Send Money"
              subtitle="Send money to family & friends using your Kodhex account"
              image={sendmoney}
              handleBack={() => router.push("/dashboard/payment")}
            />

            <div className="max-w-[450px] mx-auto">
              <LinkButton
                title="Ardilla User"
                link="/dashboard/send-money/ardilla"
                image={ardilla}
              />
              <LinkButton
                title="Personal Account"
                link="/dashboard/personal-account"
                image={personal}
              />
              <LinkButton
                title="Other Bank Account"
                link="/dashboard/other-account"
                image={otherbanks}
              />

              <div className="mt-14">
                <Image
                  src={secure}
                  width={147}
                  height={60}
                  alt="secure"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SendMoney;

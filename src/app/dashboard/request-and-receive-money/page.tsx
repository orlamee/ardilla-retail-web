"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/navbar";
import reqres from "../../../assets/reqres.svg";
import receive from "../../../assets/receive 1.svg";
import request from "../../../assets/request.svg";
import qr from "../../../assets/qr.svg";
import PageTitleWithArrow from "@/components/pagetitle";

function RequestandReceive() {
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
              title="Request and Receive Money"
              subtitle="All your payment processes"
              image={reqres}
              handleBack={() => router.push("/dashboard/payment")}
            />

            <div className="max-w-[450px] mx-auto">
              <LinkButton
                title="Receive Money"
                link="/dashboard/receive-money"
                image={receive}
              />
              <LinkButton
                title="Request From Others"
                link="/dashboard/request-money"
                image={request}
              />
              <LinkButton
                title="Scan my QR Code"
                link="/dashboard/scan-qr-code"
                image={qr}
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default RequestandReceive;

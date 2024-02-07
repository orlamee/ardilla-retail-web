"use client";
import React from "react";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import scanqr from "../../../assets/scanqr.svg";
import qrcode from "../../../assets/qrcode.png";
import Image from "next/image";
import saveimage from "../../../assets/save image.svg";
import howto from "../../../assets/how to use.png";
import matthew from "../../../assets/mattheww.png";
import { ChevronRight } from "lucide-react";
import PageTitleWithArrow from "@/components/pagetitle";

function ScanQr() {
  const router = useRouter();

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
          <div className="my-5 bg-white w-full h-full rounded-[8px]">
            <PageTitleWithArrow
              title="Scan QR Code"
              subtitle="Scan QR code to receive money"
              image={scanqr}
              handleBack={() =>
                router.push("/dashboard/request-and-receive-money")
              }
            />

            <div className="max-w-[450px] mx-auto">
              <Image
                src={qrcode}
                width={201}
                height={221}
                alt="qrcode"
                className="mx-auto"
              />

              <button className="flex text-primary justify-center items-center w-full text-[12px] font-[500]">
                <Image src={saveimage} width={30} height={30} alt="save" />
                <span className="ml-2 mb-2">Save Image</span>
              </button>

              <div className="mt-2 mb-3">
                <Image
                  src={matthew}
                  width={53}
                  height={53}
                  alt="user"
                  className="mx-auto mb-2"
                />
                <h1 className="text-[16px] font-[500] text-center mb-1">
                  Aiyeola Mathew .T
                </h1>
                <h2 className="text-[12px] font-[500] text-center text-[#6B7280]">
                  Levijazz
                </h2>
                <div className="text-center text-primary flex items-center justify-center">
                  Enter the amount{" "}
                  <span className="ml-1">
                    <ChevronRight className="w-[13px] mt-[2px]" />
                  </span>
                </div>
              </div>

              <div>
                <Image
                  src={howto}
                  width={359}
                  height={127}
                  alt="how to use"
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

export default ScanQr;

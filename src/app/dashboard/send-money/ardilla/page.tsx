"use client";
import React, { useState, useRef, useEffect } from "react";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import ardilla from "../../../../assets/big ardilla.svg";
import levi from "../../../../assets/levi.svg";
import { ChevronRight, Code2 } from "lucide-react";
import KodhexUser from "@/components/kodhexuser";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import Image from "next/image";
import { base_URL } from "@/baseurl";
import axios from "axios";
import { kodhexUser } from "@/types";
import SpinnerLoader from "@/components/spinner";
import PageTitleWithArrow from "@/components/pagetitle";
import Enteramount from "@/components/enteramount";

function Ardilla() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [kodhex, setKodhex] = useState("");
  const [step, setStep] = useState<"enter user" | "enter amount" | "">(
    "enter user"
  );
  const [kodhexUser, setKodHexUser] = useState<kodhexUser>();

  useEffect(() => {
    const timeout = setTimeout(getUser, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [kodhex]); //eslint-disable-line

  useEffect(() => {
    inputRef?.current?.focus();
  }, [kodhex, isLoading]);

  const dummyKodhexUser: kodhexUser = {
    kodhex: "john",
    first_name: "John",
    last_name: "Doe",
    profile_photo: levi,
    ardilla_user_kodhex_wallet: {
      wallet_name: "",
      wallet_id: "",
    },
    customer_id: "",
    phone: "",
    user_id: "",
  };

  const getUser = async () => {
    if (kodhex) {
      try {
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setKodHexUser(dummyKodhexUser);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const EnterUser = () => (
    <>
      <PageTitleWithArrow
        title="Ardilla User"
        subtitle="Send to other kodHex accounts through Ardilla"
        image={ardilla}
        handleBack={() => router.push("/dashboard/send-money")}
      />

      <div className="mx-auto max-w-[450px] mt-10">
        <div className="p-5 border-[1px] rounded-[4px] border-[#D1D5DB] w-full outline-none  focus-within:border-[#6C06C4] flex items-center">
          <span className="border-r-[1px] pr-4">
            <Code2 className="text-primary" />
          </span>
          <input
            type="text"
            name=""
            id=""
            className="w-full pl-4 h-full placeholder:text-gray400 outline-none text-[12px] font-[500]"
            placeholder="Enter KodHex"
            value={kodhex}
            onChange={(e) => {
              setKodhex(e.target.value);
            }}
            ref={inputRef}
          />
        </div>

        {isLoading && (
          <div className="my-5 flex justify-center items-center gap-3 ">
            <SpinnerLoader />
            <span className="text-[15px] text-primary">searching ...</span>
          </div>
        )}

        {kodhex && kodhexUser?.kodhex === kodhex && kodhexUser && (
          <div
            className="w-[190px] cursor-pointer mx-auto my-5 pr-2 py-1 bg-white rounded-[4px] shadow-[5px_5px_#240552] flex items-center justify-between border-[1px] border-primary"
            onClick={() => setStep("enter amount")}
          >
            <div className="rounded-full w-[35px] h-[35px] relative object-cover mx-2">
              <Image
                src={kodhexUser.profile_photo}
                alt={`${kodhexUser.first_name} ${kodhexUser.last_name}`}
                className="w-full h-full object-cover object-center rounded-full"
                fill
              />
            </div>

            <span className="text-black text-[10px] font-[500] leading-[12px] flex-1">
              {kodhexUser.first_name} {kodhexUser.last_name}{" "}
            </span>

            <ChevronRight className="text-primary w-5" />
          </div>
        )}

        <UsersTablist />
      </div>
    </>
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
            {step === "enter user" && <EnterUser />}
            {step === "enter amount" && (
              <Enteramount
                handleBack={() => setStep("enter user")}
                kodhexUser={kodhexUser}
              />
            )}
          </div>
        </div>
      </main>
    </section>
  );
}

const UsersTablist = () => (
  <div>
    <Tabs defaultValue="recents" className="max-w-[450px] mx-auto mt-[30px]">
      <TabsList className="grid w-full grid-cols-2 h-[44px] rounded-[4px] bg-[#F9F5FF]">
        <TabsTrigger value="recents" className="h-full text-[12px] font-[500]">
          Recents
        </TabsTrigger>
        <TabsTrigger
          value="beneficiaries"
          className="h-full text-[12px] font-[500]"
        >
          Beneficiaries
        </TabsTrigger>
      </TabsList>
      <TabsContent value="recents">
        <div className="overflow-y-auto mt-5 h-[250px] pr-1 scrollbar-thin scrollbar-thumb-gray-200">
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
        </div>
      </TabsContent>
      <TabsContent value="beneficiaries">
        <div className="overflow-y-auto mt-5 h-[250px] pr-1 scrollbar-thin scrollbar-thumb-gray-200">
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
          <KodhexUser />
        </div>
      </TabsContent>
    </Tabs>
  </div>
);

export default Ardilla;

"use client";
import Securityquestions from "@/components/Accountcomponents/securitysettings";
import NavBar from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import upgrade from "../../../assets/upgrade.svg";
import account from "../../../assets/account details.svg";
import personal from "../../../assets/personal details.svg";
import nok from "../../../assets/next of kin.svg";
import pv from "../../../assets/profile visibility.svg";
import settings from "../../../assets/security settings.svg";
import resetpin from "../../../assets/reset pin.svg";
import resetpass from "../../../assets/reset pass.svg";
import transfer from "../../../assets/transfer.svg";
import tandc from "../../../assets/tandc.svg";
import pp from "../../../assets/pp.svg";
import Image from "next/image";
import NextofKin from "@/components/Accountcomponents/nextofkin";
import AccountDetails from "@/components/Accountcomponents/accountdetails";
import Terms from "@/components/Accountcomponents/terms";
import Privacy from "@/components/Accountcomponents/privacy";
import Visibility from "@/components/Accountcomponents/visibility";
import Upgrade from "@/components/Accountcomponents/upgrade";
import Transfer from "@/components/Accountcomponents/transfer";
import Personaldetails from "@/components/Accountcomponents/persondadetails";
import ResetPin from "@/components/Accountcomponents/resetpin";
import Resetpassword from "@/components/Accountcomponents/resetpassword";
import Accounttab from "@/components/accounttab";

function Account() {
  const [activeTab, setActiveTab] = useState<
    | "Security Settings"
    | "Upgrade Account"
    | "Account Details"
    | "Next of Kin"
    | "Profile Visibility"
    | "Personal Details"
    | "Reset Pin"
    | "Reset Password"
    | "Transfer"
    | "T&C"
    | "Privacy Policy"
    | ""
  >("Upgrade Account");
  return (
    <section>
      <NavBar>
        <div>
          <h1 className="text-[24px] text-[#240552] leading-[33px] font-[700] mb-1">
            Account
          </h1>
          <p className="text-gray400 text-[12px] font-[500]">
            Set up your account
          </p>
        </div>
      </NavBar>
      <main className="p-4 lg:px-8 flex py-7 justify-between">
        <ScrollArea className="basis-[40%] h-[83vh] pr-6">
          <div className="mb-5">
            <h1 className="text-gray400 text-[11px] font-[400] mb-2">
              SET UP YOUR ACCOUNT
            </h1>
            <Accounttab
              title="Upgrade Account"
              Icon={
                <Image
                  src={upgrade}
                  width={34}
                  height={34}
                  alt="upgrade"
                />
              }
              isActive={activeTab === "Upgrade Account"}
              onClick={() => setActiveTab("Upgrade Account")}
            />

            <Accounttab
              title="Account Details"
              Icon={
                <Image
                  src={account}
                  width={34}
                  height={34}
                  alt="account"
                />
              }
              isActive={activeTab === "Account Details"}
              onClick={() => setActiveTab("Account Details")}
            />

            <Accounttab
              title="Personal Details"
              Icon={
                <Image
                  src={personal}
                  width={34}
                  height={34}
                  alt="personal"
                />
              }
              isActive={activeTab === "Personal Details"}
              onClick={() => setActiveTab("Personal Details")}
            />

            <Accounttab
              title="Next of Kin"
              Icon={
                <Image
                  src={nok}
                  width={34}
                  height={34}
                  alt="next of kin"
                />
              }
              isActive={activeTab === "Next of Kin"}
              onClick={() => setActiveTab("Next of Kin")}
            />

            <Accounttab
              title="Security Settings"
              Icon={
                <Image
                  src={settings}
                  width={34}
                  height={34}
                  alt="security"
                />
              }
              isActive={activeTab === "Security Settings"}
              onClick={() => setActiveTab("Security Settings")}
            />

            <Accounttab
              title="Profile Visibility"
              Icon={
                <Image
                  src={pv}
                  width={34}
                  height={34}
                  alt="profile visibility"
                />
              }
              isActive={activeTab === "Profile Visibility"}
              onClick={() => setActiveTab("Profile Visibility")}
            />
          </div>
          <div className="mb-5">
            <h1 className="text-gray400 text-[11px] font-[400] mb-2">
              SECURITY
            </h1>
            <Accounttab
              title="Reset PIN"
              Icon={
                <Image
                  src={resetpin}
                  width={34}
                  height={34}
                  alt="reset pin"
                />
              }
              isActive={activeTab === "Reset Pin"}
              onClick={() => setActiveTab("Reset Pin")}
            />

            <Accounttab
              title="Reset Password"
              Icon={
                <Image
                  src={resetpass}
                  width={34}
                  height={34}
                  alt="reset pass"
                />
              }
              isActive={activeTab === "Reset Password"}
              onClick={() => setActiveTab("Reset Password")}
            />
          </div>
          <div className="mb-5">
            <h1 className="text-gray400 text-[11px] font-[400] mb-2">
              BENEFICIARY MANAGEMENT
            </h1>
            <Accounttab
              title="Transfer"
              Icon={
                <Image
                  src={transfer}
                  width={34}
                  height={34}
                  alt="transfer"
                />
              }
              isActive={activeTab === "Transfer"}
              onClick={() => setActiveTab("Transfer")}
            />
          </div>

          <div>
            <h1 className="text-gray400 text-[11px] font-[400] mb-2">
              LEGAL
            </h1>
            <Accounttab
              title="Terms and Condition"
              Icon={
                <Image src={tandc} width={34} height={34} alt="t&C" />
              }
              isActive={activeTab === "T&C"}
              onClick={() => setActiveTab("T&C")}
            />
            <Accounttab
              title="Privacy Policy"
              Icon={
                <Image
                  src={pp}
                  width={34}
                  height={34}
                  alt="privacy policy"
                />
              }
              isActive={activeTab === "Privacy Policy"}
              onClick={() => setActiveTab("Privacy Policy")}
            />
          </div>
        </ScrollArea>
        <ScrollArea className="basis-[55%] p-8 rounded-[8px] bg-white border-[1px] border-primaryborder box-shadow h-[83vh] w-full shadow-[0_4px_30px_0_#9494941A]">
          {/* this page might need to to be changed to a nested layout route in the nearest future when there's 
          api so please always endeavor to make your active tab panel a COMPONENT like the security question component below  */}
          {activeTab === "Security Settings" && <Securityquestions />}
          {activeTab === "Next of Kin" && <NextofKin />}
          {activeTab === "Account Details" && <AccountDetails />}
          {activeTab === "T&C" && <Terms />}
          {activeTab === "Privacy Policy" && <Privacy />}
          {activeTab === "Profile Visibility" && <Visibility />}
          {activeTab === "Upgrade Account" && <Upgrade />}
          {activeTab === "Transfer" && <Transfer />}
          {activeTab === "Personal Details" && <Personaldetails />}
          {activeTab === "Reset Pin" && <ResetPin />}
          {activeTab === "Reset Password" && <Resetpassword />}
        </ScrollArea>
      </main>
    </section>
  );
}

export default Account;

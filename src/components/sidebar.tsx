"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import logo from "../assets/Ardillawhite.svg";
import Image from "next/image";
import { Icon } from '@iconify-icon/react';
import Sidebaritem from "./sidebaritem";
import { usePathname } from "next/navigation";
import home from "../assets/home.svg";
import savings from "../assets/savings.svg";
import about from "../assets/message-question.svg";
import loans from "../assets/loans.svg";
import rewards from "../assets/medal-star.svg";
import payment from "../assets/send-sqaure-2.svg";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden xl:block h-screen w-[330px] fixed left-0 z-[100] aside bg-aside">
      <ScrollArea className="h-full">
        <div className="flex h-[110px] items-center pl-[40px]">
          <Image src={logo} alt="ardilla logo" width={95} height={32} />
        </div>
        <div className="mx-[20px] mt-6">
          <Sidebaritem
            title="Home"
            link="/dashboard"
            icon={<Image src={home} width={24} height={24} alt={"home"} />}
            isActive={pathname === "/dashboard" ||
            pathname === "/dashboard/notifications" ||
            pathname === "/dashboard/interest-calculator" 
          }
          />
          <Sidebaritem
            title="Savings"
            link="/dashboard/savings"
            icon={
              <Image src={savings} width={24} height={24} alt={"savings"} />
            }
            isActive={pathname === "/dashboard/savings"}
          />

          <Sidebaritem
            title="Explore"
            link="/dashboard/explore"
            icon={
              <Icon
                icon="material-symbols:explore-outline"
                className="text-white text-[24px]"
              />
            }
            isActive={pathname === "/dashboard/explore"}
          />

          <Sidebaritem
            title="Wallet"
            link="/dashboard/wallet"
            icon={
              <Icon
                icon="ion:wallet-outline"
                className="text-white text-[24px]"
              />
            }
            isActive={pathname === "/dashboard/wallet"}
          />

          <Sidebaritem
            title="Rewards"
            link="/dashboard/rewards"
            icon={<Image src={rewards} width={24} height={24} alt={"home"} />}
            isActive={pathname === "/dashboard/rewards"}
          />

          <Sidebaritem
            title="Generate Statement"
            link="/dashboard/statement"
            icon={<Icon icon="ph:receipt" className="text-white text-[24px]" />}
            isActive={pathname === "/dashboard/statement"}
          />
          <Sidebaritem
            title="Payment"
            link="/dashboard/payment"
            icon={
              <Image src={payment} width={24} height={24} alt={"savings"} />
            }
            isActive={
              pathname === "/dashboard/payment" ||
              pathname === "/dashboard/send-money" ||
              pathname === "/dashboard/personal-account" ||
              pathname === "/dashboard/send-money/ardilla" ||
              pathname === "/dashboard/other-account" ||
              pathname === "/dashboard/add-money" ||
              pathname === "/dashboard/request-and-receive-money" ||
              pathname === "/dashboard/request-money" ||
              pathname === "/dashboard/receive-money" ||
              pathname === "/dashboard/scan-qr-code"
            }
          />
          <Sidebaritem
            title="Card and Bank"
            link="/dashboard/card-and-bank"
            icon={
              <Icon
                icon="ion:card-outline"
                className="text-white text-[24px]"
              />
            }
            isActive={pathname === "/dashboard/card-and-bank"}
          />
          <Sidebaritem
            image={loans}
            title="Loans"
            link="/dashboard/loans"
            icon={<Image src={loans} width={24} height={24} alt={"savings"} />}
            isActive={pathname === "/dashboard/loans"}
          />
          <Sidebaritem
            image={about}
            title="About"
            link="/dashboard/about-us"
            icon={<Image src={about} width={24} height={24} alt={"savings"} />}
            isActive={pathname === "/dashboard/about-us"}
          />
        </div>
      </ScrollArea>
    </aside>
  );
}

export default Sidebar;

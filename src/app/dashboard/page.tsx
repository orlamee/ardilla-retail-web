"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import groupavatar from "../../assets/group avatar.png";
import plane from "../../assets/plane.svg";
import withdraw from "../../assets/withdraw.svg";
import deposit from "../../assets/deposit.svg";
import Hero from "@/components/dashboard/hero";
// import Buildwealth from "@/components/dashboard/buildwealth";
// import TodoGroup from "@/components/dashboard/todoGroup";
// import Quickaction from "./quickaction";
// import Hero from "@/components/dashboard/hero";
function Dashboard() {
  return (
    <section>
      <NavBar>
        <div>
          <p className="text-[14px] font-[500] text-gray400">Good morning</p>
          <h1 className="text-[26px] font-[700]">Moyosore</h1>
        </div>
      </NavBar>
      <main className="px-4 lg:px-8">
        <Hero/>
      </main>
    </section>
  );
}

export default Dashboard;

"use client";
import NavBar from "@/components/navbar";
import navback from "../../../assets/nav back.svg";
import notes from "../../../assets/notes.svg";
import circled from "../../../assets/circled.svg";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Nots() {
  return (
    <section>
      <NavBar>
        <Link href={"/dashboard"}>
          <div className="flex items-center">
            <Image src={navback} width={17} height={17} alt="back" />
            <p className="text-[12px] font-[500] mb-1 text-[#9CA3AF] ml-2 mt-1">
              Back To Dashboard
            </p>
          </div>
        </Link>
      </NavBar>
      <main className="px-4 lg:px-8 my-[50px]">
        <h2 className="text-[24px] font-[500] leading-[24px] text-[#051505]">
          Notifications
        </h2>
        <div className="mt-7">
          <Tabs defaultValue="all">
            <div className="lg:w-1/4 w-full">
              <TabsList className="w-full flex mb-9 h-[50px] px-1 py-5 text-[#9CA3AF]">
                <TabsTrigger value="all" className="flex-grow py-3">
                  All
                </TabsTrigger>
                <TabsTrigger value="activity" className="flex-grow py-3">
                  Activity
                </TabsTrigger>
                <TabsTrigger value="updates" className="flex-grow py-3">
                  Updates
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-14">
                <div>
                  <Image src={notes} alt="back" className="w-full" />
                  <div className="bg-white border box-shadow shadow-[0_4px_30px_0_#9494941A] relative mt-[-53px] border-[#EEEFF2] rounded-[10px] p-8">
                    <div className="flex flex-row">
                      <div className="me-3">
                        <Image src={circled} alt="circled" />
                      </div>
                      <div>
                        <h3 className="text-[#240552] text-[12px] font-[500] leading-[24px]">
                          Save More and Earn More
                        </h3>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] leading-[16px]">
                          Saving takes you one step closer to financial freedom.
                          Save more on Ardilla now.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-[#9CA3AF] text-[10px] font-[400] leading-[16px]">
                            10:23am | Today
                          </p>
                          <button className="flex items-center text-[#240552] px-5 py-1 border border-[#240552] rounded-[3px] text-[12px] leading-[17px] font-[500] shadow-[3px_3px_black]">
                            <span className="me-1">View</span>
                            <span>
                              <Icon icon="mingcute:right-line" className="mt-[6px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={notes} alt="back" className="w-full" />
                  <div className="bg-white border box-shadow shadow-[0_4px_30px_0_#9494941A] relative mt-[-53px] border-[#EEEFF2] rounded-[10px] p-8">
                    <div className="flex flex-row">
                      <div className="me-3">
                        <Image src={circled} alt="circled" />
                      </div>
                      <div>
                        <h3 className="text-[#240552] text-[12px] font-[500] leading-[24px]">
                          Save More and Earn More
                        </h3>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] leading-[16px]">
                          Saving takes you one step closer to financial freedom.
                          Save more on Ardilla now.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-[#9CA3AF] text-[10px] font-[400] leading-[16px]">
                            10:23am | Today
                          </p>
                          <button className="flex items-center text-[#240552] px-5 py-1 border border-[#240552] rounded-[3px] text-[12px] leading-[17px] font-[500] shadow-[3px_3px_black]">
                            <span className="me-1">View</span>
                            <span>
                              <Icon icon="mingcute:right-line" className="mt-[6px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={notes} alt="back" className="w-full" />
                  <div className="bg-white border box-shadow shadow-[0_4px_30px_0_#9494941A] relative mt-[-53px] border-[#EEEFF2] rounded-[10px] p-8">
                    <div className="flex flex-row">
                      <div className="me-3">
                        <Image src={circled} alt="circled" />
                      </div>
                      <div>
                        <h3 className="text-[#240552] text-[12px] font-[500] leading-[24px]">
                          Save More and Earn More
                        </h3>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] leading-[16px]">
                          Saving takes you one step closer to financial freedom.
                          Save more on Ardilla now.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-[#9CA3AF] text-[10px] font-[400] leading-[16px]">
                            10:23am | Today
                          </p>
                          <button className="flex items-center text-[#240552] px-5 py-1 border border-[#240552] rounded-[3px] text-[12px] leading-[17px] font-[500] shadow-[3px_3px_black]">
                            <span className="me-1">View</span>
                            <span>
                              <Icon icon="mingcute:right-line" className="mt-[6px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="activity">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-14">
                <div>
                  <Image src={notes} alt="back" className="w-full" />
                  <div className="bg-white border box-shadow shadow-[0_4px_30px_0_#9494941A] relative mt-[-53px] border-[#EEEFF2] rounded-[10px] p-8">
                    <div className="flex flex-row">
                      <div className="me-3">
                        <Image src={circled} alt="circled" />
                      </div>
                      <div>
                        <h3 className="text-[#240552] text-[12px] font-[500] leading-[24px]">
                          Save More and Earn More
                        </h3>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] leading-[16px]">
                          Saving takes you one step closer to financial freedom.
                          Save more on Ardilla now.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-[#9CA3AF] text-[10px] font-[400] leading-[16px]">
                            10:23am | Today
                          </p>
                          <button className="flex items-center text-[#240552] px-5 py-1 border border-[#240552] rounded-[3px] text-[12px] leading-[17px] font-[500] shadow-[3px_3px_black]">
                            <span className="me-1">View</span>
                            <span>
                              <Icon icon="mingcute:right-line" className="mt-[6px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={notes} alt="back" className="w-full" />
                  <div className="bg-white border box-shadow shadow-[0_4px_30px_0_#9494941A] relative mt-[-53px] border-[#EEEFF2] rounded-[10px] p-8">
                    <div className="flex flex-row">
                      <div className="me-3">
                        <Image src={circled} alt="circled" />
                      </div>
                      <div>
                        <h3 className="text-[#240552] text-[12px] font-[500] leading-[24px]">
                          Save More and Earn More
                        </h3>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] leading-[16px]">
                          Saving takes you one step closer to financial freedom.
                          Save more on Ardilla now.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-[#9CA3AF] text-[10px] font-[400] leading-[16px]">
                            10:23am | Today
                          </p>
                          <button className="flex items-center text-[#240552] px-5 py-1 border border-[#240552] rounded-[3px] text-[12px] leading-[17px] font-[500] shadow-[3px_3px_black]">
                            <span className="me-1">View</span>
                            <span>
                              <Icon icon="mingcute:right-line" className="mt-[6px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={notes} alt="back" className="w-full" />
                  <div className="bg-white border box-shadow shadow-[0_4px_30px_0_#9494941A] relative mt-[-53px] border-[#EEEFF2] rounded-[10px] p-8">
                    <div className="flex flex-row">
                      <div className="me-3">
                        <Image src={circled} alt="circled" />
                      </div>
                      <div>
                        <h3 className="text-[#240552] text-[12px] font-[500] leading-[24px]">
                          Save More and Earn More
                        </h3>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] leading-[16px]">
                          Saving takes you one step closer to financial freedom.
                          Save more on Ardilla now.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-[#9CA3AF] text-[10px] font-[400] leading-[16px]">
                            10:23am | Today
                          </p>
                          <button className="flex items-center text-[#240552] px-5 py-1 border border-[#240552] rounded-[3px] text-[12px] leading-[17px] font-[500] shadow-[3px_3px_black]">
                            <span className="me-1">View</span>
                            <span>
                              <Icon icon="mingcute:right-line" className="mt-[6px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="updates">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-14">
                <div>
                  <Image src={notes} alt="back" className="w-full" />
                  <div className="bg-white border box-shadow shadow-[0_4px_30px_0_#9494941A] relative mt-[-53px] border-[#EEEFF2] rounded-[10px] p-8">
                    <div className="flex flex-row">
                      <div className="me-3">
                        <Image src={circled} alt="circled" />
                      </div>
                      <div>
                        <h3 className="text-[#240552] text-[12px] font-[500] leading-[24px]">
                          Save More and Earn More
                        </h3>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] leading-[16px]">
                          Saving takes you one step closer to financial freedom.
                          Save more on Ardilla now.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-[#9CA3AF] text-[10px] font-[400] leading-[16px]">
                            10:23am | Today
                          </p>
                          <button className="flex items-center text-[#240552] px-5 py-1 border border-[#240552] rounded-[3px] text-[12px] leading-[17px] font-[500] shadow-[3px_3px_black]">
                            <span className="me-1">View</span>
                            <span>
                              <Icon icon="mingcute:right-line" className="mt-[6px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={notes} alt="back" className="w-full" />
                  <div className="bg-white border box-shadow shadow-[0_4px_30px_0_#9494941A] relative mt-[-53px] border-[#EEEFF2] rounded-[10px] p-8">
                    <div className="flex flex-row">
                      <div className="me-3">
                        <Image src={circled} alt="circled" />
                      </div>
                      <div>
                        <h3 className="text-[#240552] text-[12px] font-[500] leading-[24px]">
                          Save More and Earn More
                        </h3>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] leading-[16px]">
                          Saving takes you one step closer to financial freedom.
                          Save more on Ardilla now.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-[#9CA3AF] text-[10px] font-[400] leading-[16px]">
                            10:23am | Today
                          </p>
                          <button className="flex items-center text-[#240552] px-5 py-1 border border-[#240552] rounded-[3px] text-[12px] leading-[17px] font-[500] shadow-[3px_3px_black]">
                            <span className="me-1">View</span>
                            <span>
                              <Icon icon="mingcute:right-line" className="mt-[6px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={notes} alt="back" className="w-full" />
                  <div className="bg-white border box-shadow shadow-[0_4px_30px_0_#9494941A] relative mt-[-53px] border-[#EEEFF2] rounded-[10px] p-8">
                    <div className="flex flex-row">
                      <div className="me-3">
                        <Image src={circled} alt="circled" />
                      </div>
                      <div>
                        <h3 className="text-[#240552] text-[12px] font-[500] leading-[24px]">
                          Save More and Earn More
                        </h3>
                        <p className="text-[#9CA3AF] text-[11px] font-[400] leading-[16px]">
                          Saving takes you one step closer to financial freedom.
                          Save more on Ardilla now.
                        </p>
                        <div className="flex items-center justify-between mt-6">
                          <p className="text-[#9CA3AF] text-[10px] font-[400] leading-[16px]">
                            10:23am | Today
                          </p>
                          <button className="flex items-center text-[#240552] px-5 py-1 border border-[#240552] rounded-[3px] text-[12px] leading-[17px] font-[500] shadow-[3px_3px_black]">
                            <span className="me-1">View</span>
                            <span>
                              <Icon icon="mingcute:right-line" className="mt-[6px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </section>
  );
}

export default Nots;

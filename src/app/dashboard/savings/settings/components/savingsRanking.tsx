"use client";
import PanelHeader from "@/components/Accountcomponents/panelHeader";
import React from "react";
import ranking from "../../../../../assets/s-ranking.svg";
import Image from "next/image";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SavingsRanking() {
	const data = [
		{
			ranking: "1",
			user: "An***e",
			dividends: "N200,000",
		},
		{
			ranking: "2",
			user: "Ja***y",
			dividends: "N200,000",
		},
		{
			ranking: "3",
			user: "Ja***y",
			dividends: "N200,000",
		},
	];

	return (
		<div>
			<PanelHeader
				title="Savings Ranking"
				subtitle="View all our highest savings dividends earners for the month"
			/>
			<div>
				<Image
					src={ranking}
					alt="savings ranking"
					className="w-full md:w-[55%] mx-auto"
				/>
			</div>

			<div className="w-full md:w-[80%] mt-6 mx-auto">
				<Tabs defaultValue="august" className="w-full">
					<TabsList className="w-full flex justify-between mb-[10px] h-[50px] px-1 py-4 text-[#9CA3AF] bg-[#F9FAFB]">
						<TabsTrigger
							value="august"
							className=" w-[50%] h-[40px] text-[11px] font-[500]"
						>
							August
						</TabsTrigger>
						<TabsTrigger
							value="september"
							className=" w-[50%] h-[40px] text-[11px] font-[500]"
						>
							September
						</TabsTrigger>
					</TabsList>

					<div className="my-8 border-[2px] border-[#240552] mx-auto bg-[#F7F3FB] rounded-[8px] flex justify-between items-center p-4 shadow-[4px_4px_#000]">
						<div className="flex items-center space-x-2">
							<span>
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="15"
										cy="14.8555"
										r="14"
										stroke="#240552"
									/>
									<path
										d="M15.9194 12.0995L16.8544 13.9695C16.9819 14.2245 17.3219 14.4795 17.6053 14.522L19.2982 14.8054C20.3819 14.9895 20.6369 15.7687 19.8577 16.5479L18.5403 17.8654C18.3207 18.0849 18.1932 18.517 18.264 18.8287L18.6394 20.4649C18.9369 21.7541 18.2499 22.257 17.1094 21.5841L15.5228 20.642C15.2323 20.472 14.7648 20.472 14.4744 20.642L12.8878 21.5841C11.7473 22.257 11.0602 21.7541 11.3577 20.4649L11.7332 18.8287C11.804 18.5241 11.6765 18.092 11.4569 17.8654L10.1394 16.5479C9.36027 15.7687 9.61525 14.9824 10.699 14.8054L12.3919 14.522C12.6753 14.4724 13.0153 14.2245 13.1428 13.9695L14.0778 12.0995C14.5807 11.0866 15.4165 11.0866 15.9194 12.0995Z"
										stroke="#240552"
										stroke-width="1.0625"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M10.75 12.7318V7.77344"
										stroke="#240552"
										stroke-width="1.0625"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M19.25 12.7318V7.77344"
										stroke="#240552"
										stroke-width="1.0625"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M15 9.1901V7.77344"
										stroke="#240552"
										stroke-width="1.0625"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
							<p className="text-[12px] font-[500] text-[#240552]">
								My Ranking
							</p>
						</div>

						<p className="text-[12px] font-[600] text-[#240552]">
							1,000,000+
						</p>
					</div>

					<TabsContent value="august">
						<div className="mt-4 w-full relative">
							<Table className="mx-auto mt-2">
								<TableHeader className="bg-[#F9F9F9] rounded-[4px]">
									<TableRow>
										<TableHead className="text-[11px] font-[500]">
											RANKING
										</TableHead>
										<TableHead className="text-[11px] font-[500]">
											USER
										</TableHead>
										<TableHead className="text-[11px] font-[500]">
											DIVIDENDS
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="">
									{data.map((b, i) => (
										<TableRow
											key={i}
											className="border-0 cursor-pointer"
										>
											<TableCell className="text-[12px] font-[500]">
												<span
													className={`w-[32px] h-[32px] font-[600] text-[15px] flex justify-center items-center rounded-full ${
														i === 0 &&
														"bg-[#F2FCF2]  text-[#23A323]"
													}
                                        ${
															i === 1 &&
															"bg-[#FFFBF0]  text-[#FFBD00]"
														}
                                        ${
															i === 2 &&
															"bg-[#FFF5F0]  text-[#FF823B]"
														}
                                        `}
												>
													{b.ranking}
												</span>
											</TableCell>
											<TableCell className="text-[12px] font-[500]">
												{b.user}
											</TableCell>
											<TableCell className="text-[12px] font-[500]">
												{b.dividends}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</TabsContent>
					<TabsContent value="september">
						<div className="mt-4 w-full relative">
							<Table className="mx-auto mt-2">
								<TableHeader className="bg-[#F9F9F9] rounded-[4px]">
									<TableRow>
										<TableHead className="text-[10px] font-[500]">
											RANKING
										</TableHead>
										<TableHead className="text-[10px] font-[500]">
											USER
										</TableHead>
										<TableHead className="text-[10px] font-[500]">
											DIVIDENDS
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="">
									{data.map((b, i) => (
										<TableRow
											key={i}
											className="border-0 cursor-pointer"
										>
											<TableCell className="text-[12px] font-[500]">
												<span
													className={`w-[32px] h-[32px] font-[600] text-[15px] flex justify-center items-center rounded-full ${
														i === 0 &&
														"bg-[#F2FCF2]  text-[#23A323]"
													}
                                        ${
															i === 1 &&
															"bg-[#FFFBF0]  text-[#FFBD00]"
														}
                                        ${
															i === 2 &&
															"bg-[#FFF5F0]  text-[#FF823B]"
														}
                                        `}
												>
													{b.ranking}
												</span>
											</TableCell>
											<TableCell className="text-[12px] font-[500]">
												{b.user}
											</TableCell>
											<TableCell className="text-[12px] font-[500]">
												{b.dividends}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</TabsContent>
				</Tabs>

				<button className="bg-[#240552] mt-7 mb-4 font-[500] mx-auto flex text-[12px] items-center justify-center boorder-[#23a323] text-white rounded-[8px] w-full p-5">
					<span className="mr-2">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M16.3932 9.17019C16.4224 9.39569 16.4375 9.63534 16.4375 9.89008C16.4375 11.3383 15.9988 12.312 15.5789 12.9168C15.4131 13.1569 15.2199 13.377 15.0034 13.5726C14.9326 13.6359 14.8583 13.6951 14.7807 13.7499L14.7722 13.7556C14.7044 13.798 14.6484 13.857 14.6096 13.9269C14.5709 13.9969 14.5505 14.0756 14.5505 14.1556V15.7322C14.5505 15.8573 14.5008 15.9773 14.4123 16.0658C14.3239 16.1543 14.2039 16.204 14.0788 16.204H12.773C12.7439 16.204 12.7161 16.1924 12.6956 16.1719C12.675 16.1514 12.6635 16.1235 12.6635 16.0945C12.6635 15.5124 12.1918 15.0406 11.6106 15.0406H9.94246C9.36127 15.0406 8.88952 15.5124 8.88952 16.0945C8.88952 16.1235 8.87799 16.1514 8.85746 16.1719C8.83694 16.1924 8.8091 16.204 8.78007 16.204H7.47427C7.34916 16.204 7.22917 16.1543 7.1407 16.0658C7.05223 15.9773 7.00252 15.8573 7.00252 15.7322V14.9302C7.00225 14.8314 6.97096 14.7352 6.91306 14.6551C6.85517 14.5751 6.77359 14.5152 6.67985 14.484L6.64211 14.466C6.56718 14.4292 6.4947 14.3876 6.4251 14.3415C6.21753 14.2075 5.89014 13.9584 5.45141 13.5141C5.05568 13.1067 4.73699 12.6311 4.51075 12.1101C4.33714 11.712 3.9739 11.3619 3.48799 11.2799C3.41567 11.2676 3.34997 11.2303 3.30251 11.1743C3.25504 11.1184 3.22884 11.0475 3.22853 10.9742V9.55231C3.22853 9.48759 3.25147 9.42497 3.29327 9.37557C3.33508 9.32617 3.39304 9.29318 3.45686 9.28247C3.97578 9.19472 4.34375 8.79751 4.48716 8.35973C4.60981 7.98421 4.83059 7.49171 5.19667 7.12091C5.50538 6.81307 5.85078 6.54436 6.22508 6.32083C6.37505 6.23063 6.52934 6.14782 6.6874 6.07269L6.71193 6.06137L6.71664 6.05948C6.80171 6.02302 6.87417 5.96234 6.925 5.885C6.97583 5.80766 7.00279 5.71708 7.00252 5.62453V3.64601C7.24123 3.85358 7.51956 4.07813 7.81959 4.27815C8.22907 4.55366 8.71686 4.81217 9.21786 4.90558C9.33368 4.59091 9.48566 4.29075 9.67074 4.01114C9.6132 4.00504 9.55564 3.99906 9.49808 3.99322C9.16314 3.95925 8.76026 3.77338 8.34418 3.49505C7.96955 3.23743 7.61761 2.9483 7.29218 2.63081C7.19035 2.53365 7.06252 2.46812 6.92419 2.44217C6.78586 2.41621 6.64297 2.43094 6.51285 2.48457C6.37931 2.53699 6.26462 2.62837 6.18369 2.74682C6.10276 2.86527 6.05932 3.00533 6.05903 3.14879V5.33204C5.49528 5.63007 4.97838 6.00932 4.5249 6.45763C4.01258 6.97656 3.73425 7.62757 3.59084 8.0663C3.53423 8.23424 3.41157 8.33331 3.30024 8.35218C3.01661 8.39989 2.75905 8.5465 2.57321 8.76601C2.38738 8.98552 2.28529 9.26375 2.28503 9.55136V10.9732C2.28489 11.2698 2.3898 11.5569 2.58117 11.7835C2.77254 12.0101 3.03799 12.1616 3.33043 12.2111C3.44837 12.23 3.57574 12.3262 3.64556 12.4875C3.91823 13.1145 4.30249 13.6867 4.77964 14.1764C5.25988 14.6632 5.63917 14.9567 5.9109 15.1331C5.96468 15.168 6.01468 15.1982 6.05903 15.2246V15.7322C6.05903 15.9181 6.09563 16.1021 6.16676 16.2738C6.23788 16.4455 6.34212 16.6015 6.47354 16.7329C6.60496 16.8644 6.76098 16.9686 6.93268 17.0397C7.10439 17.1109 7.28842 17.1475 7.47427 17.1475H8.78007C9.36127 17.1475 9.83302 16.6757 9.83302 16.0945C9.83302 16.0332 9.88208 15.9841 9.94246 15.9841H11.6106C11.671 15.9841 11.72 16.0332 11.72 16.0945C11.72 16.6757 12.1918 17.1475 12.773 17.1475H14.0788C14.4541 17.1475 14.8141 16.9984 15.0795 16.7329C15.3449 16.4675 15.494 16.1076 15.494 15.7322V14.3934C15.8216 14.1214 16.1105 13.8058 16.3526 13.4556C16.8762 12.7036 17.381 11.544 17.381 9.89008C17.381 9.2051 17.2857 8.59183 17.1046 8.04365C16.9281 8.45419 16.688 8.83436 16.3932 9.17019ZM16.2516 5.10088C16.5347 5.78516 16.5796 6.54473 16.3791 7.25758C16.1785 7.97043 15.7442 8.59519 15.1459 9.0315C14.7402 9.32587 14.2052 9.30511 13.7429 9.11358L10.8746 7.92572C10.4123 7.73419 10.0189 7.37094 9.94058 6.87655C9.81849 6.07978 9.99204 5.26587 10.4285 4.58821C10.865 3.91055 11.5343 3.41594 12.3102 3.19759C13.0861 2.97924 13.9151 3.05224 14.641 3.40283C15.3668 3.75341 15.9403 4.35737 16.2516 5.10088ZM14.5911 8.26915C14.9299 8.02247 15.1969 7.68998 15.3645 7.30587C15.5322 6.92177 15.5945 6.49992 15.545 6.08375C15.4955 5.66758 15.336 5.27211 15.083 4.93803C14.8299 4.60395 14.4924 4.34333 14.1052 4.18298C13.718 4.02263 13.2951 3.96835 12.8799 4.02572C12.4647 4.08308 12.0724 4.25003 11.7431 4.50937C11.4139 4.76872 11.1597 5.1111 11.0068 5.50128C10.8538 5.89147 10.8075 6.31537 10.8728 6.72936C10.8838 6.78289 10.9111 6.83167 10.9511 6.869C11.0114 6.93316 11.1077 7.00109 11.236 7.05393L14.1042 8.24273C14.2091 8.28802 14.3221 8.31145 14.4363 8.31161C14.4911 8.31378 14.5451 8.29895 14.5911 8.26915ZM6.76665 9.12773C6.95432 9.12773 7.13431 9.05318 7.26702 8.92048C7.39972 8.78777 7.47427 8.60778 7.47427 8.42011C7.47427 8.23244 7.39972 8.05245 7.26702 7.91975C7.13431 7.78704 6.95432 7.71249 6.76665 7.71249C6.57898 7.71249 6.39899 7.78704 6.26628 7.91975C6.13358 8.05245 6.05903 8.23244 6.05903 8.42011C6.05903 8.60778 6.13358 8.78777 6.26628 8.92048C6.39899 9.05318 6.57898 9.12773 6.76665 9.12773Z"
								fill="white"
							/>
						</svg>
					</span>
					<span>Save Now</span>
				</button>
			</div>
		</div>
	);
}

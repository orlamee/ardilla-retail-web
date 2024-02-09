"use client";
import React, { useState } from "react";
import Steptitle from "./steptitle";
import { ChevronDown, XCircleIcon } from "lucide-react";
import Modal from "../modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { Switch } from "../ui/switch";

type props = {
	setStep: () => void;
	next: () => void;
};

function ChoosePeriod({ setStep, next }: props) {
	const [agreed, setAgreed] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [dropDate, setDropDate] = useState(false);
	const [dropTime, setDropTime] = useState(false);
	const [paybackdate, setPaybackDate] = useState("");
	const [modal, setModal] = useState<"estimate" | "">("");
	const [startDate, setStartDate] = useState("");
	const [paybackTime, setPaybackTime] = useState("");
	type breakdown = {
		date: string;
		amount: string;
		dividends: string;
		amounts: string;
	};
	const Breakdown: breakdown[] = [
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
		{
			date: "8/10/23",
			amount: "N100,000",
			dividends: "N10,000",
			amounts: "N100,000",
		},
	];

	const EstimateModal = () => (
		<Modal>
			<div className="w-[439px] rounded-t-[30px] bg-white  relative pb-7">
				<XCircleIcon
					className="w-[18px] h-[18px] text-[#9CA3AF] absolute top-[34px] right-[30px] cursor-pointer"
					onClick={() => setModal("")}
				/>

				<div className="flex flex-col mx-auto pt-[30px]">
					<h1 className="text-primary text-[20px] font-[500] text-center mb-[6px] font-[founder]">
						Estimate
					</h1>
					<p className="text-[12px] font-[500] text-center text-[#9CA3AF]">
						A good consistency would give you this breakdown
					</p>
				</div>

				<Tabs defaultValue="details" className="w-[400px] mx-auto mt-8">
					<TabsList className="grid w-[320px] mx-auto grid-cols-2 h-[46px] bg-[#F9F9F9]">
						<TabsTrigger value="details" className="h-full rounded-[8px]">
							Details
						</TabsTrigger>
						<TabsTrigger
							value="breakdown"
							className="h-full rounded-[8px]"
						>
							Breakdown
						</TabsTrigger>
					</TabsList>
					<TabsContent value="details">
						<div className="mt-4">
							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<p className="text-[#9CA3AF] text-[12px] font-medium">
									Amount
								</p>

								<p className="text-[14px] font-medium text-black">
									₦100,000
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Frequency
									</p>
									<span className="mr-[-50px] hidden">
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														variant="outline"
														className="outline-none border-none w-full hover:bg-white"
													>
														<svg
															width="11"
															height="11"
															viewBox="0 0 11 11"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M5.67253 10.431C3.20169 10.431 1.19336 8.42266 1.19336 5.95182C1.19336 3.48099 3.20169 1.47266 5.67253 1.47266C8.14336 1.47266 10.1517 3.48099 10.1517 5.95182C10.1517 8.42266 8.14336 10.431 5.67253 10.431ZM5.67253 2.09766C3.54753 2.09766 1.81836 3.82682 1.81836 5.95182C1.81836 8.07682 3.54753 9.80599 5.67253 9.80599C7.79753 9.80599 9.52669 8.07682 9.52669 5.95182C9.52669 3.82682 7.79753 2.09766 5.67253 2.09766Z"
																fill="#9CA3AF"
															/>
															<path
																d="M5.67188 6.68099C5.50104 6.68099 5.35938 6.53932 5.35938 6.36849V4.28516C5.35938 4.11432 5.50104 3.97266 5.67188 3.97266C5.84271 3.97266 5.98438 4.11432 5.98438 4.28516V6.36849C5.98438 6.53932 5.84271 6.68099 5.67188 6.68099Z"
																fill="#23A323"
															/>
															<path
																d="M5.67253 8.03828C5.61836 8.03828 5.56419 8.02578 5.51419 8.00495C5.46419 7.98411 5.41836 7.95495 5.37669 7.91745C5.33919 7.87578 5.31003 7.83411 5.28919 7.77995C5.26836 7.72995 5.25586 7.67578 5.25586 7.62161C5.25586 7.56745 5.26836 7.51328 5.28919 7.46328C5.31003 7.41328 5.33919 7.36745 5.37669 7.32578C5.41836 7.28828 5.46419 7.25911 5.51419 7.23828C5.61419 7.19661 5.73086 7.19661 5.83086 7.23828C5.88086 7.25911 5.92669 7.28828 5.96836 7.32578C6.00586 7.36745 6.03503 7.41328 6.05586 7.46328C6.07669 7.51328 6.08919 7.56745 6.08919 7.62161C6.08919 7.67578 6.07669 7.72995 6.05586 7.77995C6.03503 7.83411 6.00586 7.87578 5.96836 7.91745C5.92669 7.95495 5.88086 7.98411 5.83086 8.00495C5.78086 8.02578 5.72669 8.03828 5.67253 8.03828Z"
																fill="#23A323"
															/>
														</svg>
													</Button>
												</TooltipTrigger>
												<TooltipContent
													className="top-[6090px] ml-[26px] text-white"
													align="start"
												>
													<div className="p-2">
														<h6 className="text-[12px] font-[500]">
															Interest Accrued
														</h6>
														<p className="text-[10px] font-[500]">
															Amount/Dividends * Frequency
														</p>
													</div>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</span>
								</div>

								<p className="text-[14px] font-medium text-black">
									weekly
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Dividends Rate
									</p>
									<span className="mr-[-50px] hidden">
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														variant="outline"
														className="outline-none border-none w-full hover:bg-white"
													>
														<svg
															width="11"
															height="11"
															viewBox="0 0 11 11"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M5.67253 10.431C3.20169 10.431 1.19336 8.42266 1.19336 5.95182C1.19336 3.48099 3.20169 1.47266 5.67253 1.47266C8.14336 1.47266 10.1517 3.48099 10.1517 5.95182C10.1517 8.42266 8.14336 10.431 5.67253 10.431ZM5.67253 2.09766C3.54753 2.09766 1.81836 3.82682 1.81836 5.95182C1.81836 8.07682 3.54753 9.80599 5.67253 9.80599C7.79753 9.80599 9.52669 8.07682 9.52669 5.95182C9.52669 3.82682 7.79753 2.09766 5.67253 2.09766Z"
																fill="#9CA3AF"
															/>
															<path
																d="M5.67188 6.68099C5.50104 6.68099 5.35938 6.53932 5.35938 6.36849V4.28516C5.35938 4.11432 5.50104 3.97266 5.67188 3.97266C5.84271 3.97266 5.98438 4.11432 5.98438 4.28516V6.36849C5.98438 6.53932 5.84271 6.68099 5.67188 6.68099Z"
																fill="#23A323"
															/>
															<path
																d="M5.67253 8.03828C5.61836 8.03828 5.56419 8.02578 5.51419 8.00495C5.46419 7.98411 5.41836 7.95495 5.37669 7.91745C5.33919 7.87578 5.31003 7.83411 5.28919 7.77995C5.26836 7.72995 5.25586 7.67578 5.25586 7.62161C5.25586 7.56745 5.26836 7.51328 5.28919 7.46328C5.31003 7.41328 5.33919 7.36745 5.37669 7.32578C5.41836 7.28828 5.46419 7.25911 5.51419 7.23828C5.61419 7.19661 5.73086 7.19661 5.83086 7.23828C5.88086 7.25911 5.92669 7.28828 5.96836 7.32578C6.00586 7.36745 6.03503 7.41328 6.05586 7.46328C6.07669 7.51328 6.08919 7.56745 6.08919 7.62161C6.08919 7.67578 6.07669 7.72995 6.05586 7.77995C6.03503 7.83411 6.00586 7.87578 5.96836 7.91745C5.92669 7.95495 5.88086 7.98411 5.83086 8.00495C5.78086 8.02578 5.72669 8.03828 5.67253 8.03828Z"
																fill="#23A323"
															/>
														</svg>
													</Button>
												</TooltipTrigger>
												<TooltipContent
													className="top-[6090px] ml-[26px] text-white"
													align="start"
												>
													<div className="p-2">
														<h6 className="text-[12px] font-[500]">
															Interest Accrued
														</h6>
														<p className="text-[10px] font-[500]">
															Amount/Dividends * Frequency
														</p>
													</div>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</span>
								</div>

								<p className="text-[14px] font-medium text-black">
									6-10% per annum
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Dividends Accrued
									</p>
									<span className="mr-[-50px] hidden">
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														variant="outline"
														className="outline-none border-none w-full hover:bg-white"
													>
														<svg
															width="11"
															height="11"
															viewBox="0 0 11 11"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M5.67253 10.431C3.20169 10.431 1.19336 8.42266 1.19336 5.95182C1.19336 3.48099 3.20169 1.47266 5.67253 1.47266C8.14336 1.47266 10.1517 3.48099 10.1517 5.95182C10.1517 8.42266 8.14336 10.431 5.67253 10.431ZM5.67253 2.09766C3.54753 2.09766 1.81836 3.82682 1.81836 5.95182C1.81836 8.07682 3.54753 9.80599 5.67253 9.80599C7.79753 9.80599 9.52669 8.07682 9.52669 5.95182C9.52669 3.82682 7.79753 2.09766 5.67253 2.09766Z"
																fill="#9CA3AF"
															/>
															<path
																d="M5.67188 6.68099C5.50104 6.68099 5.35938 6.53932 5.35938 6.36849V4.28516C5.35938 4.11432 5.50104 3.97266 5.67188 3.97266C5.84271 3.97266 5.98438 4.11432 5.98438 4.28516V6.36849C5.98438 6.53932 5.84271 6.68099 5.67188 6.68099Z"
																fill="#23A323"
															/>
															<path
																d="M5.67253 8.03828C5.61836 8.03828 5.56419 8.02578 5.51419 8.00495C5.46419 7.98411 5.41836 7.95495 5.37669 7.91745C5.33919 7.87578 5.31003 7.83411 5.28919 7.77995C5.26836 7.72995 5.25586 7.67578 5.25586 7.62161C5.25586 7.56745 5.26836 7.51328 5.28919 7.46328C5.31003 7.41328 5.33919 7.36745 5.37669 7.32578C5.41836 7.28828 5.46419 7.25911 5.51419 7.23828C5.61419 7.19661 5.73086 7.19661 5.83086 7.23828C5.88086 7.25911 5.92669 7.28828 5.96836 7.32578C6.00586 7.36745 6.03503 7.41328 6.05586 7.46328C6.07669 7.51328 6.08919 7.56745 6.08919 7.62161C6.08919 7.67578 6.07669 7.72995 6.05586 7.77995C6.03503 7.83411 6.00586 7.87578 5.96836 7.91745C5.92669 7.95495 5.88086 7.98411 5.83086 8.00495C5.78086 8.02578 5.72669 8.03828 5.67253 8.03828Z"
																fill="#23A323"
															/>
														</svg>
													</Button>
												</TooltipTrigger>
												<TooltipContent
													className="top-[6090px] ml-[26px] text-white"
													align="start"
												>
													<div className="p-2">
														<h6 className="text-[12px] font-[500]">
															Interest Accrued
														</h6>
														<p className="text-[10px] font-[500]">
															Amount/Dividends * Frequency
														</p>
													</div>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</span>
								</div>

								<p className="text-[14px] font-medium text-black">
									₦100,000
								</p>
							</div>

							<div className="w-[380px] mx-auto flex justify-between border-b-[1px] border-b-[#F3F4F6] py-4 mb-[3px]">
								<div className="flex items-center">
									<p className="text-[#9CA3AF] text-[12px] font-medium">
										Dividends Upfront
									</p>
									<span className="mr-[-50px] hidden">
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<Button
														variant="outline"
														className="outline-none border-none w-full hover:bg-white"
													>
														<svg
															width="11"
															height="11"
															viewBox="0 0 11 11"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M5.67253 10.431C3.20169 10.431 1.19336 8.42266 1.19336 5.95182C1.19336 3.48099 3.20169 1.47266 5.67253 1.47266C8.14336 1.47266 10.1517 3.48099 10.1517 5.95182C10.1517 8.42266 8.14336 10.431 5.67253 10.431ZM5.67253 2.09766C3.54753 2.09766 1.81836 3.82682 1.81836 5.95182C1.81836 8.07682 3.54753 9.80599 5.67253 9.80599C7.79753 9.80599 9.52669 8.07682 9.52669 5.95182C9.52669 3.82682 7.79753 2.09766 5.67253 2.09766Z"
																fill="#9CA3AF"
															/>
															<path
																d="M5.67188 6.68099C5.50104 6.68099 5.35938 6.53932 5.35938 6.36849V4.28516C5.35938 4.11432 5.50104 3.97266 5.67188 3.97266C5.84271 3.97266 5.98438 4.11432 5.98438 4.28516V6.36849C5.98438 6.53932 5.84271 6.68099 5.67188 6.68099Z"
																fill="#23A323"
															/>
															<path
																d="M5.67253 8.03828C5.61836 8.03828 5.56419 8.02578 5.51419 8.00495C5.46419 7.98411 5.41836 7.95495 5.37669 7.91745C5.33919 7.87578 5.31003 7.83411 5.28919 7.77995C5.26836 7.72995 5.25586 7.67578 5.25586 7.62161C5.25586 7.56745 5.26836 7.51328 5.28919 7.46328C5.31003 7.41328 5.33919 7.36745 5.37669 7.32578C5.41836 7.28828 5.46419 7.25911 5.51419 7.23828C5.61419 7.19661 5.73086 7.19661 5.83086 7.23828C5.88086 7.25911 5.92669 7.28828 5.96836 7.32578C6.00586 7.36745 6.03503 7.41328 6.05586 7.46328C6.07669 7.51328 6.08919 7.56745 6.08919 7.62161C6.08919 7.67578 6.07669 7.72995 6.05586 7.77995C6.03503 7.83411 6.00586 7.87578 5.96836 7.91745C5.92669 7.95495 5.88086 7.98411 5.83086 8.00495C5.78086 8.02578 5.72669 8.03828 5.67253 8.03828Z"
																fill="#23A323"
															/>
														</svg>
													</Button>
												</TooltipTrigger>
												<TooltipContent
													className="top-[6090px] ml-[26px] text-white"
													align="start"
												>
													<div className="p-2">
														<h6 className="text-[12px] font-[500]">
															Interest Accrued
														</h6>
														<p className="text-[10px] font-[500]">
															Amount/Dividends * Frequency
														</p>
													</div>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</span>
								</div>

								<Switch />
							</div>

							<p className="text-center my-6 text-[13px] font-[500] px-[15%]">
								Saving Tip: Save N16,666 Monthly to achieve target. You
								can also top up anytime
							</p>

							<div className="flex flex-col gap-3">
								<p className="text-[13px] text-[#9CA3AF] font-[500]">
									Preferred amount to save{" "}
								</p>
								<input
									type="text"
									name=""
									id=""
									defaultValue={"N10,000"}
									className="w-full border-[1px] font-[500] text-primary border-[#D1D5DB] rounded-[4px] p-4"
								/>
							</div>

							<div className="w-full flex-row items-center flex mx-auto my-4">
								<input
									type="checkbox"
									className="accent-primary mr-1 cursor-pointer"
									checked={agreed}
									onChange={(e) => {
										if (e.target.checked === true) {
											setAgreed(true);
										} else {
											setAgreed(false);
										}
									}}
								/>
								<p className="text-[12px] font-[500] text-[#9CA3AF] text-center mt-4">
									By clicking you are agreeing to the{" "}
									<span className="text-primary">
										Terms and Conditions Please note: Cannot be broken
									</span>
								</p>
							</div>
						</div>
					</TabsContent>
					<TabsContent value="breakdown">
						<div className="mt-5 bg-[#F9F9F9] w-[328px] mx-auto">
							<Table className="mx-auto">
								<TableHeader>
									<TableRow>
										<TableHead className="text-[10px] font-[500]">
											Date
										</TableHead>
										<TableHead className="text-[10px] font-[500]">
											Amount
										</TableHead>
										<TableHead className="text-[10px] font-[500]">
											Dividends
										</TableHead>
										<TableHead className="text-[10px] font-[500]">
											Amounts
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="bg-[#F9F9F9] rounded-t-[8px] mx-auto">
									{Breakdown.map((b, i) => (
										<TableRow
											key={i}
											className="border-0 cursor-pointer"
										>
											<TableCell className="text-[10px] font-[500]">
												{b.date}
											</TableCell>
											<TableCell className="text-[10px] font-[500]">
												{b.amount}
											</TableCell>
											<TableCell className="text-[10px] font-[500]">
												{b.dividends}
											</TableCell>
											<TableCell className="text-[10px] font-[500] text-[#23A323]">
												{b.amounts}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</TabsContent>
				</Tabs>

				<button
					className="mt-8 cursor-pointer w-[390px] block mx-auto bg-primary text-white p-5 rounded-[8px] text-[12px] disabled:bg-primary/60"
					onClick={() => {
						next();
					}}
					disabled={agreed === false}
				>
					Continue
				</button>
			</div>
		</Modal>
	);

	return (
		<div className="mt-10">
			{modal === "estimate" && <EstimateModal />}

			<Steptitle
				title="Payback Date"
				subtitle="Select a payback date"
				onClick={setStep}
			/>

			<div className="flex justify-center mt-6">
				<div className="mx-auto text-[11px] inline-block justify-center font-[500] text-primary rounded-[4px] px-5 py-3 bg-[#F9F5FF]">
					180 - 365 Days
				</div>
			</div>

			<div className="max-w-[450px] mx-auto mt-10">
				<div className="relative">
					<button
						className="flex justify-between items-center border-[1px] p-5 border-primary rounded-[4px] w-full mb-5"
						onClick={() => setDropdown(!dropdown)}
					>
						{startDate ? (
							<span className="text-[12px] font-[500] text-primary">
								{startDate}
							</span>
						) : (
							<span className="text-[12px] font-[500] text-primary">
								Select Start Date
							</span>
						)}
						<ChevronDown className="text-primary" />
					</button>
					{dropdown && (
						<div className="w-full bg-white p-4 rounded-[10px]">
							<h1 className="text-[12px] font-[500] text-primary text-center mb-5">
								Select Start Date
							</h1>

							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setStartDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										181 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setStartDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										182 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setStartDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										183 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setStartDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										184 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setStartDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										185 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setStartDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										186 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
						</div>
					)}
				</div>

				<div className="relative">
					<button
						className="flex justify-between items-center border-[1px] p-5 border-primary rounded-[4px] w-full mb-5"
						onClick={() => setDropDate(!dropDate)}
					>
						{paybackdate ? (
							<span className="text-[12px] font-[500] text-primary">
								{paybackdate}
							</span>
						) : (
							<span className="text-[12px] font-[500] text-primary">
								Select Payback Date
							</span>
						)}
						<ChevronDown className="text-primary" />
					</button>
					{dropDate && (
						<div className="w-full bg-white p-4 rounded-[10px]">
							<h1 className="text-[12px] font-[500] text-primary text-center mb-5">
								Select Payback Date
							</h1>

							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										181 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										182 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										183 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										184 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										185 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackDate(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										186 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
						</div>
					)}
				</div>

				<div className="relative">
					<button
						className="flex justify-between items-center border-[1px] p-5 border-primary rounded-[4px] w-full mb-5"
						onClick={() => setDropTime(!dropTime)}
					>
						{paybackTime ? (
							<span className="text-[12px] font-[500] text-primary">
								{paybackTime}
							</span>
						) : (
							<span className="text-[12px] font-[500] text-primary">
								Select Time
							</span>
						)}
						<ChevronDown className="text-primary" />
					</button>
					{dropTime && (
						<div className="w-full bg-white p-4 rounded-[10px]">
							<h1 className="text-[12px] font-[500] text-primary text-center mb-5">
								Select Time
							</h1>

							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackTime(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										181 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackTime(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										182 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackTime(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										183 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackTime(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										184 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackTime(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										185 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
							<div
								className="flex justify-between items-center mb-6"
								onClick={() => setPaybackTime(" 13th September, 2023")}
							>
								<div className="flex items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="accent-primary"
									/>
									<h1 className="text-[12px] font-[500] text-primary ml-2">
										186 days
									</h1>
								</div>
								<h2 className="text-[12px] font-[500] text-primary">
									13th September, 2023
								</h2>
							</div>
						</div>
					)}
				</div>

				<button
					className="bg-primary text-white w-full text-[14px] font-[500] rounded-[8px] p-5 mt-5"
					onClick={() => setModal("estimate")}
				>
					Continue
				</button>
			</div>
		</div>
	);
}

export default ChoosePeriod;

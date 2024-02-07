"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import PanelHeader from "./panelHeader";
import Image from "next/image";
import right from "../../assets/right.svg";
import { Progress } from "../ui/progress";
import { ProgressIndicator } from "@radix-ui/react-progress";
import uploadfile from "../../assets/upload-file.svg";
import { AlertCircle, XCircleIcon } from "lucide-react";
import Modal from "../modal";
import { AnimatePresence, motion } from "framer-motion";
import success from "../../assets/success.png";

export default function Upgrade() {
	const [activeTab, setActiveTab] = useState<
		"home" | "tier1" | "nin" | "tier2-nin" | "utility bill"
	>("home");
	const ninref = useRef<HTMLInputElement>(null);
	const tier2ninref = useRef<HTMLInputElement>(null);
	const [modal, setModal] = useState(false);

	const uploadImage = () => {
		if (ninref.current) {
			ninref.current.click();
		}
	};
	const uploadtier2Image = () => {
		if (tier2ninref.current) {
			tier2ninref.current.click();
		}
	};

	const SuccessModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[35px] w-full sm:w-[439px] px-[28px] pb-10"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-end w-full">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
							onClick={() => {
								setModal(false);
							}}
						/>
					</div>
					<div className="mx-auto flex justify-center">
						<Image
							src={success}
							width={179}
							height={179}
							alt="success"
							className="flex justify-center"
						/>
					</div>

					<h1 className="text-[26px] font-[600] text-center mt-6 mb-2 ">
						Congratulations
					</h1>
					<p className="text-center text-[12px] font-[500] text-gray400 max-w-[329px] mx-auto">
						You are now on tier 3. We know so much about each other. We
						can just be friends already?
					</p>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	return (
		<div>
			{modal && <SuccessModal />}
			{activeTab === "home" && (
				<div>
					<PanelHeader
						title="KYC Verification"
						subtitle="Lets have it!  Its not you, It’s us. We have trust issues"
					/>
					<div className="mb-4 border-2 border-[#240552] bg-[#F9FAFB] p-6 rounded-[10px]">
						<div className="flex flex-row">
							<div className="grow">
								<span className="bg-[#fff] px-5 py-2 border border-[#240552] text-[#240553] font-[500] text-[12px] rounded-[10px] shadow-[2px_3px_#240552]">
									Tier 1
								</span>
							</div>
							<div
								className="flex items-center cursor-pointer"
								onClick={() => setActiveTab("tier1")}
							>
								<div className="flex-none me-2">
									<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
										Complete Tier 1
									</h4>
								</div>
								<div className="flex-none">
									<Image src={right} alt="right" />
								</div>
							</div>
						</div>
						<div className="flex flex-row justify-between mt-9 mb-5">
							<h4 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
								Single transaction limit
							</h4>
							<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
								50,000
							</h4>
						</div>
						<div className="flex flex-row justify-between mb-5">
							<h4 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
								Maximum deposit
							</h4>
							<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
								50,000
							</h4>
						</div>
						<div className="flex flex-row justify-between">
							<h4 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
								Cumulative balance
							</h4>
							<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
								50,000
							</h4>
						</div>
					</div>
					<div className="mb-4 border-2 border-[#240552] bg-[#F9FAFB] p-6 rounded-[10px]">
						<div className="flex flex-row">
							<div className="grow">
								<span className="bg-[#FFBD00] px-5 py-2 border border-[#240552] text-[#240553] font-[500] text-[12px] rounded-[10px] shadow-[2px_3px_#240552]">
									Tier 2
								</span>
							</div>
							<div
								className="flex items-center cursor-pointer"
								onClick={() => setActiveTab("tier2-nin")}
							>
								<div className="flex-none me-2">
									<h4 className="text-[#FFBD00] font-[500] text-[12px] leading-[20px]">
										Upgrade to Tier 2
									</h4>
								</div>
								<div className="flex-none">
									<svg
										width="27"
										height="26"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.2773 11.9826V10.914C10.2773 9.14001 10.8117 7.70801 13.4833 7.70801C16.155 7.70801 16.6893 9.14001 16.6893 10.914V11.9826"
											stroke="#FCB40C"
											stroke-width="1.60299"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M13.481 15.8298C13.8351 15.8298 14.1222 15.5427 14.1222 15.1886C14.1222 14.8344 13.8351 14.5474 13.481 14.5474C13.1269 14.5474 12.8398 14.8344 12.8398 15.1886C12.8398 15.5427 13.1269 15.8298 13.481 15.8298Z"
											stroke="#FCB40C"
											stroke-width="1.60299"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M16.1556 18.3949H10.8123C8.67495 18.3949 8.14062 17.8605 8.14062 15.7232V14.6546C8.14062 12.5172 8.67495 11.9829 10.8123 11.9829H16.1556C18.2929 11.9829 18.8272 12.5172 18.8272 14.6546V15.7232C18.8272 17.8605 18.2929 18.3949 16.1556 18.3949Z"
											stroke="#FCB40C"
											stroke-width="1.60299"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M13.4834 23.7379C19.3855 23.7379 24.17 18.9533 24.17 13.0513C24.17 7.14928 19.3855 2.36475 13.4834 2.36475C7.58141 2.36475 2.79688 7.14928 2.79688 13.0513C2.79688 18.9533 7.58141 23.7379 13.4834 23.7379Z"
											stroke="#FCB40C"
											stroke-width="1.60299"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className="flex flex-row justify-between mt-9 mb-5">
							<h4 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
								Single transaction limit
							</h4>
							<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
								50,000
							</h4>
						</div>
						<div className="flex flex-row justify-between mb-5">
							<h4 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
								Maximum deposit
							</h4>
							<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
								20,000
							</h4>
						</div>
						<div className="flex flex-row justify-between">
							<h4 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
								Cumulative balance
							</h4>
							<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
								400,000
							</h4>
						</div>
					</div>

					<div className="mb-4 border-2 border-[#240552] bg-[#F9FAFB] p-6 rounded-[10px]">
						<div
							className="flex flex-row cursor-pointer"
							onClick={() => setActiveTab("utility bill")}
						>
							<div className="grow">
								<span className="bg-[#23A323] px-5 py-2 border border-[#240552] text-[#240553] font-[500] text-[12px] rounded-[10px] shadow-[2px_3px_#240552]">
									Tier 3
								</span>
							</div>
							<div className="flex-none me-2 mt-1">
								<h4 className="text-[#23A323] font-[500] text-[12px] leading-[20px]">
									Upgrade to Tier 3
								</h4>
							</div>
							<div className="flex-none">
								<svg
									width="27"
									height="27"
									viewBox="0 0 27 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.2773 12.4289V11.3603C10.2773 9.5863 10.8117 8.1543 13.4833 8.1543C16.155 8.1543 16.6893 9.5863 16.6893 11.3603V12.4289"
										stroke="#22C55E"
										stroke-width="1.60299"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M13.481 16.2761C13.8351 16.2761 14.1222 15.989 14.1222 15.6349C14.1222 15.2807 13.8351 14.9937 13.481 14.9937C13.1269 14.9937 12.8398 15.2807 12.8398 15.6349C12.8398 15.989 13.1269 16.2761 13.481 16.2761Z"
										stroke="#22C55E"
										stroke-width="1.60299"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M16.1556 18.8411H10.8123C8.67495 18.8411 8.14062 18.3068 8.14062 16.1695V15.1008C8.14062 12.9635 8.67495 12.4292 10.8123 12.4292H16.1556C18.2929 12.4292 18.8272 12.9635 18.8272 15.1008V16.1695C18.8272 18.3068 18.2929 18.8411 16.1556 18.8411Z"
										stroke="#22C55E"
										stroke-width="1.60299"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M13.4834 24.1842C19.3855 24.1842 24.17 19.3996 24.17 13.4976C24.17 7.59557 19.3855 2.81104 13.4834 2.81104C7.58141 2.81104 2.79688 7.59557 2.79688 13.4976C2.79688 19.3996 7.58141 24.1842 13.4834 24.1842Z"
										stroke="#22C55E"
										stroke-width="1.60299"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div className="flex flex-row justify-between mt-9 mb-5">
							<h4 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
								Single transaction limit
							</h4>
							<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
								Unlimited
							</h4>
						</div>
						<div className="flex flex-row justify-between mb-5">
							<h4 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
								Maximum deposit
							</h4>
							<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
								Unlimited
							</h4>
						</div>
						<div className="flex flex-row justify-between">
							<h4 className="text-[#9CA3AF] font-[500] text-[12px] leading-[20px]">
								Unlimited
							</h4>
							<h4 className="text-[#240552] font-[500] text-[12px] leading-[20px]">
								-
							</h4>
						</div>
					</div>
				</div>
			)}

			{activeTab === "tier1" && (
				<div>
					<PanelHeader
						title="Tier1"
						subtitle="Lets have it!  Its not you, It’s us. We have trust issues"
						withIcon
						onBackClick={() => setActiveTab("home")}
					/>
					<div>
						<Progress className="h-[5px]" value={50}>
							<ProgressIndicator className="bg-[#240552]" />
						</Progress>

						<div className="flex flex-col gap-6 mt-9">
							<div className="cursor-pointer bg-[#F9FAFB] border-[2px] border-[#240552] rounded-[4px] flex items-center justify-between p-5">
								<p className="text-[14px] font-[500] text-[#240552]">
									Selfie
								</p>
								<p className="text-white bg-[#240553] px-5 py-2 text-[9px] w-[80px] text-center">
									Approved
								</p>
							</div>
							<div className="cursor-pointer bg-[#F9FAFB] border-[2px] border-[#240552] rounded-[4px] flex items-center justify-between p-5">
								<p className="text-[14px] font-[500] text-[#240552]">
									Bank Verification Number (BVN)
								</p>
								<p className="text-white bg-[#240553] px-5 py-2 text-[9px] w-[80px] text-center">
									Approved
								</p>
							</div>
							<div
								className=" cursor-pointer bg-[#F9FAFB] border-[2px] border-[#240552] rounded-[4px] flex items-center justify-between p-5"
								onClick={() => setActiveTab("nin")}
							>
								<p className="text-[14px] font-[500] text-[#240552]">
									NIN
								</p>
								<p className="text-white bg-[#23A323]  py-2 text-[9px] w-[80px] text-center">
									Submit
								</p>
							</div>
							<div className="cursor-pointer bg-[#F9FAFB] border-[2px] border-[#240552] rounded-[4px] flex items-center justify-between p-5">
								<p className="text-[14px] font-[500] text-[#240552]">
									Personal Details
								</p>
								<p className="text-white bg-[#23A323]  py-2 text-[9px] w-[80px] text-center">
									Not Completed
								</p>
							</div>
						</div>
						<div className="flex justify-center h-full mt-[190px]">
							<div className="flex items-center bg-[#F9F5FF] rounded-[4px] py-3 px-5">
								<AlertCircle className="text-[#240552] mr-2" />
								<p className="text-[12px] text-[#240552]  text-center">
									Limit: 50,000 per transaction / 200,000 per day
								</p>
							</div>
						</div>
					</div>
				</div>
			)}

			{activeTab === "nin" && (
				<div className="h-[37vh]">
					<PanelHeader
						title="National Identification Number (NIN Slip)"
						subtitle="Upload your NIN Slip and ID"
						withIcon
						onBackClick={() => setActiveTab("tier1")}
					/>
					<div className="mt-5">
						<div
							className="border-[2px] border-dashed border-[#D1D5DB] rounded-[16px] h-[200px] flex justify-center items-center cursor-pointer"
							onClick={uploadImage}
						>
							<div className="text-center">
								<Image
									src={uploadfile}
									alt="upload nin"
									className="w-[110px] mb-2 mx-auto"
								/>
								<p className="text-[14px] text-[#9CA3AF] font-[400]">
									Max. file size: 10MB (Pdf, Jpeg, Png)
								</p>
							</div>
							<input
								type="file"
								name=""
								id=""
								ref={ninref}
								className="hidden"
							/>
						</div>

						<div className="mt-6">
							<input
								type="tel"
								placeholder="Enter Document ID"
								className="border-[1px] border-[#F3F4F6] rounded-[4px] p-4 text-[13px] w-full outline-none"
							/>
						</div>
					</div>

					<div className="mt-[100px] md:mt-[270px] xl:mt-[300px]">
						<button className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full">
							Submit
						</button>
					</div>
				</div>
			)}
			{activeTab === "tier2-nin" && (
				<div className="h-[37vh]">
					<PanelHeader
						title="National Identification Number (NIN Slip)"
						subtitle="Select an identification document"
						withIcon
						onBackClick={() => setActiveTab("home")}
					/>
					<div className="mt-5">
						<div className="p-4 border-[1px] border-[#F3F4F6] mb-5">
							<select
								name=""
								id=""
								className="w-full outline-none text-[12px] font-[500] text-[#240552]"
							>
								<option value="Voter’s Card">Voter’s Card</option>
								<option value="International Passport">
									International Passport
								</option>
								<option value="Driver’s License">
									Driver’s License
								</option>
							</select>
						</div>
						<div className="mb-5">
							<input
								type="tel"
								placeholder="Enter Document ID"
								className="border-[1px] border-[#F3F4F6] rounded-[4px] p-4 text-[13px] w-full outline-none"
							/>
						</div>
						<div
							className="border-[2px] border-dashed border-[#D1D5DB] rounded-[16px] h-[200px] flex justify-center items-center cursor-pointer"
							onClick={uploadtier2Image}
						>
							<div className="text-center">
								<Image
									src={uploadfile}
									alt="upload nin"
									className="w-[110px] mb-2 mx-auto"
								/>
								<p className="text-[14px] text-[#9CA3AF] font-[400]">
									Max. file size: 10MB (Pdf, Jpeg, Png)
								</p>
							</div>
							<input
								type="file"
								name=""
								id=""
								ref={tier2ninref}
								className="hidden"
							/>
						</div>
						<div className="flex justify-center h-full mt-[170px]">
							<div className="flex items-center bg-[#F9F5FF] rounded-[4px] py-3 px-5">
								<AlertCircle className="text-[#240552] mr-2" />
								<p className="text-[12px] text-[#240552]  text-center">
									Limit: 50,000 per transaction / 400,000 per day
								</p>
							</div>
						</div>
					</div>

					<button className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full mt-4">
						Submit
					</button>
				</div>
			)}
			{activeTab === "utility bill" && (
				<div className="h-[37vh]">
					<PanelHeader
						title="Utility Bill"
						subtitle="Select a document"
						withIcon
						onBackClick={() => setActiveTab("home")}
					/>
					<div className="mt-5">
						<div className="p-4 border-[1px] border-[#F3F4F6] mb-5">
							<select
								name=""
								id=""
								className="w-full outline-none text-[12px] font-[500] text-[#240552]"
							>
								<option value="Voter’s Card" selected disabled>
									Select Document
								</option>
								<option value="Voter’s Card">Voter’s Card</option>
								<option value="International Passport">
									International Passport
								</option>
								<option value="Driver’s License">
									Driver’s License
								</option>
							</select>
						</div>
						<div className="mb-5">
							<input
								type="text"
								placeholder="Enter Address"
								className="border-[1px] border-[#F3F4F6] rounded-[4px] p-4 text-[13px] w-full outline-none"
							/>
						</div>
						<div className="p-4 border-[1px] border-[#F3F4F6] mb-5">
							<select
								name=""
								id=""
								className="w-full outline-none text-[12px] font-[500] text-[#240552]"
							>
								<option value="Voter’s Card" selected disabled>
									Choose State
								</option>
								<option value="Voter’s Card">Lagos</option>
							</select>
						</div>
						<div className="p-4 border-[1px] border-[#F3F4F6] mb-5">
							<select
								name=""
								id=""
								className="w-full outline-none text-[12px] font-[500] text-[#240552]"
							>
								<option value="Voter’s Card" selected disabled>
									LGA
								</option>
							</select>
						</div>
						<div className="mb-5">
							<input
								type="text"
								placeholder="Enter Nearest LandMark"
								className="border-[1px] border-[#F3F4F6] rounded-[4px] p-4 text-[13px] w-full outline-none"
							/>
						</div>
						<div
							className="border-[2px] border-dashed border-[#D1D5DB] rounded-[16px] h-[200px] flex justify-center items-center cursor-pointer"
							onClick={uploadtier2Image}
						>
							<div className="text-center">
								<Image
									src={uploadfile}
									alt="upload nin"
									className="w-[110px] mb-2 mx-auto"
								/>
								<p className="text-[14px] text-[#9CA3AF] font-[400]">
									Max. file size: 10MB (Pdf, Jpeg, Png)
								</p>
							</div>
							<input
								type="file"
								name=""
								id=""
								ref={tier2ninref}
								className="hidden"
							/>
						</div>
						<div className="flex justify-center h-full mt-5">
							<div className="flex items-center bg-[#F9F5FF] rounded-[4px] py-3 px-5">
								<AlertCircle className="text-[#240552] mr-2" />
								<p className="text-[12px] text-[#240552]  text-center">
									Limit: Unlimited per transaction / Unlimited per day
								</p>
							</div>
						</div>
					</div>

					<button
						className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full mt-4"
						onClick={() => setModal(true)}
					>
						Submit
					</button>
				</div>
			)}
		</div>
	);
}

"use client";
import React, { useState } from "react";
import PanelHeader from "./panelHeader";
import { AlertCircle, ChevronRight, XCircleIcon } from "lucide-react";
import OtpInput from "react18-input-otp";
import Modal from "../modal";
import { AnimatePresence, motion } from "framer-motion";
import success from "../../assets/success.png";
import Image from "next/image";

function ResetPin() {
	const [activeTab, setActiveTab] = useState<
		| "home"
		| "forgot"
		| "enter-pin"
		| "set-pin"
		| "confirm-pin"
		| "change-pin"
		| "cp-setpin"
		| "cp-confrim"
	>("home");
	const [otp, setOtp] = useState("");
	const [pin, setPin] = useState("");
	const [confirmpin, setConfirmPin] = useState("");
	const [modal, setModal] = useState(false);

	const changeOtp = (otp: string) => {
		setOtp(otp);
	};
	const changePin = (otp: string) => {
		setPin(otp);
	};
	const changeConfirmPin = (otp: string) => {
		setConfirmPin(otp);
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
								setActiveTab("home");
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
						PIN Changed Successfully
					</h1>
					<p className="text-center text-[12px] font-[500] text-gray400 max-w-[329px] mx-auto">
						PIN Changed Successfully
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
						title="Reset PIN"
						subtitle="Choose what you want to do"
					/>

					<div className="flex flex-col gap-5">
						<button
							className="w-full rounded-[4px] border-[1px] border-[#F3F4F6] flex justify-between items-center text-[12px] font-[500] text-[#240552] p-4"
							onClick={() => setActiveTab("change-pin")}
						>
							<p>I want to change my PIN</p>
							<ChevronRight className="w-[20px] text-[#000000]" />
						</button>
						<button
							className="w-full rounded-[4px] border-[1px] border-[#F3F4F6] flex justify-between items-center text-[12px] font-[500] text-[#240552] p-4"
							onClick={() => setActiveTab("forgot")}
						>
							<p>I can’t remember my PIN</p>
							<ChevronRight className="w-[20px] text-[#000000]" />
						</button>
					</div>
				</div>
			)}

			{activeTab === "change-pin" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Enter Current PIN"
						subtitle="Enter your current transaction PIN "
						withIcon
						onBackClick={() => setActiveTab("home")}
					/>

					<div className="mt-5">
						<OtpInput
							numInputs={6}
							value={otp}
							onChange={changeOtp}
							inputStyle={"otp-form"}
						/>
					</div>

					<div className="absolute top-[94%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("cp-setpin")}
						>
							Confirm My Details
						</button>
					</div>
				</div>
			)}

			{activeTab === "cp-setpin" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Set PIN"
						subtitle="Set a new 6-digit transaction PIN"
						withIcon
						onBackClick={() => setActiveTab("change-pin")}
					/>

					<div className="mt-5">
						<OtpInput
							numInputs={6}
							value={otp}
							onChange={changeOtp}
							inputStyle={"otp-form"}
						/>

						<div className="mt-7">
							<p className="text-[12px] font-[400] text-[#9CA3AF] flex items-center mb-2">
								<span className="mr-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.54411 15.2122C9.41751 15.2134 10.2825 15.0419 11.0894 14.7076C11.8964 14.3734 12.6293 13.883 13.246 13.2646C13.8644 12.6478 14.3548 11.9149 14.6891 11.108C15.0233 10.3011 15.1948 9.43607 15.1937 8.56267C15.1948 7.68927 15.0233 6.82426 14.6891 6.01735C14.3548 5.21044 13.8644 4.47754 13.246 3.86075C12.6293 3.24235 11.8964 2.75194 11.0894 2.41769C10.2825 2.08344 9.41751 1.91196 8.54411 1.91309C7.67072 1.91198 6.80571 2.08347 5.9988 2.41772C5.19189 2.75196 4.45898 3.24237 3.8422 3.86075C3.22381 4.47754 2.7334 5.21044 2.39916 6.01735C2.06492 6.82426 1.89342 7.68927 1.89454 8.56267C1.89341 9.43607 2.06489 10.3011 2.39914 11.108C2.73338 11.9149 3.2238 12.6478 3.8422 13.2646C4.45898 13.883 5.19189 14.3734 5.9988 14.7076C6.80571 15.0419 7.67072 15.2134 8.54411 15.2122Z"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linejoin="round"
										/>
										<path
											d="M5.88281 8.56226L7.87769 10.5571L11.8674 6.56738"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								4 Sequential numbers are not allowed (e.g. 123456 or
								456789)
							</p>
							<p className="text-[12px] font-[400] text-[#9CA3AF] flex items-center">
								<span className="mr-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.54411 15.2122C9.41751 15.2134 10.2825 15.0419 11.0894 14.7076C11.8964 14.3734 12.6293 13.883 13.246 13.2646C13.8644 12.6478 14.3548 11.9149 14.6891 11.108C15.0233 10.3011 15.1948 9.43607 15.1937 8.56267C15.1948 7.68927 15.0233 6.82426 14.6891 6.01735C14.3548 5.21044 13.8644 4.47754 13.246 3.86075C12.6293 3.24235 11.8964 2.75194 11.0894 2.41769C10.2825 2.08344 9.41751 1.91196 8.54411 1.91309C7.67072 1.91198 6.80571 2.08347 5.9988 2.41772C5.19189 2.75196 4.45898 3.24237 3.8422 3.86075C3.22381 4.47754 2.7334 5.21044 2.39916 6.01735C2.06492 6.82426 1.89342 7.68927 1.89454 8.56267C1.89341 9.43607 2.06489 10.3011 2.39914 11.108C2.73338 11.9149 3.2238 12.6478 3.8422 13.2646C4.45898 13.883 5.19189 14.3734 5.9988 14.7076C6.80571 15.0419 7.67072 15.2134 8.54411 15.2122Z"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linejoin="round"
										/>
										<path
											d="M5.88281 8.56226L7.87769 10.5571L11.8674 6.56738"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								4 Repetitive numbers are also not allowed (e.g. 1111111
								or 444444)
							</p>
						</div>
					</div>

					<div className="absolute top-[94%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("cp-confrim")}
						>
							Confirm My Details
						</button>
					</div>
				</div>
			)}
			{activeTab === "cp-confrim" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Confrim PIN"
						subtitle="confirm your 6-digit transaction PIN"
						withIcon
						onBackClick={() => setActiveTab("cp-setpin")}
					/>

					<div className="mt-5">
						<OtpInput
							numInputs={6}
							value={confirmpin}
							onChange={changeConfirmPin}
							inputStyle={"otp-form"}
						/>

						<div className="mt-7">
							<p className="text-[12px] font-[400] text-[#9CA3AF] flex items-center mb-2">
								<span className="mr-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.54411 15.2122C9.41751 15.2134 10.2825 15.0419 11.0894 14.7076C11.8964 14.3734 12.6293 13.883 13.246 13.2646C13.8644 12.6478 14.3548 11.9149 14.6891 11.108C15.0233 10.3011 15.1948 9.43607 15.1937 8.56267C15.1948 7.68927 15.0233 6.82426 14.6891 6.01735C14.3548 5.21044 13.8644 4.47754 13.246 3.86075C12.6293 3.24235 11.8964 2.75194 11.0894 2.41769C10.2825 2.08344 9.41751 1.91196 8.54411 1.91309C7.67072 1.91198 6.80571 2.08347 5.9988 2.41772C5.19189 2.75196 4.45898 3.24237 3.8422 3.86075C3.22381 4.47754 2.7334 5.21044 2.39916 6.01735C2.06492 6.82426 1.89342 7.68927 1.89454 8.56267C1.89341 9.43607 2.06489 10.3011 2.39914 11.108C2.73338 11.9149 3.2238 12.6478 3.8422 13.2646C4.45898 13.883 5.19189 14.3734 5.9988 14.7076C6.80571 15.0419 7.67072 15.2134 8.54411 15.2122Z"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linejoin="round"
										/>
										<path
											d="M5.88281 8.56226L7.87769 10.5571L11.8674 6.56738"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								4 Sequential numbers are not allowed (e.g. 123456 or
								456789)
							</p>
							<p className="text-[12px] font-[400] text-[#9CA3AF] flex items-center">
								<span className="mr-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.54411 15.2122C9.41751 15.2134 10.2825 15.0419 11.0894 14.7076C11.8964 14.3734 12.6293 13.883 13.246 13.2646C13.8644 12.6478 14.3548 11.9149 14.6891 11.108C15.0233 10.3011 15.1948 9.43607 15.1937 8.56267C15.1948 7.68927 15.0233 6.82426 14.6891 6.01735C14.3548 5.21044 13.8644 4.47754 13.246 3.86075C12.6293 3.24235 11.8964 2.75194 11.0894 2.41769C10.2825 2.08344 9.41751 1.91196 8.54411 1.91309C7.67072 1.91198 6.80571 2.08347 5.9988 2.41772C5.19189 2.75196 4.45898 3.24237 3.8422 3.86075C3.22381 4.47754 2.7334 5.21044 2.39916 6.01735C2.06492 6.82426 1.89342 7.68927 1.89454 8.56267C1.89341 9.43607 2.06489 10.3011 2.39914 11.108C2.73338 11.9149 3.2238 12.6478 3.8422 13.2646C4.45898 13.883 5.19189 14.3734 5.9988 14.7076C6.80571 15.0419 7.67072 15.2134 8.54411 15.2122Z"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linejoin="round"
										/>
										<path
											d="M5.88281 8.56226L7.87769 10.5571L11.8674 6.56738"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								4 Repetitive numbers are also not allowed (e.g. 1111111
								or 444444)
							</p>
						</div>
					</div>

					<div className="absolute top-[88%] w-full">
						<div className="flex items-center justify-center rounded-[4px] py-3 px-5">
							<AlertCircle className="text-[#9CA3AF] mr-2" />
							<p className="text-[12px] text-[#9CA3AF]  text-center">
								Ensure you don’t share this PIN with anyone
							</p>
						</div>
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setModal(true)}
						>
							Done
						</button>
					</div>
				</div>
			)}

			{activeTab === "forgot" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Reset PIN"
						subtitle="Just to be safe please answer the questions below"
						withIcon
						onBackClick={() => setActiveTab("home")}
					/>

					<div className="flex flex-col gap-5 mt-5">
						<input
							type="text"
							placeholder="Enter BVN"
							className="border-[1px] border-[#F3F4F6] rounded-[4px] p-4 text-[13px] w-full outline-none text-[#D1D5DB] placeholder:text-[#D1D5DB]"
						/>
						<div>
							<span className="text-[12px] font-[500] text-[#D1D5DB] mb-0.5">
								Date of birth
							</span>
							<input
								type="date"
								className="border-[1px] border-[#F3F4F6] rounded-[4px] p-4 text-[13px] w-full outline-none text-[#D1D5DB] placeholder:text-[#D1D5DB]"
							/>
						</div>
					</div>
					<div className="absolute top-[94%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("enter-pin")}
						>
							Confirm My Details
						</button>
					</div>
				</div>
			)}
			{activeTab === "enter-pin" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Reset PIN"
						subtitle="Please enter 4-digit code is sent to  091****1234"
						withIcon
						onBackClick={() => setActiveTab("forgot")}
					/>

					<div className="mt-5">
						<OtpInput
							numInputs={4}
							value={otp}
							onChange={changeOtp}
							inputStyle={"otp-form"}
						/>

						<p className="text-[12px] font-[500] text-[#9CA3AF] mt-6">
							Didn’t get OTP?{" "}
							<span className="text-[#240552]">Resend in 40 secs</span>
						</p>
					</div>

					<div className="absolute top-[94%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("set-pin")}
						>
							Confirm My Details
						</button>
					</div>
				</div>
			)}
			{activeTab === "set-pin" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Set PIN"
						subtitle="Set a new 6-digit transaction PIN"
						withIcon
						onBackClick={() => setActiveTab("enter-pin")}
					/>

					<div className="mt-5">
						<OtpInput
							numInputs={6}
							value={pin}
							onChange={changePin}
							inputStyle={"otp-form"}
						/>

						<div className="mt-7">
							<p className="text-[12px] font-[400] text-[#9CA3AF] flex items-center mb-2">
								<span className="mr-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.54411 15.2122C9.41751 15.2134 10.2825 15.0419 11.0894 14.7076C11.8964 14.3734 12.6293 13.883 13.246 13.2646C13.8644 12.6478 14.3548 11.9149 14.6891 11.108C15.0233 10.3011 15.1948 9.43607 15.1937 8.56267C15.1948 7.68927 15.0233 6.82426 14.6891 6.01735C14.3548 5.21044 13.8644 4.47754 13.246 3.86075C12.6293 3.24235 11.8964 2.75194 11.0894 2.41769C10.2825 2.08344 9.41751 1.91196 8.54411 1.91309C7.67072 1.91198 6.80571 2.08347 5.9988 2.41772C5.19189 2.75196 4.45898 3.24237 3.8422 3.86075C3.22381 4.47754 2.7334 5.21044 2.39916 6.01735C2.06492 6.82426 1.89342 7.68927 1.89454 8.56267C1.89341 9.43607 2.06489 10.3011 2.39914 11.108C2.73338 11.9149 3.2238 12.6478 3.8422 13.2646C4.45898 13.883 5.19189 14.3734 5.9988 14.7076C6.80571 15.0419 7.67072 15.2134 8.54411 15.2122Z"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linejoin="round"
										/>
										<path
											d="M5.88281 8.56226L7.87769 10.5571L11.8674 6.56738"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								4 Sequential numbers are not allowed (e.g. 123456 or
								456789)
							</p>
							<p className="text-[12px] font-[400] text-[#9CA3AF] flex items-center">
								<span className="mr-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.54411 15.2122C9.41751 15.2134 10.2825 15.0419 11.0894 14.7076C11.8964 14.3734 12.6293 13.883 13.246 13.2646C13.8644 12.6478 14.3548 11.9149 14.6891 11.108C15.0233 10.3011 15.1948 9.43607 15.1937 8.56267C15.1948 7.68927 15.0233 6.82426 14.6891 6.01735C14.3548 5.21044 13.8644 4.47754 13.246 3.86075C12.6293 3.24235 11.8964 2.75194 11.0894 2.41769C10.2825 2.08344 9.41751 1.91196 8.54411 1.91309C7.67072 1.91198 6.80571 2.08347 5.9988 2.41772C5.19189 2.75196 4.45898 3.24237 3.8422 3.86075C3.22381 4.47754 2.7334 5.21044 2.39916 6.01735C2.06492 6.82426 1.89342 7.68927 1.89454 8.56267C1.89341 9.43607 2.06489 10.3011 2.39914 11.108C2.73338 11.9149 3.2238 12.6478 3.8422 13.2646C4.45898 13.883 5.19189 14.3734 5.9988 14.7076C6.80571 15.0419 7.67072 15.2134 8.54411 15.2122Z"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linejoin="round"
										/>
										<path
											d="M5.88281 8.56226L7.87769 10.5571L11.8674 6.56738"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								4 Repetitive numbers are also not allowed (e.g. 1111111
								or 444444)
							</p>
						</div>
					</div>

					<div className="absolute top-[88%] w-full">
						<div className="flex items-center justify-center rounded-[4px] py-3 px-5">
							<AlertCircle className="text-[#9CA3AF] mr-2" />
							<p className="text-[12px] text-[#9CA3AF]  text-center">
								Ensure you don’t share this PIN with anyone
							</p>
						</div>
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("confirm-pin")}
						>
							Set
						</button>
					</div>
				</div>
			)}
			{activeTab === "confirm-pin" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Confrim PIN"
						subtitle="confirm your 6-digit transaction PIN"
						withIcon
						onBackClick={() => setActiveTab("set-pin")}
					/>

					<div className="mt-5">
						<OtpInput
							numInputs={6}
							value={confirmpin}
							onChange={changeConfirmPin}
							inputStyle={"otp-form"}
						/>

						<div className="mt-7">
							<p className="text-[12px] font-[400] text-[#9CA3AF] flex items-center mb-2">
								<span className="mr-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.54411 15.2122C9.41751 15.2134 10.2825 15.0419 11.0894 14.7076C11.8964 14.3734 12.6293 13.883 13.246 13.2646C13.8644 12.6478 14.3548 11.9149 14.6891 11.108C15.0233 10.3011 15.1948 9.43607 15.1937 8.56267C15.1948 7.68927 15.0233 6.82426 14.6891 6.01735C14.3548 5.21044 13.8644 4.47754 13.246 3.86075C12.6293 3.24235 11.8964 2.75194 11.0894 2.41769C10.2825 2.08344 9.41751 1.91196 8.54411 1.91309C7.67072 1.91198 6.80571 2.08347 5.9988 2.41772C5.19189 2.75196 4.45898 3.24237 3.8422 3.86075C3.22381 4.47754 2.7334 5.21044 2.39916 6.01735C2.06492 6.82426 1.89342 7.68927 1.89454 8.56267C1.89341 9.43607 2.06489 10.3011 2.39914 11.108C2.73338 11.9149 3.2238 12.6478 3.8422 13.2646C4.45898 13.883 5.19189 14.3734 5.9988 14.7076C6.80571 15.0419 7.67072 15.2134 8.54411 15.2122Z"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linejoin="round"
										/>
										<path
											d="M5.88281 8.56226L7.87769 10.5571L11.8674 6.56738"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								4 Sequential numbers are not allowed (e.g. 123456 or
								456789)
							</p>
							<p className="text-[12px] font-[400] text-[#9CA3AF] flex items-center">
								<span className="mr-2">
									<svg
										width="17"
										height="17"
										viewBox="0 0 17 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.54411 15.2122C9.41751 15.2134 10.2825 15.0419 11.0894 14.7076C11.8964 14.3734 12.6293 13.883 13.246 13.2646C13.8644 12.6478 14.3548 11.9149 14.6891 11.108C15.0233 10.3011 15.1948 9.43607 15.1937 8.56267C15.1948 7.68927 15.0233 6.82426 14.6891 6.01735C14.3548 5.21044 13.8644 4.47754 13.246 3.86075C12.6293 3.24235 11.8964 2.75194 11.0894 2.41769C10.2825 2.08344 9.41751 1.91196 8.54411 1.91309C7.67072 1.91198 6.80571 2.08347 5.9988 2.41772C5.19189 2.75196 4.45898 3.24237 3.8422 3.86075C3.22381 4.47754 2.7334 5.21044 2.39916 6.01735C2.06492 6.82426 1.89342 7.68927 1.89454 8.56267C1.89341 9.43607 2.06489 10.3011 2.39914 11.108C2.73338 11.9149 3.2238 12.6478 3.8422 13.2646C4.45898 13.883 5.19189 14.3734 5.9988 14.7076C6.80571 15.0419 7.67072 15.2134 8.54411 15.2122Z"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linejoin="round"
										/>
										<path
											d="M5.88281 8.56226L7.87769 10.5571L11.8674 6.56738"
											stroke="#9CA3AF"
											stroke-width="1.32992"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								4 Repetitive numbers are also not allowed (e.g. 1111111
								or 444444)
							</p>
						</div>
					</div>

					<div className="absolute top-[88%] w-full">
						<div className="flex items-center justify-center rounded-[4px] py-3 px-5">
							<AlertCircle className="text-[#9CA3AF] mr-2" />
							<p className="text-[12px] text-[#9CA3AF]  text-center">
								Ensure you don’t share this PIN with anyone
							</p>
						</div>
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setModal(true)}
						>
							Done
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default ResetPin;

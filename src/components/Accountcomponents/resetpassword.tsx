"use client";
import React, { useState } from "react";
import PanelHeader from "./panelHeader";
import { AlertCircle, ChevronRight, XCircleIcon } from "lucide-react";
import success from "../../assets/success.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import OtpInput from "react18-input-otp";
import { Input } from "../ui/input";
import Modal from "../modal";

export default function Resetpassword() {
	const [activeTab, setActiveTab] = useState<
		| "home"
		| "change-pwd"
		| "forgot"
		| "question"
		| "verification-code"
		| "forgot-sp"
		| "enter-pin"
		| "change-sp"
		| "change-ep"
	>("home");
	const [modal, setModal] = useState(false);
	const [otp, setOtp] = useState("");

	const changeOtp = (otp: string) => {
		setOtp(otp);
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
						Password Changed Successfully
					</h1>
					<p className="text-center text-[12px] font-[500] text-gray400 max-w-[329px] mx-auto">
						You have successfully changed your password
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
						title="Reset Password"
						subtitle="Choose what you want to do"
					/>
					<div className="flex flex-col gap-5">
						<button
							className="w-full rounded-[4px] border-[1px] border-[#F3F4F6] flex justify-between items-center text-[12px] font-[500] text-[#240552] p-4"
							onClick={() => setActiveTab("change-pwd")}
						>
							<p>I want to change my Password</p>
							<ChevronRight className="w-[20px] text-[#000000]" />
						</button>
						<button
							className="w-full rounded-[4px] border-[1px] border-[#F3F4F6] flex justify-between items-center text-[12px] font-[500] text-[#240552] p-4"
							onClick={() => setActiveTab("forgot")}
						>
							<p>I can’t remember my Password</p>
							<ChevronRight className="w-[20px] text-[#000000]" />
						</button>
					</div>
				</div>
			)}
			{activeTab === "change-pwd" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Enter Password"
						subtitle="Enter your current password"
						withIcon
						onBackClick={() => setActiveTab("home")}
					/>

					<div className="flex flex-col gap-5 mt-5">
						<Input
							placeholder="Enter Password"
							className="outline-none  placeholder:text-[#D1D5DB] placeholder:text-[12px]  px-4 py-6 ring-0"
						/>
					</div>
					<div className="absolute top-[94%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("change-sp")}
						>
							Confirm
						</button>
					</div>
				</div>
			)}
			{activeTab === "change-sp" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Set Password"
						subtitle="Enter new password to secure your account"
						withIcon
						onBackClick={() => setActiveTab("change-pwd")}
					/>

					<div className="mt-5">
						<div className="flex flex-col gap-5">
							<Input
								placeholder="Enter Password"
								className="outline-none  placeholder:text-[#D1D5DB] placeholder:text-[12px]  px-4 py-6 ring-0"
							/>
							<Input
								placeholder="Confirm Password"
								className="outline-none  placeholder:text-[#D1D5DB] placeholder:text-[12px] px-4 py-6 ring-0"
							/>
						</div>
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
								At least 8 characters
							</p>
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
								Consist of letters and numbers
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
								Password must match
							</p>
						</div>
					</div>

					<div className="absolute top-[93%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("change-ep")}
						>
							Set Password
						</button>
					</div>
				</div>
			)}
			{activeTab === "change-ep" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Enter PIN"
						subtitle="Enter your transaction PIN to change your password"
						withIcon
						onBackClick={() => setActiveTab("change-sp")}
					/>

					<div className="mt-5">
						<div className="flex flex-col gap-5">
							<OtpInput
								numInputs={6}
								value={otp}
								onChange={changeOtp}
								inputStyle={"otp-form"}
							/>
						</div>
					</div>

					<div className="absolute top-[93%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setModal(true)}
						>
							Continue
						</button>
					</div>
				</div>
			)}
			{activeTab === "forgot" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Forgot Password"
						subtitle="Enter your phone number to reset your password"
						withIcon
						onBackClick={() => setActiveTab("home")}
					/>

					<div className="flex flex-col gap-5 mt-5">
						<input
							type="tel"
							placeholder="Enter Phone Number"
							className="border-[1px] border-[#F3F4F6] rounded-[4px] p-4 text-[13px] w-full outline-none text-[#D1D5DB] placeholder:text-[#D1D5DB]"
						/>
					</div>
					<div className="absolute top-[94%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("question")}
						>
							Reset Password
						</button>
					</div>
				</div>
			)}
			{activeTab === "question" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Quick Question"
						subtitle="Just to be safe please answer the questions below"
						withIcon
						onBackClick={() => setActiveTab("forgot")}
					/>

					<div className="flex flex-col gap-5 mt-5">
						<input
							type="tel"
							placeholder="Enter Bvn"
							className="border-[1px] border-[#F3F4F6] rounded-[4px] p-4 text-[13px] w-full outline-none text-[#D1D5DB] placeholder:text-[#D1D5DB]"
						/>

						<div className="border-[1px] border-[#F3F4F6] rounded-[4px]">
							<span className="pl-4 text-[12px] font-[400] text-[#D1D5DB]">
								Date of Birth
							</span>
							<input
								type="date"
								className="p-4 py-2 text-[13px] w-full outline-none text-[#D1D5DB] placeholder:text-[#3e4249]"
							/>
						</div>
					</div>
					<div className="absolute top-[94%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("verification-code")}
						>
							Confirm My Details
						</button>
					</div>
				</div>
			)}
			{activeTab === "verification-code" && (
				<div className="relative h-[75vh]">
					<div className="mb-10">
						<svg
							width="76"
							height="75"
							viewBox="0 0 76 75"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="35.9429"
								cy="38.9233"
								r="35.9116"
								fill="#240552"
							/>
							<circle
								cx="39.9038"
								cy="36.0962"
								r="35.9116"
								fill="#F6F1FE"
							/>
							<path
								d="M53.1927 15.3556V56.3694C53.1927 58.8121 51.2094 60.7953 48.7667 60.7953H30.4728C28.0301 60.7953 26.0469 58.8121 26.0469 56.3694V15.3556C26.0469 12.913 28.0301 10.9297 30.4728 10.9297H48.7667C51.2094 10.9297 53.1927 12.913 53.1927 15.3556Z"
								fill="#FEFEFE"
							/>
							<path
								d="M51.0735 18.7024V51.0118C51.0735 51.3378 50.8093 51.602 50.4834 51.602H28.6487C28.3228 51.602 28.0586 51.3378 28.0586 51.0118V18.7024C28.0586 18.3765 28.3228 18.1123 28.6487 18.1123H50.4834C50.8093 18.1123 51.0735 18.3765 51.0735 18.7024Z"
								fill="#240552"
							/>
							<path
								d="M42.1658 55.1678C42.1658 56.618 40.9901 57.7936 39.5399 57.7936C38.0897 57.7936 36.9141 56.618 36.9141 55.1678C36.9141 53.7177 38.0897 52.542 39.5399 52.542C40.9901 52.542 42.1658 53.7177 42.1658 55.1678Z"
								fill="#240552"
							/>
							<path
								d="M43.1088 14.8089C43.1088 15.1348 42.8446 15.399 42.5187 15.399H36.6175C36.2915 15.399 36.0273 15.1348 36.0273 14.8089C36.0273 14.4829 36.2915 14.2188 36.6175 14.2188H42.5187C42.8446 14.2188 43.1088 14.483 43.1088 14.8089Z"
								fill="#240552"
							/>
						</svg>
					</div>
					<PanelHeader
						title="Enter Verification Code"
						subtitle={`Enter bank verification code sent to  091****1234`}
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
					<div className="flex flex-col gap-5 mt-5"></div>
					<div className="absolute top-[94%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							// onClick={() => setModal(true)}
							onClick={() => setActiveTab("forgot-sp")}
						>
							Confirm
						</button>
					</div>
				</div>
			)}
			{activeTab === "forgot-sp" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Set Password"
						subtitle="Enter new password to secure your account"
						withIcon
						onBackClick={() => setActiveTab("verification-code")}
					/>

					<div className="mt-5">
						<div className="flex flex-col gap-5">
							<Input
								placeholder="Enter Password"
								className="outline-none  placeholder:text-[#D1D5DB] placeholder:text-[12px]  px-4 py-6 ring-0"
							/>
							<Input
								placeholder="Confirm Password"
								className="outline-none  placeholder:text-[#D1D5DB] placeholder:text-[12px] px-4 py-6 ring-0"
							/>
						</div>
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
								At least 8 characters
							</p>
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
								Consist of letters and numbers
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
								Password must match
							</p>
						</div>
					</div>

					<div className="absolute top-[93%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setActiveTab("enter-pin")}
						>
							Set
						</button>
					</div>
				</div>
			)}
			{activeTab === "enter-pin" && (
				<div className="relative h-[75vh]">
					<PanelHeader
						title="Enter PIN"
						subtitle="Enter your transaction PIN to change your password"
						withIcon
						onBackClick={() => setActiveTab("verification-code")}
					/>

					<div className="mt-5">
						<OtpInput
							numInputs={4}
							value={otp}
							onChange={changeOtp}
							inputStyle={"otp-form"}
						/>
					</div>

					<div className="absolute top-[93%] w-full">
						<button
							className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full"
							onClick={() => setModal(true)}
						>
							Continue
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

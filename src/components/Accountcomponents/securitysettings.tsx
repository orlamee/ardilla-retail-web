"use client";
import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { ChevronRight, XCircleIcon, Check } from "lucide-react";
import lock from "../../assets/lock.svg";
import user from "../../assets/user-minus.svg";
import Image from "next/image";
import phone from "../../assets/smart-phone-01.svg";
import success from "../../assets/success.png";
import web from "../../assets//mdi_web.svg";
import chrome from "../../assets/chrome.svg";
import warning from "../../assets/warning.svg";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import OtpInput from "react18-input-otp";
import Modal from "../modal";
import { motion, AnimatePresence } from "framer-motion";
import PanelHeader from "./panelHeader";

function Securitysettings() {
	const [step, setStep] = useState<
		| "settings"
		| "questions"
		| "enter pin"
		| "temporary lock"
		| "manage devices"
		| "single device"
		| ""
	>("settings");
	const [modal, setModal] = useState<
		| "questions set"
		| "delete account"
		| "temporary lock"
		| "account disabled"
		| ""
	>("");

	const [otp, setOtp] = useState("");
	const handleChange = (enteredOtp: string) => {
		setOtp(enteredOtp);
	};

	const QuestionsSetSuccessModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-12"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-end w-full">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
							onClick={() => {
								setModal("");
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

					<h1 className="text-[20px] font-[700] text-center mt-6">
						Security Question Set
					</h1>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);
	const DeleteAccountModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[489px] z-[50]"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-between w-full items-start">
						<div className="mb-2">
							<h1 className="text-[20px] font-[700] text-primary mb-2">
								Delete Account
							</h1>
							<p className="font-[500] text-[12px] text-gray400">
								Why do you want to delete your account?
							</p>
						</div>

						<div>
							<XCircleIcon
								className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
								onClick={() => {
									setModal("");
								}}
							/>
						</div>
					</div>
					<div className="relative mt-6">
						<Select>
							<SelectTrigger className="w-full h-[45px] outline-none rounded-[4px] border-[1px] border-primaryborder px-5 ring-0 ring-offset-0">
								<SelectValue
									placeholder="Select an option"
									className="text-primary text-[12px] font-[500]"
								/>
							</SelectTrigger>

							<SelectContent className="z-[999999] relative">
								<SelectGroup>
									<SelectLabel>Select Question</SelectLabel>
									<SelectItem
										value="apple"
										className="text-[10px] font-[500]"
									>
										I have issues with payments
									</SelectItem>
									<SelectItem
										value="banana"
										className="text-[10px] font-[500]"
									>
										I dont know what to do
										{` I'm not just interested`}
									</SelectItem>
									<SelectItem
										value="blueberry"
										className="text-[10px] font-[500]"
									>
										{`I'm not just interested`}
									</SelectItem>
									<SelectItem
										value="grapes"
										className="text-[10px] font-[500]"
									>
										{"It's not what I expected"}
									</SelectItem>

									<SelectItem
										value="pineapple0"
										className="text-[10px] font-[500]"
									>
										{" I'm not using it"}
									</SelectItem>
									<SelectItem
										value="pineappleh"
										className="text-[10px] font-[500]"
									>
										It feels difficult to use
									</SelectItem>
									<SelectItem
										value="pineappleq"
										className="text-[10px] font-[500]"
									>
										It lacks the features I need
									</SelectItem>
									<SelectItem
										value="pineappleb"
										className="text-[10px] font-[500]"
									>
										I want to erase my data
									</SelectItem>
									<SelectItem
										value="pineapplev"
										className="text-[10px] font-[500]"
									>
										{` I can't remember signing up`}
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<button className="w-full mt-[215px] block rounded-[8px] text-white  bg-primary py-5 text-[14px] font-[500]">
						Delete Account
					</button>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	const TemporaryLockModal = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[30px] w-[439px] px-[28px] h-[409px] z-[50]"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-between w-full items-start">
						<div className="mb-2">
							<h1 className="text-[20px] font-[700] text-primary mb-2">
								Temporary Lock
							</h1>
							<p className="font-[500] text-[12px] text-gray400">
								Why do you want to temporary lock your account?
							</p>
						</div>

						<div>
							<XCircleIcon
								className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
								onClick={() => {
									setModal("");
								}}
							/>
						</div>
					</div>
					<div className="relative mt-6">
						<Select>
							<SelectTrigger className="w-full h-[45px] outline-none rounded-[4px] border-[1px] border-primaryborder px-5 ring-0 ring-offset-0">
								<SelectValue
									placeholder="Select an option"
									className="text-primary text-[12px] font-[500]"
								/>
							</SelectTrigger>

							<SelectContent className="z-[999999] relative">
								<SelectGroup>
									<SelectLabel>Select Question</SelectLabel>
									<SelectItem
										value="apple"
										className="text-[10px] font-[500]"
									>
										My device got stolen
									</SelectItem>
									<SelectItem
										value="banana"
										className="text-[10px] font-[500]"
									>
										My email was hacked
									</SelectItem>
									<SelectItem
										value="blueberry"
										className="text-[10px] font-[500]"
									>
										Someone else logged into my account
									</SelectItem>
									<SelectItem
										value="grapes"
										className="text-[10px] font-[500]"
									>
										There was an unauthorised transaction
									</SelectItem>

									<SelectItem
										value="pineapple0"
										className="text-[10px] font-[500]"
									>
										Others
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<button
						className="w-full mt-[150px] block rounded-[8px] text-white  bg-primary py-5 text-[14px] font-[500]"
						onClick={() => setModal("account disabled")}
					>
						Disable Account
					</button>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	const AccountDisabled = () => (
		<Modal>
			<AnimatePresence>
				<motion.div
					className="rounded-t-[30px] bg-white pt-[35px] w-[439px] px-[28px] pb-12"
					initial={{ scale: 0.7, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", ease: "backOut" }}
				>
					<div className="flex justify-end w-full">
						<XCircleIcon
							className="w-[18px] h-[18px] text-[#9CA3AF] cursor-pointer"
							onClick={() => {
								setModal("");
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

					<h1 className="text-[20px] font-[700] text-center mt-6">
						Account Disabled
					</h1>
				</motion.div>
			</AnimatePresence>
		</Modal>
	);

	return (
		<div>
			{modal === "questions set" && <QuestionsSetSuccessModal />}
			{modal === "delete account" && <DeleteAccountModal />}
			{modal === "temporary lock" && <TemporaryLockModal />}
			{modal === "account disabled" && <AccountDisabled />}
			{step === "settings" && (
				<div>
					<PanelHeader
						title="Security Settings"
						subtitle="View/edit your security settings"
					/>

					<h1 className="text-gray400 text-[10px] font-[500] mb-5">
						VERIFIED INFORMATION
					</h1>
					<div className="mb-6">
						<h2 className="text-primary font-[500] text-[12px] mb-3">
							Email Address
						</h2>
						<p className="text-[12px] font-[500] text-gray400">
							aiyeolamathew@gmail.com
						</p>
					</div>
					<div className="mb-6">
						<h2 className="text-primary font-[500] text-[12px] mb-3">
							Bank Verification Number (BVN)
						</h2>
						<p className="text-[12px] font-[500] text-gray400">
							1234567******
						</p>
					</div>
					<div className="mb-6">
						<h2 className="text-primary font-[500] text-[12px] mb-3">
							Phone Number
						</h2>
						<p className="text-[12px] font-[500] text-gray400">
							+234 9012 345 452
						</p>
					</div>
					<hr className="mt-5 mb-6" />
					<div className="mb-6">
						<h1 className="font-[500] text-[10px] text-gray400 mb-4">
							TWO - FACTOR AUTHENTIFICATION (2FA)
						</h1>
						<div className="flex justify-between items-center gap-3 mb-7">
							<p className="w-full sm:max-w-[50%] font-[500] text-[12px] text-primary">
								Add an extra layer of security to your account using
								your set security question
							</p>
							<Switch />
						</div>
						<div className="flex justify-between items-center gap-3 mb-7">
							<p className="w-full font-[500] text-[12px] text-primary">
								Fingerprint / Face ID
							</p>
							<Switch />
						</div>
						<div className="flex justify-between items-center gap-3 mb-7">
							<p className="w-full font-[500] text-[12px] text-primary">
								Security Question
							</p>
							<button
								className="text-primary px-4 py-2 text-[12px] font-[500] border-[1px] border-primaryborder rounded-full"
								onClick={() => setStep("questions")}
							>
								Change
							</button>
						</div>
					</div>
					<div>
						<button
							className="bg-[#FFFBF0] rounded-[4px] flex justify-between py-7 px-6 mb-4 w-full"
							onClick={() => setStep("temporary lock")}
						>
							<div className="flex items-center">
								<Image src={lock} width={19} height={19} alt="lock" />
								<h3 className="text-[#FFBD00] text-[12px] font-[500] ml-2">
									Temporary lock
								</h3>
							</div>
							<ChevronRight className="text-[#FFBD00] text-[20px]" />
						</button>
						<button
							className="bg-[#FDF1F5] rounded-[4px] flex justify-between py-7 px-6 mb-4 w-full"
							onClick={() => setModal("delete account")}
						>
							<div className="flex items-center">
								<Image src={user} width={19} height={19} alt="lock" />
								<h3 className="text-[#EF4444] text-[12px] font-[500] ml-2">
									Delete Account
								</h3>
							</div>
							<ChevronRight className="text-[#EF4444] text-[20px]" />
						</button>
						<button
							className="bg-[#F9F5FF] rounded-[4px] flex justify-between py-7 px-6 mb-4 w-full"
							onClick={() => setStep("manage devices")}
						>
							<div className="flex items-center">
								<Image src={phone} width={19} height={19} alt="lock" />
								<h3 className="text-primary text-[12px] font-[500] ml-2">
									Manage Devices
								</h3>
							</div>
							<ChevronRight className="text-primary text-[20px] " />
						</button>
					</div>
				</div>
			)}
			{step === "questions" && (
				<div className="h-[51vh]">
					<PanelHeader
						title=" Security Question"
						subtitle=" Get extra secured by setting security question"
						withIcon
						onBackClick={() => setStep("settings")}
					/>

					<div>
						<Select>
							<SelectTrigger className="w-full h-[63px] outline-none rounded-[4px] border-[1px] border-primaryborder px-5 ring-0 ring-offset-0">
								<SelectValue
									placeholder="Select Question"
									className="text-primary text-[12px] font-[500]"
								/>
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Select Question</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<input
							type="text"
							className="h-[63px] outline-none  p-5 rounded-[4px] border-[1px] border-primaryborder w-full mt-4  text-[12px] font-[500] text-primary placeholder:text-[#D1D5DB]"
							placeholder="Enter Answer"
						/>
					</div>
					<div className=" flex items-end justify-center h-full w-full">
						<button
							className="block w-full text-white bg-primary rounded-[8px] py-5 text-[14px] font-[500]"
							onClick={() => setStep("enter pin")}
						>
							Continue
						</button>
					</div>
				</div>
			)}
			{step === "enter pin" && (
				<div className="h-[57vh]">
					<PanelHeader
						title="Enter PIN"
						subtitle=" Enter your transaction PIN to change set security question"
						withIcon
						onBackClick={() => setStep("questions")}
					/>

					<form className="mb-5">
						<OtpInput
							value={otp}
							onChange={handleChange}
							numInputs={6}
							isInputNum={true}
							inputStyle="form-control otp-form"
						/>
					</form>

					<div className=" flex items-end justify-center h-full w-full">
						<button
							className="block w-full text-white font-[500] bg-primary rounded-[8px] py-5 text-[14px] disabled:bg-primary/50"
							disabled={!otp || otp.length < 4}
							onClick={() => setModal("questions set")}
						>
							Confirm
						</button>
					</div>
				</div>
			)}
			{step === "temporary lock" && (
				<div className="h-[24vh]">
					<PanelHeader
						title="Temporary Lock"
						subtitle="Get extra secured by setting security question"
						withIcon
						onBackClick={() => setStep("settings")}
					/>

					<div className="w-[350px] mx-auto text-center mt-[60px]">
						<Image
							src={warning}
							width={66}
							height={66}
							alt="warning"
							className="mx-auto mb-4"
						/>
						<h4 className="text-primary text-[14px] font-[500] mb-5">
							This does not close your account!
						</h4>
						<p className="text-center text-[12px] font-[400] text-gray400">
							Temporarily locking your account only restricts access to
							your account.
						</p>

						<p className="text-[12px] font-[500] mt-8 text-primary mb-8">{`You'll be unable to access your account but not to worry:`}</p>
						<div className="flex items-start mb-3">
							<Check className="text-[#23A323] w-[12px]" />
							<p className="ml-2 text-[12px] font-[400] text-gray400 mt-1">
								Your locked plans will remain locked.
							</p>
						</div>
						<div className="flex items-start mb-3">
							<Check className="text-[#23A323] w-[12px]" />
							<p className="ml-2 text-[12px] font-[400] text-gray400 mt-1">
								No one can withdraw funds from your account.
							</p>
						</div>
						<div className="flex items-start mb-3">
							<Check className="text-[#23A323] w-[12px]" />
							<p className="ml-2 text-[12px] font-[400] text-gray400 mt-1">
								{`We'll keep building wealth for you if your plans are automated.`}
							</p>
						</div>
						<div className="flex items-start mb-3">
							<Check className="text-[#23A323] w-[12px]" />
							<p className="ml-2 text-[12px] font-[400] text-gray400 mt-1">
								{`We'll support you when you're ready to enable your account.`}
							</p>
						</div>
					</div>
					<div className=" flex items-end justify-center h-full w-full">
						<button
							className="block w-full text-white bg-primary rounded-[8px] py-5 text-[14px] font-[500]"
							onClick={() => setModal("temporary lock")}
						>
							Continue
						</button>
					</div>
				</div>
			)}
			{step === "manage devices" && (
				<div className="h-[52vh]">
					<PanelHeader
						title=" Manage Devices"
						subtitle="Get extra secured by setting security question"
						withIcon
						onBackClick={() => setStep("settings")}
					/>

					<div>
						<div>
							<h1 className="text-[10px] font-[500] text-gray400 uppercase mb-6">
								Primary Device
							</h1>
							<div className="flex items-start mb-5">
								<Image
									src={phone}
									width={31}
									height={31}
									alt="samsung phone"
								/>
								<div className="ml-3">
									<h2 className="text-[12px] font-[500] text-primary mb-2">
										Samsung s23 | Andriod 13
									</h2>
									<p className="text-[12px] font-[400] text-gray400">
										Currently active
									</p>
								</div>
							</div>
							<hr className="mb-8" />
						</div>
						<div>
							<h1 className="text-[10px] font-[500] text-gray400 uppercase mb-6">
								Device History
							</h1>
							<div
								className="flex mb-5 justify-between items-center cursor-pointer"
								onClick={() => setStep("single device")}
							>
								<div className="flex items-start">
									<Image src={web} width={31} height={31} alt="web" />
									<div className="ml-3">
										<h2 className="text-[12px] font-[500] text-primary mb-2">
											Google chrome | Windows 11
										</h2>
										<p className="text-[12px] font-[400] text-gray400">
											Last used 25th August, 2023 | 11:23am
										</p>
									</div>
								</div>
								<ChevronRight />
							</div>
							<hr />
						</div>
					</div>
				</div>
			)}
			{step === "single device" && (
				<div className="h-[39vh]">
					<PanelHeader
						title=" Manage Devices"
						subtitle="Get extra secured by setting security question"
						withIcon
						onBackClick={() => setStep("manage devices")}
					/>

					<div className="w-[383px] mx-auto text-center mt-[70px]">
						<Image
							src={chrome}
							width={92}
							height={92}
							alt="chrome phone"
							className="mx-auto"
						/>
						<h1 className="text-[20px] font-[700] text-primary mt-2">
							Google chrome
						</h1>
						<p className="text-[12px] font-[500] mt-4 text-gray400 mb-[50px]">
							Last used 25th August, 2023 | 11:23am Lagos, Nigeria
						</p>
						<p className="text-[12px] font-[500] mt-4 text-gray400">
							Revoke login tokens and delete this device from your
							approved devices
						</p>
					</div>

					<div className=" flex items-end justify-center h-full w-full">
						<button
							className="block w-full text-white bg-primary rounded-[8px] py-5 text-[14px] font-[500]"
							// onClick={() => setModal("")}
						>
							Remove this Device
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Securitysettings;

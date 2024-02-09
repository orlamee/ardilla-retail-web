"use client";
import PanelHeader from "@/components/Accountcomponents/panelHeader";
import { ChevronRight, XCircleIcon } from "lucide-react";
import React, { useState } from "react";
import Modal from "../../../../../components/modal";

export default function Automaticsavings() {
	const [modal, setModal] = useState<"turnoff" | "settings" | "">("");

	const TurnOff = () => (
		<Modal>
			<div className="rounded-t-[30px] p-7 w-full sm:w-[439px] bg-white relative">
				<h3 className="text-[14px] font-[600]">
					Are you sure you want to turn off <br /> Autosave?
				</h3>
				<XCircleIcon
					className="w-[17px] text-[#9CA3AF] absolute right-5 top-7 cursor-pointer"
					onClick={() => setModal("")}
				/>
				<p className="text-[12px] font-[500] mt-2 text-[#9CA3AF]">
					You can earn up to 6-10% per annum on your DIB
				</p>
				<div className="flex items-center justify-end gap-5 mt-5">
					<button
						className="text-[12px] font-[600] text-[#22C55E]"
						onClick={() => setModal("")}
					>
						CONFIRM
					</button>
					<button
						className="text-[12px] font-[600]"
						onClick={() => setModal("")}
					>
						CANCEL
					</button>
				</div>
			</div>
		</Modal>
	);
	const Settings = () => (
		<Modal>
			<div className="rounded-t-[30px] p-7 w-full sm:w-[439px] bg-white relative">
				<h3 className="text-[20px] text-center font-[600]">Settings</h3>
				<XCircleIcon
					className="w-[17px] text-[#9CA3AF] absolute right-5 top-7 cursor-pointer"
					onClick={() => setModal("")}
				/>

				<div className="mt-7">
					<div className="flex justify-between items-center mb-6">
						<div>
							<h3 className="mb-3 font-[600] text-[15px] text-[#240552]">
								Receive payment direct to Savings
							</h3>
							<p className="text-[12px] font-[500] text-[#9CA3AF]">
								Money sent to your KodHex would be sent <br /> directly
								to your Savings wallet
							</p>
						</div>
						<input
							type="checkbox"
							name=""
							id=""
							className="accent-[#240552] w-[16px]"
						/>
					</div>
					<div className="flex justify-between items-center mb-5">
						<div>
							<h3 className="mb-3 font-[600] text-[15px] text-[#240552]">
								Auto save every night
							</h3>
							<p className="text-[12px] font-[500] text-[#9CA3AF]">
								Transfer fundsfrom my KodHex to my savings <br /> wallet
								between 10pm - 11pm daily
							</p>
						</div>
						<input
							type="checkbox"
							name=""
							id=""
							className="accent-[#240552] w-[16px]"
						/>
					</div>

					<button
						className="rounded-[8px] w-full text-white text-[14px] bg-primary p-4 mt-5"
						onClick={() => setModal("")}
					>
						Save Changes
					</button>
				</div>
			</div>
		</Modal>
	);
	return (
		<div>
			{modal === "turnoff" && <TurnOff />}
			{modal === "settings" && <Settings />}
			<PanelHeader
				title="Automatic Savings"
				subtitle="Auto saving will be processed between 10pm-11pm every day"
			/>

			<div className="flex flex-col gap-9 mt-8">
				<div className="flex items-center space-x-3">
					<span>
						<svg
							width="37"
							height="36"
							viewBox="0 0 37 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18.5994"
								cy="18.0994"
								r="17.2166"
								stroke="#240552"
							/>
							<path
								d="M16.5182 22.4036C16.5182 22.9349 16.3695 23.4378 16.1074 23.8628C15.6186 24.6845 14.7191 25.237 13.6849 25.237C12.6507 25.237 11.7511 24.6845 11.2624 23.8628C11.0003 23.4378 10.8516 22.9349 10.8516 22.4036C10.8516 20.8382 12.1195 19.5703 13.6849 19.5703C15.2503 19.5703 16.5182 20.8382 16.5182 22.4036Z"
								stroke="#240552"
								stroke-width="1.0625"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12.582 22.4051L13.2833 23.1063L14.792 21.7109"
								stroke="#240552"
								stroke-width="1.0625"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M22.7157 13.9403C22.5457 13.912 22.3686 13.9049 22.1844 13.9049H15.1011C14.9028 13.9049 14.7115 13.9191 14.5273 13.9474C14.6265 13.7491 14.7682 13.565 14.9382 13.395L17.2403 11.0858C18.2107 10.1224 19.7832 10.1224 20.7536 11.0858L21.9932 12.3395C22.4465 12.7858 22.6873 13.3524 22.7157 13.9403Z"
								stroke="#240552"
								stroke-width="1.0625"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M25.7253 17.444V20.9857C25.7253 23.1107 24.3086 24.5273 22.1836 24.5273H15.5465C15.7661 24.3432 15.9573 24.1165 16.1061 23.8615C16.3682 23.4365 16.5169 22.9336 16.5169 22.4023C16.5169 20.8369 15.249 19.569 13.6836 19.569C12.8336 19.569 12.0757 19.9444 11.5586 20.5323V17.444C11.5586 15.5173 12.7203 14.1715 14.5265 13.9448C14.7107 13.9165 14.9019 13.9023 15.1003 13.9023H22.1836C22.3678 13.9023 22.5448 13.9094 22.7148 13.9378C24.5423 14.1503 25.7253 15.5032 25.7253 17.444Z"
								stroke="#240552"
								stroke-width="1.0625"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M25.7253 17.8008H23.6003C22.8211 17.8008 22.1836 18.4383 22.1836 19.2174C22.1836 19.9966 22.8211 20.6341 23.6003 20.6341H25.7253"
								stroke="#240552"
								stroke-width="1.0625"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
					<div>
						<h4 className="text-[15px] font-[600] mb-2">
							Make payment direct to DIB
						</h4>
						<p className="text-[13px] font-[500] text-[#9CA3AF]">
							Set up auto saving schedule on your savings account.
						</p>
					</div>
				</div>
				<div className="flex items-center space-x-3">
					<span>
						<svg
							width="37"
							height="37"
							viewBox="0 0 37 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18.5994"
								cy="18.6462"
								r="17.2166"
								stroke="#240552"
							/>
							<path
								d="M24.6013 13.2806L14.4763 23.4056C14.3707 23.5111 14.2276 23.5704 14.0783 23.5704C13.929 23.5704 13.7859 23.5111 13.6803 23.4056C13.5748 23.3 13.5155 23.1569 13.5155 23.0076C13.5155 22.8584 13.5748 22.7152 13.6803 22.6097L23.8053 12.4847C23.9108 12.3791 24.0538 12.3198 24.203 12.3197C24.3522 12.3196 24.4954 12.3789 24.6009 12.4843C24.7065 12.5898 24.7658 12.7328 24.7659 12.882C24.7659 13.0312 24.7067 13.1743 24.6013 13.2799V13.2806ZM13.6944 16.079C13.2197 15.6043 12.9531 14.9604 12.9531 14.289C12.9532 13.6176 13.22 12.9738 13.6947 12.4991C14.1695 12.0244 14.8134 11.7577 15.4848 11.7578C16.1562 11.7579 16.8 12.0246 17.2747 12.4994C17.7494 12.9742 18.016 13.6181 18.016 14.2895C18.0159 14.9608 17.7491 15.6047 17.2743 16.0794C16.7996 16.5541 16.1557 16.8207 15.4843 16.8206C14.8129 16.8206 14.1691 16.5538 13.6944 16.079ZM14.0783 14.2903C14.0785 14.5215 14.1357 14.7491 14.2448 14.953C14.3539 15.1568 14.5117 15.3306 14.704 15.4589C14.8963 15.5873 15.1173 15.6662 15.3475 15.6887C15.5776 15.7113 15.8097 15.6767 16.0233 15.5881C16.2369 15.4995 16.4253 15.3597 16.5719 15.1809C16.7185 15.0021 16.8188 14.7899 16.8639 14.5631C16.9089 14.3363 16.8973 14.1019 16.8301 13.8807C16.763 13.6594 16.6423 13.4581 16.4788 13.2947C16.282 13.098 16.0313 12.9641 15.7585 12.9099C15.4856 12.8557 15.2028 12.8836 14.9458 12.9902C14.6888 13.0968 14.4692 13.2772 14.3148 13.5086C14.1604 13.7401 14.0781 14.0121 14.0783 14.2903ZM25.3283 21.6028C25.3282 22.1884 25.125 22.7558 24.7534 23.2084C24.3818 23.661 23.8647 23.9708 23.2903 24.0849C22.7159 24.199 22.1198 24.1105 21.6034 23.8343C21.087 23.5582 20.6823 23.1115 20.4583 22.5704C20.2343 22.0293 20.2048 21.4273 20.3749 20.867C20.545 20.3066 20.9042 19.8225 21.3911 19.4973C21.8781 19.172 22.4628 19.0257 23.0456 19.0832C23.6284 19.1407 24.1732 19.3985 24.5872 19.8126C24.823 20.0472 25.0099 20.3262 25.1371 20.6335C25.2643 20.9407 25.3293 21.2702 25.3283 21.6028ZM24.2033 21.6028C24.2034 21.2774 24.0906 20.9621 23.8843 20.7106C23.6779 20.4591 23.3907 20.2868 23.0717 20.2233C22.7526 20.1598 22.4213 20.2088 22.1344 20.3622C21.8474 20.5155 21.6225 20.7635 21.4979 21.0641C21.3734 21.3647 21.3569 21.6991 21.4513 22.0105C21.5457 22.3218 21.7451 22.5908 22.0156 22.7716C22.2861 22.9524 22.6109 23.0338 22.9347 23.002C23.2584 22.9701 23.5612 22.827 23.7913 22.597C23.9223 22.4668 24.0261 22.3118 24.0968 22.1412C24.1676 21.9705 24.2038 21.7875 24.2033 21.6028Z"
								fill="#240552"
							/>
						</svg>
					</span>
					<div>
						<h4 className="text-[15px] font-[600] mb-2">
							Dividends paid daily
						</h4>
						<p className="text-[13px] font-[500] text-[#9CA3AF]">
							Set up your Dividends payments and how you want to receive
							it.
						</p>
					</div>
				</div>
				<div className="flex items-center space-x-3">
					<span>
						<svg
							width="37"
							height="36"
							viewBox="0 0 37 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18.5994"
								cy="18.197"
								r="17.2166"
								stroke="#240552"
							/>
							<path
								d="M17.6406 25.4492H20.6406C24.3906 25.4492 25.8906 23.9492 25.8906 20.1992V15.6992C25.8906 11.9492 24.3906 10.4492 20.6406 10.4492H17.6406C13.8906 10.4492 12.3906 11.9492 12.3906 15.6992V20.1992C12.3906 23.9492 13.8906 25.4492 17.6406 25.4492Z"
								stroke="#240552"
								stroke-width="1.125"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M22.5156 14.6328V15.3828C22.5156 15.9978 22.0131 16.5078 21.3906 16.5078H16.8906C16.2756 16.5078 15.7656 16.0053 15.7656 15.3828V14.6328C15.7656 14.0178 16.2681 13.5078 16.8906 13.5078H21.3906C22.0131 13.5078 22.5156 14.0103 22.5156 14.6328Z"
								stroke="#240552"
								stroke-width="1.125"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M16.2427 19.4492H16.2514"
								stroke="#240552"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M19.1372 19.4492H19.1459"
								stroke="#240552"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M22.0318 19.4492H22.0404"
								stroke="#240552"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M16.2427 22.0742H16.2514"
								stroke="#240552"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M19.1372 22.0742H19.1459"
								stroke="#240552"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M22.0318 22.0742H22.0404"
								stroke="#240552"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
					<div>
						<h4 className="text-[15px] font-[600] mb-2">
							Up to 6-10% per annum
						</h4>
						<p className="text-[13px] font-[500] text-[#9CA3AF]">
							Earn amazing returns on your savings
						</p>
					</div>
				</div>
				<div className="flex items-center space-x-3">
					<span>
						<svg
							width="37"
							height="36"
							viewBox="0 0 37 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="18.5994"
								cy="17.7478"
								r="17.2166"
								stroke="#240552"
							/>
							<path
								d="M19.6406 25.3828C18.1696 25.3828 16.7317 24.9466 15.5086 24.1294C14.2855 23.3121 13.3322 22.1505 12.7693 20.7915C12.2063 19.4325 12.0591 17.9371 12.346 16.4943C12.633 15.0516 13.3414 13.7264 14.3815 12.6862C15.4217 11.6461 16.7469 10.9377 18.1896 10.6507C19.6324 10.3637 21.1278 10.511 22.4868 11.074C23.8459 11.6369 25.0074 12.5902 25.8247 13.8133C26.6419 15.0364 27.0781 16.4743 27.0781 17.9453C27.0781 19.9179 26.2945 21.8096 24.8997 23.2044C23.5049 24.5992 21.6132 25.3828 19.6406 25.3828ZM19.6406 11.5703C18.3798 11.5703 17.1472 11.9442 16.0989 12.6447C15.0505 13.3452 14.2334 14.3408 13.7509 15.5057C13.2684 16.6706 13.1421 17.9524 13.3881 19.189C13.6341 20.4256 14.2413 21.5616 15.1328 22.4531C16.0244 23.3447 17.1603 23.9518 18.3969 24.1978C19.6336 24.4438 20.9154 24.3176 22.0802 23.835C23.2451 23.3525 24.2408 22.5354 24.9412 21.4871C25.6417 20.4387 26.0156 19.2062 26.0156 17.9453C26.0156 16.2546 25.344 14.6331 24.1484 13.4375C22.9529 12.242 21.3314 11.5703 19.6406 11.5703Z"
								fill="#240552"
							/>
							<path
								d="M22.0791 21.1328L19.1094 18.1631V13.1641H20.1719V17.7222L22.8281 20.3837L22.0791 21.1328Z"
								fill="#240552"
							/>
						</svg>
					</span>
					<div>
						<h4 className="text-[15px] font-[600] mb-2">
							Withdraw anytime
						</h4>
						<p className="text-[13px] font-[500] text-[#9CA3AF]">
							You can withdraw any amount at anytime from your savings
							account
						</p>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<p
					className="flex items-center justify-center text-[#240552] text-[13px] cursor-pointer"
					onClick={() => setModal("settings")}
				>
					View/Edit Settings{" "}
					<span>
						<ChevronRight className="w-[12px] text-[#240552] ml-2" />
					</span>
				</p>

				<button
					className="w-full text-white bg-[#240552] text-[13px] rounded-[8px] p-5 mt-4"
					onClick={() => setModal("turnoff")}
				>
					Turn Off
				</button>
			</div>
		</div>
	);
}

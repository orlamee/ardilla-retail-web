"use client";
import React from "react";
import PanelHeader from "./panelHeader";
import avatar from "../../assets/profile-circle.svg";
import Image from "next/image";
import userminus from "../../assets/user-minus-black.svg";
import FloatingLabelInput from "../inputfield";

export default function Personaldetails() {
	return (
		<div>
			<div className="flex justify-between items-start">
				<PanelHeader
					title="Personal Details"
					subtitle="Customize your preferences"
				/>
				<Image
					src={avatar}
					alt="Avatar"
					className=" w-[50px] rounded-full"
				/>
			</div>

			<div className="flex flex-col gap-1.5">
				<FloatingLabelInput
					label="First Name"
					type="text"
					id="First Name"
				/>
				<FloatingLabelInput label="Last Name" type="text" id="Last Name" />
				<FloatingLabelInput
					label="Date of Birth"
					type="date"
					id="Date of Birth"
				/>
				<FloatingLabelInput
					label="Phone Number"
					type="tel"
					id="Phone Number"
				/>
				<FloatingLabelInput label="Email" type="email" id="Email" />
				<FloatingLabelInput label="Address" type="text" id="Address" />
				<FloatingLabelInput label="Gender" type="text" id="Gender" />

				<div className="flex justify-center">
					<button className="text-[12px] font-[500] border-[1px] border-black rounded-[4px] shadow-[3px_3px_3px_#000] px-5 py-3 flex items-center justify-center">
						<Image
							src={userminus}
							className="w-[17px] h-[17px] mr-1.5"
							alt="deactivate"
						/>
						Deactivate Account
					</button>
				</div>

				<button className="rounded-[8px] bg-[#240552] text-[14px] text-white p-4 w-full mt-4">
					Save Changes
				</button>
			</div>
		</div>
	);
}

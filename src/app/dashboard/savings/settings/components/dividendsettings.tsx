import React from "react";
import PanelHeader from "@/components/Accountcomponents/panelHeader";
import { Switch } from "@/components/ui/switch";

export default function Dividendsettings() {
	return (
		<div>
			<PanelHeader
				title="Dividend Settings"
				subtitle="Enable or disable Dividends  on all your savings plan (DIB & Grit)"
			/>

			<div className="mt-3">
				<p className="text-[12px] font-[500] text-[#94a3c0]">
					When dividends is disabled, you will no longer earn dividends on
					all your <br /> savings ( DIB, Grit, Vault, Dreams )
				</p>
			</div>
			<div className="mt-7 flex justify-between items-center px-4 py-5 border-[1px] border-[#F3F4F6] rounded-[4px]">
				<p className="text-[12px] fomt-[600]">Disable interest savings</p>
				<Switch />
			</div>

			<button className="p-5 mt-10 text-[14px] font-[500] w-full bg-[#240552] rounded-[8px] text-white">
				Save Changes
			</button>
		</div>
	);
}

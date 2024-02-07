"use client";
import PanelHeader from "./panelHeader";

export default function Visibility() {
	return (
		<div className="relative h-[75vh]">
			<PanelHeader
				title="Profile Visibility"
				subtitle="Adjust your account visibility settings"
			/>
			<form className="min-h-[550px]">
				<div className="flex flex-row justify-between me-4">
					<div>
						<h3 className="text-[#240552] font-[500] text-[14px] leading-[24px]">
							Hide KodHex
						</h3>
						<p className="text-[#9CA3AF] font-[500] text-[11px] leading-[20px] ">
							When this is set your Kodhex name would not be available to
							friends and family except requested upon
						</p>
					</div>
					<label className="relative inline-flex items-center cursor-pointer mt-[21px]">
						<input type="checkbox" value="" className="sr-only peer" />
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#240552]"></div>
					</label>
				</div>
				<hr className="mt-6 mb-9 text-[#F3F4F6]" />
				<div className="flex flex-row justify-between me-4">
					<div>
						<h3 className="text-[#240552] font-[500] text-[14px] leading-[24px]">
							Make Your Profile Private
						</h3>
						<p className="text-[#9CA3AF] font-[500] text-[11px] leading-[20px] ">
							When this is set your profile would be only public to those
							in your contact list
						</p>
					</div>
					<label className="relative inline-flex items-center cursor-pointer mt-[21px]">
						<input type="checkbox" value="" className="sr-only peer" />
						<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#240552]"></div>
					</label>
				</div>
			</form>
			<div className="absolute top-[93%] w-full">
				<button className="bg-[#240552] text-white w-full p-4 text-center rounded-[8px] font-[500] text-[14px]">
					Save Changes
				</button>
			</div>
		</div>
	);
}

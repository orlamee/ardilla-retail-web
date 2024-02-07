import { ChevronLeft } from "lucide-react";
import React from "react";

type props = {
	title: string;
	subtitle: string;
	onBackClick?: () => void;
	withIcon?: boolean;
};

function PanelHeader({ title, subtitle, onBackClick, withIcon }: props) {
	return (
		<div className="mb-9 flex items-start">
			{withIcon && onBackClick && (
				<ChevronLeft
					className="text-primary text-[11px] mt-[9px] cursor-pointer ml-[-7px]"
					onClick={onBackClick}
				/>
			)}

			<div className={`${withIcon ? "ml-5" : ""}`}>
				<h1 className="text-primary text-[30px] font-[500] mb-2 font-[founder]">
					{title}
				</h1>
				<p className="text-[12px] font-[500] text-gray400 ">{subtitle}</p>
			</div>
		</div>
	);
}

export default PanelHeader;
import PanelHeader from "@/components/Accountcomponents/panelHeader";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
	return (
		<div>
			<PanelHeader title="FAQ" subtitle="Frequently aked questions" />
			<div className="mt-6">
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1" className="rounded-[8px] px-7">
						<AccordionTrigger className="text-[12px] font-[600] text-[#240552]">
							1.0 Low Credit Score
						</AccordionTrigger>
						<AccordionContent>
							<div className="border-t-[1px] border-t-[#F3F4F6] pt-6">
								<p className="text-[#9CA3AF] text-[12px]">
									As you use your Ardilla account to perform financial
									transactions, we collect Personal Data in connection
									with each transaction, including transaction time,
									Naira amount, and merchant details. We may also
									collect photos, memos, or other information you
									attach to your transactions.
								</p>
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2" className="rounded-[8px] px-7">
						<AccordionTrigger className="text-[12px] font-[600] text-[#240552]">
							1.0 Low Credit Score
						</AccordionTrigger>
						<AccordionContent>
							<div className="border-t-[1px] border-t-[#F3F4F6] pt-6">
								<p className="text-[#9CA3AF] text-[12px]">
									As you use your Ardilla account to perform financial
									transactions, we collect Personal Data in connection
									with each transaction, including transaction time,
									Naira amount, and merchant details. We may also
									collect photos, memos, or other information you
									attach to your transactions.
								</p>
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3" className="rounded-[8px] px-7">
						<AccordionTrigger className="text-[12px] font-[600] text-[#240552]">
							1.0 Low Credit Score
						</AccordionTrigger>
						<AccordionContent>
							<div className="border-t-[1px] border-t-[#F3F4F6] pt-6">
								<p className="text-[#9CA3AF] text-[12px]">
									As you use your Ardilla account to perform financial
									transactions, we collect Personal Data in connection
									with each transaction, including transaction time,
									Naira amount, and merchant details. We may also
									collect photos, memos, or other information you
									attach to your transactions.
								</p>
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4" className="rounded-[8px] px-7">
						<AccordionTrigger className="text-[12px] font-[600] text-[#240552]">
							1.0 Low Credit Score
						</AccordionTrigger>
						<AccordionContent>
							<div className="border-t-[1px] border-t-[#F3F4F6] pt-6">
								<p className="text-[#9CA3AF] text-[12px]">
									As you use your Ardilla account to perform financial
									transactions, we collect Personal Data in connection
									with each transaction, including transaction time,
									Naira amount, and merchant details. We may also
									collect photos, memos, or other information you
									attach to your transactions.
								</p>
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5" className="rounded-[8px] px-7">
						<AccordionTrigger className="text-[12px] font-[600] text-[#240552]">
							1.0 Low Credit Score
						</AccordionTrigger>
						<AccordionContent>
							<div className="border-t-[1px] border-t-[#F3F4F6] pt-6">
								<p className="text-[#9CA3AF] text-[12px]">
									As you use your Ardilla account to perform financial
									transactions, we collect Personal Data in connection
									with each transaction, including transaction time,
									Naira amount, and merchant details. We may also
									collect photos, memos, or other information you
									attach to your transactions.
								</p>
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value="item-6"
						className="rounded-[8px] px-7 mb-0"
					>
						<AccordionTrigger className="text-[12px] font-[600] text-[#240552]">
							1.0 Low Credit Score
						</AccordionTrigger>
						<AccordionContent>
							<div className="border-t-[1px] border-t-[#F3F4F6] pt-6">
								<p className="text-[#9CA3AF] text-[12px]">
									As you use your Ardilla account to perform financial
									transactions, we collect Personal Data in connection
									with each transaction, including transaction time,
									Naira amount, and merchant details. We may also
									collect photos, memos, or other information you
									attach to your transactions.
								</p>
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}

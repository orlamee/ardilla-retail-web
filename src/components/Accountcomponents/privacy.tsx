"use client";
import PanelHeader from "./panelHeader";
import { Accordion, AccordionHeader, AccordionBody } from "@tremor/react";


export default function Privacy() {
  return (
    <div>
      <PanelHeader
        title="Privacy Policy"
        subtitle="View all Privacy Policy in Ardilla"
      />
      <Accordion className="py-5 mb-4">
        <AccordionHeader className="text-[#240552] font-[500] text-[12px]">
          1.0 Personal Data About Your Transactions With Us
        </AccordionHeader>
        <AccordionBody>
          <span className="text-[#9CA3AF] font-[500] text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt est quasi minima id ipsam nam magnam
            consequuntur, provident numquam nobis officia facilis ipsa
            beatae explicabo itaque, perspiciatis rem dignissimos
            laboriosam!
          </span>
        </AccordionBody>
      </Accordion>
      <Accordion className="py-5 mb-4">
        <AccordionHeader className="text-[#240552] font-[500] text-[12px]">
          1.0 Personal Data About Your Transactions With Us
        </AccordionHeader>
        <AccordionBody>
          <span className="text-[#9CA3AF] font-[500] text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt est quasi minima id ipsam nam magnam
            consequuntur, provident numquam nobis officia facilis ipsa
            beatae explicabo itaque, perspiciatis rem dignissimos
            laboriosam!
          </span>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

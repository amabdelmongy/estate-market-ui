import React from "react";
import { Accordion } from "@mantine/core";
import { IconClock, IconEyeQuestion, IconFriends } from "@tabler/icons-react";
import { ConfigSizes } from "@/constants/ConfigSizes";
import { ClosingTimeline, Lead, OccupancyOptions, SellReasonOptions } from "@/types/lead";

// in individual property there are sub collapsable sections for each details
// this is th description of the property section data
interface Doc {
  title: string;
  link: string;
}
interface DescriptionSectionProps {
  description: string;
 lead?: Lead;
}
const DescriptionSection = ({ description, lead }: DescriptionSectionProps) => {
  return (
    <Accordion
      variant="default"
      defaultValue="default"
      className="rounded bg-white"
      classNames={{
        root: "dark:bg-slate-900 dark:text-white/90 dark:hover:bg-none",
        control: "dark:hover:bg-slate-900 dark:text-white",
      }}
    >
      <Accordion.Item value="default">
        <Accordion.Control>
          <span className="font-bold">Description</span>
        </Accordion.Control>
        <Accordion.Panel>
          <div className="flex flex-col justify-between text-sm tablet:text-base pc:text-base">
            <p>{description}</p>
            <div className="flex flex-col">
            <div className="flex items-center space-x-2">
            <IconClock size={ConfigSizes.smallIcons} /> <span>How Fast: </span>{" "}
            <span>
              {lead?.lead_closn_tmln
                ? ClosingTimeline[lead?.lead_closn_tmln]
                : "Any Time"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <IconEyeQuestion size={ConfigSizes.smallIcons} />{" "}
            <span>Seller Reason: </span>{" "}
            <span>
              {lead?.lead_sell_reason
                ? SellReasonOptions[lead.lead_sell_reason]
                : ""}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <IconFriends size={ConfigSizes.smallIcons} />{" "}
            <span> Anyone living in the house?</span>
          </div>
          <div className="items-cente flex flex">
            <span>
              {"   "}
              {lead?.lead_occupancy ? OccupancyOptions[lead.lead_occupancy] : ""}
            </span>
          </div>
              {/* {docs.map((doc, idx) => (
                <Link
                  key={idx}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-2"
                >
                  <IconExternalLink className="text-primary " />{" "}
                  <span>{doc.title}</span>
                </Link>
              ))} */}
            </div>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default DescriptionSection;

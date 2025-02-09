import React from "react";
import Image from "next/image";
import { Accordion, Tabs } from "@mantine/core";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// in individual property there are sub collapsable sections for each details
// this is the Plans section data
interface PlansSectionProps {
  imagesLinks: string[];
}
const PlansSection = ({ imagesLinks }: PlansSectionProps) => {
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
        {/* Accordian title */}
        <Accordion.Control>
          <span className="font-bold">Plans</span>
        </Accordion.Control>
        {/* Accordian content */}
        <Accordion.Panel>
          {/* Plans tab section */}
          <Tabs variant="outline" defaultValue="1">
            {/* Tab title */}
            <Tabs.List>
              {imagesLinks.map((link, idx) => (
                <Tabs.Tab key={idx} value={link}>
                  Plan {idx}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {/* Tab content */}
            {imagesLinks.map((link, idx) => (
              <Tabs.Panel key={idx} value={link} pt="xs">
                <Zoom>
                  <Image
                    src={link}
                    width={1920}
                    height={1080}
                    alt="plan image"
                  />
                </Zoom>
              </Tabs.Panel>
            ))}
          </Tabs>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default PlansSection;

import React from "react";
import { Accordion } from "@mantine/core";
import Image from "next/image";

// in individual property there are sub collapsable sections for each details
// this is the 3D virtual tour section data
interface VirtualTourSectionProps {
  link: string;
}
const VirtualTourSection = ({ link }: VirtualTourSectionProps) => {
  return (
    <>
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
            <span className="font-bold">Virtual tour</span>
          </Accordion.Control>
          <Accordion.Panel>
            {/* Matterport link */}
            <div>
              <Image
                src={link}
                width={1920}
                height={1080}
                alt="virtual tour placeholder"
                className="aspect-video object-cover"
              />
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default VirtualTourSection;

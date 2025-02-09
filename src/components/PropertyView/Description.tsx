import React from "react";
import { Accordion } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

// in individual property there are sub collapsable sections for each details
// this is th description of the property section data
interface Doc {
  title: string;
  link: string;
}
interface DescriptionSectionProps {
  description: string;
  docs: Doc[];
}
const DescriptionSection = ({ description, docs }: DescriptionSectionProps) => {
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
            <div className="mt-4 font-bold">Documents</div>
            <div className="flex flex-col">
              {docs.map((doc, idx) => (
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
              ))}
            </div>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default DescriptionSection;

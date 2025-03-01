import React from "react";
import { Accordion } from "@mantine/core";

// in individual property there are sub collapsable sections for each details
// this is th address section data

interface AddressSectionProps {
  street: string;
  city: string;
  area: string;
  province: string;
  zip: string;
  country: string;
}

const AddressSection = ({
  street,
  city,
  area,
  province,
  zip,
  country,
}: AddressSectionProps) => {
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
          <span className="font-bold">Address</span>
        </Accordion.Control>
        <Accordion.Panel>
          {/* Basic informations */}
          <div className="grid grid-cols-1 text-sm tablet:grid-cols-2  pc:grid-cols-3 pc:text-base">
            <div>
              <span className="font-bold">Sreet : </span>
              <span className="blur">{street}</span>
            </div>
            <div>
              <span className="font-bold">City : </span>
              <span>{city}</span>
            </div>
            <div>
              <span className="font-bold">Area : </span>
              <span>{area}</span>
            </div>
            <div>
              <span className="font-bold">Province : </span>
              <span className="blur">{province}</span>
            </div>
            <div>
              <span className="font-bold">Zip : </span>
              <span>{zip}</span>
            </div>
            <div>
              <span className="font-bold">Country : </span>
              <span>{country}</span>
            </div>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
export default AddressSection;

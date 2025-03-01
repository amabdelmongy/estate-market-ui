import React from "react";
import { Accordion } from "@mantine/core";
import {
  IconBed,
  IconBath,
  IconCar,
  IconShape,
  IconStairs,
  IconCalendarTime,
} from "@tabler/icons-react";
import { ConfigColors } from "src/constants/ConfigColors";

// in individual property there are sub collapsable sections for each details
// this is the overview section data
interface OverviewSectionProps {
  builtYear: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  sqfeets: number;
  floors: number;
}

const OverviewSection = ({
  builtYear,
  bedrooms,
  bathrooms,
  garages,
  sqfeets,
  floors,
}: OverviewSectionProps) => {
  return (
    <Accordion
      defaultValue="overview"
      className="rounded bg-white"
      classNames={{
        root: "dark:bg-slate-900 dark:text-white/90 dark:hover:bg-none",
        control: "dark:hover:bg-slate-900 dark:text-white",
      }}
    >
      <Accordion.Item value="overview">
        <Accordion.Control>
          <span className="font-bold dark:text-white/90">Overview</span>
        </Accordion.Control>
        <Accordion.Panel>
          <div className="grid mobile:grid-cols-3 pc:grid-cols-6">
            {/* Built year */}
            <div className="flex flex-col items-center justify-center text-sm pc:text-base ">
              <IconCalendarTime style={{ color: ConfigColors.primary }} />
              <div className="font-bold">Built year</div>
              <div className="blur">{builtYear}</div>
            </div>
            {/* Bedrooms */}
            <div className="flex flex-col items-center justify-center text-sm pc:text-base">
              <IconBed style={{ color: ConfigColors.primary }} />
              <div className="font-bold ">Bedrooms</div>
              <div className="blur">{bedrooms}</div>
            </div>
            {/* Bathrooms */}
            <div className="flex flex-col items-center justify-center text-sm pc:text-base">
              <IconBath style={{ color: ConfigColors.primary }} />
              <div className="font-bold">Bathrooms</div>
              <div className="blur">{bathrooms}</div>
            </div>
            {/* Garages */}
            <div className="flex flex-col items-center justify-center text-sm pc:text-base">
              <IconCar style={{ color: ConfigColors.primary }} />
              <div className="font-bold">Garages</div>
              <div className="blur">{garages}</div>
            </div>
            {/* Sqft */}
            <div className="flex flex-col items-center justify-center text-sm pc:text-base">
              <IconShape style={{ color: ConfigColors.primary }} />
              <div className="font-bold">Squre ft</div>
              <div className="blur">{sqfeets}ft</div>
            </div>
            {/* Floors */}
            <div className="flex flex-col items-center justify-center text-sm pc:text-base">
              <IconStairs style={{ color: ConfigColors.primary }} />
              <div className="font-bold">Floors</div>
              <div className="blur">{floors}</div>
            </div>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default OverviewSection;

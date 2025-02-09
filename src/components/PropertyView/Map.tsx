import React from "react";
import { Accordion } from "@mantine/core";
import { GoogleMapsEmbed } from "@next/third-parties/google";

// in individual property there are sub collapsable sections for each details
// this is the google map section data
interface MapSectionProps {
  location: string;
}
const MapSection = ({ location }: MapSectionProps) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
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
          <span className="font-bold">Map</span>
        </Accordion.Control>
        <Accordion.Panel>
          {/* Google map link */}
          <div>
            <GoogleMapsEmbed
              apiKey={API_KEY as string}
              height={500}
              width="100%"
              mode="place"
              q={location}
            />
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default MapSection;

import React from "react";
import { Accordion } from "@mantine/core";
import useYoutubeEmbed from "src/hooks/useYoutubeEmbed";

// in individual property there are sub collapsable sections for each details
// this is the video of the property section data

interface VideoSectionProps {
  url: string;
}

const VideoSection = ({ url }: VideoSectionProps) => {
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
          <span className="font-bold">Video</span>
        </Accordion.Control>
        <Accordion.Panel>
          {/* video */}
          <iframe
            width="100%"
            height="500"
            src={useYoutubeEmbed(url)}
            allowFullScreen
          ></iframe>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
export default VideoSection;

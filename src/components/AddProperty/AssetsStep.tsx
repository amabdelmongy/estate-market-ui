import { Input, TextInput } from "@mantine/core";
import { useState } from "react";

// asset section of the add proprty stepper like images and videos

export default function AssetsStep() {
  // component states
  const [videoLink, setVideoLink] = useState<string | undefined>(undefined);
  const [googleMapsLink, setGoogleMapsLink] = useState<string | undefined>(
    undefined,
  );
  const [matterportLink, setMatterportLink] = useState<string | undefined>(
    undefined,
  );
  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Video link */}
        <div>
          <Input.Wrapper label="Video link">
            <TextInput
              placeholder="www.youtube.com/"
              value={videoLink}
              onChange={(value) => setVideoLink(value.target.value)}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />
          </Input.Wrapper>
        </div>
        {/* Google map location link */}
        <div>
          <Input.Wrapper label="Google map location link">
            <TextInput
              placeholder="maps.google.com/"
              value={googleMapsLink}
              onChange={(value) => setGoogleMapsLink(value.target.value)}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />
          </Input.Wrapper>
        </div>

        {/* Matterport link */}
        <div>
          <Input.Wrapper label="Virtual tour (matterport link)">
            <TextInput
              placeholder="maps.google.com/"
              value={matterportLink}
              onChange={(value) => setMatterportLink(value.target.value)}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />
          </Input.Wrapper>
        </div>
      </div>
    </>
  );
}

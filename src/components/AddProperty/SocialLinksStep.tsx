import { Input, TextInput } from "@mantine/core";
import { useState } from "react";

// social links section of the add proprty stepper

export default function SocialLinksStep() {
  // component states
  const [facebook, setFacebook] = useState<string | undefined>(undefined);
  const [twitter, setTwitter] = useState<string | undefined>(undefined);
  const [instagram, setInstagram] = useState<string | undefined>(undefined);
  const [youtube, setYoutube] = useState<string | undefined>(undefined);
  const [linkedin, setLinkedin] = useState<string | undefined>(undefined);
  const [pinterest, setPinterest] = useState<string | undefined>(undefined);
  return (
    <div className="grid gap-2 mobile:grid-cols-1 pc:grid-cols-2">
      {/* Facebook */}
      <div>
        <Input.Wrapper label="Facebook">
          <TextInput
            placeholder="www.example.com"
            value={facebook}
            onChange={(value) => setFacebook(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Twitter */}
      <div>
        <Input.Wrapper label="Twitter">
          <TextInput
            placeholder="www.example.com"
            value={twitter}
            onChange={(value) => setTwitter(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Instagram */}
      <div>
        <Input.Wrapper label="Instagram">
          <TextInput
            placeholder="www.example.com"
            value={instagram}
            onChange={(value) => setInstagram(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Youtube */}
      <div>
        <Input.Wrapper label="Youtube">
          <TextInput
            placeholder="www.example.com"
            value={youtube}
            onChange={(value) => setYoutube(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* LinkedIn */}
      <div>
        <Input.Wrapper label="LinkedIn">
          <TextInput
            placeholder="www.example.com"
            value={linkedin}
            onChange={(value) => setLinkedin(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Pinterest */}
      <div>
        <Input.Wrapper label="Pinterest">
          <TextInput
            placeholder="www.example.com"
            value={pinterest}
            onChange={(value) => setPinterest(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
    </div>
  );
}

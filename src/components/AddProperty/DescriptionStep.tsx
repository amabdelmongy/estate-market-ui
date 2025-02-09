import { Textarea, Input } from "@mantine/core";
import { useState } from "react";

// litte description section of the add proprty stepper

export default function DescriptionStep() {
  // component states
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [link1, setLink1] = useState<string | undefined>(undefined);
  const [link2, setLink2] = useState<string | undefined>(undefined);
  const [link3, setLink3] = useState<string | undefined>(undefined);

  return (
    <div className="flex flex-col space-y-4">
      {/* Description */}
      <div>
        <Textarea
          placeholder="Propert description"
          label="Description"
          value={description}
          onChange={(value) => setDescription(value.target.value)}
          classNames={{
            label: "dark:text-white",
            input: "dark:bg-slate-800 dark:text-white/90",
          }}
          withAsterisk
        />
      </div>
      {/* Links */}
      <div>
        <Input.Wrapper label="Document links 01" required>
          <Input
            placeholder="https://"
            value={link1}
            onChange={(value) => setLink1(value.target.value)}
            classNames={{
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Links */}
      <div>
        <Input.Wrapper label="Document links 02" required>
          <Input
            placeholder="https://"
            value={link2}
            onChange={(value) => setLink2(value.target.value)}
            classNames={{
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Links */}
      <div>
        <Input.Wrapper label="Document links 03" required>
          <Input
            placeholder="https://"
            value={link3}
            onChange={(value) => setLink3(value.target.value)}
            classNames={{
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
    </div>
  );
}

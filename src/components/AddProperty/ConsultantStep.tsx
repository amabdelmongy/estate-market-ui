import { useState } from "react";
import {
  Text,
  Image,
  SimpleGrid,
  NumberInput,
  Input,
  Select,
} from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";

// about the consultant details section of the add proprty stepper

export default function ConsultantStep() {
  //  component states
  const [phoneNumber, setPhoneNumber] = useState<Number | null>(null);
  const [mobileNUmber, setMobileNumber] = useState<Number | null>(null);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [website, setWebsite] = useState<string | undefined>(undefined);

  const [files, setFiles] = useState<FileWithPath[]>([]);

  //   preview images function
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
        alt="consultant avatar"
      />
    );
  });

  return (
    <div className="flex flex-col space-y-4">
      {/* assign a consultant */}
      <div>
        <Input.Wrapper label="Consultant avatar" required>
          <Dropzone
            accept={IMAGE_MIME_TYPE}
            onDrop={setFiles}
            className="flex h-32 items-center justify-center border border-dashed border-black dark:border-white/90"
          >
            <Text ta="center">Drop images here</Text>
          </Dropzone>
        </Input.Wrapper>

        <SimpleGrid
          cols={{ base: 1, sm: 4 }}
          mt={previews.length > 0 ? "xl" : 0}
        >
          {previews}
        </SimpleGrid>
      </div>
      {/* Phone */}
      <div>
        <Input.Wrapper label="Phone number" required>
          <NumberInput
            placeholder="+91---------"
            value={Number(phoneNumber)}
            onChange={(value) => setPhoneNumber(Number(value))}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Mobile */}
      <div>
        <Input.Wrapper label="Mobile number" required>
          <NumberInput
            placeholder="+91---------"
            value={Number(mobileNUmber)}
            onChange={(value) => setMobileNumber(Number(value))}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Email */}
      <div>
        <Input.Wrapper label="Email" required>
          <Input
            placeholder="sample@mail.com"
            value={email}
            onChange={(value) => setEmail(value.target.value)}
            classNames={{
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Website */}
      <div>
        <Input.Wrapper label="Website" required>
          <Input
            placeholder="www.example.com"
            value={website}
            onChange={(value) => setEmail(value.target.value)}
            classNames={{
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
    </div>
  );
}

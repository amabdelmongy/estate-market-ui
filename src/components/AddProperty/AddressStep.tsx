import { NumberInput, Input, TextInput } from "@mantine/core";
import { useState } from "react";

// address section of the add proprty stepper
export default function AddressStep() {
  // conponent data states
  const [street, setStreet] = useState<string | undefined>(undefined);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [area, setArea] = useState<string | undefined>(undefined);
  const [province, setProvince] = useState<string | undefined>(undefined);
  const [zip, setZip] = useState<number | undefined>(undefined);
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [locate, setLocate] = useState<string | undefined>(undefined);
  return (
    <div className="grid grid-cols-1 gap-2 pc:grid-cols-2">
      {/* Street */}
      <div>
        <Input.Wrapper label="Street" required>
          <TextInput
            placeholder="Menlo road"
            value={street}
            onChange={(value) => setStreet(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* City */}
      <div>
        <Input.Wrapper label="Document links 02" required>
          <TextInput
            placeholder="New york"
            value={city}
            onChange={(value) => setCity(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Area */}
      <div>
        <Input.Wrapper label="Area" required>
          <TextInput
            placeholder="State"
            value={area}
            onChange={(value) => setArea(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Provinece */}
      <div>
        <Input.Wrapper label="Provinece" required>
          <TextInput
            placeholder="Western"
            value={province}
            onChange={(value) => setProvince(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Zip */}
      <div>
        <Input.Wrapper label="Zip">
          <NumberInput
            placeholder="11020"
            value={zip}
            onChange={(value) => setZip(Number(value))}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Country */}
      <div>
        <Input.Wrapper label="Country" required>
          <TextInput
            placeholder="Sri Lanka"
            value={country}
            onChange={(value) => setCountry(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white/90",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Locate */}
      <div>
        <Input.Wrapper label="Locate (google map location link)">
          <TextInput
            placeholder="Sri Lanka"
            value={locate}
            onChange={(value) => setLocate(value.target.value)}
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

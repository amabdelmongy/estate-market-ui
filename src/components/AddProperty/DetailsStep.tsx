import { Input, NumberInput, Select, TextInput } from "@mantine/core";
import { useState } from "react";

// details section of the add proprty stepper

export default function DetailsStep() {
  // component states
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const [price, setPrice] = useState<Number | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [sellingMethoid, setSellngMethod] = useState<string | null>(null);
  const [priceType, setPriceType] = useState<string | null>(null);

  return (
    <div className="flex flex-col space-y-4">
      {/* Title */}
      <div>
        <Input.Wrapper label="Title" required>
          <TextInput
            placeholder="ABC Property"
            value={title}
            onChange={(value) => setTitle(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800  dark:text-white",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Location */}
      <div>
        <Input.Wrapper label="Location" required>
          <TextInput
            placeholder="Gampaha, Sri Lanka"
            value={location}
            onChange={(value) => setLocation(value.target.value)}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800  dark:text-white",
            }}
          />
        </Input.Wrapper>
      </div>
      {/* Price */}
      <div>
        <Input.Wrapper label="Price" required>
          <NumberInput
            placeholder="$25,000"
            value={Number(price)}
            onChange={(value) => setPrice(Number(value))}
            classNames={{
              label: "dark:text-white",
              input: "dark:bg-slate-800 dark:text-white",
              controls: "dark:text-white",
            }}
          />
        </Input.Wrapper>
      </div>

      {/* Badges or tags */}
      <div className="flex flex-row justify-between space-x-2">
        {/* Type */}
        <Select
          label="Type"
          placeholder="Apartment"
          value={type}
          classNames={{
            label: "dark:text-white",
            input: "dark:bg-slate-800  dark:text-white",
          }}
          onChange={(value) => setType(value)}
          data={[
            { value: "apartment", label: "Apartment" },
            { value: "cottage", label: "Cottage" },
            { value: "hoouse", label: "House" },
            { value: "flat", label: "Flat" },
          ]}
        />
        {/* Selling method */}
        <Select
          label="Sell type"
          placeholder="Rent"
          value={sellingMethoid}
          onChange={(value) => setSellngMethod(value)}
          classNames={{
            label: "dark:text-white",
            input: "dark:bg-slate-800  dark:text-white",
          }}
          data={[
            { value: "rent", label: "Rent" },
            { value: "sale", label: "Sale" },
            { value: "commercial", label: "Commercial" },
          ]}
        />
        {/* Price type */}
        <Select
          label="Price type"
          placeholder="Negotiable"
          value={priceType}
          onChange={(value) => setPriceType(value)}
          classNames={{
            label: "dark:text-white",
            input: "dark:bg-slate-800",
          }}
          data={[
            { value: "neggotiable", label: "Negotiable" },
            { value: "fixed", label: "Fixed" },
          ]}
        />
      </div>
    </div>
  );
}

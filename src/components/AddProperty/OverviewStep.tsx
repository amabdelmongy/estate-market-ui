import { Input, NumberInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { ConfigColors } from "src/constants/ConfigColors";

// built date section of the add proprty stepper

export default function OverviewStep() {
  // component data states
  const [builtYear, setBuiltYear] = useState<Date | null>(null);
  const [bedrooms, setBedrooms] = useState<Number | null>(null);
  const [bathrooms, setBathrooms] = useState<Number | null>(null);
  const [garages, setGarages] = useState<Number | null>(null);
  const [sqfeets, setSqfeets] = useState<Number | null>(null);
  const [floors, setFloors] = useState<Number | null>(null);

  console.log(builtYear);

  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Built year */}
        <div>
          <Input.Wrapper label="Built Year" required>
            <DatePicker
              value={builtYear}
              onChange={setBuiltYear}
              className=" dark:text-white/90"
              classNames={{
                calendarHeaderControl: "dark:hover:bg-slate-800",
                calendarHeaderControlIcon: "dark:hover:bg-slate-800",
                day: "dark:text-white/90",
                monthsListControl: "dark:text-white/90",
                yearsListControl: "dark:text-white/90 dark:hover:bg-slate-800",
              }}
            />
          </Input.Wrapper>
        </div>
        {/* Bedrooms */}
        <div>
          <Input.Wrapper label="Bedrooms" required>
            <NumberInput
              placeholder="2"
              min={0}
              value={Number(bedrooms)}
              onChange={(value) => setBedrooms(Number(value))}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />
          </Input.Wrapper>
        </div>
        {/* Bathrooms */}
        <div>
          <Input.Wrapper label="Bathrooms" required>
            <NumberInput
              placeholder="2"
              min={0}
              value={Number(bathrooms)}
              onChange={(value) => setBathrooms(Number(value))}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />
          </Input.Wrapper>
        </div>
        {/* Garages */}
        <div>
          <Input.Wrapper label="Garages" required>
            <NumberInput
              placeholder="2"
              min={0}
              value={Number(garages)}
              onChange={(value) => setGarages(Number(value))}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />
          </Input.Wrapper>
        </div>
        {/* Sq feets */}
        <div>
          <Input.Wrapper label="Square feets" required>
            <NumberInput
              placeholder="2"
              min={0}
              value={Number(sqfeets)}
              onChange={(value) => setSqfeets(Number(value))}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />
          </Input.Wrapper>
        </div>
        {/* Floors */}
        <div>
          <Input.Wrapper label="Floors" required>
            <NumberInput
              placeholder="2"
              min={0}
              value={Number(floors)}
              onChange={(value) => setFloors(Number(value))}
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

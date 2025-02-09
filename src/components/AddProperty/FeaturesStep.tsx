import { Checkbox } from "@mantine/core";

// features section of the add proprty stepper

export default function FeatuersStep() {
  return (
    <>
      <div>
        {/* Indoor */}
        <label className="font-bold">Indoor</label>
        <div className="grid grid-cols-2 gap-2">
          <Checkbox color="teal" label="Gymnasium" />
          <Checkbox color="teal" label="Kitchen" />
          <Checkbox color="teal" label="Landry" />
          <Checkbox color="teal" label="Living room" />
        </div>

        {/* Outdoor */}
        <label className="font-bold">Outdoor</label>
        <div className="grid grid-cols-2 gap-2">
          <Checkbox color="teal" label="Front yard" />
          <Checkbox color="teal" label="Backyard" />
          <Checkbox color="teal" label="Tennis court" />
          <Checkbox color="teal" label="Pool" />
        </div>

        {/* Utilities */}
        <label className="font-bold">Utilities</label>
        <div className="grid grid-cols-2 gap-2">
          <Checkbox color="teal" label="A/C" />
          <Checkbox color="teal" label="Electricity" />
          <Checkbox color="teal" label="Natural gas" />
          <Checkbox color="teal" label="Purified water" />
          <Checkbox color="teal" label="Internet" />
        </div>

        {/* Other features */}
        <label className="font-bold">Other features</label>
        <div className="grid grid-cols-2 gap-2">
          <Checkbox color="teal" label="Elevator" />
          <Checkbox color="teal" label="Smoking area" />
          <Checkbox color="teal" label="Accessibility" />
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import {
  IconCircles,
  IconCoin,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react";
import {
  Button,
  Divider,
  InputWrapper,
  RangeSlider,
  RangeSliderValue,
  Select,
  TextInput,
} from "@mantine/core";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";
import { ConfigColors } from "src/constants/ConfigColors";

// in view all property page top filer componet has three tabs
// this is the main tab component in Tabs folder has sub componnets

const AllPropertiesHeader = () => {
  return (
    <div className="relative ">
      {/* title subtitle contents */}
      {/* Cover image */}
      <div className="mt-16 h-[600px] w-full overflow-hidden brightness-[0.4]">
        <Image
          src="/images/homes/house1.jpg"
          width={1920}
          height={600}
          alt="cover image"
          className="object-cover"
        />
      </div>
      {/* Title section */}
      <div className="absolute left-0 top-0 mt-24 flex w-full flex-col items-center space-y-2 drop-shadow-lg laptop:mt-56 ">
        <h1 className="text-left text-4xl font-bold text-white pc:text-6xl">
          {ConfigBasicInfo.name}
        </h1>
        <h1 className="text-center text-xl text-white tablet:text-2xl pc:text-4xl">
          {ConfigBasicInfo.subtitle1}
        </h1>
        <h1 className="text-center text-sm text-white tablet:text-lg pc:text-lg">
          {ConfigBasicInfo.subtitle2}
        </h1>
      </div>
      {/* Filter component */}
      <div className="absolute left-0 top-0 mt-10 flex h-full w-full flex-col items-center justify-end space-y-2 p-2">
        <div className="rounded-default bg-white p-5 shadow-lg dark:bg-slate-900 dark:text-white/90">
          {/* Filters */}
          <div className="flex items-center justify-between mobile:flex-col mobile:space-y-2 laptop:flex-row laptop:space-x-2 pc:flex-row pc:space-x-2">
            {/* Location filter */}
            <div className="mobile:w-full pc:w-full">
              <Select
                leftSection={<IconCoin size={20} />}
                label="Location"
                placeholder="Preferred locatiopn"
                data={["New York", "Los Angeles", "Ohio", "Utah"]}
                classNames={{
                  label: "dark:text-white",
                  input: "dark:bg-slate-800 dark:text-white/90",
                }}
              />
            </div>
            <Divider orientation="vertical" />
            {/* Price filter */}
            <div className="w-full">
              <Select
                label={"Price"}
                leftSection={<IconMapPin size={20} />}
                placeholder="Price class"
                data={["Low to High", "High to Low", "Above 100M", "Luxury"]}
                classNames={{
                  label: "dark:text-white",
                  input: "dark:bg-slate-800 dark:text-white/90",
                }}
              />
            </div>
            <Divider orientation="vertical" />
            {/* Type filter */}
            <div className="mobile:w-full pc:w-full">
              <Select
                leftSection={<IconCircles size={20} />}
                label="Property"
                placeholder="Property type"
                data={["Apartment", "Cottage", "Flat", "House"]}
                classNames={{
                  label: "dark:text-white",
                  input: "dark:bg-slate-800 dark:text-white/90",
                }}
              />
            </div>
            <Divider orientation="vertical" />
            {/* Search  */}
            <div className="mobile:w-full pc:w-full">
              <TextInput
                label="Search"
                leftSection={<IconSearch size={20} />}
                placeholder="Search properties"
                inputWrapperOrder={["label", "error", "input", "description"]}
                classNames={{
                  label: "dark:text-white",
                  input: "dark:bg-slate-800 dark:text-white/90",
                }}
              />
            </div>
            <Divider orientation="vertical" />
            {/* submit button */}
            <div className="mobile:w-full pc:w-full">
              <InputWrapper label="Submit">
                <Button color={ConfigColors.primary} fullWidth>
                  Filter
                </Button>
              </InputWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllPropertiesHeader;

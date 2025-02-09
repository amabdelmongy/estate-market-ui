import { TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import Link from "next/link";
import { FooterData } from "src/Data/footerData";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";
import { ConfigColors } from "src/constants/ConfigColors";
import { Routes } from "src/constants/Routes";
import PrimaryButton from "../Buttons/PrimaryButton";

const Footer = () => {
  return (
    <footer className="mt-4 h-full w-full bg-white p-4 dark:bg-slate-900 dark:text-white/90">
      {/* brand name */}
      <div className="flex w-full flex-col">
        <span
          className="text-2xl font-bold"
          style={{ color: ConfigColors.primary }}
        >
          {ConfigBasicInfo.name}
        </span>
        <span className="font-bold" style={{ color: ConfigColors.black }}>
          {ConfigBasicInfo.subtitle1}
        </span>
      </div>
      <div className="mt-4 flex w-full justify-between mobile:flex-col mobile:gap-y-4 laptop:flex-row pc:flex-row">
        {/* left */}
        <div className="flex basis-4/12 flex-col gap-y-2 ">
          <div>{FooterData.about}</div>
          <div className="font-bold italic">{FooterData.copyright}</div>
        </div>
        {/* mid */}
        <div className="basis-4/12">
          {/* links */}
          <div className="flex flex-col gap-x-4">
            <h1
              className="text-2xl font-bold"
              style={{ color: ConfigColors.primary }}
            >
              Pages
            </h1>
            <Link
              href={Routes.home}
              className="font-bold duration-300 hover:underline"
            >
              Home
            </Link>
            <Link
              href={Routes.aboutUs}
              className="font-bold duration-300 hover:underline"
            >
              About
            </Link>
            <Link
              href={Routes.addProperty}
              className="font-bold duration-300 hover:underline"
            >
              All Properties
            </Link>
            <Link
              href={Routes.profile + "/@jenniferathena"}
              className="font-bold duration-300 hover:underline"
            >
              Profile
            </Link>
            <Link
              href={Routes.login}
              className="font-bold duration-300 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="basis-4/12">
          <div>
            <h1
              className="text-2xl font-bold"
              style={{ color: ConfigColors.primary }}
            >
              Subscribe
            </h1>
            <TextInput
              leftSection={<IconAt color={ConfigColors.primary} />}
              style={{ border: ConfigColors.primary }}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
              description="Stay tuned with the latest updates"
              placeholder="Email"
            />
            <div className="mt-2">
              <PrimaryButton text="Submit" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

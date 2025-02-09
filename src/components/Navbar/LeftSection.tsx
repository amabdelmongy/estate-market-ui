import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Routes } from "../../constants/Routes";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";
import { ConfigNavbar } from "src/constants/ConfigNavbar";

// left section of the navbar
const LeftSection = () => {
  return (
    <Link href={Routes.home}>
      <div className="flex items-center space-x-1">
        {/* brand logo */}
        <Image
          src={ConfigNavbar.brandLogoSrc}
          className="rounded-default"
          width={40}
          height={40}
          alt="brand logo"
        />
        {/* brand name */}
        <h1 className="cursor-pointer text-lg font-bold dark:text-white/90 tablet:text-2xl">
          {ConfigBasicInfo.name}
        </h1>
      </div>
    </Link>
  );
};

export default LeftSection;

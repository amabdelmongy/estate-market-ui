import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import { ConfigColors } from "src/constants/ConfigColors";
import { ConfigSizes } from "src/constants/ConfigSizes";

// individual sections main title with view all link
interface HeadtitleProps {
  title: string;
  link?: string;
}

export default function Headtitle({ title, link }: HeadtitleProps) {
  return (
    <div className="my-4 flex items-center justify-between">
      {/* title */}
      <h1
        className={"text-2xl font-bold"}
        style={{ color: ConfigColors.primary }}
      >
        {title}
      </h1>
      {/* link */}
      {link && (
        <Link
          href={link}
          className={`flex cursor-pointer items-center font-bold duration-300 hover:underline dark:text-white`}
        >
          View all
          <IconChevronRight size={ConfigSizes.smallIcons} />
        </Link>
      )}
    </div>
  );
}

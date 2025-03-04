import React from "react";
import { Accordion, ActionIcon } from "@mantine/core";
import Image from "next/image";
import {
  IconDeviceMobile,
  IconMail,
  IconPhone,
  IconWorldWww,
} from "@tabler/icons-react";
import Link from "next/link";
import { ConfigColors } from "src/constants/ConfigColors";

// in individual property there are sub collapsable sections for each details
// this is th consultant's data section data

interface ISocialLinks {
  name: string;
  link: string;
  icon: React.ReactNode;
}
interface IConsultant {
  avatar: string;
  name: string;
  profession: string;
  mobileNumber: string;
  landNumber: string;
  email: string;
  website: string;
  // socialLinks: ISocialLinks[];
}

const ConsultantSection = ({
  avatar,
  name,
  profession,
  mobileNumber,
  landNumber,
  email,
  website,
  // socialLinks,
}: IConsultant) => {
  return (
    <Accordion
      variant="default"
      defaultValue="default"
      className="rounded bg-white"
      classNames={{
        root: "dark:bg-slate-900 dark:text-white/90 dark:hover:bg-none",
        control: "dark:hover:bg-slate-900 dark:text-white",
      }}
    >
      <Accordion.Item value="default">
        <Accordion.Control>
          <span className="font-bold">Consultant</span>
        </Accordion.Control>
        <Accordion.Panel>
          <div className="flex justify-between">
            {/* left */}
            <div className="basis-1/2">
              <Image
                width={500}
                height={500}
                src={avatar}
                className="aspect-square object-cover"
                alt="consultant avatar"
              />
            </div>
            {/* right */}
            <div className="basis-full px-4">
              <div className="flex flex-col gap-y-2">
                {/* name */}
                <h1 className="text-2xl font-bold mobile:text-xl">{name}</h1>
                {/* profession */}
                <div className="italic">{profession}</div>
                {/* basic details */}
                <ul>
                  <li className="flex gap-x-2">
                    <IconDeviceMobile color={ConfigColors.primary} />
                    <span>{mobileNumber}</span>
                  </li>
                  <li className="flex gap-x-2">
                    <IconPhone color={ConfigColors.primary} />
                    <span>{landNumber}</span>
                  </li>
                  <li className="flex gap-x-2">
                    <IconMail color={ConfigColors.primary} />
                    <span>{email}</span>
                  </li>
                  <li className="flex gap-x-2">
                    <IconWorldWww color={ConfigColors.primary} />
                    <span>{website}</span>
                  </li>
                </ul>
                {/* social links */}
                <div className="flex gap-x-2">
                  <div className="flex gap-x-2">
                    {/* {socialLinks.map((link, idx) => (
                      <Link href={link.link} key={idx}>
                        <ActionIcon
                          variant="filled"
                          size="xl"
                          aria-label={`${link.name}`}
                          color={ConfigColors.primary}
                        >
                          {link.icon}
                        </ActionIcon>
                      </Link>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default ConsultantSection;

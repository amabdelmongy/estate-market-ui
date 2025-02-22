import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBed,
  IconBath,
  IconCalendarClock,
  IconBuilding,
  IconUser,
  IconClock,
  IconHome,
  IconEyeQuestion,
  IconFriends,
  IconMapPin,
  IconHomeDollar
} from "@tabler/icons-react";
import useNumberFormatter from "src/hooks/useNumberFormatter";
import { ConfigColors } from "src/constants/ConfigColors";
import { ConfigSizes } from "src/constants/ConfigSizes";
import { ClosingTimeline, Lead, SellReasonOptions } from "@/types/lead";
import { formatDateString } from "@/lib/format-date-string";
import { OccupancyOptions } from "../../types/lead";

export interface LeadCardProps {
  lead: Lead;
}

export default function LeadCard({ lead }: Readonly<LeadCardProps>) {
  const images = [
    "/images/homes/house1.jpg",
    "/images/homes/house2.jpg",
    "/images/homes/house3.jpg",
    "/images/homes/house4.jpg",
    "/images/homes/house5.jpg",
  ];

  function getRandomNumber(): number {
    return Math.floor(Math.random() * 4) + 1;
  }

  return (
    <Link href={"/lead/" + lead?._id}>
      <div
        className="rounded-default group flex h-full flex-col items-center rounded bg-white text-left duration-300 hover:border-2 hover:shadow-lg dark:bg-gray-900 "
        style={{ border: `1px solid ${ConfigColors.primary}` }}
      >
        <div className="relative overflow-hidden">
          {/* Cover image */}
          <Image
            src={images[getRandomNumber()]}
            width={500}
            height={300}
            className="aspect-video rounded object-cover duration-300 group-hover:scale-105"
            alt="properties images"
          />
          {/* Assets availability indicator */}
          <div className="absolute left-0 top-0 flex flex-col p-1 text-left text-white">
            {/* Images */}
            <div>
              <Image src="/icons/image.svg" width={20} height={20} alt="icon" />
            </div>
            {/* Video */}
            <div>
              <Image src="/icons/video.svg" width={20} height={20} alt="icon" />
            </div>
            {/* Map */}
            <div>
              <Image src="/icons/map.svg" width={20} height={20} alt="icon" />
            </div>
            {/* 3d visualization */}
            <div>
              <Image src="/icons/3d.svg" width={20} height={20} alt="icon" />
            </div>
          </div>

          {/* Price */}
          <div className="absolute right-1 top-1">
            <div
              className={`rounded-default bg-white px-4 text-lg font-bold dark:bg-slate-900 dark:text-white`}
              style={{ color: ConfigColors.primary }}
            >
              <span>Asking price: </span>
              <span className="blur">
                ${useNumberFormatter(lead.lead_ask_price ?? 0)}
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 p-2">
          {/* Preview images */}
          <div className="flex flex-row items-center justify-center space-x-2">
            {/* Take beteween 2-5 images (bcz 1st taken to cover image) */}
            {images.slice(1, 5).map((img: string, index: number) => (
              <div key={index}>
                <Image
                  src={img}
                  width={100}
                  height={100}
                  className="aspect-video rounded "
                  alt="properties images"
                />
              </div>
            ))}
          </div>

          {/* Title */}
          <div className="text-left text-sm font-bold text-black/50 dark:text-white">
            <div className="flex items-center space-x-2">
              <IconUser size={ConfigSizes.smallIcons} />{" "}
              <span>Owner Name: </span> <span className="blur">blur</span>{" "}
            </div>
          </div>
          <div className="text-left text-sm font-bold text-black/50 dark:text-white">
            <div className="flex items-center space-x-2">
              <IconHomeDollar size={ConfigSizes.smallIcons} />{" "}
              <span>Market Price: </span> <span className="blur">blur</span>{" "}
            </div>
          </div>
          {/* createdAt */}
          <div className="text-left text-sm font-bold text-black/50 dark:text-white">
            <div className="flex items-center space-x-2">
              <IconCalendarClock size={ConfigSizes.smallIcons} />{" "}
              <span className="font-bold text-black/60 dark:text-white">
                Date: {formatDateString(lead.createdAt)}
              </span>
            </div>
          </div>
          {/* Location */}
          <div className="text-left text-sm font-bold text-black/50 dark:text-white">
            <div className="flex items-center space-x-2">
              <IconBuilding size={ConfigSizes.smallIcons} />{" "}
              <span>City: {lead.lead_prop_address_full?.city}</span>{" "}
              <IconMapPin size={ConfigSizes.smallIcons} />{" "}
              <span>State: {lead.lead_prop_address_full?.state}</span>
            </div>
          </div>

          <div>
            <div className="text-left text-sm font-bold text-black/50 dark:text-white">
              <div className="flex items-center space-x-2">
                <IconClock size={ConfigSizes.smallIcons} />{" "}
                <span>How Fast: </span>{" "}
                <span>
                  {lead.lead_closn_tmln
                    ? ClosingTimeline[lead.lead_closn_tmln]
                    : "Any Time"}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-left text-sm font-bold text-black/50 dark:text-white">
              <div className="flex items-center space-x-2">
                <IconEyeQuestion size={ConfigSizes.smallIcons} />{" "}
                <span>Seller Reason: </span>{" "}
                <span>
                  {lead.lead_sell_reason
                    ? SellReasonOptions[lead.lead_sell_reason]
                    : ""}
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-left text-sm font-bold text-black/50 dark:text-white">
              <div className="flex items-center space-x-2">
                <IconFriends size={ConfigSizes.smallIcons} />{" "}
                <span> Anyone living in the house?</span>
              </div>
              <div className="flex items-cente" >

                <span>
                {"   "}
                  {lead.lead_occupancy
                    ? OccupancyOptions[lead.lead_occupancy]
                    : ""}
                </span>
              </div>
            </div>
          </div>

          {/* features */}
          <div className="flex items-center space-x-4">
            {/* Bedrooms */}
            <div className="flex items-center space-x-1">
              <div>
                <IconBed
                  color={ConfigColors.primary}
                  size={ConfigSizes.smallIcons}
                />
              </div>

              <div>
                <span className="blur">blur</span>{" "}
                {/* <span className="font-bold text-black/60 dark:text-white">
                  {lead.building_bedrooms?.toString().padStart(2, "0")}
                </span> */}
              </div>
            </div>

            {/* Bathrooms */}
            <div className="flex items-center space-x-1">
              <div>
                <IconBath
                  color={ConfigColors.primary}
                  size={ConfigSizes.smallIcons}
                />
              </div>
              <div>
                <span className="blur">blur</span>{" "}
                {/* <span className="font-bold text-black/60 dark:text-white ">
                  {lead.building_bathrooms?.toString().padStart(2, "0")}
                </span> */}
              </div>
            </div>
          </div>

          <div className="text-left text-sm font-bold text-black/50 dark:text-white">
            <div className="flex items-center space-x-2">
              <IconHome size={ConfigSizes.smallIcons} />{" "}
              <span>Year of Constructor: </span>{" "}
              <span className="blur">blur</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

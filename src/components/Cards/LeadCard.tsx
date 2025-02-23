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
  IconHomeDollar,
  IconFlagDollar,
} from "@tabler/icons-react";
import { ConfigColors } from "src/constants/ConfigColors";
import { ConfigSizes } from "src/constants/ConfigSizes";
import { ClosingTimeline, Lead, SellReasonOptions } from "@/types/lead";
import { formatDateString } from "@/lib/format-date-string";
import { OccupancyOptions } from "../../types/lead";
import MapComponent from "../PropertyView/MapComponent";

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
    <div>
      <div
        className="rounded-default group flex h-full flex-col items-center rounded bg-white text-left duration-300 hover:border-2 hover:shadow-lg dark:bg-gray-900 "
        style={{ border: `1px solid ${ConfigColors.primary}` }}
      >
        <div
          style={{ minHeight: "410px" }}
          className="relative w-full rounded-lg border border-gray-300 bg-white p-1 p-2"
        >
          <MapComponent
            lat={lead.lead_prop_address_full?.lat}
            lng={lead.lead_prop_address_full?.lng}
          />
        </div>

        <Link href={"/lead/" + lead?._id}>
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
                <IconFlagDollar size={ConfigSizes.smallIcons} />{" "}
                <span>Seller Asking Price: </span>{" "}
                <span className="blur">blur</span>{" "}
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
                <div className="items-cente flex flex">
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
        </Link>
      </div>
    </div>
  );
}

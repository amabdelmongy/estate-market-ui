import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconBed, IconBath } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import useNumberFormatter from "src/hooks/useNumberFormatter";
import { ConfigColors } from "src/constants/ConfigColors";
import { ConfigSizes } from "src/constants/ConfigSizes";

// individual property card like display in home page grid

interface PropertyCardProps {
  id: number;
  link: string;
  images: string[];
  price: number;
  title: string;
  features: {
    bathrooms: number;
    bedrooms: number;
  };
  propertyLocation: string;
  propertyType: string;
  tags: string[];
}

export default function PropertyCard({
  id,
  link,
  images,
  price,
  title,
  features,
  propertyLocation,
  propertyType,
  tags,
}: PropertyCardProps) {
  return (
    <Link href={link}>
      <div
        className="rounded-default group flex h-full flex-col items-center rounded bg-white text-left duration-300 hover:border-2 hover:shadow-lg dark:bg-gray-900 "
        style={{ border: `1px solid ${ConfigColors.primary}` }}
      >
        <div className="relative overflow-hidden">
          {/* Cover image */}
          <Image
            src={images[0]}
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
              ${useNumberFormatter(price)}
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
          <div className="text-left font-bold text-black dark:text-white">
            {title}
          </div>
          {/* Type */}
          <div className="text-left text-sm font-bold text-black/60 dark:text-white">
            {propertyType}
          </div>
          {/* Location */}
          <div className="text-left text-sm font-bold text-black/50 dark:text-white">
            <div className="flex items-center space-x-2">
              <IconMapPin size={ConfigSizes.smallIcons} />{" "}
              <span>{propertyLocation}</span>
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
                <span className="font-bold text-black/60 dark:text-white">
                  {features.bedrooms.toString().padStart(2, "0")}
                </span>
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
                <span className="font-bold text-black/60 dark:text-white ">
                  {features.bathrooms.toString().padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* tags */}
          <div className="flex items-center space-x-2">
            {/* tags array */}
            {tags.map((tag: string, index: number) => (
              <Badge key={index} color={ConfigColors.primary} radius="xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

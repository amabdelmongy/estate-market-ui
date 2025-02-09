import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import useNumberFormatter from "src/hooks/useNumberFormatter";
import { IconBath, IconBed, IconChevronRight } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import PrimaryButton from "../Buttons/PrimaryButton";
import { ConfigColors } from "src/constants/ConfigColors";
import { ConfigSizes } from "src/constants/ConfigSizes";

// in categories card with image background with count and title
interface IFeaturePropertyCard {
  title: string;
  link: string;
  price: number;
  images: string[];
  tags: string[];
  features: {
    bathrooms: number;
    bedrooms: number;
  };
}
const FeaturePropertyCard = ({
  title,
  link,
  price,
  images,
  tags,
  features,
}: IFeaturePropertyCard) => {
  return (
    <div className="rounded-sm bg-white p-2 dark:bg-slate-900">
      {/* images */}
      <div className="flex flex-col gap-2 ">
        <div className="relative">
          {/* cover image */}
          <Fade cascade triggerOnce>
            <div className="overflow-hidden">
              <Image
                src="/images/homes/house1.jpg"
                width={1920}
                height={1080}
                className="aspect-video rounded-md object-cover"
                alt="feature peoperty image"
              />
            </div>
          </Fade>

          {/* Overlay details card */}
          <div className="-right-2 -top-2 z-10 overflow-hidden  rounded border bg-white p-2 shadow-lg dark:border-white dark:bg-slate-900 pc:absolute">
            <div className="flex flex-col space-y-2">
              {/* title */}
              <div className="text-2xl font-bold dark:text-white/90">
                {title}
              </div>
              {/* price */}
              <div
                className={`text-2xl font-bold `}
                style={{ color: ConfigColors.primary }}
              >
                ${useNumberFormatter(price)}
              </div>
              {/* features */}
              <div className="flex space-x-2">
                {/* bedrooms */}
                <div className="flex items-center space-x-1">
                  <div>
                    <IconBed
                      color={ConfigColors.primary}
                      size={ConfigSizes.smallIcons}
                    />
                  </div>

                  <div>
                    <span className="font-bold text-black/60">
                      {features.bedrooms.toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* bathrooms */}
                <div className="flex items-center space-x-1">
                  <div>
                    <IconBath
                      color={ConfigColors.primary}
                      size={ConfigSizes.smallIcons}
                    />
                  </div>
                  <div>
                    <span className="font-bold text-black/60 ">
                      {features.bathrooms.toString().padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
              {/* Link to the property view page */}
              <Link href={link}>
                <PrimaryButton
                  fullWidth
                  text={"View property"}
                  icon={<IconChevronRight />}
                />
              </Link>
            </div>
            {/* tags */}
            <div className="text-primary mt-2 flex space-x-2 text-sm font-bold">
              {tags.map((tag, idx) => (
                <Badge key={idx} radius={"xs"} color={ConfigColors.primary}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        {/* 4 images grid */}
        <div className="flex w-full flex-col justify-center space-x-0 tablet:flex-row tablet:space-x-2">
          <Fade cascade direction="right" triggerOnce>
            {images.slice(0, 5).map((img, index) => (
              <div key={index}>
                <Image
                  src={img}
                  width={500}
                  height={500}
                  className="aspect-video rounded object-cover"
                  alt="images asset"
                />
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FeaturePropertyCard;

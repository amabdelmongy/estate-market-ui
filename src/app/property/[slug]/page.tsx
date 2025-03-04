"use client";
import React, { useState } from "react";
import { Badge, Container } from "@mantine/core";
import MainImagesGalery from "../../../components/PropertyView/MainImagesGalery";
import Image from "next/image";
import { showNotification } from "@mantine/notifications";
import { SinglePropertyData } from "src/Data/singlePropertyData";
import VirtualTourSection from "src/components/PropertyView/VirtualTour";
import FreaturesSection from "../../../components/PropertyView/Features";
import AddressSection from "../../../components/PropertyView/Address";
import DescriptionSection from "../../../components/PropertyView/Description";
import OverviewSection from "../../../components/PropertyView/Overview";
import VideoSection from "../../../components/PropertyView/Video";
import PlansSection from "../../../components/PropertyView/Plans";
import MapSection from "../../../components/PropertyView/Map";
import ReviewSection from "../../../components/PropertyView/Review";
import useNumberFormatter from "src/hooks/useNumberFormatter";
import ConsultantSection from "src/components/PropertyView/Consultant";
import { IconCheck, IconX } from "@tabler/icons-react";
import { ConfigColors } from "src/constants/ConfigColors";

// individual property page
// [id] - mean the dynamic route pass the indiividual property id or slug param with Next.js Link component
// route: /property/123

const PropertyPage = () => {
  // current bookmark state
  const [isBookmark, setIsBookmark] = useState(false);

  // Bookmark function (oncleick)
  function bookmark() {
    // Set bookmark state
    setIsBookmark(!isBookmark);

    // Toast notification
    showNotification({
      title: "Bookmark",
      icon: isBookmark ? (
        <IconX color={ConfigColors.white} />
      ) : (
        <IconCheck color={ConfigColors.white} />
      ),
      message: isBookmark ? "Bookmark removed" : "Bookmark added",
      color: isBookmark ? ConfigColors.danger : ConfigColors.primary,
    });
  }
  return (
    <Container size="xl" className="mt-24">
      <div className="relative">
        {/* Main images gallery */}
        <div>
          <MainImagesGalery imagesSrc={SinglePropertyData.images} />
        </div>

        {/* Bookmark */}
        <div className="absolute right-2 top-2">
          <button onClick={bookmark}>
            <Image
              src={
                isBookmark ? "/icons/bookmarkFill.svg" : "/icons/bookmark.svg"
              }
              width={30}
              height={30}
              alt="icon"
            />
          </button>
        </div>
      </div>

      {/* Title section */}
      <div className="my-2 flex justify-between space-x-2">
        {/* left */}
        {/* Title */}
        <h1 className="text-base font-bold dark:text-white/90 tablet:text-xl pc:text-2xl">
          {SinglePropertyData.title}
        </h1>

        {/* right */}
        {/* Price */}
        <h1
          className="rounded-default rounded-sm px-4 py-2 text-center text-base font-bold text-white shadow-sm tablet:text-xl pc:text-2xl"
          style={{ background: ConfigColors.primary }}
        >
          {useNumberFormatter(SinglePropertyData.price)}
        </h1>
      </div>
      {/* Location */}
      <div className="mb-2 text-sm italic text-black/80 dark:text-white/90 pc:text-base">
        {SinglePropertyData.address.city +
          " , " +
          SinglePropertyData.address.country}
      </div>
      {/* Badges */}
      <div className="flex w-full gap-x-4 overflow-x-hidden whitespace-nowrap">
        {SinglePropertyData.tags.map((tag, idx) => (
          <Badge
            key={idx}
            size="lg"
            variant="filled"
            radius={"xs"}
            color={ConfigColors.primary}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* accordion section */}
      <div className="mt-4 flex flex-col gap-y-4">
        {/* all sections in components/PropertyView folder */}
        {/* overview */}
        <div>
          <OverviewSection
            bathrooms={SinglePropertyData.overview.bathrooms}
            bedrooms={SinglePropertyData.overview.bedrooms}
            builtYear={SinglePropertyData.overview.builtYear}
            floors={SinglePropertyData.overview.floors}
            garages={SinglePropertyData.overview.garages}
            sqfeets={SinglePropertyData.overview.sqfeets}
          />
        </div>

        {/* description */}
        <div>
          <DescriptionSection
            description={SinglePropertyData.description}
            lead={undefined}
          />
        </div>

        {/* address */}
        <div>
          <AddressSection
            area={SinglePropertyData.address.area}
            city={SinglePropertyData.address.city}
            country={SinglePropertyData.address.country}
            province={SinglePropertyData.address.province}
            street={SinglePropertyData.address.street}
            zip={SinglePropertyData.address.zip.toString()}
          />
        </div>

        {/* features */}
        <div>
          <FreaturesSection
            kitchen={SinglePropertyData.features.kitchen}
            balcony={SinglePropertyData.features.balcony}
            basement={SinglePropertyData.features.basement}
            laundry={SinglePropertyData.features.laundry}
            gymnasium={SinglePropertyData.features.gymnasium}
            livingRoom={SinglePropertyData.features.livingRoom}
            backyard={SinglePropertyData.features.backyard}
            frontyard={SinglePropertyData.features.frontyard}
            tennisCourt={SinglePropertyData.features.tennisCourt}
            pool={SinglePropertyData.features.pool}
            ac={SinglePropertyData.features.ac}
            electricity={SinglePropertyData.features.electricity}
            naturalgas={SinglePropertyData.features.naturalGas}
            purifiedWater={SinglePropertyData.features.purifiedWater}
            internet={SinglePropertyData.features.internet}
            elevator={SinglePropertyData.features.elevator}
            smokeArea={SinglePropertyData.features.smokeArea}
            accessible={SinglePropertyData.features.accessible}
          />
        </div>

        {/* virtual tour (matterport) */}
        <div>
          <VirtualTourSection link={SinglePropertyData.virtualTourLink} />
        </div>

        {/* video */}
        <div>
          <VideoSection url={SinglePropertyData.videoURL} />
        </div>

        {/* plans */}
        <div>
          <PlansSection imagesLinks={SinglePropertyData.plans} />
        </div>

        {/* map */}
        <div>
          <MapSection location={SinglePropertyData.location} />
        </div>

        {/* consultant */}
        <div>
          <ConsultantSection
            avatar={SinglePropertyData.consultant.avatar}
            name={SinglePropertyData.consultant.name}
            profession={SinglePropertyData.consultant.profession}
            mobileNumber={SinglePropertyData.consultant.mobileNumber}
            landNumber={SinglePropertyData.consultant.landNumber}
            email={SinglePropertyData.consultant.email}
            website={SinglePropertyData.consultant.website}
            // socialLinks={SinglePropertyData.consultant.socialLinks}
          />
        </div>

        {/* review */}
        <div>
          <ReviewSection reviews={SinglePropertyData.reviews} />
        </div>
      </div>
    </Container>
  );
};
export default PropertyPage;

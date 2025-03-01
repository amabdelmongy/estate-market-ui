"use client";
import React, { useState } from "react";
import { Container, Badge } from "@mantine/core";
import MainImagesGalery from "../../../components/PropertyView/MainImagesGalery";
import Image from "next/image";
import { showNotification } from "@mantine/notifications";
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
import { findLeadById } from "@/services/lead-service";
import { Lead } from "@/types/lead";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { SinglePropertyData } from "@/Data/singlePropertyData";

// individual property page
// [id] - mean the dynamic route pass the indiividual property id or slug param with Next.js Link component
// route: /property/123

const PropertyPage = () => {
  // current bookmark state
  const [isBookmark, setIsBookmark] = useState(false);
  const { id } = useParams();
  const [lead, setLead] = React.useState<Lead | null>(null);

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

  React.useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        if (typeof id !== "string") {
          // showNotification.error('id must be a string');
          showNotification({
            message: "id must be a string",
          });
          return;
        }
        const data = await findLeadById(id);
        setLead(data);
      } catch (error) {
        toast.error(
          `Failed to find Lead for id ${String(id)} with error ${(error as Error).message}`,
        );
      }
    }
    void fetchData();
  }, [id]);
  return (
    <Container size="xl" className="mt-24">
      <div className="relative">
        {/* Main images gallery */}
        <div>
          <MainImagesGalery imagesSrc={images} />
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
          {lead?.lead_owner_firstname + " " + lead?.lead_owner_lastname}
        </h1>

        {/* right */}
        {/* Price */}
        <h1
          className="rounded-default rounded-sm px-4 py-2 text-center text-base font-bold text-white shadow-sm tablet:text-xl pc:text-2xl"
          style={{ background: ConfigColors.primary }}
        >
          {useNumberFormatter(lead?.lead_ask_price ?? 0)}
        </h1>
      </div>
      {/* Location */}
      <div className="mb-2 text-sm italic text-black/80 dark:text-white/90 pc:text-base">
        {lead?.lead_prop_address}
      </div>
      {/* Badges */}
      <div className="flex w-full gap-x-4 overflow-x-hidden whitespace-nowrap">
        {lead?.tags?.map((tag, idx) => (
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
            bathrooms={lead?.building_bathrooms ?? 0}
            bedrooms={lead?.building_bedrooms ?? 0}
            builtYear={1992}
            floors={3}
            garages={4}
            sqfeets={5}
          />
        </div>

        {/* description */}
        <div>
          <DescriptionSection description={lead?.lead_info ?? ""} />
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
            socialLinks={SinglePropertyData.consultant.socialLinks}
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

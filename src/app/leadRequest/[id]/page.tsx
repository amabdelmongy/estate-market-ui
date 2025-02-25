"use client";
import React, { useState } from "react";
import { Accordion, Container } from "@mantine/core";
import MainImagesGalery from "../../../components/PropertyView/MainImagesGalery";
import Image from "next/image";
import { showNotification } from "@mantine/notifications";
import AddressSection from "../../../components/PropertyView/Address";
import DescriptionSection from "../../../components/PropertyView/Description";
import OverviewSection from "../../../components/PropertyView/Overview";
import ConsultantSection from "src/components/PropertyView/Consultant";
import { IconCheck, IconX } from "@tabler/icons-react";
import { ConfigColors } from "src/constants/ConfigColors";
import { findLeadById, patchLead } from "@/services/lead-service";
import { Lead } from "@/types/lead";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { SinglePropertyData } from "@/Data/singlePropertyData";
import MapComponent from "../../../components/PropertyView/MapComponent";
import PrimaryButton from "src/components/Buttons/PrimaryButton";

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
  async function RequestToBuy(): Promise<void> {
    try {
      if (typeof id !== "string") {
        showNotification({
          message: "id must be a string",
        });
        return;
      }
      const data = await patchLead(id);
      showNotification({
        message: "Message sent successfully",
      });
    } catch (error) {
      toast.error(
        `Failed to send Request To Buy for id ${String(id)} with error ${(error as Error).message}`,
      );
    }
  }

  React.useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        if (typeof id !== "string") {
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
  if (!lead) {
    return (
      <Container size="xl" className="mt-24 flex items-center justify-center">
        <p className="text-lg font-semibold text-gray-600 dark:text-white">
          Loading property details...
        </p>
      </Container>
    );
  }

  return (
    lead && (
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
          <h1 className="text-base font-bold dark:text-white/90 tablet:text-xl pc:text-2xl"></h1>

          {/* right */}
          {/* Price */}
          <h1
            className="rounded-default rounded-sm px-4 py-2 text-center text-base font-bold text-white shadow-sm tablet:text-xl pc:text-2xl"
            style={{ background: ConfigColors.primary }}
          >
            <span>Seller Asking Price: </span>{" "}
            <span className="blur">blur</span>{" "}
          </h1>
        </div>
        {/* Location */}
        <div className="mb-2 text-sm italic text-black/80 dark:text-white/90 pc:text-base"></div>

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
            <DescriptionSection description={""} lead={lead ?? undefined} />
          </div>

          {/* address */}
          <div>
            <AddressSection
              area={lead?.lead_prop_address_full?.state ?? ""}
              city={lead?.lead_prop_address_full?.city ?? ""}
              country={"USA"}
              province={"province"}
              street={"street street"}
              zip={lead?.lead_prop_address_full?.zipCode ?? ""}
            />
          </div>

          {/* map */}
          <div>
            <div
              style={{ minHeight: "410px" }}
              className="relative w-full bg-white p-1 p-2 dark:bg-slate-900 dark:text-white/90 dark:hover:bg-none"
            >
              <MapComponent
                lat={lead?.lead_prop_address_full?.lat}
                lng={lead?.lead_prop_address_full?.lng}
              />
            </div>
          </div>

          {/* consultant */}
          <div>
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
                  <span className="font-bold">Contact Us</span>
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="flex justify-between">
                    <span> Send request to but this Lead</span>
                    <PrimaryButton
                      text="Request To Buy"
                      onClick={RequestToBuy}
                    />
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
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
        </div>
      </Container>
    )
  );
};
export default PropertyPage;

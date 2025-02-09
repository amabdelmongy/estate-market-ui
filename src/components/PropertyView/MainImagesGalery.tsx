import React from "react";
import { Carousel } from "@mantine/carousel";
import { IconCaretRight } from "@tabler/icons-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

// in individual property there are sub collapsable sections for each details
// this is th top main gallery carousel section data
interface MainGalleryProps {
  imagesSrc: string[];
}
export default function MainImagesGalery({ imagesSrc }: MainGalleryProps) {
  return (
    <Carousel
      withIndicators
      slideSize={{ base: "100%", md: "50%" }}
      slideGap={{ base: 0, md: "md" }}
      className="flex basis-1/2 items-center justify-center"
      nextControlIcon={<IconCaretRight size={30} className="text-black" />}
      previousControlIcon={
        <IconCaretRight size={30} className="rotate-180 text-black" />
      }
      styles={{
        control: {
          color: "white",
          "&[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
      }}
    >
      {imagesSrc.map((img, index) => (
        <Carousel.Slide key={index}>
          <Zoom>
            <Image
              src={img}
              width={1920}
              height={1080}
              className="aspect-video rounded"
              alt="gallery images"
            />
          </Zoom>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

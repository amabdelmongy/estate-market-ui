import { Container } from "@mantine/core";
import Image from "next/image";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";
import { ConfigAboutPage } from "src/constants/ConfigAboutPage";
import { AboutPageData } from "src/Data/aboutData";
// about us page
// route: /aboutus

const AboutUs = () => {
  return (
    <Container size="xl" className="mt-20">
      <div className="relative">
        <Image
          src={"/images/homes/apartment.jpg"}
          width={1920}
          height={1080 / 2}
          alt="background image"
          className="aspect-video rounded-md object-cover brightness-[0.2]"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
          <h1 className="text-2xl font-bold text-white">
            {ConfigBasicInfo.name}
          </h1>
          <h2 className="text-xl text-white">{ConfigAboutPage.title}</h2>
        </div>
      </div>
      <div>
        <div className="font-bold text-black mobile:text-sm laptop:text-base pc:text-base">
          {AboutPageData.story}
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;

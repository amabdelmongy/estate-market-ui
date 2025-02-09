import React from "react";
import { Fade } from "react-awesome-reveal";
import OptionsCard from "../Cards/OptionsCard";
import { Routes } from "src/constants/Routes";
import {
  IconCalendarMonth,
  IconHomeDollar,
  IconMoneybag,
} from "@tabler/icons-react";
import { ConfigColors } from "src/constants/ConfigColors";

// in home page there are four options
// this is the options section
interface IOptions {
  icon: React.ReactNode;
  title: string;
  imgSrc: string;
  link: string;
}

const OptionsSection = () => {
  // all options values
  const options: IOptions[] = [
    {
      icon: <IconMoneybag />,
      title: "Sell a property",
      imgSrc: "/images/homes/house1.jpg",
      link: Routes.addProperty,
    },
    {
      icon: <IconCalendarMonth />,
      title: "Rent a property",
      imgSrc: "/images/homes/house3.jpg",
      link: Routes.allProperties,
    },
    {
      icon: <IconHomeDollar />,
      title: "Buy a property",
      imgSrc: "/images/homes/house4.jpg",
      link: Routes.allProperties,
    },
  ];
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-4 pc:grid-cols-4">
        {/* Title card*/}
        <div
          className={` relative flex h-full w-full flex-col items-center justify-center rounded bg-white dark:bg-slate-900`}
        >
          <div
            className={`text-2xl font-bold`}
            style={{ color: ConfigColors.primary }}
          >
            Options
          </div>
          <div className="font-bold dark:text-white">I want to ...</div>
        </div>
        <Fade cascade direction="right" triggerOnce>
          {/*propert options cards */}
          {options.map((option, idx) => (
            <OptionsCard
              key={idx}
              icon={option.icon}
              title={option.title}
              src={option.imgSrc}
              link={option.link}
            />
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default OptionsSection;

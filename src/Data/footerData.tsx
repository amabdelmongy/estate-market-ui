// footer contacts data

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { ReactNode } from "react";

interface ISocials {
  title: string;
  icon: ReactNode;
  link: string;
}

interface IFooterData {
  copyright: string;
  about: string;
  socials: ISocials[];
}

export const FooterData: IFooterData = {
  copyright: "@Copyright | nisalk",
  about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, nisi
  magni facere reiciendis dolorem et, eum id suscipit totam repellat
  sunt fugiat odio. Voluptatibus sapiente eligendi magni. Voluptate,
  commodi accusamus?`,
  socials: [
    { title: "facebook", icon: <IconBrandFacebook />, link: "example.com" },
    { title: "instagram", icon: <IconBrandInstagram />, link: "example.com" },
    { title: "linkedIn", icon: <IconBrandLinkedin />, link: "example.com" },
    { title: "pinterest", icon: <IconBrandPinterest />, link: "example.com" },
    { title: "twitter", icon: <IconBrandTwitter />, link: "example.com" },
  ],
};

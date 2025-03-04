// import {
//   IconBrandFacebook,
//   IconBrandInstagram,
//   IconBrandLinkedin,
//   IconBrandPinterest,
//   IconBrandX,
//   IconBrandYoutube,
// } from "@tabler/icons-react";
import React from "react";

interface IAddress {
  street: string;
  city: string;
  area: string;
  province: string;
  zip: number;
  country: string;
}

interface IDocument {
  title: string;
  link: string;
}

interface IFeature {
  [key: string]: boolean;
}

interface IReview {
  id: number;
  avatar: string;
  name: string;
  profession: string;
  days: string;
  comment: string;
}

// interface ISocialLink {
//   name: string;
//   link: string;
//   icon: React.ReactNode; // Assuming you have React components for icons
// }

interface IConsultant {
  avatar: string;
  name: string;
  profession: string;
  mobileNumber: string;
  landNumber: string;
  email: string;
  website: string;
  // socialLinks: ISocialLink[];
}

interface ISinglePropertyData {
  id: number;
  title: string;
  slug: string;
  price: number;
  tags: string[];
  type: string;
  images: string[];
  overview: {
    builtYear: number;
    bedrooms: number;
    bathrooms: number;
    garages: number;
    sqfeets: number;
    floors: number;
  };
  description: string;
  documents: IDocument[];
  address: IAddress;
  features: IFeature;
  videoURL: string;
  virtualTourLink: string;
  plans: string[];
  location: string;
  reviews: IReview[];
  consultant: IConsultant;
}

export const SinglePropertyData: ISinglePropertyData = {
  id: 1,
  title: "The harbour resident",
  slug: "the-harbour-resident",
  price: 25000000,
  tags: ["rent", "negotialble"],
  type: "House",
  images: [
    "/images/homes/house1.jpg",
    "/images/homes/house2.jpg",
    "/images/homes/house3.jpg",
    "/images/homes/house4.jpg",
    "/images/homes/house5.jpg",
  ],
  overview: {
    builtYear: 2008,
    bedrooms: 2,
    bathrooms: 2,
    garages: 2,
    sqfeets: 2500,
    floors: 2,
  },
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sapiente beatae odio iste ab. Inventore voluptates at fugit, voluptatibus rerum tempore officiis nesciunt voluptate, reiciendis, corrupti itaque. Maxime, ullam a!",
  documents: [
    { title: "Legal info", link: "https://sample.com/" },
    { title: "House plans", link: "https://sample2.com/" },
  ],
  address: {
    street: "Avenue rd.",
    city: "New York",
    area: "New York",
    province: "Western",
    zip: 1025,
    country: "USA",
  },
  features: {
    kitchen: true,
    balcony: false,
    basement: true,
    laundry: false,
    gymnasium: false,
    livingRoom: true,
    backyard: true,
    frontyard: false,
    tennisCourt: true,
    pool: true,
    utilities: true,
    ac: false,
    electricity: false,
    naturalGas: true,
    purifiedWater: true,
    internet: false,
    elevator: true,
    smokeArea: false,
    accessible: true,
  },
  videoURL: "https://www.youtube.com/watch?v=tyta4jkSaR8",
  virtualTourLink: "/images/3d-tour.jpg",
  plans: ["/images/plans/plan1.jpg", "/images/plans/plan2.jpg"],
  location: "Brooklyn+Bridge,New+York,NY",
  reviews: [
    {
      id: 1,
      avatar: "/images/avatar/avatar1.jpg",
      name: "John Doe",
      profession: "Architecture",
      days: "5m ago",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat eveniet vitae dicta officiis rem tenetur consequatur id ut, cum itaque vero qui sequi distinctio facilis! Vitae a repellat vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat eveniet vitae dicta officiis rem tenetur consequatur id ut, cum itaque vero qui sequi distinctio facilis! Vitae a repellat vero?",
    },
    {
      id: 2,
      avatar: "/images/avatar/avatar2.jpg",
      name: "Tommy Arkins",
      profession: "Civil Engineer",
      days: "1y ago",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat eveniet vitae dicta officiis rem tenetur consequatur id ut, cum itaque vero qui sequi distinctio facilis! Vitae a repellat vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat eveniet vitae dicta officiis rem tenetur consequatur id ut, cum itaque vero qui sequi distinctio facilis! Vitae a repellat vero?",
    },
  ],
  consultant: {
    avatar: "/images/avatar/avatar2.jpg",
    name: "Tommy Doneldson",
    profession: "Architecture",
    mobileNumber: "075-6141531",
    landNumber: "075-6141531",
    email: "example@mail.com",
    website: "website.com",
    // socialLinks: [
    //   { name: "Facebook", link: "facebook.com", icon: <IconBrandFacebook /> },
    //   { name: "X", link: "x.com", icon: <IconBrandX /> },
    //   {
    //     name: "Instagram",
    //     link: "instagram.com",
    //     icon: <IconBrandInstagram />,
    //   },
    //   { name: "YouTube", link: "youtube.com", icon: <IconBrandYoutube /> },
    //   { name: "LinkedIn", link: "linkedin.com", icon: <IconBrandLinkedin /> },
    //   {
    //     name: "Pinterest",
    //     link: "pinterest.com",
    //     icon: <IconBrandPinterest />,
    //   },
    // ],
  },
};

// dummy data of top selected agents details

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

interface SocialLink {
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface TopAgentsDataProps {
  id: number;
  avatar?: string;
  name: string;
  profession: string;
  description: string;
  socialLinks: SocialLink[];
}

export const TopAgentsData: TopAgentsDataProps[] = [
  {
    id: 1,
    avatar: "/images/avatar/avatar1.jpg",
    name: "John carl",
    profession: "Architecture",
    description: "Exellant site to work with",
    socialLinks: [
      { name: "Facebook", link: "facebook.com", icon: <IconBrandFacebook /> },
      { name: "X", link: "x.com", icon: <IconBrandX /> },
      {
        name: "Instagram",
        link: "instagram.com",
        icon: <IconBrandInstagram />,
      },
      { name: "YouTube", link: "youtube.com", icon: <IconBrandYoutube /> },
      { name: "LinkedIn", link: "linkedin.com", icon: <IconBrandLinkedin /> },
      {
        name: "Pinterest",
        link: "pinterest.com",
        icon: <IconBrandPinterest />,
      },
    ],
  },
  {
    id: 2,
    avatar: "/images/avatar/avatar2.jpg",
    name: "Carl johnson",
    profession: "Consultant",
    description: "Amazing platform to coporate with clients",
    socialLinks: [
      { name: "Facebook", link: "facebook.com", icon: <IconBrandFacebook /> },
      { name: "X", link: "x.com", icon: <IconBrandX /> },
      {
        name: "Instagram",
        link: "instagram.com",
        icon: <IconBrandInstagram />,
      },
      { name: "YouTube", link: "youtube.com", icon: <IconBrandYoutube /> },
      { name: "LinkedIn", link: "linkedin.com", icon: <IconBrandLinkedin /> },
      {
        name: "Pinterest",
        link: "pinterest.com",
        icon: <IconBrandPinterest />,
      },
    ],
  },
  {
    id: 3,
    avatar: "/images/avatar/avatar3.jpg",
    name: "Alexa johnson",
    profession: "Civil enginer",
    description: "New connections with new platform",
    socialLinks: [
      { name: "Facebook", link: "facebook.com", icon: <IconBrandFacebook /> },
      { name: "X", link: "x.com", icon: <IconBrandX /> },
      {
        name: "Instagram",
        link: "instagram.com",
        icon: <IconBrandInstagram />,
      },
      { name: "YouTube", link: "youtube.com", icon: <IconBrandYoutube /> },
      { name: "LinkedIn", link: "linkedin.com", icon: <IconBrandLinkedin /> },
      {
        name: "Pinterest",
        link: "pinterest.com",
        icon: <IconBrandPinterest />,
      },
    ],
  },
  {
    id: 4,
    avatar: "/images/avatar/avatar4.jpg",
    name: "Jenny kotkova",
    profession: "Architecture",
    description: "Wonderful platform and easy to work with ",
    socialLinks: [
      { name: "Facebook", link: "facebook.com", icon: <IconBrandFacebook /> },
      { name: "X", link: "x.com", icon: <IconBrandX /> },
      {
        name: "Instagram",
        link: "instagram.com",
        icon: <IconBrandInstagram />,
      },
      { name: "YouTube", link: "youtube.com", icon: <IconBrandYoutube /> },
      { name: "LinkedIn", link: "linkedin.com", icon: <IconBrandLinkedin /> },
      {
        name: "Pinterest",
        link: "pinterest.com",
        icon: <IconBrandPinterest />,
      },
    ],
  },
];

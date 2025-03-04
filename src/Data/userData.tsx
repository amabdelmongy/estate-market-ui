// import {
//   IconBrandFacebook,
//   IconBrandInstagram,
//   IconBrandLinkedin,
//   IconBrandPinterest,
//   IconBrandX,
//   IconBrandYoutube,
// } from "@tabler/icons-react";

// individual user profile dummy data
interface ISocialLink {
  name: string;
  link: string;
  icon: React.ReactNode; // Assuming you have React components for icons
}

interface IUserData {
  avatar: string;
  name: string;
  username: string;
  aboutme: string;
  profession: string;
  ratings: number;
  address: string;
  email: string;
  website: string;
  phoneNumber: string;
  // socialLinks?: ISocialLink[];
}

export const UserData: IUserData = {
  avatar: "/images/avatar/avatar3.jpg",
  name: "Jeniffer athena",
  username: "@jenifferathena",
  address: "New York , USA",
  email: "sample@mail.com",
  website: "website.com",
  phoneNumber: "0810197461",
  aboutme:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, assumenda perferendis sed asperiores quod necessitatibus, eius, voluptatum aliquid delectus quidem obcaecati ea officia? Natus reprehenderit tenetur facere perspiciatis sapiente odit.",
  profession: "Architecture",
  ratings: 4,
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
};

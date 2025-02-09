import React from "react";
import Link from "next/link";
import Image from "next/image";

// in categories card with image background with count and title
interface IOptionsCard {
  icon: React.ReactNode;
  title: string;
  src: string;
  link: string;
}

const OptionsCard = ({ title, src, link, icon }: IOptionsCard) => {
  return (
    <Link href={link}>
      <div className="group relative cursor-pointer ">
        <Image
          src={src}
          className="rounded object-cover brightness-50 duration-300 group-hover:brightness-[0.2]"
          width={400}
          height={1000}
          alt="overlay image"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div>{icon}</div>
            <div className="text-center text-2xl">{title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OptionsCard;

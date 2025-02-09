import React from "react";
import Link from "next/link";
import Image from "next/image";

// in categories card with image background with count and title
interface IProfileCard {
  title: string;
  count: number;
  src: string;
}

const ProfileCard = ({ title, count, src }: IProfileCard) => {
  return (
    <Link href={"/allproperties"}>
      <div className="group relative cursor-pointer">
        <Image
          src={src}
          className="rounded-default aspect-vertical overflow-clip rounded-sm object-cover brightness-50 duration-300 group-hover:brightness-[0.2] mobile:h-32 pc:h-full"
          width={400}
          height={1000}
          alt="overlay image"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white">
          <div className="text-center text-2xl">{title}</div>
          <div className="text-center font-bold">{count} listed</div>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;

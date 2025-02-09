import React from "react";
import Image from "next/image";
import { Rating } from "@mantine/core";
import { ConfigColors } from "src/constants/ConfigColors";
// in categories card with image background with count and title
interface IReviewCard {
  src: string;
  name: string;
  review: string;
  ratings: number;
}

const ReviewCard = ({ src, name, ratings, review }: IReviewCard) => {
  return (
    <div className="group mx-2 flex cursor-pointer rounded bg-white dark:bg-slate-900 dark:text-white/90">
      {/* avatar */}
      <div className="basis-2/6">
        <Image
          src={src}
          className="aspect-square rounded object-cover"
          width={200}
          height={200}
          alt="overlay image"
        />
      </div>
      {/* review */}
      <div className="w-96 basis-full px-4">
        <div className="text-xl font-bold">{name}</div>
        <div className="whitespace-pre-wrap text-sm">{review}</div>
        <div>
          <Rating value={ratings} readOnly color={ConfigColors.primary} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

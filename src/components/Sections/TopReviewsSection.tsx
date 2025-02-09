import React from "react";
import ReviewCard from "../Cards/ReviewCard";
import Marquee from "react-fast-marquee";
import { ReviewData } from "src/Data/reviewData";

// in home page there are four sections
// this is the top user review section

const TopReviewsSection = async () => {
  return (
    <section>
      <Marquee autoFill={true}>
        {ReviewData.map((review: any) => (
          <ReviewCard
            key={review.id}
            src={review.avatar}
            name={review.name}
            ratings={review.ratings}
            review={review.review}
          />
        ))}
      </Marquee>
    </section>
  );
};
export default TopReviewsSection;

import React from "react";
import Image from "next/image";
import { Accordion, Input, Spoiler } from "@mantine/core";
import { IconSend, IconMailForward } from "@tabler/icons-react";
import PrimaryButton from "../Buttons/PrimaryButton";

// in individual property there are sub collapsable sections for each details
// this is the review section data

interface Review {
  id: number;
  avatar: string;
  name: string;
  profession: string;
  days: string;
  comment: string;
}
interface ReviewsProps {
  reviews: Review[];
}

const ReviewSection = ({ reviews }: ReviewsProps) => {
  return (
    <Accordion
      variant="default"
      defaultValue="default"
      className="rounded bg-white "
      classNames={{
        root: "dark:bg-slate-900 dark:text-white/90 dark:hover:bg-none",
        control: "dark:hover:bg-slate-900 dark:text-white",
      }}
    >
      <Accordion.Item value="default">
        <Accordion.Control>
          <span className="font-bold">Review</span>
        </Accordion.Control>
        <Accordion.Panel>
          {/* comments */}
          {reviews.map((review) => (
            <div key={review.id} className="my-4 flex space-x-2 pc:flex-row">
              {/* Avatar */}
              <div className="basis-auto">
                <Image
                  src={review.avatar}
                  className="rounded-default aspect-square object-cover"
                  width={50}
                  height={50}
                  alt="user image"
                />
              </div>
              {/* Review */}
              <div className="basis-full">
                {/* Single review */}
                <div>
                  {/* User */}
                  <div className="mb-1">
                    <div className="font-bold">{review.name}</div>
                    <div className="italic text-black/50 dark:text-white/90">
                      {review.profession}
                    </div>
                    <div className="text-sm font-bold italic text-black/50 dark:text-white/90">
                      {review.days}
                    </div>
                  </div>
                  {/* Review text */}
                  <Spoiler
                    maxHeight={20}
                    showLabel="Show more"
                    hideLabel="Hide"
                    className="text-sm font-bold text-black/60 dark:text-white/90 pc:text-base"
                  >
                    {review.comment}
                  </Spoiler>
                </div>
              </div>
            </div>
          ))}

          {/* compose box */}
          <div className="flex w-full items-center gap-x-2">
            {/* Input box */}
            <div className="w-full">
              <Input
                leftSection={<IconSend />}
                placeholder="Compose ... "
                classNames={{
                  input: "dark:bg-slate-800",
                }}
              />
            </div>
            <div>
              <PrimaryButton
                text="Submit"
                type={"submit"}
                icon={<IconMailForward size={20} />}
              />
            </div>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default ReviewSection;

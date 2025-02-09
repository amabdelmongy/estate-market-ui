import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandPinterest,
} from "@tabler/icons-react";

// in individual property there are sub collapsable sections for each details
// this is the social links section data

export default function SocialLinks() {
  return (
    <div className="rounded-default bg-white p-2">
      <div>
        <div className="mb-4">
          <span className="my-4 font-bold">Social links</span>
        </div>
        <div>
          {/* Basic informations */}
          <div className="grid grid-cols-5 gap-2 text-base tablet:grid-cols-6 pc:grid-cols-6">
            {/* Facebook */}
            <div>
              <IconBrandFacebook
                size={50}
                className="bg-primary/20 hover:bg-primary/10 text-primary cursor-pointer p-2 duration-300"
              />
            </div>
            {/* Twitter */}
            <div>
              <IconBrandTwitter
                size={50}
                className="bg-primary/20 hover:bg-primary/10 text-primary cursor-pointer p-2 duration-300"
              />
            </div>
            {/* Instagram */}
            <div>
              <IconBrandInstagram
                size={50}
                className="bg-primary/20 hover:bg-primary/10 text-primary cursor-pointer p-2 duration-300"
              />
            </div>
            {/* Youtube */}
            <div>
              <IconBrandYoutube
                size={50}
                className="bg-primary/20 hover:bg-primary/10 text-primary cursor-pointer p-2 duration-300"
              />
            </div>
            {/* LinkedIn */}
            <div>
              <IconBrandLinkedin
                size={50}
                className="bg-primary/20 hover:bg-primary/10 text-primary cursor-pointer p-2 duration-300"
              />
            </div>
            {/* Pinterest */}
            <div>
              <IconBrandPinterest
                size={50}
                className="bg-primary/20 hover:bg-primary/10 text-primary cursor-pointer p-2 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { TopAgentsData } from "src/Data/topAgentsData";
import Link from "next/link";
import { ConfigColors } from "src/constants/ConfigColors";

// in home page there are four sections
// this is the top selected agents/consultants section

const TopAgentsSection = async () => {
  return (
    <div className="grid gap-4 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 pc:grid-cols-4">
      <Fade cascade direction="up" triggerOnce>
        {/* populate top agents data */}
        {TopAgentsData.map((agent) => (
          <Link key={agent.id} href={"/"}>
            <div className="group h-full rounded bg-white dark:bg-slate-900 dark:text-white/80">
              {/* Avatar */}
              <div className="overflow-hidden">
                <Image
                  src={
                    agent?.avatar
                      ? agent?.avatar
                      : "/images/placeholders/avatar.png"
                  }
                  width={400}
                  height={400}
                  className="aspect-square h-full w-full rounded object-cover duration-300 group-hover:scale-105 "
                  alt="avatar"
                />
              </div>
              {/* details section */}
              <div className="flex flex-col items-center justify-center p-4">
                {/* Name */}
                <div
                  className={`mt-2 text-2xl font-bold text-[${ConfigColors.primary}]`}
                >
                  {agent.name}
                </div>
                {/* Profession */}
                <div>{agent.profession}</div>
                {/* description */}
                <div className="line-clamp-3 text-center font-bold">
                  {agent.description}
                </div>
                {/* Social links */}
                {/* <div className="mt-4 flex flex-row space-x-2">
                  {agent.socialLinks.map((link, idx) => (
                    <Link href={link.link} key={idx}>
                      <span
                        className="duration-300 hover:opacity-50"
                        style={{ color: ConfigColors.primary }}
                      >
                        {link.icon}
                      </span>
                    </Link>
                  ))}
                </div> */}
              </div>
            </div>
          </Link>
        ))}
      </Fade>
    </div>
  );
};
export default TopAgentsSection;

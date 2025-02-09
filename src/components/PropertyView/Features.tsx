import React from "react";
import { Accordion } from "@mantine/core";
import {
  IconSoup,
  IconWashMachine,
  IconDeviceTv,
  IconBarbell,
  IconGrowth,
  IconBallTennis,
  IconSwimming,
  IconPropeller,
  IconBolt,
  IconFlame,
  IconDroplet,
  IconWifi,
  IconElevator,
  IconSmoking,
  IconDisabled,
  IconHome2,
  IconRowInsertTop,
} from "@tabler/icons-react";
import { ConfigColors } from "src/constants/ConfigColors";

// in individual property there are sub collapsable sections for each details
// this is th features section data
interface FeaturesSectionProps {
  kitchen: boolean;
  balcony: boolean;
  basement: boolean;
  laundry: boolean;
  gymnasium: boolean;
  livingRoom: boolean;
  backyard: boolean;
  frontyard: boolean;
  tennisCourt: boolean;
  pool: boolean;
  ac: boolean;
  electricity: boolean;
  naturalgas: boolean;
  purifiedWater: boolean;
  internet: boolean;
  elevator: boolean;
  smokeArea: boolean;
  accessible: boolean;
}
const FreaturesSection = ({
  kitchen,
  balcony,
  basement,
  laundry,
  gymnasium,
  livingRoom,
  backyard,
  frontyard,
  tennisCourt,
  pool,
  ac,
  electricity,
  naturalgas,
  purifiedWater,
  internet,
  elevator,
  smokeArea,
  accessible,
}: FeaturesSectionProps) => {
  return (
    <Accordion
      variant="default"
      defaultValue="default"
      className="rounded bg-white"
      classNames={{
        root: "dark:bg-slate-900 dark:text-white/90 dark:hover:bg-none",
        control: "dark:hover:bg-slate-900 dark:text-white",
      }}
    >
      <Accordion.Item value="default">
        <Accordion.Control>
          <span className="font-bold">Features</span>
        </Accordion.Control>
        <Accordion.Panel>
          {/* Indoor features */}
          <div className="mt-4 font-bold">Indoor features</div>
          <div className="grid grid-cols-2 gap-2 text-sm pc:grid-cols-3 pc:text-base">
            <div className="flex space-x-2">
              <IconSoup
                style={{
                  color: kitchen ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Kitchen</span>
            </div>
            <div className="flex space-x-2">
              <IconHome2
                style={{
                  color: balcony ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Balcony</span>
            </div>
            <div className="flex space-x-2">
              <IconRowInsertTop
                style={{
                  color: basement ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Basement</span>
            </div>
            <div className="flex space-x-2">
              <IconWashMachine
                style={{
                  color: laundry ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Laundry</span>
            </div>
            <div className="flex space-x-2">
              <IconBarbell
                style={{
                  color: gymnasium ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Gymnasium</span>
            </div>
            <div className="flex space-x-2">
              <IconDeviceTv
                style={{
                  color: livingRoom
                    ? ConfigColors.primary
                    : ConfigColors.danger,
                }}
              />
              <span>Living room</span>
            </div>
          </div>
          {/* Outdoor features */}
          <div className="mt-4 font-bold">Outdoor features</div>
          <div className="grid grid-cols-2 gap-2 text-sm pc:grid-cols-3 pc:text-base">
            <div className="flex space-x-2">
              <IconGrowth
                style={{
                  color: backyard ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Backyard</span>
            </div>
            <div className="flex space-x-2">
              <IconHome2
                style={{
                  color: frontyard ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Frontyard</span>
            </div>
            <div className="flex space-x-2">
              <IconBallTennis
                style={{
                  color: tennisCourt
                    ? ConfigColors.primary
                    : ConfigColors.danger,
                }}
              />
              <span>Tennis court</span>
            </div>
            <div className="flex space-x-2">
              <IconSwimming
                style={{
                  color: pool ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Pool</span>
            </div>
          </div>
          {/* Utilities */}
          <div className="mt-4 font-bold">Utilities</div>
          <div className="grid grid-cols-2 gap-2 text-sm pc:grid-cols-3 pc:text-base">
            <div className="flex space-x-2">
              <IconPropeller
                style={{
                  color: ac ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>AC</span>
            </div>
            <div className="flex space-x-2">
              <IconBolt
                style={{
                  color: electricity
                    ? ConfigColors.primary
                    : ConfigColors.danger,
                }}
              />
              <span>Electricity</span>
            </div>
            <div className="flex space-x-2">
              <IconFlame
                style={{
                  color: naturalgas
                    ? ConfigColors.primary
                    : ConfigColors.danger,
                }}
              />
              <span>Natural gas</span>
            </div>
            <div className="flex space-x-2">
              <IconDroplet
                style={{
                  color: purifiedWater
                    ? ConfigColors.primary
                    : ConfigColors.danger,
                }}
              />
              <span>Purified water</span>
            </div>
            <div className="flex space-x-2">
              <IconWifi
                style={{
                  color: internet ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Internet</span>
            </div>
          </div>
          {/* Other features */}
          <div className="mt-4 font-bold">Other features</div>
          <div className="grid grid-cols-2 gap-2 text-sm pc:grid-cols-3 pc:text-base">
            <div className="flex space-x-2">
              <IconElevator
                style={{
                  color: elevator ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Elevator</span>
            </div>
            <div className="flex space-x-2">
              <IconSmoking
                style={{
                  color: smokeArea ? ConfigColors.primary : ConfigColors.danger,
                }}
              />
              <span>Smoke area</span>
            </div>
            <div className="flex space-x-2">
              <IconDisabled
                style={{
                  color: accessible
                    ? ConfigColors.primary
                    : ConfigColors.danger,
                }}
              />
              <span>Accessible</span>
            </div>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default FreaturesSection;

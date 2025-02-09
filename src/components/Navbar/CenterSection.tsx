import React from "react";
import Link from "next/link";
import { Button, Menu, MenuTarget } from "@mantine/core";
import { Routes } from "../../constants/Routes";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";

// center section of the navbar

const CenterSection = () => {
  return (
    <>
      {/* Home */}
      <div>
        <Link href="/">
          <PrimaryButton text="Home" />
        </Link>
      </div>

      {/* About us */}
      <div>
        <Link href="/aboutus">
          <PrimaryButton text="About us" />
        </Link>
      </div>

      {/* Explore */}
      <Menu width={300} trigger="hover">
        <MenuTarget>
          <PrimaryButton text="Explore" />
          {/* <Button>Menu</Button> */}
        </MenuTarget>
        <Menu.Dropdown className="font-bold">
          <Menu.Item>
            <Link
              href={Routes.allProperties}
              className="flex items-center gap-x-2"
            >
              <Image
                src="/images/homes/apartment.jpg"
                width={50}
                height={50}
                alt="apartment"
                className="aspect-square rounded object-cover"
              />
              <span>Apartments</span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              href={Routes.allProperties}
              className="flex items-center gap-x-2"
            >
              <Image
                src="/images/homes/house2.jpg"
                width={50}
                height={50}
                alt="apartment"
                className="aspect-square rounded object-cover"
              />
              <span>Flats</span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              href={Routes.allProperties}
              className="flex items-center gap-x-2"
            >
              <Image
                src="/images/homes/cottage.jpg"
                width={50}
                height={50}
                alt="apartment"
                className="aspect-square rounded object-cover"
              />
              <span>Cotteges</span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              href={Routes.allProperties}
              className="flex items-center gap-x-2"
            >
              <Image
                src="/images/homes/house1.jpg"
                width={50}
                height={50}
                alt="apartment"
                className="aspect-square rounded object-cover"
              />
              <span>Houses</span>
            </Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      {/* Featured */}
      <div>
        <Link href={"/#featured"}>
          <PrimaryButton text="Feature" />
        </Link>
      </div>
    </>
  );
};

export default CenterSection;

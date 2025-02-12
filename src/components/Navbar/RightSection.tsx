"use client";
import React, { useState } from "react";
import {
  IconMenuDeep,
  IconMoon,
  IconSquareRoundedXFilled,
} from "@tabler/icons-react";
import { ActionIcon, Switch } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "../../constants/Routes";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import { UserData } from "src/Data/userData";
import { Fade } from "react-awesome-reveal";
import SecondaryButton from "../Buttons/SecondaryButton";
import { ConfigColors } from "src/constants/ConfigColors";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";
import { useTheme } from "next-themes";
import { IconSunLow } from "@tabler/icons-react";
import { ConfigSizes } from "src/constants/ConfigSizes";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";
import { LoggedInUser } from "@/types/user";
import { authClient } from "@/lib/auth/client";
import { logger } from "@/lib/default-logger";
// right secttion of the navbar
interface IDrawerItems {
  title: string;
  link: string;
  red?: boolean;
}

const RightSection = () => {
  const { checkSession } = useUser();

  let loggedUserData: string | null = null;
  if (typeof window !== "undefined") {
    loggedUserData = localStorage.getItem("custom-auth-user");
  }
  let userName = "";
  let userEmail = "";
  const userData = loggedUserData
    ? (JSON.parse(loggedUserData) as LoggedInUser)
    : undefined;
  if (userData) {
    userName = userData?.name ?? "";
    userEmail = userData?.email ?? "";
  }

  const router = useRouter();

  const handleSignOut = React.useCallback(async (): Promise<void> => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        logger.error("Sign out error", error);
        return;
      }

      // Refresh the auth state
      await checkSession?.();

      // UserProvider, for this case, will not refresh the router and we need to do it manually
      router.refresh();
      // After refresh, AuthGuard will handle the redirect
    } catch (err) {
      logger.error("Sign out error", err);
    }
  }, [checkSession, router]);
  // Is user authenticated or not?
  const [opened, { open, close }] = useDisclosure(false);

  const DrawerItems: IDrawerItems[] = [
    { title: "Home", link: Routes.home },
    ...(userData
      ? [{ title: "My profile", link: Routes.profile + userData.name }]
      : []),
    { title: "All properties", link: Routes.allProperties },
    ...(userData ? [{ title: "Add property", link: Routes.addProperty }] : []),
    ...(userData ? [{ title: "Logout", link: Routes.login, red: true }] : []),
    ...(!userData ? [{ title: "Login", link: Routes.login }] : []),
  ];
  // dark mode
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Switch
        size="lg"
        color="dark.4"
        radius={"sm"}
        classNames={{
          thumb:
            "cursor-pointer hover:scale-110 duration-300 dark:bg-slate-900",
          track: "dark:bg-slate-800",
        }}
        onLabel={<IconSunLow size={ConfigSizes.smallIcons} />}
        offLabel={
          <IconMoon size={ConfigSizes.smallIcons} className="text-white/90" />
        }
        onChange={(e) =>
          e.target.checked ? setTheme("light") : setTheme("dark")
        }
        checked={theme == "light" ? true : false}
      />
      <ActionIcon
        variant="white"
        aria-label="Settings"
        color={ConfigColors.primary}
        classNames={{
          root: "dark:bg-slate-800",
        }}
      >
        <IconMenuDeep
          stroke={2}
          onClick={open}
          className="dark:text-white/90"
        />
      </ActionIcon>

      {/* side menu drawer */}
      <Drawer
        offset={10}
        radius="sm"
        opened={opened}
        onClose={close}
        size={"sm"}
        position="right"
        classNames={{
          root: "dark:bg-slate-900",
          body: "dark:bg-slate-900",
          content: "dark:bg-slate-900",
          header: "dark:bg-slate-900",
          // inner:"dark:bg-slate-800"
        }}
        closeButtonProps={{
          icon: (
            <IconSquareRoundedXFilled
              size={20}
              stroke={1.5}
              color={ConfigColors.primary}
              className="dark:bg-slate-900"
            />
          ),
        }}
      >
        <div className="relative">
          <div
            className="h-52 w-full rounded"
            style={{ backgroundColor: ConfigColors.primary }}
          ></div>
          <div className="absolute left-1/2 top-20  -translate-x-1/2 transform">
            <h1
              className="text-center text-2xl font-bold"
              style={{ color: ConfigColors.white }}
            >
              {ConfigBasicInfo.name}
            </h1>

            {/* <Image
              src={UserData.avatar}
              width={200}
              height={200}
              className="m-auto  aspect-square rounded object-cover shadow-md"
              alt="Profile picture"
            /> */}
          </div>
        </div>

        <div className="mt-32 flex w-full flex-col items-center justify-center gap-y-4">
          <div>
            <h1 className="text-2xl font-bold dark:text-white/90">
              {userData?.name}
            </h1>
          </div>
          <div>
            <div className="flex w-full flex-col space-y-4">
              <Fade cascade direction="right" duration={200}>
                {DrawerItems.map((item, idx) =>
                  item.title !== "Logout" ? (
                    <Link href={item.link} key={idx}>
                      <SecondaryButton
                        text={item.title}
                        fullWidth
                        color={item.red ? "danger" : undefined}
                      />
                    </Link>
                  ) : (
                    <Link href={item.link} key={idx}>
                      <SecondaryButton
                        onClick={() => handleSignOut()}
                        text={item.title}
                        fullWidth
                        color={item.red ? "danger" : undefined}
                      />
                    </Link>
                  ),
                )}
              </Fade>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default RightSection;

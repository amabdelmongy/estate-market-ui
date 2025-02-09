"use client";

import { MantineProvider } from "@mantine/core";
import NextTopLoader from "nextjs-toploader";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/core/styles/Button.css";
import { ConfigColors } from "src/constants/ConfigColors";
import { ThemeProvider } from "next-themes";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={{ fontFamily: "quicksand" }}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Notifications />
        <NextTopLoader
          color={ConfigColors.primary}
          height={5}
          showSpinner={false}
        />
        {children}
      </ThemeProvider>
    </MantineProvider>
  );
};

export default Providers;

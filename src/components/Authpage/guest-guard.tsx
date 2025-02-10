"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { logger } from "@/lib/default-logger";
import { useUser } from "@/hooks/use-user";
import { showNotification } from "@mantine/notifications";

export interface GuestGuardProps {
  children: React.ReactNode;
}

export function GuestGuard({
  children,
}: GuestGuardProps): React.JSX.Element | null {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [isChecking, setIsChecking] = React.useState<boolean>(true);

  const checkPermissions = async (): Promise<void> => {
    if (isLoading) {
      return;
    }

    if (error) {
      setIsChecking(false);
      return;
    }
    if (user) {
      logger.debug("[GuestGuard]: User is logged in, redirecting to dashboard");
      router.replace("/");
      router.refresh();
      return;
    }

    setIsChecking(false);
  };

  React.useEffect(() => {
    checkPermissions().catch(() => {
      // noop
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, [user, error, isLoading]);

  if (isChecking) {
    return null;
  }

  if (error) {
    showNotification({
      title: "Error",
      message: error.toString(),
      color: "red",
    });
  }

  return <React.Fragment>{children}</React.Fragment>;
}

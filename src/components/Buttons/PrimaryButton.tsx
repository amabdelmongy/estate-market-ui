import React, { forwardRef } from "react";
import { Button } from "@mantine/core";
import { ConfigColors } from "src/constants/ConfigColors";

interface IPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  color?: "danger" | "secondary" | "transparent";
}

const PrimaryButton = forwardRef<HTMLButtonElement, IPrimaryButton>(
  ({ text, icon, fullWidth, color, ...rest }, ref) => {
    const backgroundColor =
      color && color in ConfigColors
        ? ConfigColors[color as keyof typeof ConfigColors]
        : ConfigColors.primary;

    return (
      <Button
        ref={ref}
        leftSection={icon}
        fullWidth={fullWidth}
        style={{ backgroundColor }}
        {...rest}
      >
        {text}
      </Button>
    );
  },
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;

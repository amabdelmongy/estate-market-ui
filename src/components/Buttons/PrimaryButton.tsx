import { Button } from "@mantine/core";
import { ConfigColors } from "src/constants/ConfigColors";

interface IPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  color?: "danger" | "secondary" | "transparent" | undefined;
}

const PrimaryButton = ({
  text,
  icon,
  fullWidth,
  color,
  ...rest
}: IPrimaryButton) => {
  return (
    <Button
      leftSection={icon}
      {...rest}
      fullWidth={fullWidth}
      style={{
        backgroundColor: color ? ConfigColors.danger : ConfigColors.primary,
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;

import { Button } from "@mantine/core";
import { ConfigColors } from "src/constants/ConfigColors";

interface ISecondaryButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  color?: "danger" | "secondary" | undefined;
}

const SecondaryButton = ({
  text,
  icon,
  fullWidth,
  color,
  ...rest
}: ISecondaryButton) => {
  return (
    <Button
      variant="subtle"
      {...rest}
      className={`flex items-center justify-center rounded border bg-white px-4 py-2 font-bold shadow-md duration-300 hover:shadow-none dark:border-white dark:bg-slate-800 dark:text-white/90`}
      style={{
        borderColor: color ? ConfigColors.danger : ConfigColors.primary,
        color: color ? ConfigColors.danger : ConfigColors.primary,
      }}
    >
      <span>{text}</span>
    </Button>
  );
};

export default SecondaryButton;

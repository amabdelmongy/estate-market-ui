import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { ConfigColors } from "src/constants/ConfigColors";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-4">
      {/* 404 image */}
      <Image
        src={"/illustrations/404.svg"}
        width={1920 / 4}
        height={1080 / 4}
        alt="404 image"
      />
      {/* 404 text */}
      <h2
        className="text-9xl font-bold"
        style={{ color: ConfigColors.primary }}
      >
        404
      </h2>
      {/* 404 description */}
      <p>Oopz property not found</p>
      {/* go home link */}
      <Link href="/">
        <Button color={ConfigColors.primary}>Go Home</Button>
      </Link>
    </div>
  );
};
export default NotFound;

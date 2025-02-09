import { Container } from "@mantine/core";
import Image from "next/image";
// custom 500 page, server side errors

export default function Index() {
  return (
    <Container size="xl" className="mt-24">
      <div className="flex h-full flex-col items-center justify-center space-y-4">
        <div>
          <Image
            src="/images/server.svg"
            width={500}
            height={400}
            alt="property image"
          />
        </div>
        <h1 className="text-primary text-6xl font-black tablet:text-8xl">
          500
        </h1>
        <div className="text-primary/80 font-bold">
          Oopz! Something went wrong please try again in few minutes
        </div>
      </div>
    </Container>
  );
}

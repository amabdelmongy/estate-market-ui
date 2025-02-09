"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TextInput,
  Checkbox,
  PasswordInput,
  Group,
  Button,
} from "@mantine/core";
import { IconMailFast } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import AuthPageConfig from "src/constants/ConfigAuthPage";
import PrimaryButton from "../Buttons/PrimaryButton";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";

// authentication page
// login page

const LoginForm = () => {
  // Submit function function
  function submit(value: any) {
    // Toast notification
    showNotification({
      title: "Success",
      message: "Login as " + value.email.toString(),
      color: "green",
    });
  }

  // Sign in form validations and initialization
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    // Email validation
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="rounded-default flex h-full w-full flex-col-reverse space-x-2 bg-white shadow-lg dark:bg-slate-900 dark:text-white/90 laptop:flex-row">
      {/* left */}
      <div className="basis-1/2">
        <div className="relative flex h-full w-full items-center justify-center">
          <Image
            src={AuthPageConfig.loginImgSrc}
            className="rounded-r-default h-full object-cover brightness-50"
            width={800}
            height={1080}
            alt="auth page image"
          />
          <div className="absolute m-auto text-4xl font-bold text-white">
            {ConfigBasicInfo.name}
          </div>
        </div>
      </div>
      {/* right */}
      <div className="basis-1/2">
        <div className="p-4">
          <div className="my-4 text-center text-2xl font-bold">
            Welcome back to {ConfigBasicInfo.name}
          </div>
          <div className="w-full">
            {/* Sign in section */}
            <form onSubmit={form.onSubmit((values) => submit(values))}>
              {/* Email */}
              <TextInput
                withAsterisk
                required
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
                classNames={{
                  label: "dark:text-white",
                  input: "dark:bg-slate-800 dark:text-white/90",
                }}
              />
              {/* Password */}
              <PasswordInput
                withAsterisk
                placeholder="Password"
                label="Password"
                {...form.getInputProps("password")}
                classNames={{
                  label: "dark:text-white",
                  input: "dark:bg-slate-800 dark:text-white/90",
                }}
              />

              <Checkbox
                mt="md"
                label="I agree to term and conditions"
                {...form.getInputProps("termsOfService", { type: "checkbox" })}
              />

              {/* Submit button */}
              <Group mt="md">
                <PrimaryButton text="Submit" icon={<IconMailFast />} />
              </Group>
            </form>
            {/* Register link */}
            <div>
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="font-bold italic duration-300 hover:underline"
              >
                register
              </Link>{" "}
              here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

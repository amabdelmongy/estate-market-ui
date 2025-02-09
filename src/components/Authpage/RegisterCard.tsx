"use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import Link from "next/link";
import {
  TextInput,
  Checkbox,
  PasswordInput,
  Group,
  Select,
  Button,
} from "@mantine/core";
import { IconMailFast } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import AuthPageConfig from "src/constants/ConfigAuthPage";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";

// authentication page
// register page

const RegisterForm = () => {
  // Submit function function
  function submit(values: any) {
    // Toast notification
    showNotification({
      title: "Success",
      message: "User registered " + values.name.toString(),
      color: "green",
    });
  }

  // Sign in form
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      country: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="rounded-default flex h-full w-full flex-col space-x-2 bg-white shadow-lg dark:bg-slate-900 dark:text-white/90 laptop:flex-row">
      {/* Left */}
      <div className="basis-1/2 p-4">
        <div className="my-4 text-2xl font-bold">
          {/* Title */}
          Welcome back to {ConfigBasicInfo.name}
        </div>
        <div className="w-full">
          {/* Sign up section */}
          <form onSubmit={form.onSubmit((values) => submit(values))}>
            {/* Name */}
            <TextInput
              withAsterisk
              required
              label="Name"
              placeholder="John doe"
              {...form.getInputProps("name")}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />
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
            {/* Re-Password */}
            <PasswordInput
              withAsterisk
              placeholder="Retype-Password"
              label="Retype-Password"
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />

            {/* Country */}
            <Select
              withAsterisk
              label="Country"
              placeholder="Your country"
              data={[
                { value: "sl", label: "Sri Lanka" },
                { value: "nz", label: "New zeland" },
              ]}
              {...form.getInputProps("country")}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />

            <Checkbox
              required
              mt="md"
              label="I agree to term and conditions"
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />

            <Group mt="md">
              <PrimaryButton text="Submit" icon={<IconMailFast />} />
            </Group>
          </form>
          {/* Login link */}
          <div className="m-auto">
            Have an account?{" "}
            <Link
              href="/auth/login"
              className="font-bold italic duration-300 hover:underline"
            >
              login
            </Link>{" "}
            here
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="basis-1/2">
        <div className="relative flex h-screen items-center justify-center">
          <Image
            src={AuthPageConfig.registerImgSrc}
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
    </div>
  );
};

export default RegisterForm;

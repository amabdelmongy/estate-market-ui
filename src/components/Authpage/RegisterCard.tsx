"use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import Link from "next/link";
import {
  TextInput,
  PasswordInput,
  Group,
} from "@mantine/core";
import { IconMailFast } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import AuthPageConfig from "src/constants/ConfigAuthPage";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";
import { authClient } from "@/lib/auth/client";
import { FRONT_URL } from "@/lib/env-config";

// authentication page
// register page

const RegisterForm = () => {

  const router = useRouter();

  const { checkSession } = useUser();


  const [isPending, setIsPending] = React.useState<boolean>(false);
  // Submit function function
  const submit = React.useCallback(
    async (values:any): Promise<void> => {
      setIsPending(true);
      const  response  = await authClient.signUp({
        email: values.email,
        password: values.password,
        name: values.name,
      });

      if (response.error) {
        showNotification({
          title: "Error",
          message: response.error.toString(),
          color: "red",
        });
        setIsPending(false);
        return;
      }
      setIsPending(false);
            showNotification({
      title: "Success",
      message: "Login as " + values.email.toString(),
      color: "green",
    });
      // Refresh the auth state
      await checkSession?.();

      // UserProvider, for this case, will not refresh the router
      // After refresh, GuestGuard will handle the redirect
      router.push(`${FRONT_URL}/auth/login`);
      window.location.href = `${FRONT_URL}/auth/login`;
      router.push(`${FRONT_URL}/auth/login`);
    },
    [checkSession, router]
  );

  // Sign in form
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (/^\S/.test(value) ? null : "Invalid password"),
      name: (value) => (/^\S/.test(value) ? null : "Invalid name")
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
              onBlur={() => form.validateField("name")}
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
              onBlur={() => form.validateField("email")}
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
              onBlur={() => form.validateField("password")}
              classNames={{
                label: "dark:text-white",
                input: "dark:bg-slate-800 dark:text-white/90",
              }}
            />

            <Group mt="md">
              <PrimaryButton text="Submit" icon={<IconMailFast />}
                disabled={!(form.errors && Object.keys(form.errors).length === 0 && form.errors.constructor === Object) && isPending}
                onClick={(values) => submit(form.values)}
              />
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

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TextInput, PasswordInput, Group } from "@mantine/core";
import { IconMailFast } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import AuthPageConfig from "src/constants/ConfigAuthPage";
import PrimaryButton from "../Buttons/PrimaryButton";
import { ConfigBasicInfo } from "src/constants/ConfigBasics";
import { authClient } from "@/lib/auth/client";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";
// authentication page
// login page

const LoginForm = () => {
  const router = useRouter();

  const { checkSession } = useUser();

  const [isPending, setIsPending] = React.useState<boolean>(false);

  const submit = React.useCallback(
    async (values: any): Promise<void> => {
      setIsPending(true);
      const { error } = await authClient.signInWithPassword(values);

      if (error) {
        showNotification({
          title: "Error",
          message: error.toString(),
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
      router.replace("/");
      router.refresh();
    },
    [checkSession, router],
  );

  // Sign in form validations and initialization
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    // Email validation
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (/^\S/.test(value) ? null : "Invalid password"),
    },
  });

  return (
    <div className="rounded-default flex h-full w-full flex-col-reverse space-x-2 bg-white shadow-lg dark:bg-slate-900 dark:text-white/90 tablet:flex-row">
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
      <div className="background-white ml-0 basis-1/2">
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

              {/* Submit button */}
              <Group mt="md">
                <PrimaryButton
                  text="Submit"
                  disabled={
                    !(
                      form.errors &&
                      Object.keys(form.errors).length === 0 &&
                      form.errors.constructor === Object
                    ) && isPending
                  }
                  onClick={(values) => submit(form.values)}
                  icon={<IconMailFast />}
                />
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

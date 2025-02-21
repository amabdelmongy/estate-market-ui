"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { createUser, getUserById, updateUser } from "@/services/user-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z as zod } from "zod";

import { timeZones, type User } from "@/types/user";
import { FRONT_URL } from "@/lib/env-config";

const schema = zod
  .object({
    name: zod.string().min(1, { message: "Name is required" }),
    email: zod.string().min(1, { message: "Email is required" }).email(),
    password: zod
      .string()
      .min(6, { message: "Password should be at least 6 characters" }),
    repeatPassword: zod
      .string()
      .min(6, { message: "Repeat Password should be at least 6 characters" }),
    role: zod.string(),
    lead_campaign: zod.string().min(1).optional(),
    number_of_seats: zod.string().optional(),
    campaign_status: zod.string().optional(),
    timeZone: zod.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });

const schemaUpdate = zod
  .object({
    name: zod.string().min(1, { message: "Name is required" }).optional(),
    email: zod
      .string()
      .min(1, { message: "Email is required" })
      .email()
      .optional(),
    password: zod
      .string()
      .min(6, { message: "Password should be at least 6 characters" })
      .optional(),
    repeatPassword: zod
      .string()
      .min(6, { message: "Repeat Password should be at least 6 characters" })
      .optional(),
    role: zod.string().optional(),
    lead_campaign: zod.string().min(1).optional(),
    number_of_seats: zod.string().optional(),
    campaign_status: zod.string().optional(),
    timeZone: zod.string().optional(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });

type Values = zod.infer<typeof schema>;

export function UserForm(): React.JSX.Element {
  const [userData, setUserData] = React.useState<User | undefined>();
  const router = useRouter();
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const { id } = useParams();
  const [isUpdate, setisUpdate] = React.useState<boolean>(false);
  const NewUser = "new-user";

  React.useEffect(() => {
    if (id !== NewUser) {
      setisUpdate(true);
    }
    if (id && id !== NewUser) {
      const getUserData = async (): Promise<void> => {
        try {
          const data = await getUserById(id as string);
          setUserData(data);
        } catch (error) {
          toast.error(`Error fetching user data:${(error as Error).message}`);
        }
      };
      void getUserData();
    }
  }, [id]);

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(isUpdate ? schemaUpdate : schema),
  });

  React.useEffect(() => {
    if (userData) {
      reset({
        name: userData.name,
        email: userData.email,
        role: userData?.role?.toString() || "",
        lead_campaign: userData.lead_campaign?.toString(),
        number_of_seats: userData.number_of_seats?.toString(),
        campaign_status: userData?.campaign_status || "",
        timeZone: userData?.timeZone || "",
      });
    }
  }, [userData, reset]);

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);
      try {
        if (isUpdate) {
          await updateUser(id as string, {
            email: values.email,
            password: values.password,
            name: values.name,
            role: values.role,
            number_of_seats: values.number_of_seats,
            campaign_status: values.campaign_status,
            timeZone: values.timeZone,
          });
        } else {
          await createUser({
            email: values.email,
            name: values.name,
            password: values.password,
            role: values.role,
            lead_campaign: values.lead_campaign?.split(",").map(Number),
            number_of_seats: values.number_of_seats,
            campaign_status: values.campaign_status,
            timeZone: values.timeZone,
          });
        }
      } catch (err: unknown) {
        const msg = `Failed to ${isUpdate ? "update" : "create"} user with error ${(err as Error).message}`;
        toast.error(msg);
        setError("root", { type: "server", message: msg });
        setIsPending(false);
        return;
      }
      window.location.href = `${FRONT_URL}/dashboard/users`;
      router.push(`${FRONT_URL}/dashboard/users`);
      router.refresh();
    },
    [router, setError, id, isUpdate],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="p-4">
        <CardHeader title={isUpdate ? "Update User" : "Add new User"} />
        <Divider />
        <CardContent>
          <Grid container spacing={3}  className="space-y-4 mt-4">
            <Grid md={6} xs={12}>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <FormControl error={Boolean(errors.name)} fullWidth className="mt-4" >
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput
                      {...field}
                      label="Name"
                      value={field.value || ""}
                      
                    />
                    {errors.name ? (
                      <FormHelperText>{errors.name.message}</FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <FormControl fullWidth  error={Boolean(errors.email)}>
                    <InputLabel>Email address</InputLabel>
                    <OutlinedInput
                      {...field}
                      label="Email address"
                      type="email"
                      value={field.value || ""}
                    />
                    {errors.email ? (
                      <FormHelperText>{errors.email.message}</FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <FormControl fullWidth  error={Boolean(errors.password)}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                      {...field}
                      label="Password"
                      type="password"
                      value={field.value || ""}
                    />
                    {errors.password ? (
                      <FormHelperText>{errors.password.message}</FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <Controller
                control={control}
                name="repeatPassword"
                render={({ field }) => (
                  <FormControl fullWidth  error={Boolean(errors.repeatPassword)}>
                    <InputLabel>Repeat Password</InputLabel>
                    <OutlinedInput
                      {...field}
                      label="Repeat Password"
                      type="password"
                    />
                    {errors.repeatPassword ? (
                      <FormHelperText>
                        {errors.repeatPassword.message}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <Controller
                control={control}
                name="role"
                render={({ field }) => (
                  <FormControl fullWidth  error={Boolean(errors.role)}>
                    <InputLabel>Role</InputLabel>
                    <Select {...field} label="Role" value={field.value || ""}>
                      <MenuItem value="admin">admin</MenuItem>
                      <MenuItem value="broker">broker</MenuItem>
                      <MenuItem value="integration">integration</MenuItem>
                    </Select>
                    {errors.role ? (
                      <FormHelperText>{errors.role.message}</FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <Controller
                control={control}
                name="lead_campaign"
                render={({ field }) => (
                  <FormControl fullWidth  error={Boolean(errors.lead_campaign)}>
                    <InputLabel>Lead Campaign</InputLabel>
                    <OutlinedInput
                      {...field}
                      label="Lead Campaign"
                      value={field.value || ""}
                    />
                    {errors.lead_campaign ? (
                      <FormHelperText>
                        {errors.lead_campaign.message}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <Controller
                control={control}
                name="number_of_seats"
                render={({ field }) => (
                  <FormControl
                    fullWidth 
                    error={Boolean(errors.number_of_seats)}
                  >
                    <InputLabel>Number of Seats</InputLabel>
                    <OutlinedInput
                      {...field}
                      label="Number of Seats"
                      value={field.value || ""}
                    />
                    {errors.number_of_seats ? (
                      <FormHelperText>
                        {errors.number_of_seats.message}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <Controller
                control={control}
                name="campaign_status"
                render={({ field }) => (
                  <FormControl
                    fullWidth 
                    error={Boolean(errors.campaign_status)}
                  >
                    <InputLabel>Campaign Status</InputLabel>
                    <Select
                      {...field}
                      label="Campaign Status"
                      value={field.value || ""}
                    >
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="hold">Hold</MenuItem>
                    </Select>
                    {errors.campaign_status ? (
                      <FormHelperText>
                        {errors.campaign_status.message}
                      </FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
            </Grid>
            <Grid md={6} xs={12}>
              <Controller
                control={control}
                name="timeZone"
                render={({ field }) => (
                  <FormControl fullWidth  error={Boolean(errors.timeZone)}>
                    <InputLabel>Time Zone</InputLabel>
                    <Select
                      {...field}
                      label="Time Zone"
                      value={field.value || ""}
                    >
                      {timeZones.map((timeZone) => (
                        <MenuItem key={timeZone} value={timeZone}>
                          {timeZone}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.timeZone ? (
                      <FormHelperText>{errors.timeZone.message}</FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          {errors.root ? (
            <Alert color="error">{errors.root.message}</Alert>
          ) : null}
          <Button type="submit" variant="contained" disabled={isPending}>
            {isPending ? "Loading..." : isUpdate ? "Update" : "Create"}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

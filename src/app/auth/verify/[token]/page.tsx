"use client"
import React from "react";
import { useParams, useRouter,useSearchParams  } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authClient } from "@/lib/auth/client";
import { showNotification } from "@mantine/notifications";

const VerifyPage = () => {
  const router = useRouter();
//   const searchParams = useSearchParams();
//   const token = searchParams?.get('token');
const params = useParams();
const token = params.token;
React.useEffect(() => {
    if (!token) {
      console.log("token is null");
      return;
    }
    console.log("token",token);

    const verifyToken = async () => {
      try {
        // const response = await fetch(`/api/verify?token=${token}`);
        // const data = await response.json();
        const result = await authClient.verifyToken(token);

        if (result?.error) {
          showNotification({
            title: "Error",
            message: result?.error.toString(),
            color: "red",
          });
          return;
        }
        showNotification({
          title: "Success",
          message: "User Verified successfuly " ,
          color: "green",
        });
        // Refresh the auth state
  
        // UserProvider, for this case, will not refresh the router
        // After refresh, GuestGuard will handle the redirect
        router.replace("/");
        router.refresh();
    
      } catch (error) {
        toast.error("An error occurred during verification.");
      }
    };

    verifyToken();
  }, [router, token]);

  return <div className="my-32">Verifying token...</div>;
};

export default VerifyPage;

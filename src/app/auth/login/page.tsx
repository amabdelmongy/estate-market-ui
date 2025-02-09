import React from "react";
import { Container } from "@mantine/core";
import LoginCard from "../../../components/Authpage/LoginCard";

// user login page
// route: /auth/login

const LoginPage = () => {
  return (
    <Container
      size="xl"
      className="mt-20 flex h-screen items-center justify-center"
    >
      <LoginCard />
    </Container>
  );
};

export default LoginPage;

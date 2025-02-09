import React from "react";
import { Container } from "@mantine/core";
import RegisterCard from "../../../components/Authpage/RegisterCard";

// new user registration page
// route: /auth/register

const RegisterPage = () => {
  return (
    <div className="mt-20">
      <Container size="xl">
        <RegisterCard />
      </Container>
    </div>
  );
};

export default RegisterPage;

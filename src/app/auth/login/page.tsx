import Login from "@/components/views/Auth/Login";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Nara | Login",
  description: "Nara Login Page",
};

const LoginPage = () => {
  return (
    <Suspense>
      <Login></Login>
    </Suspense>
  );
};  

export default LoginPage;

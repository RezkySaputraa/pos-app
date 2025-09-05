"use client";

import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import { cn } from "@/utils/cn";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        // redirect or show success
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Login error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 lg:flex-row lg:gap-20">
      <div className="flex flex-col items-center justify-center w-full gap-10 lg:w-1/3">
        <Image
          src={"/images/general/logo.svg"}
          alt="logo"
          width={180}
          height={180}
        ></Image>
        <Image
          src={"/images/illustration/login.svg"}
          alt="login"
          className="w-2/3 lg:w-full"
          width={1024}
          height={1024}
        ></Image>
      </div>
      <Card>
        <CardBody className="p-8">
          <h2 className="text-2xl font-bold text-danger-500">Login</h2>
          <p className="mt-2 mb-4 text-sm">
            Don{"'"}t have an account? &nbsp;
            <Link
              href="/auth/register"
              className="font-semibold text-danger-400"
            >
              Register here
            </Link>
          </p>
          {error && <div className="text-danger-500 mb-2">{error}</div>}
          <form className="flex w-80 flex-col gap-2" onSubmit={handleSubmit}>
            <Input
              type="email"
              label="Email"
              variant="bordered"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              type={"password"}
              label="Password"
              variant="bordered"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Button color="danger" size="lg" type="submit">
              {"Login"}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;

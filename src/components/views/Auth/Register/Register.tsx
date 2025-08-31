"use client";

import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import { cn } from "@/utils/cn";

const Register = () => {
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
          <h2 className="text-2xl font-bold text-danger-500">Create Account</h2>
          <p className="mt-2 mb-4 text-sm">
            Have an account? &nbsp;
            <Link href="/auth/login" className="font-semibold text-danger-400">
              Login here
            </Link>
          </p>

          <form className={cn("flex w-80 flex-col gap-2")}>
            <Input
              type="text"
              label="Fullname"
              variant="bordered"
              autoComplete="off"
            ></Input>

            <Input
              type="text"
              label="Username"
              variant="bordered"
              autoComplete="off"
            ></Input>

            <Input
              type="email"
              label="Email"
              variant="bordered"
              autoComplete="off"
            ></Input>

            <Input
              type={"password"}
              label="Password"
              variant="bordered"
              autoComplete="off"
            ></Input>

            <Input
              type={"password"}
              label="Password Confirmation"
              variant="bordered"
              autoComplete="off"
            ></Input>

            <Button color="danger" size="lg" type="submit">
              {"Register"}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;

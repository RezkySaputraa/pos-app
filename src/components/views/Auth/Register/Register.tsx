import RegisterForm from "@/components/elements/auth/RegisterForm";
import Image from "next/image";

const Register = () => {
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");
  //   if (password !== passwordConfirm) {
  //     setError("Password confirmation does not match");
  //     return;
  //   }
  //   try {
  //     const res = await fetch("/api/auth/register", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ username, email, password }),
  //     });
  //     const data = await res.json();
  //     if (res.ok) {
  //     } else {
  //       setError(data.message || "Register failed");
  //     }
  //   } catch (err) {
  //     setError("Register error");
  //   }
  // };

  return (
    <div className="flex flex-row bg-white min-h-screen">
      <div className="flex flex-col w-full items-center justify-center p-10 md:p-30 bg-primary-gradient">
        <Image src="/images/general/logo.png" alt="Login Image" width={200} height={200} />
        <RegisterForm />
      </div>
      <div className="relative hidden md:flex justify-center items-center w-full min-w-1/2 min-h-screen h-screen bg-white">
        <Image
          src="/images/illustration/login.png"
          alt="Login Image"
          fill
          style={{ objectFit: "contain" }}
          className="pointer-events-none select-none p-20 "
        />
      </div>
    </div>
  );
};

export default Register;

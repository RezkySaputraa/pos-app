import LoginForm from "@/components/elements/auth/LoginForm";
import Image from "next/image";

const Login = () => {
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     const res = await fetch("/api/auth/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     const data = await res.json();
  //     if (res.ok && data.token) {
  //       localStorage.setItem("token", data.token);
  //       // redirect or show success
  //     } else {
  //       setError(data.message || "Login failed");
  //     }
  //   } catch (err) {
  //     setError("Login error");
  //   }
  // };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full items-center justify-center p-10 md:p-30 min-h-screen">
        <Image src="/images/general/logo.png" alt="Login Image" width={200} height={200} />
        <LoginForm />
      </div>
      <div className="relative hidden md:flex justify-center items-center w-full min-w-1/2 max-w-1/2 min-h-screen bg-bg-primary">
        <Image
          src="/images/illustration/login.png"
          alt="Login Image"
          fill
          style={{ objectFit: "contain" }}
          className="pointer-events-none select-none p-20"
        />
      </div>
    </div>
  );
};

export default Login;

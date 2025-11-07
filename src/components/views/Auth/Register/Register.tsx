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
    <div className="flex flex-col items-center justify-center w-full gap-10 lg:flex-row lg:gap-20">
      <div className="flex py-20 items-start justify-center w-xl h-auto gap-10 bg-white rounded-2xl">
        <div className="flex flex-col items-center justify-center w-full gap-5 ">
          <h1 className="text-6xl font-bold items-center">Nara</h1>
          <div className="justify-center">
            <h3 className="text-3xl font-bold items-center">Masuk Ke Dashboard</h3>
            <h3 className="text-2xl font-bold items-center">Selamat Datang</h3>
          </div>
          <RegisterForm />
        </div>
      </div>

    </div>
  );
};

export default Register;

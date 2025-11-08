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
    <div>
      <div className="flex py-15 justify-center w-full min-w-lg max-w-xl h-auto bg-white rounded-2xl px-15">
        <div className="flex flex-col justify-center gap-5 w-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Daftar</h3>
            <h3 className="text-xl font-bold py-1">Buat akun untuk memulai perjalanan datamu.</h3>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;

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
    </div>
  );
};

export default Register;

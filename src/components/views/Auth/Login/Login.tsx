import LoginForm from "@/components/elements/auth/LoginForm";

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
    <div className="flex flex-col items-center justify-center w-full gap-10 lg:flex-row lg:gap-20">

      <div className="flex py-20 items-start justify-center w-xl h-auto gap-10 bg-white rounded-2xl">
        <div className="flex flex-col items-center justify-center w-full gap-5 ">
          <h1 className="text-6xl font-bold items-center">Nara</h1>
          <div className="justify-center">
            <h3 className="text-3xl font-bold items-center">Masuk Ke Dashboard</h3>
            <h3 className="text-2xl font-bold items-center">Selamat Datang</h3>
          </div>
        <LoginForm></LoginForm>
        </div>
      </div>
    
    </div>
  );
};

export default Login;

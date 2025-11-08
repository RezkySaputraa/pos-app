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
    <div>
      <div className="flex justify-center py-15 w-full min-w-xl h-auto bg-white rounded-2xl px-15">
        <div className="flex flex-col justify-center gap-5 w-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold ">Masuk Ke Dashboard</h3>
            <h3 className="text-xl font-bold py-1">Selamat Datang</h3>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

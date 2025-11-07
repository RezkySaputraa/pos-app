const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="max-w-screen">
        {children}
      </section>
    </>
  );
};

export default AuthLayout;

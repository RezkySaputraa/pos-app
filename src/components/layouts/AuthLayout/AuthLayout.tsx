const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="p-6 max-w-screen">
        {children}
      </section>
    </>
  );
};

export default AuthLayout;

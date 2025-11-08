import AuthLayout from "@/components/layouts/AuthLayout";

export default function AuthLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 bg-primary-gradient ">
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
}

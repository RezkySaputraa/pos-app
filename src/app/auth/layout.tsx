import AuthLayout from "@/components/layouts/AuthLayout";

export default function AuthLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-primary-gradient ">
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
}

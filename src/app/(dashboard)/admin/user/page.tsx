import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nara | User",
  description: "User management page",
};

export default function User() {
  return (
  <div>
    <h1 className="text-2xl font-bold mb-4">User Management</h1>
    <p>Manage your users here.</p>
  </div>
  );
}
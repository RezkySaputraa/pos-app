import { Button } from "@heroui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Rezky Saputra Acara",
};
export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl bg-green-500 text-center">Dashboard</h1>
      <Button variant="bordered">Test</Button>
    </>
  );
}

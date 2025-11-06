import Home from "@/components/views/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nara | Home",
  description: "Nara Home",
};
export default function HomePage() {
  return (
    <>
      <Home></Home>
    </>
  );
}

import Navbar from "@/components/elements/Home/Navbar";
import Hero from "@/components/elements/Home/Hero";
import HomeLayout from "@/components/layouts/HomeLayout/index";
import Card from "@/components/elements/Home/Card";

const Home = () => {
  return (
    <>
      <HomeLayout>
        <Navbar></Navbar>
        <Hero></Hero>
        <Card></Card>
      </HomeLayout>
    </>
  );
};

export default Home;

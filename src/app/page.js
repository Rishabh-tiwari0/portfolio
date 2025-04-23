import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import RecentPost from "@/components/recent/Recentpost";

export default function Home() {
  return (
    <div className="cont">
      <Navbar />
      <Hero />
      <RecentPost />
    </div>
  );
}

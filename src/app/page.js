import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import RecentPost from "@/components/recent/Recentpost";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="cont" style={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <RecentPost />
      {/* Featured work */}

      <Footer />
    </div>
  );
}

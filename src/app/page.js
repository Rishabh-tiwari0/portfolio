import Hero from "@/components/Hero/Hero";
import RecentPost from "@/components/recent/Recentpost";
import FeaturedWorks from "@/components/Features/FeaturedWorks";

export default function Home() {
  return (
    <div className="cont" style={{ overflowX: "hidden", maxWidth: "100vw" }}>
      <Hero />
      <RecentPost />
      {/* Featured work */}
      <FeaturedWorks />
    </div>
  );
}

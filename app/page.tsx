import Intro from "@/app/components/Intro/Intro";
import Navbar from "@/app/components/Navbar/Navbar";

// sections
import HomeSection from "@/app/sections/HomeSection/HomeSection";

export default function Home() {
  return (
      <>
          <Intro/>

          <main className="main-content-container">
              <Navbar/>
              <HomeSection/>
          </main>
      </>
  );
}

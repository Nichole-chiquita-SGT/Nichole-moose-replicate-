import Intro from "@/app/components/Intro/Intro";
import Navbar from "@/app/components/Navbar/Navbar";

// sections
import HomeSection from "@/app/sections/HomeSection/HomeSection";
import AboutUsSection from "@/app/sections/AboutUsSection/AboutUsSection";
import KeyFeatures from "@/app/sections/KeyFeatures/KeyFeatures";

export default function Home() {
  return (
      <>
          {/*<img src="/navbar.png" style={{*/}
          {/*    width: "100%",*/}
          {/*    height: "100%",*/}
          {/*    opacity: 0.5,*/}
          {/*    position: "fixed",*/}
          {/*    zIndex: 9999,*/}
          {/*}}/>*/}
          <Intro/>

          <main className="main-content-container">
              <Navbar/>
              {/*<HomeSection/>*/}
              <AboutUsSection id="about-us"/>
              <KeyFeatures/>
          </main>
      </>
  );
}

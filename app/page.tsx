import Intro from "@/app/components/Intro/Intro";
import Navbar from "@/app/components/Navbar/Navbar";

// sections
import HomeSection from "@/app/sections/HomeSection/HomeSection";
import AboutUsSection from "@/app/sections/AboutUsSection/AboutUsSection";
import KeyFeatures from "@/app/sections/KeyFeatures/KeyFeatures";
import AdditionalFeaturesSection from "@/app/sections/AdditionalFeaturesSection/AdditionalFeaturesSection";
import BenefitsSection from "@/app/sections/BenefitsSection/BenefitsSection";
import FAQSection from "@/app/sections/FAQSection/FAQSection";
import CTASection from "@/app/sections/CTASection/CTASection";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
      <>
          {/*<img src="/grid.png" style={{*/}
          {/*    width: "100%",*/}
          {/*    height: "100%",*/}
          {/*    opacity: 0.5,*/}
          {/*    position: "fixed",*/}
          {/*    zIndex: 9999,*/}
          {/*}}/>*/}
          <Intro/>

          <main className="main-content-container">
              <Navbar/>
              <HomeSection/>
              <AboutUsSection id="about-us"/>
              <KeyFeatures/>
              <AdditionalFeaturesSection/>
              <BenefitsSection/>
              <FAQSection/>
              <CTASection/>
              <Footer/>
          </main>

      </>
  );
}

import React from "react";
import Navbar from "../navbar/Navbar";
import HeroSection from "../herosection/HeroSection";
import AboutUs from "../about/AboutUs";
import ChooseUs from "../chooseUs/ChooseUs";
import Testimonials from "../testimonials/Testimonials";
import Footer from "../footer/Footer";
import AdSection from "../adsection/AdSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <AdSection/>
      <ChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;

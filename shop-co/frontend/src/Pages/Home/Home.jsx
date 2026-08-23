import AnnouncementBar from "../../Components/AnnouncementBar/AnnouncementBar";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Zero/Hero";
import BrandBar from "../../Components/BrandBar/BrandBar";
import ProductSection from "../../Components/ProductSection/ProductSection";
import TopSelling from "../../Components/TopSelling/TopSelling";
import DressStyles from "../../Components/DressStyles/DressStyles";
import Reviews from "../../Components/Reviews/Reviews";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <BrandBar />
      <ProductSection />
      <TopSelling />
      <DressStyles />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;

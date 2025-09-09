import './App.css'
import HeroSection from "./modules/HeroSection";
import AboutUs from "./modules/AboutUs";
import OurProjects from "./modules/OurProjects";
import GardenTreatment from "./modules/GardenTreatment";
import Landscape from "./modules/Landscape";
import Reviews from "./modules/Reviews";
import Footer from "./modules/Footer";


function App() {

  return (
    <div>
      <HeroSection />
      <AboutUs />
      <OurProjects />
      <GardenTreatment />
      <Landscape />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App

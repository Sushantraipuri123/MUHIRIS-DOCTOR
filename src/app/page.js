import HeroSection from "@/components/home/HeroSection";
import HomeAbout from "@/components/home/HomeAbout";
import Integrity from "@/components/home/Integrity";
import Specialty from "@/components/home/Specialty";
import  "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <>
    
      <HeroSection/>
   <div className="container my-5">
    <HomeAbout/>
   </div>
   <Specialty/>
   <Integrity/>
    </>
  );
}

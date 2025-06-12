import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import FloatingButtons from "@/components/FloatingButton";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";



export default function Home() {



  return (
    <>
    



    <div className="min-h-screen  relative overflow-hidden">
      {/* Animated background elements */}
 
  
<div className="relative z-10  mx-auto gap-36">

<HeroSection/>

<AboutSection/>

<EventsSection/>
<ProjectsSection/>
<GallerySection/>
<FloatingButtons/>
</div>




      </div>
      </>
  );
}

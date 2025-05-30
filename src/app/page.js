import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import FloatingButtons from "@/components/FloatingButton";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

import { motion } from "framer-motion";


export default function Home() {
  return (
    <>
    



    <div className="min-h-screen  relative overflow-hidden">
      {/* Animated background elements */}
 
  
<div classname="relative z-10 max-w-6xl mx-auto px-6 py-12 gap-36">

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

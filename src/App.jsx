import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import projects from "./data/projects";
import Reviews from "./components/Reviews";
import AboutModal from "./components/AboutModal";
import SocialsModal from "./components/SocialsModal";
export default function App(){
  const [contactOpen, setContactOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);
  const openSocials = () => setSocialsOpen(true);
  const closeSocials = () => setSocialsOpen(false);
    const openAbout = () => setAboutOpen(true);
  const closeAbout = () => setAboutOpen(false);
  const handleOpenProject = (p) => {
    // open project demo in new tab
    window.open(p.url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white transition-all duration-500">

<Navbar onContact={openSocials} onAbout={openAbout} />


      <main className="flex-1">
        <Hero />
        <Projects 
          projects={projects} 
          onOpenProject={handleOpenProject} 
          onContact={openContact} 
        />

        {/* Add Reviews here */}
        <Reviews />
      </main>

      <Footer />
      <ContactModal open={contactOpen} onClose={closeContact} />
      <SocialsModal open={socialsOpen} onClose={closeSocials} />
      <AboutModal open={aboutOpen} onClose={closeAbout} />

    </div>
  )
}

"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { ResumeSection } from "./ResumeSection";
import { SkillsSection } from "./SkillsSection";

export default function MainPage() {
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: -(e.clientY - rect.top - rect.height / 2) / 25,
      y: (e.clientX - rect.left - rect.width / 2) / 25,
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  if (!mounted) return null;

  return (
    <main className="min-h-screen text-white relative bg-gradient-to-br from-[#12001f] via-black to-[#1a0033] stars-big">
      <Toaster position="top-right" />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {/* Hero */}
        <HeroSection
          tilt={tilt}
          handleMouseMove={handleMouseMove}
          resetTilt={resetTilt}
        />

        {/* Skills */}
        <SkillsSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Resume */}
        <ResumeSection />

        {/* Contact */}
        <ContactSection />
      </div>
    </main>
  );
}

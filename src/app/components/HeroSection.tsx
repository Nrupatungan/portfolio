import Image from "next/image";
import type React from "react";
import { SiGithub, SiLeetcode, SiLinkedin, SiX } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

export interface HeroSectionProps {
  tilt: { x: number; y: number };
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  resetTilt: () => void;
}

export const HeroSection = ({
  tilt,
  handleMouseMove,
  resetTilt,
}: HeroSectionProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-12 md:-ml-4">
      {/* Left Content */}
      <div className="space-y-8 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold min-h-[72px]">
          Dinesh Sake |{" "}
          <span className="text-purple-400">
            <Typewriter
              words={[
                "Full Stack Developer",
                "DevOps & CI/CD Engineer",
                "AWS Cloud Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-gray-400 mt-12 leading-relaxed">
          I build modern, scalable full-stack web applications with a strong
          focus on clean UI, robust backend architecture, and efficient DevOps
          workflows. Passionate about shipping production-ready solutions using
          modern web technologies and cloud platforms.
        </p>

        {/* Social Icons */}
        <div className="flex gap-7 pt-2">
          <a
            href="https://github.com/Nrupatungan"
            target="_blank"
            className="hover:text-purple-400 transition"
            rel="noopener"
          >
            <SiGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/dinesh-sake-577471231/"
            target="_blank"
            className="hover:text-purple-400 transition"
            rel="noopener"
          >
            <SiLinkedin size={28} />
          </a>

          <a
            href="https://leetcode.com/u/4KfAC4Uz2f/"
            target="_blank"
            className="hover:text-purple-400 transition"
            rel="noopener"
          >
            <SiLeetcode size={28} />
          </a>

          <a
            href="https://x.com/dineshlikesCode"
            target="_blank"
            className="hover:text-purple-400 transition"
            rel="noopener"
          >
            <SiX size={28} />
          </a>
        </div>
      </div>

      {/* Desk Image */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="w-[230px] h-[220px] md:w-[350px] md:h-[310px] mt-8 md:mt-0 md:ml-12 perspective-[1000px]"
      >
        <Image
          src="/desk.png"
          alt="Desk"
          className="w-full h-full object-cover rounded-xl transition-transform duration-200 cursor-pointer"
          width={350} // Base width for aspect ratio
              height={310}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        />
      </div>
    </section>
  );
};

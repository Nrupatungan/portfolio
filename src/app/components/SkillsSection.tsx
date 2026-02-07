import { motion } from "framer-motion";
import {
  SiAmazonwebservices,
  SiDocker,
  SiGithubactions,
  SiJavascript,
  SiLinux,
  SiMaterialdesign,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiResend,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Resend", icon: SiResend, color: "#F0F0F0" },
  { name: "MaterialUI", icon: SiMaterialdesign, color: "#0081CB" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Terraform", icon: SiTerraform, color: "#623CE4" },
  { name: "Github Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
];

export const SkillsSection = () => {
  return (
    <section>
      <h2 className="title-halo text-3xl mb-10">Skills</h2>

      <div className="overflow-hidden py-8">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 transition hover:scale-110"
              >
                <Icon
                  size={40}
                  color={skill.color}
                  className="drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]
                      hover:drop-shadow-[0_0_16px_rgba(168,85,247,1)]
                      transition"
                />
                <span className="text-xs">{skill.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section>
      <h2 className="title-halo text-3xl mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ---------- Project 1 : Food Delivery App ---------- */}
        <motion.div
          whileHover={{ y: -14 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="rounded-2xl border border-purple-500/40 hover:border-purple-400 transition-all
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] overflow-hidden cursor-pointer
                    flex flex-col justify-between bg-black/40"
        >
          {/* Project Image */}
          <div className="w-full h-[200px]  overflow-hidden">
            <Image
              src="/lumen-ai.png" // 👉 replace image later
              alt="Lumen AI"
              width={400} // Base width for aspect ratio
              height={110}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Lumen - AI Knowledge Base Manager
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Lumen AI is an AI-powered document intelligence engine built on
                Clean Architecture and Domain-Driven Design. The platform
                leverages vector embeddings for precise semantic retrieval and
                utilizes an asynchronous, event-driven backend powered by AWS
                SQS to decouple heavy ingestion workloads from the user-facing
                API. To ensure enterprise-grade reliability, the entire
                infrastructure—from VPCs to ECS Fargate clusters—is defined as
                code via Terraform, ensuring 100% reproducible environments and
                secure, containerized deployments.
              </p>
            </div>

            {/* Live Link */}
            <a
              href="https://app.lumen-ai.space/"
              target="_blank"
              className="mt-8 text-sm text-purple-400 hover:underline flex items-center gap-2"
              rel="noopener"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,1)]"></span>
              </span>
              Live Preview →
            </a>
          </div>
        </motion.div>

        {/* ---------- Project 2 : Local Service App ---------- */}
        <motion.div
          whileHover={{ y: -14 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="rounded-2xl border border-purple-500/40 hover:border-purple-400 transition-all
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] overflow-hidden cursor-pointer 
                    flex flex-col justify-between bg-black/40"
        >
          {/* Project Image */}
          <div className="w-full h-[200px] overflow-hidden">
            <Image
              src="/zenith-editor.png" // 👉 replace image later
              alt="Zenith Editor"
              width={400} // Base width for aspect ratio
              height={110}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Zenith Editor - AI Image Editor
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Zenith Editor is a robust web application that leverages a
                modern stack (Next.js, Prisma, and ImageKit) to handle complex
                relational data and high-resolution media. The platform’s
                architecture prioritizes security and performance, utilizing
                Auth.js for Role-Based Access Control (RBAC) and AWS S3 with
                granular IAM policies for secure, low-latency storage. By
                implementing an event-driven transactional email system and a
                strictly typed schema, Zenith Editor demonstrates a
                production-ready approach to SaaS development.
              </p>
            </div>

            {/* Live Link */}
            <a
              href="https://zenith-editor.vercel.app/"
              target="_blank"
              className="mt-8 text-sm text-purple-400 hover:underline flex items-center gap-2"
              rel="noopener"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,1)]"></span>
              </span>
              Live Preview →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

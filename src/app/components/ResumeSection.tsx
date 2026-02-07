import Image from "next/image";

export const ResumeSection = () => {
  return (
    <section>
      <h2 className="title-halo text-3xl mb-10">Resume</h2>

      {/* Resume Image Preview */}
      <div
        className="w-full max-w-2xl max-h-96 mx-auto mb-8 rounded-2xl overflow-hidden
              border border-purple-500/40
              shadow-[0_0_25px_rgba(168,85,247,0.35)]"
      >
        <Image
          src="/My_resume.png"
          alt="Resume Preview"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/My_Resume.pdf"
          target="_blank"
          className="px-10 py-3 rounded-xl border border-purple-500/50 text-purple-400
              hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]
              transition-all text-center"
          rel="noopener"
        >
          View Resume
        </a>

        <a
          href="/My_Resume.pdf"
          download
          className="px-10 py-3 rounded-xl border border-purple-500/50 text-purple-400
              hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]
              transition-all text-center"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

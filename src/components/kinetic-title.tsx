"use client";

import { motion } from "framer-motion";

// ─── WRAPPER COMPONENT AVEC SÉLECTEUR ────────────────────────
export default function KineticTitle() {
  return (
    <>
      <div className="relative overflow-hidden w-screen -mx-5 sm:-mx-10 md:-mx-16 lg:-mx-20">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <h1 className="sliding-title font-extrabold text-[2rem] sm:text-[4rem] lg:text-[4rem] leading-none">
                ARCHITECT <span className="text-xl">of</span> DIGITAL SOLUTIONS
              </h1>
              <span className="text-8xl text-[#6dd5ed]/30 mx-12">•</span>
              <h1 className="sliding-title font-extrabold text-[2rem] sm:text-[4rem] lg:text-[4rem] leading-none">
                ARCHITECT <span className="text-xl">of</span> DIGITAL SOLUTIONS
              </h1>
              <span className="text-8xl text-[#6dd5ed]/30 mx-12">•</span>
              <h1 className="sliding-title font-extrabold text-[2rem] sm:text-[4rem] lg:text-[4rem] leading-none">
                Builder <span className="text-xl">de</span> PRODUITS DIGITAUX
              </h1>
              <span className="text-8xl text-[#6dd5ed]/30 mx-12">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .sliding-title {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f0f0f0 40%,
            #6dd5ed 80%,
            #2193b0 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
}

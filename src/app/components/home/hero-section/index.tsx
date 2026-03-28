"use client"; // Required for Framer Motion

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const name = "Tiran Jayasekara";

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -90,
    y: 20,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 4,
    },
  },
};

// ... keep imports and variants the same

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-12">
      <div className="container mx-auto px-4">
        {/* Using grid ensures the text and image stay in their respective halves on desktop */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col gap-6 text-center lg:text-left min-w-0"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                <span className="flex items-center justify-center lg:justify-start gap-4">
                  Hello
                  <motion.div
                    animate={{ rotate: [0, 20, 0, 20, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatDelay: 1,
                    }}
                    className="inline-block"
                  >
                    <Image
                      src={getImgPath("/images/home/banner/wave-icon.svg")}
                      alt="wave-icon"
                      width={62}
                      height={62}
                      className="w-10 h-10 lg:w-16 lg:h-16"
                    />
                  </motion.div>
                  I'm{" "}
                </span>
                <span className="block">
                  <motion.span
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
           
                    className="inline-flex flex-wrap justify-center lg:justify-start text-slate-800 perspective:1000px"
                  >
                    {name.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="inline-block whitespace-nowrap">
                        {word.split("").map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            variants={letterVariants}
                            className="inline-block origin-bottom transform-style-preserve-3d"
                          >
                            {char}
                          </motion.span>
                        ))}
                        {/* Adds the space back between words */}
                        {"\u00A0"}
                      </span>
                    ))}
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* ... rest of your paragraph code remains the same */}
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I'm a{" "}
              <span className="text-rose-400 underline decoration-rose-200">
                Software Engineer
              </span>{" "}
              based in Sri Lanka, specializing in developing scalable applications and
              high-performance systems using clean code principles and modern technologies.
            </p>
          </motion.div>

          {/* ... image section remains the same */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl max-w-[400px] lg:max-w-none mx-auto">
              <Image
                src={getImgPath("/images/home/banner/profile.jpg")}
                alt="Tiran Jayasekara Profile"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

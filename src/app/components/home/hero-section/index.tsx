"use client"; // Required for Framer Motion

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
    { label: "Experience", value: "4 Y." },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "28" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} // Start invisible and 50px to the left
            animate={{ opacity: 1, x: 0 }}    // Move to original position
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
            className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                <span className="flex items-center justify-center lg:justify-start gap-4">
                  Hello
                  <motion.div 
                    animate={{ rotate: [0, 20, 0, 20, 0] }} // Waving animation
                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
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
                </span>
                I'm <span className="text-slate-900">Srimal Herath</span>
              </h1>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I'm a{" "}
              <span className="text-rose-400 underline decoration-rose-200">
                Senior Software Engineer
              </span>{" "}
              based in Kandy, Sri Lanka. I specialize in architecting
              high-performance ERP systems and scalable full-stack applications
              through clean code and modern engineering practices.
            </p>

            {/* Stats Row */}
            {/* <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }} // Appears slightly later
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#f5f0ff] p-4 rounded-xl text-center">
                  <div className="text-xl md:text-3xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1 uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }} // Start smaller and to the right
            animate={{ opacity: 1, scale: 1, x: 0 }}    // Snap into place
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl max-w-[400px] lg:max-w-none mx-auto">
              <Image
                src={getImgPath("/images/home/banner/profile3.jpeg")}
                alt="Srimal Herath Profile"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-1 opacity-50 hidden lg:block"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
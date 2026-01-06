"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const LatestWork = () => {
  // Updated with your specific project data
  const projects = [
    {
      title: "IManage ERP System",
      client: "Iteq Solutions pvt Ltd",
      slug: "imanage-erp",
      image: "/images/work/1.png", // Replace with your actual paths
      tech: "Next.js, NestJS, MySQL"
    },
    {
      title: "Hive ERP System",
      client: "Iteq Solutions pvt Ltd",
      slug: "hive-erp",
      image: "/images/work/2.png",
      tech: "Vue.js, Node.js, MySQL"
    },
    {
      title: "Ventura ERP System",
      client: "Inspiring Future Solutions",
      slug: "ventura-erp",
      image: "/images/work/3.png",
      tech: "Angular, .NET, MongoDB"
    },
    {
      title: "ABC Bank Management",
      client: "Personal Project",
      slug: "abc-bank",
      image: "/images/work/4.jpg",
      tech: "React, Spring Boot, MySQL"
    }
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            {/* Header Motion */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
              <p className="text-xl text-orange-500 font-medium">( 04 )</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 xl:gap-y-16">
              {projects.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="group flex flex-col gap-3 xl:gap-6"
                >
                  {/* Image Container with Hover Effect */}
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={getImgPath(value.image)}
                        alt={value.title}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-[300px] xl:h-[400px] object-cover"
                      />
                    </motion.div>
                    
                    {/* Hover Overlay */}
                    <Link
                      href={`/projects/${value.slug}`}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="bg-orange-600 rounded-full p-6 shadow-xl"
                      >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </motion.div>
                    </Link>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <Link href={`/projects/${value.slug}`}>
                        <h5 className="text-2xl font-bold group-hover:text-orange-600 transition-colors">
                          {value.title}
                        </h5>
                      </Link>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="cursor-pointer"
                      >
                        <Image
                          src={getImgPath("/images/icon/right-arrow-icon.svg")}
                          alt="arrow"
                          width={24}
                          height={24}
                        />
                      </motion.div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
                        {value.tech}
                      </span>
                      <span className="text-slate-400">|</span>
                      <p className="text-slate-600 font-medium">Client: {value.client}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
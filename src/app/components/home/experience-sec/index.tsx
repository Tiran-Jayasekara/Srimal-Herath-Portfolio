"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Software Engineer",
      company: "Hash Baze",
      type: "Full-time",
      description:
        "Building scalable full-stack applications and distributed systems using modern technologies. Designing and implementing microservices with NestJS and Express, and developing performant frontends with React and Next.js. Working with PostgreSQL and MongoDB, and deploying cloud-native solutions using AWS (S3, CloudFront, API Gateway). Managing infrastructure with Terraform and implementing CI/CD pipelines using GitHub Actions."
    },
    {
      year: "2024",
      title: "Associate Software Engineer",
      company: "Hash Baze",
      type: "Full-time",
      description:
        "Developed and maintained high-performance web applications and backend services. Built RESTful APIs, optimized database queries, and improved system scalability. Gained hands-on experience with microservices architecture, monorepo structures, and cloud deployments."
    },
    {
      year: "2023",
      title: "Freelance Software Engineer",
      company: "Peer Wave",
      type: "Part-time",
      description:
        "Delivered full-stack web applications using the MERN stack. Handled complete project lifecycles including development, deployment, and maintenance. Set up CI/CD pipelines and deployed applications using Hostinger and cloud environments."
    },
    {
      year: "2022",
      title: "Intern Software Developer",
      company: "Elzian Agro",
      type: "Internship",
      description:
        "Worked as a full-stack developer using React, Next.js, Node.js, Express, MongoDB, and SQL. Built internal tools and gained strong fundamentals in application development and system design."
    }
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section>
      <div className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
            <p className="text-xl text-primary font-medium">( 02 )</p>
          </motion.div>

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 xl:gap-8 items-start relative"
              >
                <div className="md:col-span-3">
                  <h3 className="font-bold text-xl mb-1 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-medium text-slate-600">{exp.title}</h4>
                </div>

                <div className="hidden md:flex md:col-span-1 justify-center relative self-stretch">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-px bg-slate-200 absolute top-4 left-1/2 -translate-x-1/2" 
                  />
                  <div className={`z-10 w-4 h-4 rounded-full mt-2 border-2 bg-white flex items-center justify-center transition-colors duration-500 ${index === 0 ? 'border-primary' : 'border-black'}`}>
                    {index === 0 && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                  </div>
                </div>
                <div className="md:col-span-8 pl-8 md:pl-0">
                  <div className="mb-3">
                    <h5 className="text-2xl text-black font-semibold">{exp.company}</h5>
                    <span className="inline-block px-3 py-1 mt-2 text-xs font-bold uppercase tracking-wider bg-softGray rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <p className="leading-relaxed text-slate-700 text-lg max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
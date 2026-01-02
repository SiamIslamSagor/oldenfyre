"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyOldenfyre() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Lifetime Warranty",
      description:
        "Every Oldenfyre lighter is backed by our lifetime guarantee. We stand behind the quality of our craftsmanship.",
      icon: "🛡️",
      delay: 0,
    },
    {
      title: "Precision Engineering",
      description:
        "Each lighter is engineered to perfection with tolerances measured in microns for flawless performance.",
      icon: "⚙️",
      delay: 0.1,
    },
    {
      title: "Sustainable Materials",
      description:
        "We source only the finest sustainable materials, ensuring your lighter is both beautiful and responsible.",
      icon: "🌿",
      delay: 0.2,
    },
    {
      title: "Artisan Crafted",
      description:
        "Every piece is hand-finished by our master craftsmen, making each lighter uniquely yours.",
      icon: "🔨",
      delay: 0.3,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="section relative bg-black">
      <div className="grain" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-linear-radial from-zinc-800 to-transparent blur-3xl opacity-5" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-linear-radial from-orange-500 to-transparent blur-3xl opacity-5" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why</span>
            <span className="block gold-text">Oldenfyre</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            We don't just create lighters—we craft heirlooms that tell your
            story for generations to come.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card card group h-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className="mt-6 h-1 w-full bg-linear-to-r from-transparent via-zinc-700 to-transparent group-hover:via-orange-500 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="flex items-center gap-2 text-zinc-500 mb-4">
              <span className="text-sm">
                Join thousands of satisfied customers
              </span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-900 flex items-center justify-center text-xs text-zinc-400"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <button className="btn-primary">Experience the Difference</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featuredLighters = [
  {
    id: 1,
    name: "The Classic",
    description: "Timeless design meets modern precision",
    price: "$89",
    features: ["Laser engraved", "Windproof", "Lifetime warranty"],
  },
  {
    id: 2,
    name: "The Sovereign",
    description: "Luxury redefined with gold accents",
    price: "$149",
    features: ["24k gold details", "Custom engraving", "Premium case"],
  },
  {
    id: 3,
    name: "The Wanderer",
    description: "Built for adventure, designed for life",
    price: "$109",
    features: ["Rugged finish", "Water resistant", "Compact design"],
  },
  {
    id: 4,
    name: "The Executive",
    description: "Sophistication in every detail",
    price: "$129",
    features: ["Sleek profile", "Personalized monogram", "Gift box"],
  },
];

export default function FeaturedLighters() {
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
        ".lighter-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
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

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="section relative bg-black">
      <div className="grain" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured</span>
            <span className="block gold-text">Collection</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium lighters, each crafted
            with precision and designed to make a statement.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredLighters.map(lighter => (
            <motion.div
              key={lighter.id}
              className="lighter-card card group cursor-pointer metallic-shine"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-zinc-800">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-linear-radial from-zinc-600 to-zinc-800 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-linear-radial from-zinc-500 to-zinc-700 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-zinc-400" />
                      </div>
                    </div>
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-linear-radial from-orange-500 to-transparent blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  </div>
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {lighter.name}
              </h3>
              <p className="text-zinc-400 text-sm mb-4">
                {lighter.description}
              </p>

              <ul className="space-y-2 mb-6">
                {lighter.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-zinc-500 text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold gold-text">
                  {lighter.price}
                </span>
                <button className="text-orange-500 hover:text-orange-400 transition-colors text-sm font-medium">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">View Full Collection</button>
        </div>
      </div>
    </section>
  );
}

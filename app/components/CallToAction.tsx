"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const flameRef = useRef<HTMLDivElement>(null);

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

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Flame animation
      gsap.to(flameRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section relative bg-linear-to-b from-zinc-950 to-black"
    >
      <div className="grain" />

      {/* Background flame effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={flameRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-linear-radial from-orange-500 via-orange-600 to-transparent blur-3xl opacity-20"
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-white">Ready to</span>
            <span className="block gold-text">Ignite Your Legacy?</span>
          </h2>

          <div
            ref={contentRef}
            className="text-xl md:text-2xl text-zinc-300 mb-12 leading-relaxed"
          >
            <p className="mb-6">
              Join thousands who have discovered the perfect blend of tradition
              and innovation. Each Oldenfyre lighter is more than a tool—it's a
              statement of sophistication.
            </p>
            <p className="text-zinc-400 text-lg">
              Limited edition designs available. Exclusive lifetime warranty
              included.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              ref={buttonRef}
              className="btn-primary text-lg px-8 py-4 glow"
            >
              Start Your Collection
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Explore Gift Options
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 flex items-center justify-center gap-8 text-zinc-500"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-zinc-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-sm">Unique Designs</div>
            </div>
            <div className="w-px h-12 bg-zinc-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-sm">Lifetime Warranty</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

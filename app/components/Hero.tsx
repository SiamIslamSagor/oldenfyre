"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const flameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation on page load
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.4,
            ease: "power2.out",
          }
        );
      }

      // Flame animation
      gsap.to(flameRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background linear */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-zinc-900 to-black z-0" />

      {/* Grain texture overlay */}
      <div className="grain" />

      {/* Animated flame accent */}
      <div
        ref={flameRef}
        className="absolute top-1/2 right-10 w-32 h-32 md:w-48 md:h-48 opacity-20 z-0"
      >
        <div className="w-full h-full rounded-full bg-linear-radial from-orange-500 to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Ignite the</span>
            <span className="block gold-text">Legacy</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the art of fire with our handcrafted vintage-style
            lighters. Each piece tells a story through laser-engraved precision
            and timeless design.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary glow">Explore Collection</button>
            <button className="btn-secondary">Customize Yours</button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zinc-600 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

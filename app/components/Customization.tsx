"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Customization() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

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
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Showcase parallax effect
      gsap.to(showcaseRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating elements animation
      const floatingElements = floatingElementsRef.current?.children;
      if (floatingElements) {
        Array.from(floatingElements).forEach((element, index) => {
          gsap.to(element, {
            y: -20 - index * 5,
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.2,
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const customizationOptions = [
    {
      title: "Laser Engraving",
      description:
        "Personalize with custom designs, names, or messages using our precision laser technology.",
      icon: "✨",
    },
    {
      title: "Material Selection",
      description:
        "Choose from premium metals, finishes, and textures to match your style.",
      icon: "🎨",
    },
    {
      title: "Custom Packaging",
      description:
        "Elevate your gift with bespoke packaging and presentation options.",
      icon: "🎁",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section relative bg-zinc-950 overflow-hidden"
    >
      <div className="grain" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-linear-radial from-orange-500 to-transparent blur-3xl opacity-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-linear-radial from-zinc-700 to-transparent blur-3xl opacity-10" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Make It</span>
              <span className="block gold-text">Uniquely Yours</span>
            </h2>

            <div ref={contentRef} className="space-y-8">
              {customizationOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl">{option.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {option.title}
                    </h3>
                    <p className="text-zinc-400">{option.description}</p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-4">
                <button className="btn-primary">Start Customizing</button>
              </div>
            </div>
          </div>

          <div ref={showcaseRef} className="relative">
            <div className="aspect-square rounded-lg overflow-hidden glow-gold">
              <div className="w-full h-full bg-linear-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
                <div className="relative w-64 h-64">
                  {/* Central lighter representation */}
                  <div className="absolute inset-0 rounded-lg bg-linear-to-b from-zinc-600 to-zinc-800 shadow-2xl" />

                  {/* Engraving preview */}
                  <div className="absolute inset-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-gold text-2xl font-bold mb-2">
                        YOUR NAME
                      </div>
                      <div className="text-zinc-400 text-sm">EST. 2024</div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div
                    ref={floatingElementsRef}
                    className="absolute -top-8 -right-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-orange-500 opacity-20 blur-xl" />
                  </div>
                  <div className="absolute -bottom-6 -left-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-500 opacity-30 blur-lg" />
                  </div>
                  <div className="absolute top-1/2 -left-10">
                    <div className="w-8 h-8 rounded-full bg-gold opacity-40 blur-md" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-zinc-700 opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-zinc-700 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

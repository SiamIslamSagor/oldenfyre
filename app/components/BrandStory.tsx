"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
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

      // Image animation with parallax
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect for image
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section relative bg-zinc-950">
      <div className="grain" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="space-y-6">
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold">
              <span className="text-white">The Art of</span>
              <span className="block gold-text">Oldenfyre</span>
            </h2>

            <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
              <p>
                Born from a passion for timeless craftsmanship, Oldenfyre
                represents the perfect fusion of vintage aesthetics and modern
                precision. Each lighter is more than a tool—it's a statement
                piece that carries the weight of tradition.
              </p>

              <p>
                Our master artisans combine decades of experience with
                cutting-edge laser technology to create pieces that transcend
                mere functionality. Every engraving tells a story, every finish
                reflects perfection, and every flame ignites a legacy.
              </p>

              <p>
                From the boardroom to the backcountry, from celebrations to
                quiet moments of reflection—Oldenfyre is there to mark the
                occasions that matter most.
              </p>
            </div>

            <div className="pt-4">
              <button className="btn-secondary">Discover Our Craft</button>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="aspect-square rounded-lg overflow-hidden glow-gold">
              <div className="w-full h-full bg-linear-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-radial from-orange-500 to-transparent blur-2xl opacity-50" />
                  <p className="text-zinc-400 text-lg italic">
                    &ldquo;Where fire meets artistry&rdquo;
                  </p>
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

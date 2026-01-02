import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import FeaturedLighters from "./components/FeaturedLighters";
import Customization from "./components/Customization";
import WhyOldenfyre from "./components/WhyOldenfyre";
import CallToAction from "./components/CallToAction";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <main className="min-h-screen w-full bg-black text-white overflow-x-hidden">
        lorem400
        {/* <Hero />
        <BrandStory />
        <FeaturedLighters />
        <Customization />
        <WhyOldenfyre />
        <CallToAction /> */}
      </main>
    </BackgroundBeamsWithCollision>
  );
}

import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import FeaturedLighters from "./components/FeaturedLighters";
import Customization from "./components/Customization";
import WhyOldenfyre from "./components/WhyOldenfyre";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <BrandStory />
      <FeaturedLighters />
      <Customization />
      <WhyOldenfyre />
      <CallToAction />
    </main>
  );
}

import HomeHero from "../components/home/HomeHero";
import JourneyPath from "../components/home/JourneyPath";
import FeaturedProjects from "../components/home/FeaturedProjects";
import AmbassadorSpotlight from "../components/home/AmbassadorSpotlight";
import ContactCTA from "../components/home/ContactCTA";
import Seo from "../components/ui/Seo";

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <HomeHero />
      <JourneyPath />
      <FeaturedProjects />
      <AmbassadorSpotlight />
      <ContactCTA />
    </>
  );
}

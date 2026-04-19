import { Hero } from "./section/hero";
import { Navbar } from "./section/navbar";
import AboutSection from "./section/about";
import CodingActivitySection from "./section/activity-section";
import SelectedProjectsSection from "./section/project";
import RecentWritingsSection from "./section/writing";

export default function Home() {
  return (
    <>
    <div className="w-[50%] border border-black/20 mx-auto">
    <Navbar/>
    <div className="h-[80vh]">
      <Hero/>
    </div>

    <div className="h-[100vh] border border-black/20">
      <AboutSection/>
    </div>
    <div className="h-[90vh] border border-black/20">
      <CodingActivitySection/>
    </div>
    <div className="h-[80vh] border border-black/20">
      <SelectedProjectsSection/>
    </div>
    <div className="h-[50vh] border border-black/20">
      <RecentWritingsSection/>
    </div>
    </div>
    </>
  );
}

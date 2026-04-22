import { Hero } from "./section/hero";
import { Navbar } from "./section/navbar";
import AboutSection from "./section/about";
import WorkExperienceSection from "./section/activity-section";
import SelectedProjectsSection from "./section/project";
import ContactAndFooter from "./section/footer";
import CertificationsSection from "./section/awards";
import OpensourceAndFooter from "./section/footer";


export default function Home() {
  return (
    <>
    <div className="w-full max-w-[1200px] border-x-0 md:border-x border-black/5 mx-auto min-h-screen flex flex-col bg-white">
      <Navbar/>
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <section className="py-12 md:py-20 lg:py-24 border-b border-black/5">
          <Hero/>
        </section>

        <section className="py-12 md:py-20 lg:py-24 border-b border-black/5">
          <AboutSection/>
        </section>

        <section className="py-12 md:py-20 lg:py-24 border-b border-black/5">
          <SelectedProjectsSection/>
        </section>

        <section className="py-12 md:py-20 lg:py-24 border-b border-black/5">
          <WorkExperienceSection/>
        </section>

        <section className="py-12 md:py-20 lg:py-24 border-b border-black/5">
          <CertificationsSection/>
        </section>

        <section className="py-12 md:py-20 lg:py-24">
          <ContactAndFooter/>
        </section>
      </main>
    </div>
    </>
  );
}

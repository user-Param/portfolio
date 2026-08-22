


import { Hero } from "./section/hero";
import { Navbar } from "./section/navbar";
import AboutSection from "./section/about";
import WorkExperienceSection from "./section/activity-section";
import SelectedProjectsSection from "./section/project";
import ContactAndFooter from "./section/footer";
import CertificationsSection from "./section/awards";
import OpensourceAndFooter from "./section/footer";
import Tools from "./section/tools";





export default function Home() {

 

  return (
    <>
    <div className="w-full max-w-full border-x-0 md:border-x border-black/5 mx-auto min-h-screen flex flex-col bg-white">
      
      <Navbar/>
      
      <main className="flex-grow">
        <section className="relative border-b border-black/5 overflow-hidden">
  
  {/* Background video
  <video
    ref={videoRef}
    src="/assets/spiderverse2.mp4"
    loop
    muted={false}
    playsInline
    className="absolute inset-0 w-full h-screen object-cover z-0 blur-[3px]"
  /> */}


    <Hero />


</section>

        <section className="">
          <AboutSection/>
        </section>

        <section className="">
          <SelectedProjectsSection/>
        </section>

        <section>
          <Tools />
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


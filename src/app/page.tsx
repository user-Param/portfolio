import { Hero } from "./section/hero";
import { Navbar } from "./section/navbar";

export default function Home() {
  return (
    <>
    <div className="w-[80%] border mx-auto">
    <Navbar/>
    <div className="h-[100vh] border border-black">
      <Hero/>
    </div>

    <div className="h-[100vh] border border-black">
      <Hero/>
    </div>
    </div>
    </>
  );
}

import React from "react";



export default function AboutSection() {
  return (
    <section className="flex justify-center py-1">
      <img className="w-full h-full"
      src={"assets/section2-bg.png"}/>
      <span className=" text-white absolute flex justify-center text-center align-center items-center mt-15">
        <h1 className="px-50">Go Beyond the Screen with the creators of “Spider-Man: Across the Spider-Verse” to see how they used new tools to build the film's visually stunning (and ever-changing) worlds. From mimicking brush strokes and creating characters' distinct looks, to making and learning from mistakes, they worked collaboratively to bring the hit movie to life. Watch now, then apply what they learned to your next project.</h1>
      </span>
    </section>
  );
}
import React from "react";



export default function AboutSection() {
  return (
    <section className="flex justify-center py-1">
      <img className="w-full h-full"
      src={"assets/section2-bg.png"}/>
      <span className=" text-white absolute flex justify-center text-center align-center items-center mt-13">
        <h3 className="px-120">Go Beyond the Screen with the creator to see how he used modern technologies to build the products with stunning (and ever-changing) worlds. From mimicking brush strokes and creating characters' distinct looks, to making and learning from mistakes, they worked collaboratively to bring the hit movie to life. Watch now, then apply what they learned to your next project.</h3>
      </span>
    </section>
  );
}
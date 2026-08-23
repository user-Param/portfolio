"use client";
import IntroCard from "../component/intro-card";
import { useRef, useState } from "react";
import OptionWheel from "../component/option-wheel";


export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);

    if (!videoRef.current.muted) {
      videoRef.current.play();
    }
  };
  return (
    <div className="relative max-h-screen w-full flex overflow-hidden py-2">

      <video
        ref={videoRef}
        src="/assets/spiderverse2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-screen object-cover z-0 blur-[3px]"
      />

        <IntroCard
          muted={muted}
          onToggleSound={toggleSound}
        />

        

<OptionWheel
  items={['About', 'Projects', 'Tools', 'Experience', 'Certifications', 'wow']}
  defaultSelected={2}
  textColor="#ffd900"
  activeColor="#fc0000"
  side="left"
  fontSize={4}
  spacing={1.4}
  curve={1}
  tilt={6}
  blur={2}
  fade={0.25}
  smoothing={200}
  inset={80}
  loop={false}
  draggable
  soundUrl="/assets/sounds/click-soft.mp3"
  soundVolume={0.5}
  onChange={(index, item) => console.log(index, item)}
/>

    </div>
  );
};
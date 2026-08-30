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
    <div className="relative max-h-screen w-full flex overflow-hidden">

      {/* <video
        ref={videoRef}
        src="/assets/spiderverse.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-screen object-cover z-0 blur-[3px]"
        style={{ opacity: 1, visibility: 'visible' }}
        type="video/mp4"
      /> */}

      <img src="./assets/miles-3.gif" alt="" className="absolute inset-0 w-full h-screen object-cover z-0"
        style={{ opacity: 1, visibility: 'visible' }}/>

        <div className="absolute h-screen w-full bg-background opacity-50"></div>

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
  spacing={2}
  curve={1}
  tilt={40}
  blur={2}
  fade={1}
  smoothing={200}
  inset={80}
  loop={true}
  draggable
  soundUrl="/assets/sounds/click-soft.mp3"
  soundVolume={0.5}
  onChange={(index, item) => console.log(index, item)}
/>

    </div>
  );
};
"use client";

import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { Button } from "antd";
import TravelCard from "@/components/TravelCard";
import { TRAVEL_INFO } from "@/constants/constants";

export default function Home() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textContent = textRef.current.textContent;
    const letters = textContent.split("").map((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter;
      span.style.display = "inline-block";
      textRef.current.appendChild(span);
      return span;
    });

    textRef.current.textContent = "";

    letters.forEach((letter) => {
      textRef.current.appendChild(letter);
    });

    gsap.from(letters, {
      opacity: 0,
      y: 100,
      ease: "power3.out",
      duration: 1,
      stagger: 0.1,
      onComplete: () => {
        gsap.to(letters, {
          y: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
        });
      },
    });
  }, []);

  return (
    <div>
      <div ref={containerRef} className="relative">
        <img
          src="/images/WallpaperAlone.jpg"
          alt="Wallpaper"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <p
            ref={textRef}
            className=" text-white font-bold text-[7vw] whitespace-nowrap"
          >
            ¡Viaja con nosotros!
          </p>
          <Button
            type="primary"
            className="flex mt-6 h-[4vw] w-[14vw] text-[1.5vw] rounded-md font-extralight tracking-wide"
            danger
            shape="round"
          >
            Ver viajes
          </Button>
        </div>
      </div>
      <div>
        {TRAVEL_INFO.map((travel, index) => (
          <TravelCard key={travel.id} travel={travel} />
        ))}
      </div>
    </div>
  );
}

import { useGSAP } from "@gsap/react";
import AnimatedTitle from "./AnimatedTitle.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const teamMembers = [
    { name: "John Doe", role: "Developer", img: "https://i.pravatar.cc/300" },
    { name: "Jane Smith", role: "Designer", img: "https://i.pravatar.cc/300" },
    {
      name: "Alice Johnson",
      role: "Manager",
      img: "https://i.pravatar.cc/300",
    },
    { name: "Bob Brown", role: "Marketing", img: "https://i.pravatar.cc/300" },
    { name: "Bob Brown", role: "Marketing", img: "https://i.pravatar.cc/300" },
    { name: "Bob Brown", role: "Marketing", img: "https://i.pravatar.cc/300" },
    { name: "Bob Brown", role: "Marketing", img: "https://i.pravatar.cc/300" },
  ];

  const defaultSmallText = "The Champs";
  const defaultLargeText =
    "The te<b>a</b>m behi<b>n</b>d <br /> the <b>m</b>agic";

  const [smallText, setSmallText] = useState(defaultSmallText);
  const [largeText, setLargeText] = useState(defaultLargeText);

  useGSAP(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const Animation = gsap.timeline({
      scrollTrigger: {
        trigger: "#team",
        start: "center center",
        end: `+=${500 * teamMembers.length} center`,
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    Animation.from("#team-images", {
      x: "200%", // Move from right on desktop, from bottom on mobile
      ease: "power1",
    });

    Animation.to("#team-images", {
      x: "-100%", // Move up on mobile, left on desktop
      ease: "power1",
    });
  });

  return (
    <section id="team" className="min-h-dvh w-screen bg-blue-75 text-black">
      <div
        id="text"
        className="flex size-full flex-col items-center py-10 pb-24 justify-center"
      >
        <p className="font-['general'] text-sm uppercase md:text-[10px] small-text-container">
          {smallText}
        </p>
        <div>
          <AnimatedTitle
            title={largeText}
            sectionId="#team-section-text"
            containerClass="mt-5 pointer-events-none !text-black relative z-10 selection:bg-yellow-300 special-font large-text-container"
          />
        </div>
        <div
          id="team-images"
          className="absolute left-0 h-64 w-[50%] px-6 transform z-10"
        >
          <div className="flex flex-wrap gap-16 items-center justify-center py-2">
            {teamMembers.map((member, index) => (
              <img
                id="member-image"
                key={index}
                src={member.img}
                alt=""
                className="h-24"
                style={{ borderRadius: "50%" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

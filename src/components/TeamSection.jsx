import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#team-img-clip",
        start: "top center",
        end: "top center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });

    clipAnimation.to(".team-img", {
      scale: 0.8,
      duration: 1,
    });
  });

  return (
    <div id="team" className="min-h-screen w-screen">
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
        <AnimatedTitle
          title="Our Team"
          containerClass="mt-5 !text-black text-center"
        />
        <Button title="Meet the Team" to="/team" />
      </div>

      <div className="h-dvh w-screen" id="team-img-clip">
        <div className="mask-clip-path team-img">
          <img
            src="team_img/entire_team.jpg"
            alt="Background"
            className="absolute size-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

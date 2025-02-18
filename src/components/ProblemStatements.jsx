import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import RoundedCorners from "./RoundedCorners";
import gsap from "gsap";
import Button from "./Button.jsx";
import { dateOfHackathon } from "../constants.js";
import { TiLocationArrow } from "react-icons/ti";

const ProblemStatements = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * -10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const buttonDisabled = () => {
    const today = new Date();
    const targetDate = new Date(`2025-03-${dateOfHackathon}`);

    return today.toDateString() !== targetDate.toDateString();
  };

  return (
    <section
      id="problem-statements"
      className="min-h-dvh w-screen bg-black text-blue-50"
    >
      <div className="flex size-full flex-col items-center pt-10 pb-24">
        <p className="font-['general'] text-sm uppercase md:text-[10px]">
          Problem Statements
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="The themes for <br /> your ideas"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 selection:bg-yellow-300"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="Themes"
                  className="object-contain"
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p
                id="info-about-problem-statement"
                className="mt-3 max-w-sm text-center font-['circular-web'] text-violet-50 md:text-start"
              >
                {buttonDisabled()
                  ? "The problem statements for the hackathon will be revealed on the day of the event. Stay tuned!"
                  : "The problem statements for the hackathon are now available. Click the button below to discover them!"}
              </p>

              <Button
                id="realm-btn"
                leftIcon={<TiLocationArrow />}
                title="discover problem statements"
                containerClass="flex-center gap-1 mt-5 disabled:cursor-not-allowed disabled"
                to="/problem-statements"
                disabled={buttonDisabled()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;

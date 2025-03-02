import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";
import Button from "./Button.jsx";
import { TiLocationArrow } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  return (
    <div
      id="sponsor"
      className="min-h-dvh w-screen text-blue-200 mt-40 md:mt-80"
    >
      <div className="flex size-full flex-col items-center pt-10 pb-24">
        <AnimatedTitle
          title="Sponsors"
          sectionId="#sponsors-title"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 selection:bg-yellow-300"
        />

        <div className="w-full mx-2 mt-20">
          <div className="flex flex-wrap justify-center gap-15 my-10">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center">
                <img src={company.logo} alt={company.name} className="h-20" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-15 text-center flex flex-col items-center">
          <p className="font-['general'] text-sm uppercase md:text-[10px]">
            Interested in sponsoring us?
          </p>
          <Button
            title="Contact Us"
            to="mailto:nexus@gtbit.ac.in"
            containerClass="mt-4 flex-center gap-1 !bg-blue-200 text-blue-50"
            rightIcon={<TiLocationArrow />}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

const companies = [
  { name: "Dorahacks", logo: "https://dorahacks.io/_nuxt/12e03b15.svg" },
];

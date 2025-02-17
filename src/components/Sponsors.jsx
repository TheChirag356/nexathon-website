import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const names =
    "Random ass names that have no meaning to them bas achhe lage to daal diye";

  gsap.set("#sponsor-li > #sponsor-span", { transformOrigin: "0 50%" });
  gsap.set("#sponsor-li:not(:first-of-type) #sponsor-span", {
    opacity: 0.2,
    scale: 0.8,
  });

  const tl = gsap
    .timeline()
    .to("#sponsor-li:not(:first-of-type) #sponsor-span", {
      opacity: 1,
      scale: 1,
      stagger: 0.5,
    })
    .to(
      "#sponsor-li:not(:last-of-type) #sponsor-span",
      { opacity: 0.2, scale: 0.8, stagger: 0.5 },
      0
    );

  ScrollTrigger.create({
    trigger: "#sponsor-h1",
    start: "center center",
    endTrigger: "#sponsor-li:last-of-type",
    end: "center center",
    pin: true,
    animation: tl,
    scrub: true,
  });

  return (
    <section
      id="sponsors"
      className="snap-y pl-20 px-20 bg-blue-200 text-blue-100 min-h-screen flex items-center justify-center"
    >
      <div id="inner-div" className="w-screen flex outline">
        <h1
          id="sponsor-h1"
          className="m-0 font-bold uppercase tracking-[0.06em] leading-none text-4xl md:text-6xl grow-[0] self-start"
        >
          Sponsor
        </h1>
        <ul
          id="sponsor-ul"
          className="m-0 list-none pl-4 font-bold uppercase tracking-[0.06em]" // leading-none
        >
          {names.split(" ").map((word, index) => (
            <li
              key={index}
              id="sponsor-li"
              className="m-0 tracking-[0.06em] leading-none text-4xl md:text-6xl"
            >
              <span id="sponsor-span" className="inline-block">
                {word}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sponsors;

import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.set("#image-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#image-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#image-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="image-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 z-2"></div>
        <div>
          <img
            src="img/hero4.png"
            alt=""
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100 drop-shadow-2xl">
          h<b>a</b>ckathon
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full ">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100 drop-shadow-2xl">
              <b>n</b>exathon
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100 font-['circular-web']">
              Enter the metagame <br /> of hackathons
            </p>

            {/* <Button
              id="register-button"
              title="Register Here"
              leftIcon={<TiLocationArrow />}
              containerClass="apply-button !bg-blue-200 text-white flex-center gap-1"
              to="/register"
              datahackathonslug="nexathon-3"
              datatheme="dark"
            /> */}

            <div
              className="apply-button"
              data-hackathon-slug="nexathon-3"
              data-button-theme="dark"
              style="height: 44px; width: 312px"
            ></div>
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        h<b>a</b>ckathon
      </h1>
    </div>
  );
};

export default Hero;

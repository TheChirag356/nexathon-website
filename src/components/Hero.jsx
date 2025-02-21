import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // const [currentIndex, setCurrentIndex] = useState(1);
  // const [hasClicked, setHasClicked] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedVideos, setLoadedVideos] = useState(0);

  // const totalVideos = 4;
  // const nextVideoRef = useRef(null);

  // const handleVideoLoad = () => {
  //   setLoadedVideos((prev) => prev + 1);
  // };

  // const handleMiniVideoClick = () => {
  //   setHasClicked(true);
  //   setCurrentIndex(upcomingVideoIndex);
  // };

  // useEffect(() => {
  //   if (loadedVideos === totalVideos - 1) {
  //     setIsLoading(false);
  //   }
  // }, [loadedVideos]);

  // useGSAP(
  //   () => {
  //     if (hasClicked) {
  //       gsap.set("#next-video", { visibility: "visible" });
  //       gsap.to("#next-video", {
  //         transformOrigin: "center center",
  //         scale: 1,
  //         width: "100%",
  //         height: "100%",
  //         duration: 1,
  //         ease: "power1.inOut",
  //         onStart: () => nextVideoRef.current.play(),
  //       });

  //       gsap.from("#current-video", {
  //         transformOrigin: "center center",
  //         scale: 0,
  //         duration: 1.5,
  //         ease: "power1.inOut",
  //       });
  //     }
  //   },
  //   { dependencies: [currentIndex], revertOnUpdate: true }
  // );

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
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="image-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <img src="img/hero2.jpg" alt="" />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
          h<b>a</b>ckathon
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full ">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              <b>n</b>exathon
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100 font-['circular-web']">
              Enter the metagame <br /> of hackathons
            </p>

            <Button
              id="register-button"
              title="Register Here"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
              to="/register"
            />
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

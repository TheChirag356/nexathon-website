import { useRef, useState } from "react";
import { dateOfHackathon, monthOfHackathon } from "../constants.js";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font font-['zentry'] drop-shadow-2xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base drop-shadow-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  // Timer
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy,
      dayMonth = `${monthOfHackathon}/${dateOfHackathon}/`,
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText =
            "The Hackathon has started";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();

  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 ">
          <p className="font-['circular-web'] text-lg text-blue-50">
            About Nexathon
          </p>
          <p className="max-w-md font-['circular-web'] text-lg text-blue-50 opacity-50">
            The Nexus at GTBIT is a transformative initiative designed to
            enhance students academic experiences and position our college as a
            premier hub for AI education and innovation. We aim to provide
            significant industry exposure through organized events and resources
            to shape students future careers.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 md:h-96 mx-auto overflow-hidden rounded-md h-[50vh] w-[90vw]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                Spo<b>n</b>sors
              </>
            }
            description="We are proud to have the support of the following sponsors. Their
            support helps us to continue to provide the best possible experience
            for our participants."
          />
        </BentoTilt>

        <div className="grid w-full gap-x-5 gap-y-4 grid-cols-1 md:grid-cols-2 auto-rows-fr">
          {/* First Item - Should span 2 rows on medium+ screens */}
          {/* <BentoTilt className="bento-tilt_1 md:row-span-1">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Locatio<b>n</b>
                </>
              }
              description="Something more"
            />
          </BentoTilt> */}

          {/* Second Item */}
          <BentoTilt className="bento-tilt_1 md:w-[80%] w-[90vw] md:mx-auto border-hsla inset-shadow-md">
            <BentoCard
              src="videos/money.mp4"
              title={
                <>
                  P<b>r</b>izes
                </>
              }
              description="A total prize pool of "
            />
          </BentoTilt>

          {/* Third Item */}
          <BentoTilt className="bento-tilt_1 border-hsla md:w-[80%] md:mx-auto w-[90vw]">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  P<b>r</b>oblem St<b>a</b>tements
                </>
              }
              description="A total of 5 problem statements will be released soon."
            />
          </BentoTilt>

          {/* Fourth Item */}
          <BentoTilt className="bento-tilt_2 h-[95%] md:w-[80%] md:mx-auto w-[90vw]">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font font-['zentry'] max-w-80 text-black text-[8vh]">
                St<b>a</b>rting So<b>o</b>n
              </h1>
              {/* <TiLocationArrow className="m-5 scale-[5]" /> */}

              <div className="mx-0 my-1 text-center font-['general']">
                <div id="countdown">
                  <ul>
                    <li className="uppercase text-[1em] md:text-[1.2em] inline-block list-none p-[1em]">
                      <span
                        className="block p-[1rem] font-['zentry'] text-[3em]"
                        id="days"
                      ></span>
                      days
                    </li>
                    <li className="uppercase text-[1em] md:text-[1.2em] inline-block list-none p-[1em]">
                      <span
                        className="block p-[1rem] font-['zentry'] text-[3em]"
                        id="hours"
                      ></span>
                      Hours
                    </li>
                    <li className="uppercase text-[1em] md:text-[1.2em] inline-block list-none p-[1em]">
                      <span
                        className="block p-[1rem font-['zentry'] text-[3em]"
                        id="minutes"
                      ></span>
                      Minutes
                    </li>
                    <li className="uppercase text-[1em] md:text-[1.2em] inline-block list-none p-[1em]">
                      <span
                        className="block p-[1rem] font-['zentry'] text-[3em]"
                        id="seconds"
                      ></span>
                      Seconds
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </BentoTilt>

          {/* Fifth Item */}
          {/* <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover object-center"
            ></video>
          </BentoTilt> */}
        </div>
      </div>
    </section>
  );
};

export default Features;

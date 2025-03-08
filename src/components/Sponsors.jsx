import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";
import Button from "./Button.jsx";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  const [isMouseHover, setIsMouseHover] = useState(false);

  return (
    <div
      id="sponsors"
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
            {companies.length > 0 ? (
              companies.map((company, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative"
                  onMouseEnter={() => setIsMouseHover(true)}
                  onMouseLeave={() => setIsMouseHover(false)}
                >
                  <Link
                    to={company.link}
                    className="flex flex-col items-center justify-center"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={`h-16 transition-all duration-100 ease-in-out ${
                        isMouseHover ? "blur-sm" : ""
                      }`}
                    />
                    <p
                      className={`absolute transition-opacity duration-100 ease-in-out mt-2 font-['circular-web'] text-xl ${
                        isMouseHover ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {company.name}
                    </p>
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-3xl font-['circular-web'] font-semibold uppercase">
                To be released soon
              </div>
            )}
          </div>
        </div>
        <div className="mt-15 text-center flex flex-col items-center">
          <p className="font-['general'] text-sm uppercase md:text-[10px]">
            Interested in sponsoring us?
          </p>
          <Button
            title="Contact Us"
            to="mailto:connect@nexathon.tech"
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
  {
    name: "Devfolio",
    logo: "https://devfolio.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcc5173fd-2a6a-434e-9d48-1883d77bfc9f%2F_Colored.png?table=block&id=d55db242-49ff-4e05-8fae-865dc9b77873&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=660&userId=&cache=v2",
    link: "https://devfolio.co",
    alt: "DEVFOLIO LOGO",
  },
  {
    name: "ETHIndia",
    logo: "https://devfolio.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5bc094c8-987c-4274-938f-8a9d3fad1a04%2F4cf44e1b-7c65-42d7-81e8-dcd506fc2842%2FUntitled.png?table=block&id=f0624a9f-0c26-457b-bfc4-7a9bc1716670&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=660&userId=&cache=v2",
    link: "https://ethindia.co",
    alt: "ETHINDIA LOGO",
  }
];

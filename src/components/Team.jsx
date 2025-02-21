import AnimatedTitle from "./AnimatedTitle.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState, useEffect } from "react";
import { TeamMembersList, Teams } from "../teamDetails.js";
import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubFill,
  RiRedditFill,
} from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const X = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
    aria-label="X"
  >
    <RiTwitterXLine className="w-6 h-6" />
  </a>
);

const LinkedIn = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
    aria-label="LinkedIn"
  >
    <RiLinkedinFill className="w-6 h-6" />
  </a>
);

const Reddit = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
    aria-label="Reddit"
  >
    <RiRedditFill className="w-6 h-6" />
  </a>
);

const Github = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
    aria-label="Github"
  >
    <RiGithubFill className="w-6 h-6" />
  </a>
);

const Card = ({ name, role, imgSrc, socialLinks }) => (
  <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
    <img
      className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
      src={imgSrc}
      alt=""
    />
    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
      {name}
    </h1>
    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
      {role}
    </p>
    <div className="flex mt-3 -mx-2">
      {Object.entries(socialLinks).map(([social, link]) => {
        const components = {
          linkedin: LinkedIn,
          x: X,
          github: Github,
          reddit: Reddit,
        };
        const SocialComponent = components[social];
        return SocialComponent ? (
          <SocialComponent key={social} link={link} />
        ) : null;
      })}
    </div>
  </div>
);

export default function TeamSection() {
  const teamMembersList = TeamMembersList;
  const teams = Teams;
  const [tab, setTab] = useState(Teams[0]);

  const handleButtonClick = (team) => {
    console.log(team);
    console.log(tab);
    setTab(team);
  };

  useEffect(() => {
    gsap.fromTo(
      "#section-2",
      { clipPath: "circle(0% at 50% 0%)" },
      {
        clipPath: "circle(100% at 50% 50%)",
        scrollTrigger: {
          trigger: "#section-2",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="team" className="bg-blue-200 min-h-dvh overflow-x-hidden">
      <div
        id="section-1"
        className="h-dvh flex flex-col items-center justify-center"
      >
        <AnimatedTitle
          title="our team"
          containerClass="text-2xl font-semibold text-center lg:text-3xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
        />
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
      </div>
      <div
        id="section-2"
        className="bg-[url('https://assets.codepen.io/9051928/gradient.png')] min-h-dvh w-screen"
      >
        <div
          id="section-2-inner-div"
          className="backdrop-blur-xl z-2 min-h-dvh w-screen px-5"
        >
          <div
            id="tabs"
            className="flex items-center justify-center py-10 text-nowrap"
          >
            <div className="flex items-center p-1 border gap-2 border-white rounded-xl">
              {teams.map((team) => (
                <button
                  key={team}
                  className={`px-4 py-2 text-sm font-medium capitalize md:py-3 rounded-xl md:px-12 cursor-pointer font-['general'] ${
                    team === tab
                      ? "text-blue-200 bg-white "
                      : "text-white transition-colors duration-300 hover:bg-white hover:text-black"
                  }`}
                  onClick={() => setTab(team)}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>
          <div
            id="members"
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4"
          >
            {teamMembersList
              .filter((member) => member.team === tab)
              .map((member, index) => (
                <Card
                  key={index}
                  name={member.name}
                  role={
                    member.team === "Core"
                      ? `${member.role}`
                      : `${member.team} ${member.role}`
                  }
                  imgSrc={member.img}
                  socialLinks={member.links}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

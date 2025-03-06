import AnimatedTitle from "./AnimatedTitle";
import { JudgeList } from "../judgeDetails.js";
import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const LinkedIn = ({ link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="mx-2 text-gray-600 hover:text-gray-400"
    aria-label="LinkedIn"
  >
    <RiLinkedinFill className="w-6 h-6" />
  </a>
);

const Email = ({ link }) => (
  <a
    href={`mailto:${link}`}
    target="_blank"
    rel="noreferrer"
    className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
    aria-label="Email"
  >
    <MdEmail className="w-6 h-6" />
  </a>
);

const Card = ({ name, role, imgSrc, socialLinks }) => (
  <div className="flex flex-col items-center p-8 duration-400 transform group rounded-xl hover:backdrop-blur-[2px] transition-all ease-in-out">
    <img
      className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
      src={imgSrc}
      alt=""
    />
    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
      {name}
    </h1>
    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
      {role}
    </p>
    <div className="flex mt-3 -mx-2">
      {Object.entries(socialLinks).map(([social, link]) => {
        const components = {
          linkedin: LinkedIn,
        };
        const SocialComponent = components[social];
        return SocialComponent ? (
          <SocialComponent key={social} link={link} />
        ) : null;
      })}
    </div>
  </div>
);

const Judges = () => {
  return (
    <div id="prizes" className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl lg:px-8 flex size-full flex-col items-center">
        <p className="font-['general'] text-sm uppercase md:text-[10px]">
          Our Panel Of Judges
        </p>

        <AnimatedTitle
          title="Online Judges"
          sectionId="#prizes-title"
          containerClass="mt-4 pointer-events-none mix-blend-difference relative z-10 selection:bg-yellow-300"
        />

        <div
          id="members"
          className="flex flex-wrap justify-center mt-8 gap-8 sm:gap-12"
        >
          {JudgeList.map((judge, index) => (
            <Card
              key={index}
              name={judge.name}
              imgSrc={judge.img}
              socialLinks={judge.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Judges;

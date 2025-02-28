import AnimatedTitle from "./AnimatedTitle.jsx";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";

const QuestionCard = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`rounded-xl p-6 ${isActive ? "shadow-lg" : ""}`}>
      <button
        className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {question}
        <TiArrowSortedDown
          className={`size-5 text-gray-600 group-hover:text-gray-500 ${
            isActive ? "-rotate-90" : ""
          }`}
        />
      </button>
      <div
        className={`w-full overflow-hidden transition-[height] duration-300 ${
          isActive ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <p className="text-gray-800">{answer}</p>
      </div>
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  return (
    <section
      id="faq"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto items-center"
    >
      <div className="flex size-full flex-col items-center py-10 pb-24 justify-center gap-4">
        <p className="font-['general'] text-sm uppercase md:text-[10px] small-text-container text-center">
          Answers to the most frequently asked questions.
        </p>
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-10">
          <AnimatedTitle
            title="Your questions, answered"
            containerClass="whitespace-nowrap !text-blue-200"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="hs-accordion-group">
          {qna.map((item, index) => (
            <QuestionCard
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;

const qna = [
  {
    question: "What is Nexathon?",
    answer:
      "Nexathon is a hackathon organized by Nexus - the AI society of GTBIT where innovation and creativity thrive.",
  },
  {
    question: "How do I sign up for Nexathon?",
    answer:
      "You can sign up for Nexathon by visiting our official website. The registration link is available on the homepage.",
  },
  {
    question: "It's my first hackathon, what's something I should know?",
    answer:
      "No worries! Just build a project solving a problem using any tech stack—ChatGPT, Claude, YouTube, and Stack Overflow help!",
  },
  {
    question: "Who can participate in Nexathon?",
    answer:
      "All are welcome to participate, whether you are currently enrolled in a college or university. All skill levels are welcome.",
  },
  {
    question: "Can I join Nexathon alone, or do I need a team?",
    answer:
      "You cannot participate alone; you must be in a team of up to 4 members.",
  },
  {
    question: "Are inter-college teams allowed to participate?",
    answer:
      "Yes, inter-college teams are allowed. You can form a team with students from different colleges or universities.",
  },
  {
    question: "Will there be mentors or experts to help out?",
    answer:
      "Yes, experienced mentors and industry experts will be available to provide guidance, technical support, and feedback.",
  },
  {
    question: "How can I keep up with the latest event news?",
    answer:
      "You can stay updated by visiting the Nexathon website and following the mentioned social media handles for the latest event news.",
  },
  {
    question: "What are the judgment criteria?",
    answer:
      "Projects will be evaluated on innovation, technical execution, impact, presentation, and scalability, ensuring both creativity and feasibility.",
  },
  {
    question: "Will meals be provided?",
    answer:
      "Yes, all registered participants will receive meals and refreshments throughout the event.",
  },
];

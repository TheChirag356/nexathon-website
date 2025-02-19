import AnimatedTitle from "./AnimatedTitle.jsx";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";

const QuestionCard = ({ key, question, answer }) => {
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
        <p className="font-['general'] text-sm uppercase md:text-[10px] small-text-container">
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
    question: "What is Nexathon and what makes it unique?",
    answer:
      "Nexathon is a unique AI based hackathon hosted by GTBIT Rajouri Garden and Nexus - The AI Society. It is unique because it is the first of its kind hackathon that focuses on AI and its applications in various fields.",
  },
  {
    question: "What is Nexathon and what makes it unique?",
    answer:
      "Nexathon is a unique AI based hackathon hosted by GTBIT Rajouri Garden and Nexus - The AI Society. It is unique because it is the first of its kind hackathon that focuses on AI and its applications in various fields.",
  },
];

import AnimatedTitle from "./AnimatedTitle.jsx";

const QuestionCard = ({ question, answer }) => {
  return (
    <div
      className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 active"
      id="hs-basic-with-title-and-arrow-stretched-heading-one"
    >
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
        aria-expanded="true"
        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
      >
        {question}
        <svg
          className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg
          className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <div
        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
        role="region"
        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
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
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <AnimatedTitle
            title="Your questions, answered"
            containerClass="whitespace-nowrap !text-blue-200"
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">
          <QuestionCard
            question="What is Nexathon and what makes it unique?"
            answer="Nexathon is a unique AI based hackathon hosted by GTBIT Rajouri Garden and Nexus - The AI Society. It is unique because it is the first of its kind hackathon that focuses on AI and its applications in various fields."
          />
          <QuestionCard
            question="What is Nexathon and what makes it unique?"
            answer="Nexathon is a unique AI based hackathon hosted by GTBIT Rajouri Garden and Nexus - The AI Society. It is unique because it is the first of its kind hackathon that focuses on AI and its applications in various fields."
          />
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;

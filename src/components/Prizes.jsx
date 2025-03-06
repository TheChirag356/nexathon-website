import AnimatedTitle from "./AnimatedTitle";

export default function Prizes() {
  return (
    <div id="prizes" className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-6xl lg:px-8 flex size-full flex-col items-center">
        <p className="font-['general'] text-sm uppercase md:text-[10px]">
          The Prizes for the winners
        </p>

        <AnimatedTitle
          title="The prizes for <br /> the winners"
          sectionId="#prizes-title"
          containerClass="mt-4 pointer-events-none mix-blend-difference relative z-10 selection:bg-yellow-300"
        />

        <div className="mt-8 flex flex-wrap gap-4 justify-center sm:mt-12">
          {/* Winner */}
          <div className="relative flex-1 min-w-[300px]">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(1.5rem+1px)]">
              <div className="px-6 pt-6 pb-2 sm:px-8 sm:pt-8">
                <p className="text-lg font-medium tracking-tight text-gray-950 text-center font-['circular-web']">
                  Winner
                </p>
                <p className="mt-1 max-w-lg text-sm/6 text-gray-600 text-center font-['general']">
                  8000 INR + Trophy
                </p>
              </div>
              <div className="@container relative min-h-[20rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-8 top-6 bottom-0 overflow-hidden rounded-t-[12cqw] shadow-xl">
                  <img
                    className="size-full object-cover object-top"
                    src="img/first-trophy.webp"
                    alt="First place trophy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 1st Runner Up */}
          <div className="relative flex-1 min-w-[300px]">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(1.5rem+1px)]">
              <div className="px-6 pt-6 pb-2 sm:px-8 sm:pt-8">
                <p className="text-lg font-medium tracking-tight text-gray-950 text-center font-['circular-web']">
                  1st Runner Up
                </p>
                <p className="mt-1 max-w-lg text-sm/6 text-gray-600 text-center font-['general']">
                  6000 INR + Trophy
                </p>
              </div>
              <div className="@container relative min-h-[20rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-8 top-6 bottom-0 overflow-hidden rounded-t-[12cqw] shadow-xl">
                  <img
                    className="size-full object-cover object-top"
                    src="img/second-trophy.webp"
                    alt="Second place trophy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2nd Runner Up */}
          <div className="relative flex-1 min-w-[300px]">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(1.5rem+1px)]">
              <div className="px-6 pt-6 pb-2 sm:px-8 sm:pt-8">
                <p className="text-lg font-medium tracking-tight text-gray-950 text-center font-['circular-web']">
                  2nd Runner Up
                </p>
                <p className="mt-1 max-w-lg text-sm/6 text-gray-600 text-center font-['general']">
                  4000 INR + Trophy
                </p>
              </div>
              <div className="@container relative min-h-[20rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-8 top-6 bottom-0 overflow-hidden rounded-t-[12cqw] shadow-xl">
                  <img
                    className="size-full object-cover object-top"
                    src="img/third-trophy.webp"
                    alt="Second place trophy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Best all Freshers Team */}
          <div className="relative min-w-[300px]">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(1.5rem+1px)]">
              <div className="px-6 pt-6 pb-2 sm:px-8 sm:pt-8">
                <p className="text-lg font-medium tracking-tight text-gray-950 text-center font-['circular-web']">
                  Best All Freshers Team
                </p>
                <p className="mt-1 max-w-lg text-sm/6 text-gray-600 text-center font-['general']">
                  Exciting Swags
                </p>
              </div>
              <div className="@container relative min-h-[20rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-8 top-6 bottom-0 overflow-hidden rounded-t-[12cqw] shadow-xl">
                  <img
                    className="size-full object-cover object-top"
                    src="img/best_all_freshers_team_prize.jpg"
                    alt="Best all freshers team prize"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

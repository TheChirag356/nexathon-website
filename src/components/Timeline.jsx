import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const singleTimelineObject = ({ date, title, description1, description2 }) => {
  return (
    <section className="h-dvh w-dvw px-[20vw] py-[10vw]">
      <span>{date}</span>
      <h1 className="m-0 font-[3rem]">{title}</h1>
      <div className="flex gap-[3em]">
        <p className="font-[1.2rem] w-[50vw]">
          {description1 ||
            "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem."}
        </p>
        <p className="font-[1.2rem] w-[50vw]">
          {description2 ||
            "Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem."}
        </p>
      </div>
    </section>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="m-0 h-dvh box-border w-screen px-10">
      <div className="relative overflow-x-hidden">
        <div className="flex w-[300vw] scrollx">
          <svg
            className="absolute top-[12em] left-[10vw] w-[50vw]"
            viewBox="0 0 900 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
            />
            <mask
              id="mask0_0_1"
              className="w-[0]"
              // style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="900"
              height="10"
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_0_1)">
              <rect className="mask" y="-49" height="99" fill="black" />
            </g>
          </svg>
          <singleTimelineObject
            date="25-03-2025"
            title="Hackathon begins"
            description1="Stuff"
            description2="More stuff"
          />
          <singleTimelineObject
            date="25-03-2025"
            title="Hackathon begins"
            description1="Stuff"
            description2="More stuff"
          />
          <singleTimelineObject
            date="25-03-2025"
            title="Hackathon begins"
            description1="Stuff"
            description2="More stuff"
          />
          {/* <section className="sec1 pin">
            <span>Advanced</span>
            <h1>Signify Elegance</h1>
            <div className="flex gap-[3em]">
              <p className="font-[.8rem]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p className="font-[.8rem]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
          <section className="sec2 pin">
            <span className="anim">Advanced</span>
            <h1 className="anim">Signify Elegance</h1>
            <div className="flex gap-[3em] anim">
              <p className="font-[.8rem]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p className="font-[.8rem]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
          <section className="sec3 pin">
            <span className="anim">Advanced</span>
            <h1 className="anim">Signify Elegance</h1>
            <div className="flex gap-[3em] anim">
              <p className="font-[.8rem]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p className="font-[.8rem]">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section> */}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

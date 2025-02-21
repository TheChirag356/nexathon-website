import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  useEffect(() => {
    const textElements = document.querySelectorAll(".text");

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="p-0 bg-blue-200 font-['circular-web']">
      <Container>
        {datesAndEvents.map((dateAndEvent, index) => (
          <TextComponent key={index} className="text">
            {dateAndEvent.text}
            <SpanComponent>{dateAndEvent.event}</SpanComponent>
          </TextComponent>
        ))}
      </Container>
    </div>
  );
};

export default Timeline;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  color: white;
  margin: 0 10%;
`;

const TextComponent = styled.h1`
  font-size: 5vw;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;
  white-space: nowrap;
  width: 100%;
  color: #b6b6b6;
  background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
  border-bottom: 1px solid #2f2b28;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &:hover > span {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

const SpanComponent = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #4246ce;
  color: #0d0d0d;
  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transform-origin: center;
  transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const datesAndEvents = [
  {
    text: "20th March 2025",
    event: "Registrations End",
  },
  {
    text: "21st March 2025",
    event: "Problem Statement Release",
  },
  {
    text: "22nd March 2025",
    event: "Round 1 (Online)",
  },
  {
    text: "23rd March 2025",
    event: "Round 2 (Online)",
  },
  {
    text: "26th March 2025",
    event: "Speaker Sessions (Offline)",
  },
  {
    text: "27th March 2025",
    event: "Nexathon Final Round (Offline)",
  },
];

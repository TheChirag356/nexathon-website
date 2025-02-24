import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Button = ({ leftLogo, title, containerClass, to }) => {
  const onButtonClick = () => {};

  return (
    <button
      className="cursor-pointer relative inline-flex h-12 w-full items-center justify-center rounded-md bg-white px-6 font-['circular-web'] font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      onClick={() => window.open(to, "_blank")}
    >
      <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
      {title}
    </button>
  );
};

const Socials = () => {
  return (
    <div className=" h-dvh w-dvw text-white">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center my-16 md:my-24 gap-8 w-xl">
          <div className="flex flex-col gap-4 size-full items-center">
            <img
              src="img/nexus_logo.jpg"
              alt=""
              className="w-[5vw] rounded-[50%]"
            />
            <h1 className="font-['circular-web'] font-semibold text-3xl">
              Nexus - The AI Society
            </h1>
          </div>
          <div className="flex flex-col gap-4 size-full">
            <Button logo={<FaWhatsapp />} title="Whatsapp Group" />
            <Button logo={<FaDiscord />} title="Discord Server" />
            <Button
              logo={<FaInstagram />}
              title="Nexus Instagram"
              to="https://www.instagram.com/nexus_gtbit/"
            />
            <Button logo={<FaInstagram />} title="Nexathon Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;

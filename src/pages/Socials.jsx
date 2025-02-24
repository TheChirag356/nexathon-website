import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Button = ({ leftLogo, title, containerClass, to }) => {
  const onButtonClick = () => {};

  return (
    <button
      className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      onClick={() => window.open(to, "_blank")}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
        {title}
      </span>
    </button>
  );
};

const Socials = () => {
  return (
    <div className=" h-dvh w-dvw">
      <div class="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center my-16 md:my-24 gap-8 w-xl">
            <div className="flex flex-col gap-4 size-full items-center">
              <img
                src="img/nexus_logo.jpg"
                alt=""
                className="w-[5vw] rounded-[50%]"
              />
              <h1 className="font-['circular-web'] font-semibold text-3xl text-white">
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
    </div>
  );
};

export default Socials;

import { FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Button = ({ Icon, title, to }) => {
  return (
    <button
      className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      onClick={() => window.open(to, "_blank")}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
        {Icon && <Icon className="mr-2 h-5 w-5" />}
        {title}
      </span>
    </button>
  );
};

const Socials = () => {
  return (
    <div className="h-dvh w-dvw">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center my-16 md:my-24 gap-8 w-xl">
            <div className="flex flex-col gap-4 size-full items-center">
              <img
                src="img/nexus_logo.jpg"
                alt=""
                className="w-[12vw] md:w-[5vw] rounded-[50%]"
              />
              <h1 className="font-['circular-web'] font-semibold text-3xl text-white">
                Nexus - The AI Society
              </h1>
            </div>
            <div className="flex flex-col gap-4 md:w-full w-[60%]">
              <Button Icon={FaWhatsapp} title="Whatsapp Group" to="#" />
              <Button Icon={FaDiscord} title="Discord Server" to="#" />
              <Button
                Icon={FaInstagram}
                title="Nexus Instagram"
                to="https://www.instagram.com/nexus_gtbit/"
              />
              <Button Icon={FaInstagram} title="Nexathon Instagram" to="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;

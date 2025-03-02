import { FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = ({ Icon, title, to }) => {
  return (
    <button
      className="inline-flex h-12 animate-background-shine items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      onClick={() => window.open(to, "_blank")}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {title}
    </button>
  );
};

const Socials = () => {
  return (
    <div className="h-dvh w-dvw">
      <div className="relative h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#8a8a8a_1px,transparent_1px)] [background-size:50px_50px]"></div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center my-16 md:my-24 gap-8 w-xl">
            <div className="flex flex-col gap-4 size-full items-center">
              <Link to="/">
                <img
                  src="img/nexus_logo.jpg"
                  alt=""
                  className="w-[12vw] md:w-[5vw] rounded-[50%]"
                />
              </Link>
              <h1 className="font-['circular-web'] font-semibold text-3xl text-white">
                Nexus - The AI Society
              </h1>
            </div>
            <div className="flex flex-col gap-4 md:w-full w-[60%] !font-['circular-web']">
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

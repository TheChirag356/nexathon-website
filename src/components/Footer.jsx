import { FaDiscord, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
const socialLinks = [
  // { href: "https://discord.com", icon: <FaDiscord />, name: "Discord" },
  {
    href: "https://www.instagram.com/nexathon_gtbit/",
    icon: <FaInstagram />,
    name: "Instagram",
  },
  {
    href: "https://linkedin.com/company/nexus-ai-society",
    icon: <FaLinkedin />,
    name: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@Nexus-TheAISociety",
    icon: <FaYoutube />,
    name: "Youtube",
  },
  {
    href: "https://www.instagram.com/nexus_gtbit/",
    icon: <FaInstagram />,
    name: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="w-screen h-dvh bg-blue-200 py-4 px-4 text-white relative">
      <div className="flex flex-col justify-center items-center size-full relative">
        <div className="flex md:flex-row flex-col justify-center items-center">
          <svg
            className="size-full md:size-full absolute -top-10"
            id="svg-lines"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="1920"
            zoomAndPan="magnify"
            viewBox="0 0 1440 809.999993"
            height="1080"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              stroke-linecap="butt"
              transform="matrix(0.75, 0, 0, 0.75, 81.000002, 277.456705)"
              fill="none"
              stroke-linejoin="miter"
              d="M 264.276052 158.344193 L 267.901052 158.344193 L 254.286468 136.172317 L 254.286468 84.573356 L 317.593763 84.573356 L 317.593763 255.000448 L 253.572927 255.000448 L 209.229174 184.380652 L 205.364591 184.380652 L 219.218758 206.792112 L 219.218758 255.000448 L 155.911463 255.000448 L 155.911463 84.573356 L 216.781258 84.573356 Z M 385.755225 141.047317 L 385.755225 145.448359 L 466.833354 145.448359 L 466.833354 194.130653 L 385.755225 194.130653 L 385.755225 198.526486 L 466.833354 198.526486 L 466.833354 255.000448 L 322.44793 255.000448 L 322.44793 84.573356 L 466.833354 84.573356 L 466.833354 141.047317 Z M 559.07815 192.406694 L 555.213567 192.406694 L 568.109401 213.094195 L 541.598983 255.000448 L 467.296896 255.000448 L 521.093773 169.755652 L 471.458354 84.573356 L 545.223983 84.573356 L 570.072942 128.859816 L 594.921902 84.573356 L 668.453156 84.573356 L 618.520862 169.755652 L 672.317739 255.000448 L 598.546902 255.000448 Z M 813.515663 84.573356 L 881.458375 255.000448 L 813.515663 255.000448 L 775.291703 149.073359 L 757.041702 198.292111 L 788.42712 198.292111 L 808.875038 255.000448 L 670.375031 255.000448 L 737.067743 84.573356 Z M 921.625044 145.448359 L 883.640667 145.448359 L 883.640667 84.573356 L 1022.68234 84.573356 L 1022.68234 145.448359 L 984.697963 145.448359 L 984.697963 255.000448 L 921.625044 255.000448 Z M 1027.531299 255.000448 L 1027.531299 84.573356 L 1090.838594 84.573356 L 1090.838594 141.521275 L 1126.625054 141.521275 L 1126.625054 84.573356 L 1189.932349 84.573356 L 1189.932349 255.000448 L 1126.625054 255.000448 L 1126.625054 198.052528 L 1090.838594 198.052528 L 1090.838594 255.000448 Z M 1288.307354 259.875448 C 1275.468811 259.875448 1263.401102 257.516073 1252.104227 252.802531 C 1240.849018 248.08378 1230.963601 241.64628 1222.442767 233.479613 C 1213.921933 225.276488 1207.224016 215.708779 1202.349016 204.771278 C 1197.479224 193.792111 1195.041724 182.120236 1195.041724 169.755652 C 1195.041724 157.276484 1197.479224 145.604609 1202.349016 134.745233 C 1207.224016 123.849399 1213.921933 114.297315 1222.442767 106.09419 C 1230.963601 97.891065 1240.849018 91.453564 1252.104227 86.776481 C 1263.401102 82.05773 1275.468811 79.703564 1288.307354 79.703564 C 1301.104229 79.703564 1313.151105 82.05773 1324.44798 86.776481 C 1335.739648 91.453564 1345.651107 97.891065 1354.17194 106.09419 C 1362.687566 114.297315 1369.328191 123.849399 1374.0834 134.745233 C 1378.880275 145.604609 1381.276108 157.276484 1381.276108 169.755652 C 1381.276108 182.120236 1378.880275 193.792111 1374.0834 204.771278 C 1369.328191 215.708779 1362.687566 225.276488 1354.17194 233.479613 C 1345.651107 241.64628 1335.739648 248.08378 1324.44798 252.802531 C 1313.151105 257.516073 1301.104229 259.875448 1288.307354 259.875448 Z M 1263.932352 169.755652 C 1263.932352 176.41711 1266.291728 182.104611 1271.010478 186.818152 C 1275.72402 191.536903 1281.41152 193.891069 1288.06777 193.891069 C 1294.724021 193.891069 1300.432354 191.536903 1305.187563 186.818152 C 1309.984438 182.104611 1312.380271 176.41711 1312.380271 169.755652 C 1312.380271 163.099401 1309.984438 157.396276 1305.187563 152.641067 C 1300.432354 147.844192 1294.724021 145.448359 1288.06777 145.448359 C 1281.41152 145.448359 1275.72402 147.844192 1271.010478 152.641067 C 1266.291728 157.396276 1263.932352 163.099401 1263.932352 169.755652 Z M 1495.010489 158.344193 L 1498.635489 158.344193 L 1485.020905 136.172317 L 1485.020905 84.573356 L 1548.3282 84.573356 L 1548.3282 255.000448 L 1484.307363 255.000448 L 1439.963611 184.380652 L 1436.099028 184.380652 L 1449.953195 206.792112 L 1449.953195 255.000448 L 1386.6459 255.000448 L 1386.6459 84.573356 L 1447.515695 84.573356 Z M 1495.010489 158.344193 "
              stroke="#d9d9d9"
              stroke-width="1.673973"
              stroke-opacity="1"
              stroke-miterlimit="4"
            />
          </svg>
          <div className="flex absolute md:top-1/2 top-96 gap-10 drop-shadow-2xl z-10">
            {socialLinks.map((link, index) => (
              <a
                id="footer-social-link"
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-500 ease-in-out hover:text-white text-5xl font-bold font-['circular-web'] uppercase hover:drop-shadow-2xl hover:shadow-[#fff]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <p
          id="footer-text"
          className="text-center text-sm font-light md:text-left overflow-hidden absolute bottom-0 pb-7 left-1/2 transform -translate-x-1/2 font-['general']"
        >
          ©Nexus 2025. Made with ❤️ by Chirag Arora
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// Old footer
{
  /* <footer className="w-screen bg-blue-200 py-4 px-4 text-white">
  <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
    <p
      id="footer-text"
      className="text-center text-sm font-light md:text-left overflow-hidden"
    >
      ©Nexus 2025. All rights reserved
    </p>

    <div className="flex justify-center gap-4  md:justify-start">
      {socialLinks.map((link, index) => (
        <a
          id="footer-social-link"
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-500 ease-in-out hover:text-white"
        >
          {link.icon}
        </a>
      ))}
    </div>
  </div>
</footer> */
}

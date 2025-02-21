import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
  return (
    // <div
    //   id="sponsor"
    //   className="w-dvw h-[100px] border-1"
    //   // remove bg later
    // >
    //   <div className="list flex relative">
    //     {companies.map((company) => {
    //       return (
    //         <div key={company.name} className="item flex flex-col items-center absolute left-[100%] ">
    //           <img src={company.logo} alt={company.name} className="w-full" />
    //           <p>{company.name}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="py-12 sm:py-32 h-[80vh] flex justify-center items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 text-gray-900 font-['circular-web']">
          We are sponsored by some of the best companies in the world
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://tailwindui.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="https://tailwindui.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://tailwindui.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindui.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

// const clientId = process.env.BrandFetchClientId;

const companies = [
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com?height=100" },
  {
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com?height=100",
  },
  { name: "Google", logo: "https://logo.clearbit.com/google.com?height=100" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com?height=100" },
  { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com?height=100" },
  {
    name: "Facebook",
    logo: "https://logo.clearbit.com/facebook.com?height=100",
  },
  { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com?height=100" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com?height=100" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com?height=100" },
  { name: "Intel", logo: "https://logo.clearbit.com/intel.com?height=100" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com?height=100" },
  { name: "Sony", logo: "https://logo.clearbit.com/sony.com?height=100" },
  { name: "NVIDIA", logo: "https://logo.clearbit.com/nvidia.com?height=100" },
  { name: "Uber", logo: "https://logo.clearbit.com/uber.com?height=100" },
  { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com?height=100" },
  { name: "Spotify", logo: "https://logo.clearbit.com/spotify.com?height=100" },
  { name: "TikTok", logo: "https://logo.clearbit.com/tiktok.com?height=100" },
  {
    name: "LinkedIn",
    logo: "https://logo.clearbit.com/linkedin.com?height=100",
  },
  { name: "Slack", logo: "https://logo.clearbit.com/slack.com?height=100" },
  { name: "Zoom", logo: "https://logo.clearbit.com/zoom.us?height=100" },
];

// const companies = [
//   {
//     name: "Apple",
//     logo: `https://cdn.brandfetch.io/apple.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Microsoft",
//     logo: `https://cdn.brandfetch.io/microsoft.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Google",
//     logo: `https://cdn.brandfetch.io/google.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Amazon",
//     logo: `https://cdn.brandfetch.io/amazon.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Tesla",
//     logo: `https://cdn.brandfetch.io/tesla.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Facebook",
//     logo: `https://cdn.brandfetch.io/facebook.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Netflix",
//     logo: `https://cdn.brandfetch.io/netflix.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Adobe",
//     logo: `https://cdn.brandfetch.io/adobe.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "IBM",
//     logo: `https://cdn.brandfetch.io/ibm.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Intel",
//     logo: `https://cdn.brandfetch.io/intel.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Samsung",
//     logo: `https://cdn.brandfetch.io/samsung.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Sony",
//     logo: `https://cdn.brandfetch.io/sony.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "NVIDIA",
//     logo: `https://cdn.brandfetch.io/nvidia.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Uber",
//     logo: `https://cdn.brandfetch.io/uber.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Airbnb",
//     logo: `https://cdn.brandfetch.io/airbnb.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Spotify",
//     logo: `https://cdn.brandfetch.io/spotify.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "TikTok",
//     logo: `https://cdn.brandfetch.io/tiktok.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "LinkedIn",
//     logo: `https://cdn.brandfetch.io/linkedin.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Slack",
//     logo: `https://cdn.brandfetch.io/slack.com/w/512/h/116/logo?c=${clientId}`,
//   },
//   {
//     name: "Zoom",
//     logo: `https://cdn.brandfetch.io/zoom.us/w/512/h/116/logo?c=${clientId}`,
//   },
// ];

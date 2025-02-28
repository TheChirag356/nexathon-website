import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg py-24 text-blue-50 sm:overflow-hidden">
        <div className="flex flex-col items-center text-center z-20">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Nexathon
          </p>

          <AnimatedTitle
            title="j<b>o</b>in us in this <br /> epic journey"
            className="special-font !md:text-[6.2rem] w-full font-['zentry'] !text-5xl !font-black !leading-[.9]"
          />

          <Button
            title="Register for Hackathon"
            containerClass="mt-10 cursor-pointer"
            to="/register"
          />
        </div>
        <div class="absolute inset-0 h-full w-full bg-blue-200 bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:6rem_4rem] -z-[1]"></div>
      </div>
    </div>
  );
};

export default Contact;

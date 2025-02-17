import AnimatedTitle from "../components/AnimatedTitle";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <div className="grid place-content-center bg-black h-screen w-screen selection:text-yellow-300">
      <div className="text-center">
        <AnimatedTitle title="404" containerClass="!text-9xl" />

        <p className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white font-['circular-web']">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-400 mb-3 w-[75%] text-center mx-auto font-['general']">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
        </p>
        <Button title="Go Back Home" to="/" containerClass="px-5 py-3" />
      </div>
    </div>
  );
};

export default ErrorPage;

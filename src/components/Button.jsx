import { Link } from "react-router-dom";

const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass = "",
  to = "/",
  disabled = false,
}) => {
  return (
    <Link
      to={disabled ? "#" : to}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <button
        id={id}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black 
          ${disabled ? "cursor-not-allowed opacity-50" : ""}
          ${containerClass}`}
        disabled={disabled}
      >
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-['general'] text-xs uppercase">
          <div>{title}</div>
        </span>
        {rightIcon}
      </button>
    </Link>
  );
};

export default Button;

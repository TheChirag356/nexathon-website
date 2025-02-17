import { devfolioLink } from "../constants";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    window.location.href = devfolioLink;
  }, []);

  return null;
};

export default Register;

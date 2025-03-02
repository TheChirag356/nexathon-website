import { hackathonLink } from "../constants";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    window.location.href = hackathonLink;
  }, []);

  return null;
};

export default Register;

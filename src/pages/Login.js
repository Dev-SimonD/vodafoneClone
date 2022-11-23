import React, { useEffect } from "react";
import classes from "./Login.module.css";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={classes.main}>Login</div>;
}

export default Login;

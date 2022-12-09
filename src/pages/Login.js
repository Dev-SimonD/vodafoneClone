import React, { useEffect } from "react";
import classes from "./Login.module.css";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className={classes.main}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Login Page
    </div>
  );
}

export default Login;

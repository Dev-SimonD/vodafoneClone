import React, { useEffect } from "react";
import classes from "./Internet.module.css";

function Internet() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={classes.main}>Internet</div>;
}

export default Internet;

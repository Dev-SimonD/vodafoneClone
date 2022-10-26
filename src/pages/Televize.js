import React, { useEffect } from "react";
import classes from "./Televize.module.css";

function Televize() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={classes.main}>Televize</div>;
}

export default Televize;

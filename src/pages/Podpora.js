import React, { useEffect } from "react";
import classes from "./Podpora.module.css";

function Podpora() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={classes.main}>Podpora</div>;
}

export default Podpora;

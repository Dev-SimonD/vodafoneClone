import React, { useEffect } from "react";
import classes from "./Telefony.module.css";

function Telefony() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={classes.main}>Telefony</div>;
}

export default Telefony;

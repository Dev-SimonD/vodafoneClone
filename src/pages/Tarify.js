import React, { useEffect } from "react";
import classes from "./Tarify.module.css";

function Tarify() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={classes.main}>Tarify</div>;
}

export default Tarify;

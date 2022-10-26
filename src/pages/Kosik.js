import React, { useEffect } from "react";
import classes from "./Kosik.module.css";

function Kosik() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className={classes.main}>Kosik Page 2</div>;
}

export default Kosik;

import React, { useEffect } from "react";
import classes from "./Kosik.module.css";

function Kosik() {
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
      Kosik Page
    </div>
  );
}

export default Kosik;

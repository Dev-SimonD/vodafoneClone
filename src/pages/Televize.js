import React, { useEffect } from "react";
import classes from "./Televize.module.css";

function Televize() {
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
      Televize Page
    </div>
  );
}

export default Televize;

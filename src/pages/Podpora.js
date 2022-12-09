import React, { useEffect } from "react";
import classes from "./Podpora.module.css";

function Podpora() {
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
      Podpora Page
    </div>
  );
}

export default Podpora;

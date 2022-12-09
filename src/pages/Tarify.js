import React, { useEffect } from "react";
import classes from "./Tarify.module.css";

function Tarify() {
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
      Tarify Page
    </div>
  );
}

export default Tarify;

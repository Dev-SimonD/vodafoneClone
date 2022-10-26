import React, { useEffect } from "react";
import classes from "./Search.module.css";
function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ height: "60vh" }} className={classes.main}>
      <input
        autoFocus
        className={classes.myInput}
        placeholder="Zadejte, co hledate..."
      />
    </div>
  );
}

export default Search;

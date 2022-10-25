import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return <div className={`row ${classes.card}`}>{props.children}</div>;
}

export default Card;

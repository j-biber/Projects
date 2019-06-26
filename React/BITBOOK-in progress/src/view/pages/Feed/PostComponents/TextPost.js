import React from "react";
import "./PostComponents.css";

const TextPost = props => {
  const { text } = props;
  return <p>{text}</p>;
};

export { TextPost };

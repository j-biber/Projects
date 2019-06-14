import React from "react";


const ImagePost = props => {
  const { src } = props;
  return <img src={src} alt="img" />;
};

export { ImagePost };

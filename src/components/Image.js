import React from "react";

const Image = (props) => {
  return <img alt="" loading="lazy" {...props} src={props.src} />;
};

export default Image;

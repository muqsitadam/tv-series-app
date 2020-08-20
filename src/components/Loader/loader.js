import React from "react";
import loaderPic from "../../assets/loader.gif";

const Loader = (props) => {
  return (
    <div>
      <img src={loaderPic} alt="Loader Icon" style={{ width: 25 }} />
    </div>
  );
};

export default Loader;

import React from "react";

const File = () => {
  return (
    <div className="file-item">
      <div className="checkbox">
        <input className="input" type="checkbox" />
      </div>

      <span className="icon mdi mdi-video"></span>

      <p className="filename">Fast and Furious.mp4</p>
    </div>
  );
};

export default File;

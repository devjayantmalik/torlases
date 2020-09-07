import React from "react";

const File = () => {
  return (
    <div className="file-item">
      <div className="checkbox">
        <input className="input" type="checkbox" />
      </div>

      <span className="icon mdi mdi-folder"></span>

      <p className="filename">thumbnails</p>
    </div>
  );
};

export default File;

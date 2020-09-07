import React from "react";

const TorrentItem = () => {
  return (
    <div className="torrent-item">
      <div className="avatar">
        <span className="icon mdi mdi-download-network-outline"></span>
      </div>

      <div className="info">
        <h2 className="torrent-name">Fast and Furious Speed 7</h2>
        <p>2 GB</p>
      </div>
      <small className="speed">20 KB/s</small>
    </div>
  );
};

export default TorrentItem;

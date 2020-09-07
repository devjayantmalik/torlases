import React from "react";
import Files from "../components/Files";
import Folders from "../components/Folders";

const TorrentDetail = () => {
  return (
    <div className="torrent-details">
      <p className="filename">Fast and furious Speed 7 HD 720P Dual Audio</p>

      <div className="columns mt-30">
        <section className="column">
          <Files />
        </section>

        <section className="column">
          <Folders />
        </section>
      </div>
    </div>
  );
};

export default TorrentDetail;

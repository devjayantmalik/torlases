import React from "react";
import TorrentItem from "./TorrentItem";
import { Link } from "react-router-dom";

const TorrentList = () => {
  return (
    <div>
      <div className="sidebar-header">
        <h1 className="title">Torrents</h1>

        <Link to="/">
          <span className="icon mdi mdi-dots-vertical"></span>
        </Link>
      </div>
      <TorrentItem />
      <TorrentItem />
    </div>
  );
};

export default TorrentList;

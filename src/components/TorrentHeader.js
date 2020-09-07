import React from "react";
import { Link } from "react-router-dom";

const TorrentHeader = () => {
  return (
    <header className="auth-navbar torrent-header">
      <div className="navbar-brand">
        <Link to="/">
          <span className="icon mdi mdi-arrow-left mr-10"></span>
          <span className="title">Torrents Stats</span>
        </Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">
            <span className="icon mdi mdi-share-variant-outline"></span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon mdi mdi-sprout"></span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon mdi mdi-form-textbox"></span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon mdi mdi-google-drive"></span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon mdi mdi-download"></span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon mdi mdi-delete"></span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default TorrentHeader;

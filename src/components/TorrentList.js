import React from "react";
import TorrentItem from "./TorrentItem";

const TorrentList = ({ items, title }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>

      {items.map((item, index) => (
        <TorrentItem item={item} key={index} />
      ))}
    </div>
  );
};

export default TorrentList;

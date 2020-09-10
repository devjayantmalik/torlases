import React, { useState, useEffect } from "react";
import TorrentList from "../components/TorrentList";
import TorrentHeader from "../components/TorrentHeader";
import TorrentDetails from "../components/TorrentDetail";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [torrentSelected, setTorrentSelected] = useState(false);

  useEffect(() => {
    window.onresize = (e) => {
      if (window.innerWidth < 850) {
        setIsMobile(true);
        setTorrentSelected(true);
      } else {
        setIsMobile(false);
      }
    };
  }, []);

  if (isMobile && !torrentSelected) {
    return (
      <div className="dashboard">
        <section className="left-sidebar">
          <TorrentList />
        </section>
      </div>
    );
  }

  if (isMobile && torrentSelected) {
    return (
      <div className="dashboard">
        <section className="content">
          <TorrentHeader />
          <TorrentDetails />
        </section>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <section className="left-sidebar">
        <TorrentList />
      </section>
      <section className="content">
        <TorrentHeader />
        <TorrentDetails />
      </section>
    </div>
  );
};

export default Dashboard;

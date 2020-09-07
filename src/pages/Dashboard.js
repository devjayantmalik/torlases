import React from "react";
import TorrentList from "../components/TorrentList";
import TorrentHeader from "../components/TorrentHeader";
import TorrentDetails from "../components/TorrentDetail";

const Dashboard = () => {
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

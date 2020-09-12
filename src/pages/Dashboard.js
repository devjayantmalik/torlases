import React from "react";
import TorrentList from "../components/TorrentList";
import AddTorrent from "../components/AddTorrent";
import { getTorrents } from "../store/torrents/actions";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getTorrents();
  }

  render() {
    const { pending, completed } = this.props;
    return (
      <div>
        <section>
          <AddTorrent />
        </section>
        <section>
          {!!completed.length && (
            <TorrentList title="Completed Torrents" items={completed} />
          )}
          {!!pending.length && (
            <TorrentList title="Pending Torrents" items={pending} />
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.torrents);
  const { completed, pending } = state.torrents;
  return { completed, pending };
};

export default connect(mapStateToProps, { getTorrents })(Dashboard);

import React, { useState } from "react";
import ErrorCard from "./ErrorCard";
import { connect } from "react-redux";
import { addTorrent } from "../store/torrents/actions";

const AddTorrent = ({ addTorrent }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isMagnet = !!url.startsWith("magnet:");
    const isFile = !!url.endsWith(".torrent");
    if (!isMagnet && !isFile) {
      setError("Invalid torrent url provided.");
      return;
    }

    if (isMagnet) {
      addTorrent(url, (err) => {
        setError(err.message);
        return;
      });
      return;
    }

    if (isFile) {
      setError(
        "Torrent files are not supported yet. You can provide only magnet links."
      );
    }

    return false;
  };

  return (
    <div>
      <ErrorCard error={error} />
      <form
        className="login-form"
        onSubmit={handleFormSubmit}
        style={{ margin: 10 }}
      >
        <div>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter magnet  url or .torrent file url"
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addTorrent })(AddTorrent);

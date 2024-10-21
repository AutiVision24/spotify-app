import React, { useState, useEffect } from "react";
import axios from "axios";
import "../TopTracks.css"; // Pastikan untuk membuat file CSS ini

function TopTracks({ token }) {
  const [tracks, setTracks] = useState([]);
  const [timeRange, setTimeRange] = useState("medium_term");

  useEffect(() => {
    const getTopTracks = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/me/top/tracks`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              time_range: timeRange,
              limit: 10,
            },
          }
        );
        setTracks(response.data.items);
      } catch (error) {
        console.error("Error fetching top tracks:", error);
      }
    };

    getTopTracks();
  }, [token, timeRange]);

  return (
    <div className="top-tracks-container">
      <h2>Your Top 10 Tracks</h2>
      <div className="time-range-selector">
        <label>
          <input
            type="radio"
            value="short_term"
            checked={timeRange === "short_term"}
            onChange={(e) => setTimeRange(e.target.value)}
          />
          Last Month
        </label>
        <label>
          <input
            type="radio"
            value="medium_term"
            checked={timeRange === "medium_term"}
            onChange={(e) => setTimeRange(e.target.value)}
          />
          Last 6 Months
        </label>
        <label>
          <input
            type="radio"
            value="long_term"
            checked={timeRange === "long_term"}
            onChange={(e) => setTimeRange(e.target.value)}
          />
          All Time
        </label>
      </div>
      <div className="tracks-list">
        {tracks.map((track) => (
          <div className="track-item" key={track.id}>
            <img
              src={track.album.images[0].url}
              alt={track.name}
              className="track-image"
            />
            <div className="track-info">
              <h3 className="track-name">{track.name}</h3>
              <p className="track-artists">
                {track.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopTracks;

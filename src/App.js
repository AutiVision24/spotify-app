// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import TopTracks from "./components/TopTracks";
import { getTokenFromUrl } from "./Spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    console.log("Hash from URL:", hash); // Tambahkan ini
    console.log("Access token:", _token); // Tambahkan ini

    if (_token) {
      setToken(_token);
      localStorage.setItem("spotify_token", _token);
      console.log("Token set in state and localStorage"); // Tambahkan ini
    } else {
      console.log("No token found in URL"); // Tambahkan ini
    }
  }, []);

  console.log("Current token state:", token); // Tambahkan ini

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={token ? <Navigate to="/top-tracks" /> : <Login />}
          />
          <Route
            path="/top-tracks"
            element={token ? <TopTracks token={token} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

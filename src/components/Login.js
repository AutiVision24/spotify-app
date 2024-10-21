import React from "react";
import { loginUrl } from "../Spotify";

function Login() {
  console.log("Login URL in component:", loginUrl); // Tambahkan ini

  return (
    <div className="login">
      <h1>Spotify Top 10 Tracks</h1>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;

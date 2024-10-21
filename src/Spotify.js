// src/spotify.js
const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-app-ir.vercel.app/";
const clientId = "4f4657a5fc034bbb973ab95e6d089344";

const scopes = ["user-top-read"];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

console.log("Login URL:", loginUrl); // Tambahkan ini

export const getTokenFromUrl = () => {
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});

  console.log("Parsed hash:", hash); // Tambahkan ini
  return hash;
};

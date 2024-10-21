# Spotify Top 10 Tracks React App

This application displays the user's top 10 tracks from Spotify using the Spotify Web API and OAuth 2.0 for authentication.

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a Spotify Developer account and register your application to get a Client ID
4. Replace `YOUR_CLIENT_ID` in `src/spotify.js` with your actual Client ID
5. Set the redirect URI in your Spotify Developer dashboard to `http://localhost:3000/`
6. Run `npm start` to start the development server

## Usage

1. Click the "LOGIN WITH SPOTIFY" button to authenticate
2. Once logged in, you'll see your top 10 tracks
3. Use the dropdown to change the time range for the top tracks

## Technologies Used

- React
- React Router
- Axios for API requests
- Spotify Web API

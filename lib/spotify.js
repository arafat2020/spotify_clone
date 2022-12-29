import SpotifyWebApi from "spotify-web-api-node";

const scops = [
  "user-read-recently-played",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  // "ugc-image-upload",
  // "user-read-playback-state",
  // "user-modify-playback-state",
  // "user-read-currently-playing",
  // "app-remote-control",
  // "streaming",
  // "playlist-read-private",
  // "playlist-read-collaborative",
  // "playlist-modify-private",
  // "playlist-modify-public",
  // "user-follow-modify",
  // "user-follow-read",
  // "user-read-playback-position",
  "user-top-read",

  "user-library-modify",
  "user-library-read",
  // "user-read-email",
  // "user-read-private",
].join(",");

const parms = {
  scope: scops,
};

const quaryPramString = new URLSearchParams(parms);

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${quaryPramString.toString()}`;
// console.log(LOGIN_URL);

export const spiApi = new SpotifyWebApi({
  clientId: process.env.NEXT_CLIENT_ID,
  clientSecret: process.env.NEXT_CLIENT_SECRET,
});

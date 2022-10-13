
import config from '../../auth_config.json';
const { domain, clientId } = config;
export const environment = {
  firebaseConfig: {
    apiKey: "AIzaSyCo6rDxkNNTmLjYF1z4BXB3-NROxdfKfTU",
    authDomain: "triggered-f9073.firebaseapp.com",
    databaseURL: "https://triggered-f9073-default-rtdb.firebaseio.com",
    projectId: "triggered-f9073",
    storageBucket: "triggered-f9073.appspot.com",
    messagingSenderId: "400237670922",
    appId: "1:400237670922:web:1e656a16d4afede78725f3",
    measurementId: "G-WG2ZYR04SR"
  },
  tmdb_api_key: '1f7e681b9c2246549159a83d86c95a41',
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};

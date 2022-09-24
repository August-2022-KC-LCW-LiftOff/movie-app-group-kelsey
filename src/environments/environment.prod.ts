export const environment = {
  firebase: {
    projectId: process.env.PROJECT_ID,
    appId: process.env.APP_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    measurementId: process.env.MEASUREMENT_ID,
  },
  production: true,
};
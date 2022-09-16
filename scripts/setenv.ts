const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const yargs = argv.environment;
const isProduction = yargs === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
import config from '../../auth_config.json';
const { domain, clientId } = config;
export const environment = {
  firebase: {
    projectId: '${process.env.PROJECT_ID}',
    appId: '${process.env.APP_ID}',
    storageBucket: '${process.env.STORAGE_BUCKET}',
    apiKey: '${process.env.API_KEY}',
    authDomain: '${process.env.AUTH_DOMAIN}',
    messagingSenderId: '${process.env.MESSAGING_SENDER_ID}',
    measurementId: '${process.env.MEASUREMENT_ID}',
  },
  tmdb_api_key: '${process.env.TMBD_API_KEY}',
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
});


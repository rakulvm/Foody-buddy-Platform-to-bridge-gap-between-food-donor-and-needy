const admin = require("firebase-admin");
const serviceAccount = require("create a folder Secrets and import your service account private json key ");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "Enter your unique DataBase Url"
});

module.exports = admin;

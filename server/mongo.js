const mongoose = require('mongoose');
const env = require('./env/environment');

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true&replicaSet=globaldb`;
//const mongoUri = "mongodb://127.0.0.1:27017/MERNjs";

function connect() {
  return mongoose.connect(mongoUri, { useMongoClient: true});
}

module.exports = {
  connect,
  mongoose
};

const mongoClient = require('mongodb').MongoClient
const assert = require('assert')
const mongodbUrl = 'mongodb://localhost:27017'

let DB_GRAPHQL

function connectDb () {
  return new Promise(function (resolve, reject) {
    mongoClient.connect(mongodbUrl, function (err, client) {
      assert.equal(null, err)
      if (err) {
        console.log('Connected fail to mongodb!')
        reject(err)
      } else {
        console.log('Connected successfully to mongodb!')
        const db = client.db('graphql')
        resolve(db)
      }
    })
  })
}

async function getDb () {
  if (!DB_GRAPHQL) {
    DB_GRAPHQL = await connectDb()
  }

  return DB_GRAPHQL
}

module.exports.getDb = getDb

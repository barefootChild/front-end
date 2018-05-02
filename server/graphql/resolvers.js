const { getDb } = require('../mongodb')

const resolvers = {
  Query: {
    result () {
      return (async () => {
        const db = await getDb()
        const collection = db.collection('collection_graphql')
        const data = await collection.find({}, {projection: {_id: 0}}).toArray()

        return {code: data ? 1 : 0, students: data, msg: data ? '请求成功!' : '请求失败!'}
      })()
    }
  },
  Result: {
    students (root) {
      return root.students
    },
    code (root) {
      return root.code
    },
    msg (root) {
      return root.msg
    }
  },
  Student: {
    name (root) {
      return root.name
    },
    age (root) {
      return root.age
    },
    height (root) {
      return root.height
    },
    weight (root) {
      return root.weight
    },
    sex (root) {
      return root.sex
    },
    timestamp (root) {
      return root.timestamp
    }
  }
}

module.exports = resolvers

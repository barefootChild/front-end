const typeDefs = [`
  type Query {
    result: Result
  }

  type Result {
    students: [Student]
    code: Int,
    msg: String
  }
  type Student {
    name: String,
    age: String,
    height: String,
    weight: String,
    sex: String,
    timestamp: String
  }

  schema {
    query: Query
  }
`]

module.exports = typeDefs

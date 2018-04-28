const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const cors = require('koa2-cors')
const { getDb } = require('./mongodb')

const app = new Koa()
const router = new Router()
app.use(koaBody())
app.use(cors())

router.get('/list', async ctx => {
  const db = await getDb()
  const collection = db.collection('collection_graphql')
  const data = await collection.find({}, {projection: {_id: 0}}).toArray()
  if (data) {
    ctx.body = { code: 1, data, msg: '成功!' }
  } else {
    ctx.body = { code: -1, msg: '失败!' }
  }
})

router.post('/data', async ctx => {
  const params = {...ctx.request.body}
  const db = await getDb()
  const collection = db.collection('collection_graphql')
  const r = await collection.insertOne({...params, timestamp: `${Date.now()}`})
  if (r.insertedCount) {
    ctx.body = { code: 1, msg: '成功!' }
  } else {
    ctx.body = { code: -1, msg: '失败!' }
  }
})

app.use(router.routes())
  .use(router.allowedMethods())

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} ${ctx.path} ${ctx.origin} - ${ms}ms`)
})

app.use(async ctx => {
  ctx.body = 'Hello World!'
})

app.listen(3001)

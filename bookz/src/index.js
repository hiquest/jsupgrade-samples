const koa = require('koa')
const logger = require('./middleware/logger')
const router = require('./middleware/router')
const db = require('./db')

// create the application
const app = new koa()

app.use(logger)

const routes = [
  ['GET', '/', handleRoot],
  ['GET', '/books', books],
  ['GET', '/books/:id', book],
]

// use some middleware
app.use(router(routes))

// start listening
app.listen(4000)

async function handleRoot(ctx) {
  ctx.body = { success: true }
}

async function books(ctx) {
  try {
    const data = await db.from('books')
    ctx.body = {
      results: data,
    }
  } catch (e) {
    console.log(e)
  }
}

async function book(ctx, id) {
  const b = await db
    .from('books')
    .where({ id: id })
    .first()
  ctx.body = { result: b }
}

const Koa = require('koa')
const app = new Koa()
const path = require('path')
const static = require('koa-static')

const staticPath = './static'

app.use(static(
  path.join(__dirname, staticPath)
))

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
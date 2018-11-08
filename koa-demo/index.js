const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const views = require('koa-views')
let Router = require('koa-router')
const app = new Koa()

const staticPath = './static'

let home = new Router()

home.get('/', async ctx => {
    let title = 'hello koa2'
    await ctx.render('index', {
      title,
    })
})

let login = new Router()
login.get('/', async ctx => {
    await ctx.render('login')
})


app.use(static(
    path.join(__dirname, staticPath)
))


app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))


// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())
// router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
console.log('localhost:3000')
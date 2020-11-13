const Koa = require('koa')
const path = require('path')
const combineRouters = require('koa-combine-routers')
const bodyParser = require('koa-bodyparser')
const koaStatic =  require('koa-static')
const compress = require('koa-compress')

/*
test
*/



const app = new Koa()
// 处理跨域
// 导入koa2-cors模块
const cors = require('koa2-cors')
//配置 cors 的中间件 
app.use(
  cors()
)
const userRouter = require('../router/userRouter')
// app.use(async (ctx)=>{
//     ctx.body="login"
// })
/*
测试test
*/
// const Router = require('@koa/router')
// const userRouter = new Router()
// userRouter.post('/user/user/login',(ctx)=>{
//    ctx.body="post请求"
// })
// app.use(userRouter.routes()); //作用：启动路由
// app.use(userRouter.allowedMethods());


// 使用压缩中间件  但凡超过2k大小就进行压缩 
app.use(compress({
   threshold:2048
}))
// 使用bodyParser中间件 请求体 注意使用的顺序
app.use(bodyParser())

// 使用koaStatic中间价
app.use(koaStatic(path.join(__dirname,'../dist')))

// 使用combineRouters中间价
const unifiedRouters = combineRouters(
    userRouter
)()
app.use(unifiedRouters)
// app.use(userRouter.routes())
module.exports = app
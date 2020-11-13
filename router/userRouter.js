const Router = require('@koa/router')
const userRouter = new Router()
const userController = require('../controller/userController')
const userServerUrlMappingResolver = require('../config/server/userServerUrlMappingResolver')
// const userRequestUrlMappingResolver = require('../config/client/userRequestUrlMappingResolver')

// 路由映射（服务端）
userRouter.post(userServerUrlMappingResolver.login,userController.login)
// userRouter.post(userServerUrlMappingResolver.login,(ctx)=>{
//     console.log('----登陆擦做-----')
//     ctx.body="登陆擦做"
// })
module.exports = userRouter
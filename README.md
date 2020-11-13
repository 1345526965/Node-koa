# Node-koa
关于node中的koa项目结构部署 （客户端-node-服务端）

项目结构
app 启动的入口文件
common  公共
config  node层的客户端路径   node层服务端路径
dist 单页面的入口
script  脚本 用于执行app.js文件

npm块
1 路由 @koa/router

2 koa-json  对url的解析  当不是get请求时,其他请求时，数据封装在body中

3 koa-static 对静态文件的处理  

4 koa-compress 请求体压缩

5 koa-combine-routers 多个模块的路由处理、组合

6 axios 用于node向服务器请求

7 jsonfile json配置文件解析

8 qs 查询字符串解析器

9 koa2-cors 跨域处理

10 nodemon自动重启server

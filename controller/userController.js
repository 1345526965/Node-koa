const qs = require('qs')
const baseHttpClient = require('../common/baseHttpClient')
const userRequestUrlMappingResolver = require('../config/client/userRequestUrlMappingResolver')
/*
{
    result:{
        code:0,
        description:'success'
    },
    data:{

    }
}
*/
class UserController{
    async login(ctx){
             console.log('----------进入登陆方法--------------')
             const requestUrl = userRequestUrlMappingResolver.login
             console.log(ctx.request.body)
             
             const response =await baseHttpClient.doHttpPostRequest(ctx,requestUrl,JSON.stringify(ctx.request.body))
             ctx.body=response
             //  对axios请求返回的结果做解析
            // const responseData = qs.parse(response.data)
            // const responseDataCode = responseData.result.code
            //login success
            // if(0 === responseDataCode){
            //     ctx.body = responseData
            // }else{
            //     ctx.body = responseData
            // }

    }
}
module.exports = new  UserController()
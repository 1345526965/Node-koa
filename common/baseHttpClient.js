const axios = require('axios')


const projectConfig = require('../util/projectConfigResolver')
const hostBaseUrl = projectConfig.hostBaseUrl

axios.defaults.baseURL = `http://${hostBaseUrl}`;
exports.doHttpGetRequest = function(ctx,requestUrl,params){
    return this.doHttpRequest(ctx,requestUrl,params,'GET')
}
exports.doHttpPostRequest = function(ctx,requestUrl,params){
    console.log('-----------post方法---------',ctx.request.body)
    return this.doHttpRequest(ctx,requestUrl,params,'POST')
}
exports.doHttpPutRequest = function(ctx,requestUrl,params){
    return this.doHttpRequest(ctx,requestUrl,params,'PUT')
}
exports.doHttpDeleteRequest = function(ctx,requestUrl,params){
    return this.doHttpRequest(ctx,requestUrl,params,'DELETE')
}


exports.doHttpRequest = function(ctx,requestUrl,params,method){
       console.log('-------公共方法--------')
    if('GET' === method){
        console.log('---------get方法-----------',axios({
            baseURL:hostBaseUrl,
            url:requestUrl,
            method:'GET',
            params:params
        }))
        return axios({
            baseURL:hostBaseUrl,
            url:requestUrl,
            method:'GET',
            params:params
        })
    }else if('PUT' === method || 'POST' === method || 'DELETE' === method ){
        console.log('--------数据其他方法结果--------', typeof(hostBaseUrl),requestUrl,method,params)
       return axios({         
            url:requestUrl,
            method:method,
            data:params
       }).then((data)=>{
             console.log('-----请求4000-----',data)
       }).catch((e)=>{
          console.log('-----请求4000异常-----',e)
       })

    }
}
/*
对projectConfig.json进行解析 
*/
const path = require('path')
const jsonfile = require('jsonfile')
module.exports = jsonfile.readFileSync(path.join(__dirname,'../projectConfig.json'))
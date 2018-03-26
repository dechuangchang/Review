// console.log( encodeURIComponent(process.env.order) )



if(encodeURIComponent(process.env.order)=='server'){
    const webpackServer =  require("./webpack_config/webpackServer.js")
    module.exports = webpackServer
}

if(encodeURIComponent(process.env.order)=='dev'){
    const webpackDev =  require("./webpack_config/webpackDev.js")
    module.exports = webpackDev
}
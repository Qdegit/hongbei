const proxy = require("http-proxy-middleware");
module.exports = (app)=>{
    app.use("/home",proxy({
        target:"https://www.hongbeibang.com",
        changeOrigin:true
    }))
}
var http = require('http');
const Koa = require('koa')
const app = new Koa()
const router = require('./router')

app.use(router.routes(), router.allowedMethods())

http.createServer(app.callback()).listen(8080, () => {
    console.log("ok")
});


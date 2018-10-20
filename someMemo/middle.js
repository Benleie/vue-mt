var http = require('http');
const Koa = require('koa')
const app = new Koa()

const pv = require('../middleware/pv')
const m1 = require('../middleware/m1')
const m2 = require('../middleware/m2')
const m3 = require('../middleware/m3')

app.use(pv('hhh'));
app.use(m1())
app.use(m2())
app.use(m3())

http.createServer(app.callback()).listen(8080, () => {
    console.log("ok")
}); 


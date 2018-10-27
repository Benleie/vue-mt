练习vue2,koa2,mongoose

## koa2
+ async  await
+ 中间件处理的洋葱结构
+ Postman用ctx.query,这个query不会被koa2中间件处理；curl用ctx.request.body换取，body是被middleware添加上去的

##mongoose
+ mongoose如何与koa2结合,通过router
+ mongoose连接数据库在model中进行。
+ curl -d 'name=benleie&age=23' http://localhost:8080/signup/show
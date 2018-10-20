使用mongoose连接本地的mongod服务，koa2作为服务器，使用浏览器/curl/Postman发起请求。

curl发起一个POST请求：`curl -d 'name=benleie&age=23' http://localhost:3000/signup/show`
Postman和浏览器的请求：`http://localhost:8080/signup/show?name=guxiaolan&age=21`,用ctx.query获取。


## signup
为一般的(也就是主目录下的)app使用，可以ctx.request.body接受curl的POST请求。



## app.js
app.js没有用到koa2的任何插件，相当地精简。因此对ctx也没有添加属性，比如ctx.request.body.
所以使用Postman和app.js交互。

其model部分为router.js,用ctx.query获取数据。







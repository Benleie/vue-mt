## 一些操作
+ export PORT=8080 && npm run dev
+ PORT=8080 npm run dev
+ "start": "cross-env NODE_ENV=production babel-node server/index.js"



## 6.2
+ .babelrc babel-node   babel-preset-es2015(babel-preset-env)
+ sass-loader  node-sass

## 7.1
#### 模板设计
#### 组件设计 
+ 城市服务组件 使用vuex + SSR 一次请求即可获取city数据
+ 用户数据&状态

## 7.2
+  error ReferenceError: document is not defined    关闭cache或者对其进行filter

## 8
### 8.9
+ 无法获取element icon，依然是cache的问题

## 9 
+ http://cp-tools.cn/sign



##代码回看
8.3 utils/axios utils/passport      
8.4 interface/users:signup      
8.5 users其他      
8.6 server/index      
8.7 pages/register:sendMsg      
8.8 pages/register:register  pages/login      
8.9 public/header/user.vue    exit.vue      
9.1 定位服务
+ utils/geo.js 获取sign  
+ store/geo部分     


+ 访问首页，为何会获取users/getUser
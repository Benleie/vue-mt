
### old version
+ install @vue/cli-init    3.0.5
+ vue init nuxt-community/koa-template learn2
+ nuxt 降到1.4.2
+ nuxt-link   `<nuxt/>`
+ pages即是路由,layouts即是公共组件
+ 内置vuex

### 
search.vue
#### `[Vue warn]: Duplicate keys detected: 'o'. This may cause an update error`
引入多个值时，用括号`<li v-for="(item, id) in list" :key="id">`而不是中括号，更不是大括号

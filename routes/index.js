const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/test', async (ctx, next) => {
  console.time('test');
  const a = await new Promise((resolve,reject) => {
    setTimeout(() => {
      console.timeEnd('test');
      resolve('aaa');
    }, 1000);
  })
  const b = 123;
  ctx.body = {
    needSet:a,
    noNeed:b
  }
})

module.exports = router

//for curl-- ctx.request.body 

const router = require('koa-router')()
const Person = require('./models/person')

router.prefix('/signup')

router.get('/', function (ctx, next) {
    console.log(ctx)
    ctx.body = 'this is a signup response!'
})

router.post('/show', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = {
        url: ctx.request.url,
        person: ctx.request.body
    }
})
router.post('/add', async (ctx, next) => {
    const person = new Person({
        name: ctx.request.body.name,
        age: ctx.request.body.age
    })

    let code = 0;
    try {
        await person.save();
        console.log('saved!')
    } catch (error) {
        code = -1;
    }

    ctx.body = {
        data: person.name,
        code
    }
})


module.exports = router

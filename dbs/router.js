const router = require('koa-router')()
const Person = require('./models/person')

router.prefix('/signup')

router.get('/', function (ctx, next) {
    console.log(ctx)
    ctx.body = 'this is a signup response!'
})

router.post('/show', (ctx, next) => {
    console.log(ctx.query);
    ctx.body = {
        url: ctx.request.url,
        person: ctx.query
    }
})
router.post('/add', async (ctx, next) => {
    const person = new Person({
        name: ctx.query.name,
        age: ctx.query.age
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

router.post('/get', async function(ctx){
    const result = await Person.findOne({ name: ctx.query.name})
    const results = await Person.find({ name: ctx.query.name})
    ctx.body = {
        result,
        results
    }
})

router.post('/update', async function(ctx){
    const result = await Person.where({
        name: ctx.query.name
    }).update({
        age: ctx.query.age
    });

    ctx.body = {
        newAge: result.age
    }
})


module.exports = router

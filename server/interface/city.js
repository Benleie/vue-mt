import Router from 'koa-router'

const router = new Router({
	prefix: "/city"
})

router.get('/list', async (ctx) => {
	console.log(ctx)
	ctx.body = {
		list:  [
		 'New York',
		 'Los Angles',
		 'Moskow'
		]
	}
})

router.get('/', async () => {
	console.log("this is city")
})
export default router;
function m1() { console.log('m1--->') }

module.exports = function () {
    return async (ctx, next) => {
        console.log("m1 start");
        m1();
        await next();
        console.log("m1 end")
    }
}
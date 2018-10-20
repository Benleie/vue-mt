function m2() { console.log('m2--->') }

module.exports = function () {
    return async (ctx, next) => {
        console.log("m2 start");
        m2();
        await next();
        console.log("m2 end")
    }
}
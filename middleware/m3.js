function m3() { console.log('m3--->') }

module.exports = function () {
    return async (ctx, next) => {
        console.log("m3 start");
        m3();
        await next();
        console.log("m3 end")
    }
}
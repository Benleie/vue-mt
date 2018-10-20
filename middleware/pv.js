function pv(ctx, words){
    console.log('pv-' + words, ctx.path)
}

module.exports = function(words){
    return async (ctx, next) => {
        pv(ctx, words);
        await next();
    }
}
function fn()
{
    console.log("i was called from lib");
}
let a = 20;
let private = 40;

//inbuilt keyword

module.exports = {
    fxn : fn,
    varName:a
}
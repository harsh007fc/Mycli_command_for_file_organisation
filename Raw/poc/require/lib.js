function fn()
{
    console.log("i was called from lib");
}
let a = 20;
let private = 40;
//private cant be expoeted via module.exports

//inbuilt keyword

module.exports = {
    fxn : fn,
    varName:a
}
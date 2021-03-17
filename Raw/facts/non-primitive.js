//Function ,Arrays,objects

function hello(param)
{
    console.log("Greetings everyone with",param);
    let rVal = Math.random()<0.5?"good":false;
    return rVal;
}

hello("hi");
let rVal = hello("hola");
console.log(rVal);

/************************************ */
//(classical oops)
//car->blueprint->new car develop
//object->class->object
//prototypal oops
//car -> object->object
//objects
///json->javacript object notation
let obj = 
{
    name : "Steve",
    age : 35,
    lastName : "rogers",
    address : {
        city:"nangal",
        state : "punjab"
    },
    isavenger:true,
    movies : ["civil war","first avenger","jatt and juliet"],
    sayhi:function(param)
    {
        console.log("cap says hi",param);
        return "return blessings";
    }
}
console.log("/88888888888888888888888888888888/");
//loop

for(let key in obj)
{
    console.log("key :",key," | value:",obj[key]);
}
console.log("/88888888888888888888888888888888/");
//GET

let key ="address";
console.log("address object",obj[key]);
console.log("address object",obj.address);
console.log("address object",obj.address.city);
console.log("address object",obj.address.state);
console.log("address object",obj.movies[1]);
console.log("function is inside an object", obj.sayhi("i am param"));

    
console.log("/88888888888888888888888888888888/");
//SET->UPDATE
console.log(obj);
obj.friends = ["ram","sita","hamunan ji"]
obj.age = 365;
obj[key]["state"] = "delhi";
console.log(obj);
console.log("/88888888888888888888888888888888/");

//DELETE

delete obj.movies;
console.log(obj);

function sayhi()
{
    return 30;
}
let a= 10+sayhi();
console.log(a);
console.log("hello",sayhi());

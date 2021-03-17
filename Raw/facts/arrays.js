//java -> array is a collection of homogenous data types
//ajva ->array is a collection of anything
//there is no array -> array emulated
function sayHi(){
    console.log("i am outer sayHi");
}
let arr = [
    1 ,
    1.1 ,
    "string" ,
    null ,
    true ,
    {
        name:"harsh",
        lastname:"sharma",
        age:20
    },
    [1,2,3,4,5,6],
    function sayHi(){
        console.log("hello from sayhi");
        return "hello";
    }
];
console.log(arr);
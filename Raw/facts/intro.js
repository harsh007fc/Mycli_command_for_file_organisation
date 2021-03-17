//no main
//top->bottom,left->right
console.log("hello pp:)");
//variable declare
let varName;
//statically defined-> variable types->statically typed
//js->dynamically typed languages
//int varname
//initialize
//types -> primitives ->number -> string,boolean,null,undefined
varName= 10;
varName=true;
varName= "string hai yeh";
console.log(varName);
let number= 73;
let flag = true;
for(let i=2;i*i<=number;i++)
{
    if(number%i==0)
    {
        flag=false;
        break;
    }
}
if(flag==true)
{
    console.log(number,"is a prime number");
}
else
{
    console.log(number,"is not a prime number");
}

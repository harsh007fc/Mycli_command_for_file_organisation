//commands ->
//view --tree --flat

           //organise ->same folder,multiple folder
           //help


//node mycli.js view dirname mode
//node mycli.js organise -/foldername
//node mycli.js help

//skeleton code

let helpfnObj=require("./commands/help");
let viewfnObj=require("./commands/view");
let organiseFnObj=require("./commands/organise");
let input = process.argv.slice(2);
let cmd = input[0];
switch(cmd)
{
    case "view":
        viewfnObj.viewFn(input[1],input[2]);
        //console.log("View command is executed");
        break;
    case "organise":
        organiseFnObj.organiseFn(input[1]);
        //console.log("Organise command is executed");
        break;
    case "help":
        helpfnObj.helpFn();
                break;
    default:
        console.log("Wrong command entered");
        break;    
}
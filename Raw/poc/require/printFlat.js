// file system ->noidejs modules
//google
let fs = require("fs");
let path = require("path");
function isFileChecker(dirPath)
{
  return fs.lstatSync(dirPath).isFile();
}

function readContent(dirPath)
{
    return fs.readdirSync(dirPath);
}

function viewFlat(dirPath)
{
    //path ->file / folder

    let isFile = isFileChecker(dirPath);
    if(isFile == true)
    {
         console.log(dirPath+ "*");
    }
    else
    {
        //directory 
        //console kro path 
            //print path
            console.log(dirPath);
            //get children
            let childrens = readContent(dirPath);
            //call for vieaw flat
            for(let i = 0;i < childrens.length; i++)
            {
                viewFlat(path.join(dirPath,childrens[i]));
            }
    }
}

function viewTree(dirPath,indent)
{
    //path ->file / folder

    let isFile = isFileChecker(dirPath);
    if(isFile == true)
    {
         console.log(indent+path.basename(dirPath)+ "*");
    }
    else
    {
        //directory 
        //console kro path 
            //print path
            console.log(indent,path.basename(dirPath));
            //get children
            let content = readContent(dirPath);
            //call for vieaw flat
            for(let i = 0;i < content.length; i++)
            {
                viewTree(path.join(dirPath,content[i]),indent+"\t");
            }
    }
}

viewTree("d10","");



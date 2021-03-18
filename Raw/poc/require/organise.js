let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function dirCreator(dirpath)
{
    if(fs.existsSync(dirpath)==false)
    {
        
        fs.mkdirSync(dirpath);
    }
}
let fs = require("fs");
let path = require("path");
// mkdir for async //mkdirSync it is for sync

let input  = process.argv.slice(2);

let dirpath  = input[0];
//.......................................................
let orgFilePath = path.join(dirpath,"organised_files");
// fs.mkdirSync(orgFilePath);
dirCreator(orgFilePath);
for(let key in types)
{
    let innerdirPath = path.join(orgFilePath,key);
    dirCreator(innerdirPath);
    // fs.mkdirSync(innerdirPath);
}

//others
let otherPath = path.join(orgFilePath,"others");
dirCreator(otherPath);
// fs.mkdirSync(otherPath);
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//treaverse
//identify the fileor directory 
//copy

function getDirectoryName(dirpath)
{
    // console.log(dirpath);
    let strArr = dirpath.split(".");
    let ext = strArr.pop();
    
    for(let key in types)
    {
        for(let i=0;i<types[key].length;i++)
        {
            if(types[key][i]==ext)
            {
                return key;
            }
        }
    }
    return "others"; 
} 
function isFileChecker(dirpath)
{
  return fs.lstatSync(dirpath).isFile();
}
function readContent(dirpath)
{
    return fs.readdirSync(dirpath);
}


function copyFiletoFolder(dirpath, destFolder) {
    let orgFileName = path.basename(dirpath);
    let destFilePath = path.join(destFolder, orgFileName);

    fs.copyFileSync(dirpath, destFilePath);
}



function OrganiseDir(dirpath)
{
    let isFile = isFileChecker(dirpath);
    if(isFile == true)
    {
        //copy
        let folderName = getDirectoryName(dirpath)
         console.log(dirpath,"->",folderName);
         //other
         let destFolder = path.join(orgFilePath,folderName);
         copyFiletoFolder(dirpath,destFolder);
    }
    else
    {
        
            // console.log(indent,path.basename(dirpath));
           
            let content = readContent(dirpath);
             
            for(let i = 0;i < content.length; i++)
            {
                let childPath = path.join(dirpath, content[i]);
                OrganiseDir(childPath);
            }
    }
}


OrganiseDir(dirpath);





// module.exports = 
// {
//     organiseFn : organiseExecutor
// }




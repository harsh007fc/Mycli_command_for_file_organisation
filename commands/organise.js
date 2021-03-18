let fs = require("fs");
let path = require("path");
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
let orgFilePath;
function organiseFn(dirpath)
{
     orgFilePath = path.join(dirpath, "organised_files");
    dirCreator(orgFilePath);
    for (let key in types) {
        let innerdirPath = path.join(orgFilePath, key);
        dirCreator(innerdirPath);
    }

    let otherPath = path.join(orgFilePath, "others");
    dirCreator(otherPath);
    OrganiseDir(dirpath);
}  
// let orgFilePath = path.join(dirpath,"organised_files");

function getDirectoryName(dirpath)
{
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
        let content = readContent(dirpath);
             
        for(let i = 0;i < content.length; i++)
        {
            let childPath = path.join(dirpath, content[i]);
            OrganiseDir(childPath);
        }
    }
}



module.exports = {
    organiseFn:organiseFn
}


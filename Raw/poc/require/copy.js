let fs = require("fs");
let path = require("path");
// fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'));
let input = process.argv.slice(2);
let srcFilePath = input[0];
let destFolderPath = input[1];
console.log("i run");
//code to print base name of a file
let orgFileName =  path.basename(srcFilePath);
fs.copyFileSync(srcFilePath,path.join(destFolderPath,orgFileName));
console.log("i run");
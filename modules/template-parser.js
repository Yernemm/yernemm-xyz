const fs = require('fs');
const templateDir = './templates/';
module.exports = parseHTML
var allTemplates = [];

fs.readdir(templateDir, (err, files) => {

    files.forEach(f => {
        let tempData = fs.readFileSync(templateDir + f, 'utf8');
        let templateObj = {
            file: f,
            data: tempData
        }
        allTemplates.push(templateObj)
    })

  });

function parseHTML(data, callback){
    var dataToParse = data.toString();
    allTemplates.forEach(temp => {
        let insertTag = '<!--insert:' + temp.file + '-->';
        if(dataToParse.includes(insertTag)){
            console.log("Insert " + temp.file);
            dataToParse = dataToParse.replace(new RegExp(insertTag, 'g'), temp.data)
        }
    })
   callback(dataToParse)
}
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
    allTemplates.forEach(temp => {
        if(data.includes('<!--insert:' + temp.file + '-->')){
            console.log("Insert " + temp.file);
            data = data.replace(new RegExp(temp.file), temp.data)
        }
    })
   callback(data)
}
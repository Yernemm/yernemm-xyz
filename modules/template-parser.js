const fs = require('fs');
const templateDir = './templates/';
const tempProjects = require("./modules/tempProjects.js");
module.exports = parseHTML
var allTemplates = [];
var specialTags = [];

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


  addSpecial('projects', tempProjects.ps)

  function addSpecial(tag, data){
      let stringData = data.toString();
    let templateObj = {
        tag: tag,
        data: stringData
    }
    specialTags.push(templateObj);
  }

function parseHTML(data, callback){
    var dataToParse = data.toString();
    allTemplates.forEach(temp => {
        let insertTag = '<!--insert:' + temp.file + '-->';
        if(dataToParse.includes(insertTag)){
            console.log("Insert " + temp.file);
            dataToParse = dataToParse.replace(new RegExp(insertTag, 'g'), temp.data)
        }
    })
    specialTags.forEach(temp => {
        let insertTag = '<!--special:' + temp.tag + '-->';
        if(dataToParse.includes(insertTag)){
            console.log("Special " + temp.tag);
            dataToParse = dataToParse.replace(new RegExp(insertTag, 'g'), temp.data)
        }  
    })
   callback(dataToParse)
}
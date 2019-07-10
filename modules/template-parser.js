const fs = require('fs');
const templateDir = './templates/';
module.exports = parseHTML


function parseHTML(data, callback){

    fs.readdir(templateDir, (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
      let parsedData = ""
   callback(parsedData)
}
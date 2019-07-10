const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const m = require("./shared/methods.js");
const templateParser = require("./modules/template-parser.js");

const port = 8080;
const siteDir = './site'
const page404 = fs.readFileSync(siteDir + '/404.html');
const indexPage = siteDir + '/index.html';

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

const server = http.createServer((req, res) => {
    let ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    console.log('[' + m.formDate() + '] (' + ip + ') ' + req.url);

    var q = url.parse(req.url, true);
    var filename = siteDir + q.pathname;

    //Display index.html if no file name.
    if (q.pathname == '/')
        filename = indexPage
        

    //Redirect non-static media requests to static.
    if (q.pathname.startsWith("/media/")) {
        let newpath = '/static' + q.pathname;
        console.log("Redirect to " + newpath)
        res.writeHead(302, {
            'Location': newpath
        });
        res.end();
    } else {


        var reqpath = req.url.toString().split('?')[0];
        var file = path.join(filename, reqpath.replace(/\/$/, '/index.html'));
        var type = mime[path.extname(file).slice(1)] || 'text/html';


        findPage(filename, (data, head, errorType = false)  => {
            
            if(errorType)
            res.writeHead(head, {'Content-Type': 'text/html'});
        else
            res.writeHead(head, {'Content-Type': type});
            templateParser(data, (stuff) => {})
            res.write(data);
            res.end();
        })
    }
})

function findPage(filename, callback){
    let data = 'Error.'
    let head = 404
    //First, try to find the full page name
    fs.readFile(filename, (error, data)=>{
        if(error){
            //Not found. Let's try sticking a /index.html at the end.
            let newFilename = filename; 
            if (filename.endsWith('/'))
                newFilename += 'index.html'
            else
                newFilename += '/index.html'

                fs.readFile(newFilename, (error, data)=>{
                    if(error){
                        //Still not found. Let's try just adding a .html at the end

                        fs.readFile(filename + '.html', (error, data)=>{
                            if(error){
                                //Not found after all this. Probably does not exist.
                                //Display 404

                                callback(page404, 404, true);

                            }else{
                                callback(data, 200);
                            }
                        })

                    }else{
                        callback(data, 200);
                    }
                })

        } else{
            callback(data, 200)
        }
       
    })

   
}


server.listen(port, '127.0.0.1', (error) => {
    if (error) {
        console.error('An error occurred', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})
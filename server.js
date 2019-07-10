const http = require('http');
	const fs = require('fs');
	const url = require('url');
	
	const port = 8080;
	const siteDir = './site'
	const page404 = fs.readFileSync(siteDir + '/404.html');
	const indexPage = siteDir + '/index.html';
	
	const server = http.createServer((req,res)=>{
        var ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	    console.log('[' + Date.now() + '] (' + ip + ') ' + req.url);
	
	    var q = url.parse(req.url, true);
	    var filename = siteDir + q.pathname;
	
	    //Display index.html if no file name.
	    if(q.pathname == '/')
	    filename = indexPage
	
	    findPage(filename, (data,head)=>{
	        res.writeHead(head, {'Content-Type': 'text/html'});
	        res.write(data);
	        res.end();
	    })
	
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
	
	                                callback(page404, 404);
	
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
	
	server.listen(port, (error)=>{
	    if(error){
	        console.error('An error occurred', error)
	    } else {
	        console.log('Server is listening on port ' + port)
	    }
	}) 
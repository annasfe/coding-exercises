const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function(req, res){
    if (req.method === 'GET'){

        let fileUrl = req.url;
        if(req.url=== "/") fileUrl = "index.html";

        if (path.extname(fileUrl) !== '.html'){
            res.writeHead(400, {'Content-Type':'text/html'});
            res.write('<html><body><h1>Error 400: Bad Request</h1></body></html>');
            res.end();
            return;
        }

        if(req.url=== "/"){
            fs.readFile("index.html", (err, data)=>{
                if(err) {
                    console.log("could not read file " + err)
                } else {
                    res.writeHead(200, { "Content-type": "text/html" });
                    res.write(data);
                    res.end();
                }
            });
        }

        if(req.url=== "/contact.html"){
            fs.readFile("contact.html", (err, data)=>{
                if(err) {
                    console.log("could not read file " + err)
                } else {
                    res.writeHead(200, { "Content-type": "text/html" });
                    res.write(data);
                    res.end();
                }
            });
        }
    }
})


server.listen(3000, "localhost", (err) => {
    if(err) console.log("Something went wrong " + err);
    else console.log("Server is listening on port 3000...")
});
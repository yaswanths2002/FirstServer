// Creating Our First Server
const http = require("https");
const port = 8081;
https.createServer((req,res) => {
    res.writeHead(200,{"content-Type":"text/html"});
    res.write("<h4>Hello World!!This is my First Server </h4>");
    res.end();

})
.listen(port,() =>{
    console.log(`My Node Server Started at ${port}`);
});

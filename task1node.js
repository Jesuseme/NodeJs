const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer(function(req, res) {

 res.statusCode = 200;

 res.setHeader('Content-Type', 'text/html');
/**/
 res.write('Please enter your message here <br><html><body>');
 res.write('<form method="post" action="message.txt">');
 res.write('<input type="text" id ="inputHere"> <br>');
 res.write('<input type="submit" value="submit"> <br>');
 res.write('</form></body></html>');


 var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    console.log('POSTed: ' + body);
    
    res.end('sumbit when finshed');
  });

 
 fs.writeFile('message.txt', body , function(err){
     if (err) throw err; 
 })

 
});

server.listen(port, hostname, function() {

 console.log('Server running at http://'+ hostname + ':' + port + '/');

});
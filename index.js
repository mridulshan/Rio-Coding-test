// index.js

var projects = require('./data-store');
var http = require('http');
const { type } = require('os');
const { stringify } = require('querystring');

// For GET requsests, send the data from the projects array. 
http.createServer(function (req, res) {
  if(req.url.slice(10)!=''){
    let index = 0;
    let check = false;
    for (; index < projects.length; index++) {
      var element = projects[index];
      if(element.id==req.url.slice(10)){
        res.writeHead(200);
        res.write(JSON.stringify(element));
        check = true;
        break;
      }
      
    }
    if(index==projects.length && check==false){
      res.writeHead(404);
      res.write(JSON.stringify({"id":"Does not exists."}));
    }
    
  }else if(req.url==='/projects/'){
    console.log("projects");
    res.writeHead(400);
    res.write(JSON.stringify({"message":'BAD REQUEST'}));

  }else{
    res.writeHead(404);
    res.write(JSON.stringify({"message":'BAD REQUEST'}));
  }
  
  
  res.end();
  
   
}).listen(8000);








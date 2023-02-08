const express = require("express");
const app = express();
var fs = require('fs');
app.use(express.static(__dirname));
const port = 3001;
app.use(express.public('public'));

app.get('', function(request, response){
  response.sendFile(__dirname,'index.html');
});

  app.listen(port, () => {
    console.log(`Running on port ${port}!`);
  });
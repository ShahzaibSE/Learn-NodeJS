var app = require("./app");
var port = process.env.PORT|3000;
var server = app.listen(port,(data)=>{
    console.log(`|================Listening on: ${server.address().port}===================|`)
})
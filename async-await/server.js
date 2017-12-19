'use strict'

const app = require('./app');

// ------  //
let port = 3000 | process.env.PORT;
var server = app.listen(port, function(){
    console.log(`Listening on port : ${server.address().port}`);
})
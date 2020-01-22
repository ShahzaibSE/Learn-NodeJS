var app  = require('./app');

var port = process.env.PORT | 65536;
var server = app.listen(port, ()=> {
    console.log(`Listening on port ${server.address().port}`);
});
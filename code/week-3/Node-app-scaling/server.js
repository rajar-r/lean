
var express = require('express');
var app = express();

app.get('/', function (req, resp) {
    resp.send('Hello World');
});

app.listen(3000);
console.log('Application Running...');


process.on('message', function (msg) {
    if (msg === 'shutdown') {
        console.log('sudowning....');
        //close_all_connection()
        // delete_cache()
        // server.close()
        process.exit(0);
    }
 });

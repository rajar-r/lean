
var express = require('express');

var app = express();
const cluster = require('cluster');

if (cluster.isMaster) {

    //..
    const numCPUs = require('os').cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker) { 
        console.log('worker died - ' + worker.id);
        cluster.fork();
    });



} else {

    console.log('Hello from worker ' + cluster.worker.id);

    app.get('/', function (req, resp) {
        console.log(cluster.worker.id + " processng request");
        resp.send('Hello World again');
    });

    app.listen(3000);
    console.log('Application Running...');

}
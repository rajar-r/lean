
var EventEmitter = require('events').EventEmitter;
var util = require('util');

class Door extends EventEmitter{
    constructor() {
        super();
    }
    open() {
        console.log('door opened...');
        this.emit('door-event', {action:'open',num:12,floor:2});
    }
    close() {
        
    }
}

//util.inherits(Door,EventEmitter);

var door = new Door();



//------------------------------------------------

// Light

door.on('door-event', function (event) {
    console.log('Light ON');
 });

//------------------------------------------------



door.open();


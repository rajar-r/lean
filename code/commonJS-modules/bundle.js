(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var greet = require('./greet');
greet('en');
greet('es');
},{"./greet":4}],2:[function(require,module,exports){


function greet() {
    console.log("Hello...");
}

module.exports = greet;
},{}],3:[function(require,module,exports){


function greet() {
    console.log("Ola...");
}

module.exports = greet;
},{}],4:[function(require,module,exports){


// var name = "Nag";
// var age = 32;

// function sayName() {
//     console.log(name);
// }

// function sayAge() {
//     console.log(age);
// }

// module.exports.sayName = sayName;
// module.exports.sayAge = sayAge;

// module.exports = {
//     sayName: sayName,
//     sayAge:sayAge
// };

// ES6
// module.exports = {
//     sayName,
//     sayAge
// };


//---------------------------------

var en = require('./en');
var es = require('./es');

function greet(lang) {
    if (lang === 'en') {
        en();
    }
    if (lang === 'es') {
        es();
    }
}

module.exports = greet;


},{"./en":2,"./es":3}]},{},[1]);

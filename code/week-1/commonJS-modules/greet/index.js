

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


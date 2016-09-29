
var _ = require('underscore');

var util = {
    add: function (n1,n2) {
        return n1 + n2;
    },
    findMaxArray: function (arr) {
        return _.max(arr);
    },
     findMinArray: function (arr) {
        return _.min(arr);
    }
};


module.exports = util;
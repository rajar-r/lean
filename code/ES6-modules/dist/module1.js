define(['exports'], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.changeName = changeName;
    let projectId = 123;
    let projectName = 'JS-project';

    let person = { name: 'Nag' };

    function changeName(name) {
        exports.person = person = { name: name };
    }

    exports.projectId = projectId;
    exports.projectName = projectName;
    exports.person = person;
});
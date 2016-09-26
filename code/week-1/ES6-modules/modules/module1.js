
"use strict"

let projectId = 123;
let projectName = 'JS-project';

let person = {name:'Nag'};

export function changeName(name) {
    person = {name:name};
}

export {projectId, projectName,person}



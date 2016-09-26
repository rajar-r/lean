define(['./module1'], function (_module) {
  'use strict';

  //projectId = 0;

  // person = null;

  //person.name = 'Ria';

  (0, _module.changeName)('Ria');
  //import {projectId as id, projectName as name} from "./module1"

  // console.log(projectId);
  // console.log(projectName);

  // console.log(id);
  // console.log(name);

  // import {projectId as id, projectName as name} from "./module1"


  //-----------------------------------------------


  // import {default as projName , projectId}  from './module1'
  // console.log(projectId+":"+projName);

  //-----------------------------------------------

  // import {projectId, projectName} from './module1';
  // console.log(projectId);
  // console.log(projectName);

  //--------------------------------------------------

  // import * as mod from './module1';
  // console.log(mod);

  console.log(_module.person.name);

  //console.log(projectId);

  //--------------------------------------------------
});
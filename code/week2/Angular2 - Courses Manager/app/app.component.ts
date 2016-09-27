

import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
   <h2 class="page-header"> {{title}} </h2>
   <ul class="nav nav-pills">
     <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
     <li><a routerLink="/courses" routerLinkActive="active">Courses</a></li>
   </ul>
  <hr/>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title:string='Lean stack'
}

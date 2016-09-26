import { Component } from '@angular/core';


// Model
export class Course {
    id: number;
    name: string
}

const COURSES: Course[] = [
    { id: 11, name: 'HTML' },
    { id: 12, name: 'CSS' },
    { id: 13, name: 'JS' },
    { id: 14, name: 'jQuery' },
    { id: 15, name: 'Angular' },
    { id: 16, name: 'React' }
];


@Component({
    selector: 'my-app',
    template: `<h2 class="page-header"> {{title}} </h2> 
                 <ul class="courses">
                    <li *ngFor="let course of courses">
                        <span class="badge">{{course.id}}</span>{{course.name}}
                    </li>
                 </ul>   

                 <div class="panel panel-default"> 
                    <div class="panel-heading">{{course.name}} details</div>
                    <div class="panel-body">
                        Id: {{ course.id}} <hr/>
                        <input [(ngModel)]="course.name"/>
                    </div>
                 </div>`,
    styles: [`
                .selected {
                background-color: #CFD8DC !important;
                color: white;
                }
                .courses {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
                }
                .courses li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
                }
                .courses li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
                }
                .courses li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
                }
                .courses .text {
                position: relative;
                top: -3px;
                }
                .courses .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
                }`]
}
)
export class AppComponent {
    title: string = 'Lean stack';
    course: Course={id: 21, name:'Angular-2' };
    courses= COURSES;
}
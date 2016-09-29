

import { Component } from '@angular/core';
import {Course} from './course';
import {CourseService} from './course.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'my-course-list',
  templateUrl: './app/courses.component.html',
  styleUrls: ['./app/courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;

  constructor(private router: Router, private courseService: CourseService) { }

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  getCourses(): void {
    this.courseService.getCourses().then(courses => this.courses = courses);
  }

  ngOnInit(): void {
    this.getCourses();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCourse.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.courseService.create(name)
      .then(hero => {
        this.courses.push(hero);
        this.selectedCourse = null;
      });
  }

  delete(hero: Course): void {
  this.courseService
      .delete(hero.id)
      .then(() => {
        this.courses = this.courses.filter(h => h !== hero);
        if (this.selectedCourse === hero) { this.selectedCourse = null; }
      });
}



}

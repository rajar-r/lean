import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { CourseSearchService } from './course-search.service';
import { Course } from './course';
@Component({
  moduleId: module.id,
  selector: 'course-search',
  templateUrl: 'course-search.component.html',
  styleUrls: [ 'course-search.component.css' ],
  providers: [CourseSearchService]
})
export class CourseSearchComponent implements OnInit {
  heroes: Observable<Course[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private heroSearchService: CourseSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Course[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Course[]>([]);
      });
  }
  gotoDetail(course: Course): void {
    let link = ['/detail', course.id];
    this.router.navigate(link);
  }
}

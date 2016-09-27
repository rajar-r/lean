"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var course_search_service_1 = require('./course-search.service');
var CourseSearchComponent = (function () {
    function CourseSearchComponent(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    CourseSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    CourseSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.heroSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    CourseSearchComponent.prototype.gotoDetail = function (course) {
        var link = ['/detail', course.id];
        this.router.navigate(link);
    };
    CourseSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course-search',
            templateUrl: 'course-search.component.html',
            styleUrls: ['course-search.component.css'],
            providers: [course_search_service_1.CourseSearchService]
        }), 
        __metadata('design:paramtypes', [course_search_service_1.CourseSearchService, router_1.Router])
    ], CourseSearchComponent);
    return CourseSearchComponent;
}());
exports.CourseSearchComponent = CourseSearchComponent;
//# sourceMappingURL=course-search.component.js.map
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
var course_service_1 = require('./course.service');
var router_1 = require('@angular/router');
var DashBoardComponent = (function () {
    function DashBoardComponent(courseService, router) {
        this.courseService = courseService;
        this.router = router;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getCourses()
            .then(function (courses) { return _this.courses = courses.slice(1, 5); });
    };
    DashBoardComponent.prototype.gotoDetail = function (course) {
        var link = ['/detail', course.id];
        this.router.navigate(link);
    };
    DashBoardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css'],
            providers: [course_service_1.CourseService]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, router_1.Router])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashborad.component.js.map
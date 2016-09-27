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
var course_1 = require('./course');
var course_service_1 = require('./course.service');
var CourseDetailComponent = (function () {
    function CourseDetailComponent(courseService, route) {
        this.courseService = courseService;
        this.route = route;
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.courseService.getCourse(id)
                .then(function (course) { return _this.course = course; });
        });
    };
    CourseDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    CourseDetailComponent.prototype.save = function () {
        var _this = this;
        this.courseService.update(this.course)
            .then(function () { return _this.goBack(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', course_1.Course)
    ], CourseDetailComponent.prototype, "course", void 0);
    CourseDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-course-detail',
            templateUrl: './app/course-detail.component.html',
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, router_1.ActivatedRoute])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
exports.CourseDetailComponent = CourseDetailComponent;
//# sourceMappingURL=course-detail.component.js.map
"use strict";
var router_1 = require('@angular/router');
var courses_component_1 = require('./courses.component');
var dashborad_component_1 = require('./dashborad.component');
var course_detail_component_1 = require('./course-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'courses',
        component: courses_component_1.CoursesComponent
    },
    {
        path: 'dashboard',
        component: dashborad_component_1.DashBoardComponent
    },
    {
        path: 'detail/:id',
        component: course_detail_component_1.CourseDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
"use strict";
var router_1 = require('@angular/router');
var courses_component_1 = require('./courses.component');
var course_detail_component_1 = require('./course-detail.component');
var dashboard_component_1 = require('./dashboard.component');
var appRoutes = [
    {
        path: 'courses',
        component: courses_component_1.CoursesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: course_detail_component_1.CourseDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
"use strict";
var testing_1 = require('@angular/core/testing');
var home_component_1 = require('./home.component');
describe('a home component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                home_component_1.HomeComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([home_component_1.HomeComponent], function (HomeComponent) {
        component = HomeComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=home.component.spec.js.map
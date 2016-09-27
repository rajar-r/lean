"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var courses = [
            { id: 11, name: 'JavaScript' },
            { id: 12, name: 'Angular' },
            { id: 13, name: 'React' },
            { id: 14, name: 'Ember' },
            { id: 15, name: 'Babel' },
            { id: 16, name: 'Node' },
            { id: 17, name: 'Express' },
            { id: 18, name: 'MongoDB' }
        ];
        return { courses: courses };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
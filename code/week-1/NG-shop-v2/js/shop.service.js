


(function () {

    var module = angular.module('shop.service', ['ngResource']);

    module.factory('Product', function ($q, $http,$resource) {
        
        // var url = 'data/products.json';
        var url="http://localhost:3000/api/products";
        
        // var service = {
        //     loadAll: function () {
        //         var defer = $q.defer();

        //         var promise = $http.get(url);
        //         promise.then(function (resp) {
        //             defer.resolve(resp.data);
        //         }, function (error) {
        //             defer.reject(error);
        //         });

        //         return defer.promise;
        //     }
        // };
        // return service;

        var Product=$resource(url)
        return Product;

    });

})();
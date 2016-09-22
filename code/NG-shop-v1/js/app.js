

var module = angular.module('shop', []); 

//------------------------------------------


// Model ( load from derver using API-call)

var items = [
    {
        name: 'Laptop',
        price: 198000,
        desc: 'new mac pro'
    },
    {
        name: 'Mobile',
        price: 19000,
        desc: 'new iphon7'
    }
]

//------------------------------------------

// Controller ( provide behav and model to View )

module.controller('ShopController', function ($scope) {   // servlet
    //this.products = items;
    $scope.products = items;  // request.setAttribute('products',items);
});


//------------------------------------------

// ng-app="shop"

// angular.element(document).ready(function() {
//       angular.bootstrap(document.getElementById('box1'), ['shop']);
// });

//------------------------------------------






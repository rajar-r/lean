

var module = angular.module('shop', []); 

//------------------------------------------


// Model ( load from derver using API-call)

var items = [
    {
        name: 'Laptop',
        price: 198000,    // number
        desc: 'new mac pro',
        canBuy: false,
        notAvailable: false,
        discount:10000
    },
    {
        name: 'Mobile',
        price: 19000,
        desc: 'new iphon7',
        canBuy: true,
        notAvailable: false,
    }
]

//------------------------------------------

// Controller ( provide behav and model to View )

module.controller('ShopController', function ($scope) {   // servlet
    //this.products = items;
    $scope.products = items; // View-Model // request.setAttribute('products',items);
});

module.controller('TabsController', function ($scope) {

    // ng-init="tab=1"
    $scope.tab = 1;
    $scope.changeTab = function (tabIndex) {
        $scope.tab = tabIndex;
    }
    $scope.isTabSelected=function(tabIndex){
        return $scope.tab === tabIndex;
    }

 });


//------------------------------------------

// Filter

module.filter('priceDiscount', function () { 
    return function (originalPrice, discount) {
        if (discount) {
            return originalPrice - discount;
        } else {
            return originalPrice - 1;
        }    
    }
});


//------------------------------------------

// ng-app="shop"

// angular.element(document).ready(function() {
//       angular.bootstrap(document.getElementById('box1'), ['shop']);
// });

//------------------------------------------






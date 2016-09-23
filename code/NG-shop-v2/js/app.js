

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
        discount: 10000,
        reviews:[]
    },
    {
        name: 'Mobile',
        price: 19000,
        desc: 'new iphon7',
        canBuy: true,
        notAvailable: false,
        reviews:[]
    }
]

//------------------------------------------

// Controller ( provide behav and model to View )

module.controller('ShopController', function ($scope) {   // servlet
    //this.products = items;
    $scope.products = items; // View-Model // request.setAttribute('products',items);
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

// Directives

module.directive('productTitle', function () { 
    return {
        restrict: 'E',
        scope: false,
        replace:true,
        templateUrl: 'templates/product-title.html',
        link: function (scope,ele,attrs) {
            ele.on('mouseenter', function () { 
                ele.css('background-color','#def');
            });
            ele.on('mouseleave', function () { 
                ele.css('background-color','#fff');
            });
        }
    }
});
module.directive('productTabs', function () { 
    return {
        restrict: 'E',
        scope:false,
        templateUrl: 'templates/product-tabs.html',
        controller: function ($scope) {
             // ng-init="tab=1"
            $scope.tab = 1;
            $scope.changeTab = function (tabIndex) {
                $scope.tab = tabIndex;
            }
            $scope.isTabSelected=function(tabIndex){
                return $scope.tab === tabIndex;
            }
        }
    }
});

module.directive('productReviewList', function () { 
    return {
        restrict: 'E',
        scope:false,
        templateUrl: 'templates/product-review-list.html',
    }
});

module.directive('productReviewForm', function () { 
    return {
        restrict: 'E',
        scope:false,
        templateUrl: 'templates/product-review-form.html',
        // controller="controllername",
        controller: function ($scope) {
            $scope.newReview = {};
            $scope.addNewReview = function (product) {
               // send review-data with product-id
                product.reviews.push($scope.newReview);
                $scope.newReview = {};
            }
        }
    }
});


//------------------------------------------

// ng-app="shop"

// angular.element(document).ready(function() {
//       angular.bootstrap(document.getElementById('box1'), ['shop']);
// });

//------------------------------------------






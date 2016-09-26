


(function(){


var module = angular.module('shop', ['shop.service']); 


//------------------------------------------

// Controller ( provide behav and model to View )

module.controller('ShopController', function ($scope,Product) {   // servlet
    //this.products = items;
    //$scope.products = items; // View-Model // request.setAttribute('products',items);
    
    //var promise=itemsService.loadAll();  // async...
    // promise.then(function (items) { 
    //     $scope.products = items;
    // }, function (error) { 
    //     $scope.message = error;
    // });

    Product.query(function(items){
         $scope.products = items;
    });
    
});

//-----------------------------------------------

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

            this.commonBehav = function () {
                console.log('.....');
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
        require:'^productTabs',
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
        },
        link: function (scope,ele,attr,controller,transclude) {
            controller.commonBehav();
        }
    }
});


//------------------------------------------

// ng-app="shop"

// angular.element(document).ready(function() {
//       angular.bootstrap(document.getElementById('box1'), ['shop']);
// });

//------------------------------------------




})();




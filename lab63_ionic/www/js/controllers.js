angular.module('lab63.Controllers',
    [
        'ionic',
        'lab63.Services'
    ]
)

.controller('lab63.ListController', function($scope,  $state, users, products) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = users;

        $scope.getList = function() {

            $state.transitionTo('userList');

        };

        $scope.getListProduct = function() {

            $state.transitionTo('productList');

        };

})

.controller('lab63.ViewController', function($scope, users) {

    console.log(users);

    $scope.data_information = users;
})

.controller('lab63.ListUserController', function($scope,lists) {

        $scope.lists = lists.user_list.query(function(data){

            console.log(data);
        });

})

.controller('lab63.ListProductController', function($scope,lists_P) {

        $scope.lists_P = lists_P.product_list.query(function(data){

            console.log(data);
        });

});

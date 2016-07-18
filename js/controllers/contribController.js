myApp.controller('contribController', function($scope, $http) {
    $http.get('https://cors-anywhere.herokuapp.com/https://www.x-formation.com/wp-content/uploads/2014/09/contributors.json')
        .success(function(result){
            $scope.items = result;
            $scope.sortType = '';
            $scope.sortReverse = false;
            $scope.searchFish = '';
        })
        .error(function(data, status) {
            console.log(data);
            console.log(status);
        });
});
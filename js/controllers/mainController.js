myApp.controller('mainController', ['$scope','$http', function($scope, $http) {
    $http.get("https://api.github.com/users/x-formation")
        .success(function (data) {
            $scope.userData = data;
            takeRepo();
        });
        var takeRepo = function () {
            $http.get($scope.userData.repos_url)
                .success(function (data) {
                    $scope.repoData = data;
                    $scope.sortType  = ''; 
                    $scope.sortReverse = false;
                    $scope.searchWord = '';
                });
            };
}]);
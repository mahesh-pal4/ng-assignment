userApp.controller('usersListController', function($scope, usersFactory) {
    $scope.image = JSON.parse(localStorage.getItem('image'));
    $scope.itemsPerPage = 4;
    $scope.currentPage = 0;
    $scope.loadMoreisHide = false;    

    init();

    function init() {
        if ($scope.image === null) {
            usersFactory.getUsers().then(function(data) {
                var total = usersFactory.total(data);
                var pagedItems = usersFactory.get($scope.currentPage*$scope.itemsPerPage, $scope.itemsPerPage, data);
                $scope.article_data_json = pagedItems;
            });
        }
        $scope.sortorder = '-date.timestamp';
    }
    $scope.loadMore = function() {
        $scope.currentPage++;
        usersFactory.getUsers().then(function(data) {
                var total = usersFactory.total(data);
                var newItems = usersFactory.get($scope.currentPage*$scope.itemsPerPage, $scope.itemsPerPage, data);
                $scope.article_data_json = $scope.article_data_json.concat(newItems);
                var lastpageCount =  (total / 4)-1;
                if (lastpageCount <= $scope.currentPage){
                      $scope.loadMoreisHide = true;
                }
        });        
    };
});
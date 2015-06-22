userApp.factory('usersFactory', function($http) {
    var usersFactory = {
        getUsers: function() {
               var promise = $http.get('app/assets/json/article-data.json').then(function(response) {
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        },
        get: function(offset, limit, data) {
          return data.slice(offset, offset+limit);
        },
        total: function(data) {
          return data.length;
        }
    };
    return usersFactory;
});
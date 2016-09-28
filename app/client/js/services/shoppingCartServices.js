angular.module("shoppingCartServices",[])
    .factory("cartService",['$http','$q', function($http, $q){
        return {
            numberOfItems : function () {
                var deferred = $q.defer();
                var item =0;

                deferred.resolve(item);
                return deferred.promise;
            }
        }
    }]);
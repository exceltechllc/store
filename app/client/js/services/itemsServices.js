angular.module("itemsServices",[])
    .factory("itemsService",['$http','$q', function($http, $q){
        return {
            numberOfItems : function () {
                var deferred = $q.defer();
                var item =0;

                deferred.resolve(item);
                return deferred.promise;
            }
        }
    }]);
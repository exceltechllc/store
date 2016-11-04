angular.module("itemsServices", [])
    .factory("itemsService", ['$http', '$q', function ($http, $q) {
        var itemsSrvs = {};
        itemsSrvs.addItem = function (){
            $http.post("/addItem",{
                    sku : 2222,
                    name: "TEST 2",
                    price:222.22,
                    description: "TEST: This is a item's description.",
                    modelNumber:"TESTTEST2",
                    size:2
                })
                .success(function (item) {
                })
                .error(function (err) {
                })
        };
        itemsSrvs.getData = function () {
            var deferred = $q.defer();
            $http.get('/getAllItems')
                .success(function (respons){
                    deferred.resolve(respons.returnObj);
                })
                .error (function (err) {
                    deferred.reject(err.message)
                });
            return deferred.promise;
        };

        return itemsSrvs;
    }]);
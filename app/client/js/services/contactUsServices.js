angular.module("contactUsServices",[])
    .factory("contactServices",function($http, $q){
        return {
            sendForm : function (formObj){
                var dif =$q.defer();
                $http.post("/contactUs",formObj)
                    .success(function (response){
                        dif.resolve(response);
                    })
                    .error (function (error) {
                        dif.reject(error);
                    });
                return dif.promise;
            }
        }
    });
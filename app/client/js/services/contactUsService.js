angular.module("contactUsServices",[])
    .factory("contactServices",function($http, $q){
        return {
            sendForm : function (formObj){
                var dif =$q.defer();
                $http.post("/contactUs",formObj)
                    .success(function (response){
                        console.log(response);
                        dif.resolve(response);
                    })
                    .error (function (error) {
                        console.log(error);
                        dif.reject(error);
                    });
                return dif.promise;
            }
        }
    });
angular.module("contactUsController",[])
.controller("contactController",['$scope', '$rootScope', '$log', 'contactServices', function($scope, $rootScope, $log, contactServices){
    var contactUs = this;

    contactUs.resultMessage         = {show:false, message: ""};
   // contactUs.contactData;
    contactUs.submitButtonDisable   = false;
    contactUs.submitted             = false;


    contactUs.submit = function (contactForm){
        console.log(contactForm);

        if (contactForm.$valid){
            contactUs.submitted             = true;
            contactUs.submitButtonDisable   = true;
            var contactInfo = {
                name    : contactForm.firstName.$modelValue + " " + contactForm.lastName.$modelValue,
                email   : contactForm.email.$modelValue,
                message : contactForm.message.$modelValue

            };
            contactServices.sendForm(contactInfo).then(function (response) {
                console.log(response);
            },function(err){
                console.log(err);
            })

        }else {

        }
    }
}]);
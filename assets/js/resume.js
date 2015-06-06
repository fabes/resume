'use strict'; //Based on research, this simply means to execute the code in 'strict mode'

/* Declare our module for AngularJS and ensure ngapp on the <html>
 * is update with our var below for things to work properly
 */
var resumeApp = angular.module('resumeApp', []);

//Declare a header controller with JSON objects
resumeApp.controller('headerCtrl', function($scope) {
    $scope.biocontact =
        {
            img: 'assets/images/unexpected_head_shot.jpg',
            name: 'Fabion O. Stephens',
            address:
                {
                    street: '25 Timber Path',
                    city: 'Kingston',
                    country: 'Jamaica'
                },
            telephone: '1876-389-5264',
            email: 'fabion@thestephenshq.com'
        };
});
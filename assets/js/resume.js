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

//Declare an objective controller with JSON objects
resumeApp.controller('objectiveCtrl', function($scope) {
    $scope.objective =
    {
        header: 'Profile',
        content: '' +
            'Self taught programmer genuinely seeking to work with best and learn from the best while truly '+
            ' making an impact through software engineering.'
    };
});

//Declare an experience controller with JSON objects
resumeApp.controller('expCtrl', function($scope) {
    $scope.expTemplate = 'views/experience.html';
    $scope.header = 'Experience';
    $scope.experiences = [
        {
            company: 'OpenSesame',
            location: 'Oregon, USA',
            duration: 'Feb 2012 - June 2015',
            position: 'Software Engineer'
        },
        {
            company: 'Freelancing',
            location: 'Kingston, Jamaica',
            duration: 'September 2010 - Feb 2012',
            position: 'Web Design/Development'
        },
        {
            company: 'LiveEnrol',
            location: 'Sydney Australia',
            duration: 'January 2009 - August 2010',
            position: 'Lead Web Developer'
        }
    ];

});

//Declare an objective controller with JSON objects
resumeApp.controller('eduCtrl', function($scope) {
    $scope.eduTemplate = 'views/education.html'
    $scope.header = 'Education'
    $scope.edus = [
        {
            institution: 'Norther Caribbean University',
            location: 'Manchester, Jamaica',
            achievement: 'ASc. Information Science',
            duration: '2002 - 2004'
        }
    ];
});
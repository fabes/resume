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
            'Self taught programmer genuinely seeking to make/invent beautiful apps with a smart, driven and passionate team while truly '+
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
            duration: 'Feb 2012 - Jun 2015',
            position: 'Software Engineer'
        },
        {
            company: 'Freelancing',
            location: 'Kingston, Jamaica',
            duration: 'Sep 2010 - Feb 2012',
            position: 'Web Developer'
        },
        {
            company: 'LiveEnrol',
            location: 'Sydney, Australia',
            duration: 'Jan 2009 - Aug 2010',
            position: 'Lead Web Developer'
        }
    ];

});

//Declare an education controller with JSON objects
resumeApp.controller('eduCtrl', function($scope) {
    $scope.eduTemplate = 'views/education.html'
    $scope.header = 'Education'
    $scope.edus = [
        {
            institution: 'NCU',
            location: 'Manchester, Jamaica',
            achievement: 'ASc. Information Science',
            duration: '2002 - 2004'
        }
    ];
});

//Declare a project/links controller with JSON objects
resumeApp.controller('projlinksCtrl', function($scope) {
    $scope.projlinkTemplate = 'views/project_links.html'
    $scope.header = 'Projects and Links'
    $scope.project_links = [
        {
            name: 'DMAFB (staging)',
            url: 'http://quivio.com/',
            url_text: 'dmafb.me',
            desc: 'Technologies used in this project: Ruby 2 / Rails 4, Postgresql, Devise, Carrierwave, Ominauth, '+
                  ' OmniContacts, ActiveMerchant, ActiveAdmin, Sunspot Solr, jQuery, Compass SASS, Foundation.'
        },
        {
            name: 'aSuiteStay',
            url: 'http://www.asuitestay.com/',
            url_text: 'aSuiteStay.com',
            desc: 'Jump in to rescue project by doing lots of bug fixes, refactoring, setup AWS S3, customize travel packages '+
                  ' MVC, HAML (second time working with).'
        },
        {
            name: 'The Novak Agency',
            url: 'http://thenovakagency.com/',
            url_text: 'thenovakagency.com',
            desc: 'Develop custom plugins for the Wordpress platform, tweak and styled theme based on client needs.'
        },
        {
            name: 'Github',
            url: 'https://github.com/fabes',
            url_text: 'https://github.com/fabes'
        },
        {
            name: 'Stackoverflow',
            url: 'https://stackoverflow.com/users/2782661/fabion-stephens',
            url_text: 'https://stackoverflow.com/users/2782661/fabion-stephens'
        }
    ];
});

//Declare a recreational controller
resumeApp.controller('recreCtrl', function($scope) {
    $scope.header = 'Things I Do for Fun'
    $scope.info = 'Just go out and explore life outside of the computer :) specifically having occasional drinks ' +
                  'with friends and family, playing video games, try to dance, meditate and giving back when I can to my community.'
});

//Declare a skills set controller with JSON objects
resumeApp.controller('skillsCtrl', function($scope) {
    $scope.header = 'Skills Set'
    $scope.skillsset = [
       'OO PHP', 'Ruby', 'Ruby on Rails', 'Postgresql', 'mySQL', 'Javascript', 'jQuery', 'Compass SASS', 'CSS', 'SMACSS',
        'HTML/HTML5', 'Wordpress', 'Drupal', 'Git', 'Linux', 'AWS'
    ];
});

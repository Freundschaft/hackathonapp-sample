// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.controller('HackathonController', ['$scope', '$http', function($scope, $http) {
    $scope.entrystatus = 'Submit Entry';
    $scope.submitEntry = function() {
        $scope.entrystatus = "Entry Submitted";
        // Simple POST request example (passing data) :
$http.post('http://hackathonbackend.azurewebsites.net/add', 
           {password:$scope.formsdata.password, 
           name:$scope.formsdata.firstName, 
         lastName:$scope.formsdata.lastName }).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    alert(status);
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    
    alert(status);
  });
        
    };
    
    $scope.formsdata = {};
    $scope.clearEntries = function() {
        $scope.formsdata.firstName = '';
        $scope.formsdata.lastName = '';

        $scope.formsdata.password = '';
        $scope.formsdata.submissionTitle = '';
        $scope.formsdata.submissionDate = '';
    };
    $scope.formsdata.firstName = '';
    $scope.formsdata.lastName = '';

    $scope.formsdata.password = 'password';
    $scope.formsdata.submissionTitle = '';
    $scope.formsdata.submissionDate = '';
}]);
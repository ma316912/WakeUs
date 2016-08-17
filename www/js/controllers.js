angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('RecentNewsController',function($scope){
 
$scope.newsCategories = [{type:'political', name:"Political"},
                      {type:'national', name:"National"},
                      {type:'business', name:"Business"},
                      {type:'sports', name:"Sports"},
                      {type:'health', name:"Health"}
                      ];

})
.controller('RecentNewsItemController', function($scope, $stateParams, $ionicModal, NewsService){
  $scope.type = $stateParams.type;

  $scope.newsItems = [];

  switch($scope.type) {
    case 'political': 
                      NewsService.getPoliticalNews()
                      .success(function(response){
                        $scope.newsItems = [].concat(response.results);
                        console.log(response.results);
                        console.log("Received response - political");
                      })
                      .error(function(){
                        $scope.newsItems = [];
                      });
                      break;
  case 'national': 
                      NewsService.getNationalNews()
                      .success(function(response){
                        $scope.newsItems = [].concat(response.results);
                        console.log(response.results);
                        console.log("Received response - national");
                      })
                      .error(function(){
                        $scope.newsItems = [];
                      });
                      break;
  case 'business': 
                      NewsService.getBusinessNews()
                      .success(function(response){
                        $scope.newsItems = [].concat(response.results);
                        console.log(response.results);
                        console.log("Received response - business");
                      })
                      .error(function(){
                        $scope.newsItems = [];
                      });
                      break;
  case 'sports': 
                      NewsService.getSportsNews()
                      .success(function(response){
                        $scope.newsItems = [].concat(response.results);
                        console.log(response.results);
                        console.log("Received response - sports");
                      })
                      .error(function(){
                        $scope.newsItems = [];
                      });
                      break;
  case 'health': 
                      NewsService.getHealthNews()
                      .success(function(response){
                        $scope.newsItems = [].concat(response.results);
                        console.log(response.results);
                        console.log("Received response - health");
                      })
                      .error(function(){
                        $scope.newsItems = [];
                      });
                      break;                                                           
  }


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/recent-news-item-detail.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.newsItemDetailModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeNewsItemDetail = function() {
    $scope.newsItemDetailModal.hide();
  };

  // Open the login modal
  $scope.openNewsItemDetail = function(item) {
    $scope.currentItem = item;
    $scope.newsItemDetailModal.show();
  };

})
.controller('RecentNewsItemDetailController',function($scope, $ionicModal, $timeout){

});

var app=angular.module('starter.controllers', [])
app.controller('okTaskCtrl', function($scope,  $ionicLoading,taskService,dataService) {
    $scope.oldtasks = [];

    $scope.nokTaskAvailable=true;



 

$scope.loadMore = function() {

  

  console.log("loadMore", $scope.nokTaskAvailable);

  if($scope.nokTaskAvailable)//sona gelınmedıyse false cross true
  {
         taskService.getokTasks($scope.oldtasks.length)
            .then(function (result) {

              if(result.data.indexOf("Success")!==-1)
              {
                  $scope.nokTaskAvailable=false;     
              }
              
              else
              {
                $scope.nokTaskAvailable=true;     
          $scope.oldtasks = $scope.oldtasks.concat(result.data);
        console.log("oldtasks",$scope.oldtasks);
         $scope.$broadcast ('scroll.infiniteScrollComplete'); // need to stop spinner        
              }

                  
            }, function (error) {
               console.log("error",$scope.oldtasks);
                 $scope.$broadcast('scroll.infiniteScrollComplete');
             
            });
        
  }
   
  
};





});





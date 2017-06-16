app.controller('DashCtrl', function($scope,taskService,$ionicSideMenuDelegate,$ionicLoading,dataService,$ionicModal,$ionicHistory,networkService) 
{

$ionicHistory.nextViewOptions({
  disableAnimate: true,
  disableBack: true
});
networkService.startWatching();//internet baglantısı kontrol
$scope.noItemsAvailable=true;
$scope.tasks=[];


$scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
$scope.loadMore = function() {

  console.log("loadMore", $scope.noItemsAvailable);

  if($scope.noItemsAvailable)//sona gelınmedıyse false cross true
  {
         taskService.getTasks($scope.tasks.length)
            .then(function (result) {

              if(result.data.indexOf("Success")!==-1)
              {
                  $scope.noItemsAvailable=false;     
              }
              
              else
              {
                $scope.noItemsAvailable=true;     
          $scope.tasks = $scope.tasks.concat(result.data);

        console.log("tasks",$scope.tasks);
         $scope.$broadcast ('scroll.infiniteScrollComplete'); // need to stop spinner        
              }
                  
            }, function (error) {
               console.log("error",$scope.tasks);
                 $scope.$broadcast('scroll.infiniteScrollComplete');
             
            });
        
  }




   
  
};

//ionic modal uzerınde yerlestırmelere yapcaz

  //modal açıldığında sunucuya gıdelım aynı anda projedekı butun httpler sunucuya gdck cunu azaltmıs olalım yuku
       $ionicModal.fromTemplateUrl('templates/dash/modal_addTask.html', function(modal) {
          $scope.modalCtrl = modal;
        }, {
          scope: $scope,
          animation: 'slide-in-up'//'slide-left-right', 'slide-in-up', 'slide-right-left'
          
        });

$scope.openModal = function() {          
          $scope.modalCtrl.show();
        };
  $scope.hideModal = function() {
    
    $scope.modalCtrl.hide();
  window.location.reload();
  };

  
})


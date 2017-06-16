app.controller("DashDetailCtrl",function($scope, $stateParams,taskService,$ionicLoading,dataService){
 console.log($stateParams.taskid);     
        $scope.subTasks=[];
          getSubTask();
        function getSubTask() {
            taskService.getSubTask($stateParams.taskid)
                .then(function (result) {
                    $scope.subTasks = result.data;
                 
                    console.log("subtaks",$scope.subTasks);
                    $ionicLoading.hide();
                }, function (error) {
                    console.log("error",$scope.subTasks);
                    $ionicLoading.hide();

                });
        };
  





});
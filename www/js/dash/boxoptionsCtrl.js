app.controller("boxCtrl",function ($scope,$state,$ionicModal,taskService, $ionicModal,$ionicLoading,dataService) {
	 $ionicModal.fromTemplateUrl('templates/dash/infotask.html', function(modal) {
          $scope.infoModal = modal;
        }, {
          scope: $scope,
           controller: 'commentTaskCtrl',
          animation: 'slide-in-left'//'slide-left-right', 'slide-in-up', 'slide-right-left'
          
        });
     $ionicModal.fromTemplateUrl('templates/task/commentTask.html', function(modal) {
          $scope.commentTask = modal;
        }, {
          scope: $scope,
          animation: 'slide-in-up'//'slide-left-right', 'slide-in-up', 'slide-right-left'
          
        });
      $ionicModal.fromTemplateUrl('templates/task/subTask.html', function($ionicModal) {
          $scope.subTaskmodal = $ionicModal;
        }, {
          scope: $scope,
         controller: 'subTaskCtrl',
          animation: 'slide-in-up'//'slide-left-right', 'slide-in-up', 'slide-right-left'
          
        });
$scope.sendMessage=function(task)
{
       $scope.commentTask.show();
};
	$scope.onItemDelete=function(task)
	{
		 taskService.removeTask(task)
            .success(function (result) {
             console.log(task,"success");
             window.location.reload();//apiden dondugumuzde sayfanın yenılenmesı ıcın
            }, function (error) {
               console.log("error");   
            });
	};
	$scope.addSubTask=function(task)
	{
    //modal açıldığında sunucuya gıdelım aynı anda projedekı butun httpler sunucuya gdck cunu azaltmıs olalım yuku
    $scope.subTaskmodal.subTask = task;
   

                
   $scope.subTaskmodal.show();
	};
  $scope.callSubTask=function(task)
  {
      
      
      window.location.href = "#/tab/task/"+task.taskid;

  }
	
	$scope.infoItem=function(task)
	{    
var uppertask={};
 taskService.getUpperTasks(task.taskid)
            .then(function (result) {
              uppertask=result.data;
              $scope.infoModal.uppertask=uppertask;
 $scope.infoModal.task=task;
           console.log(task);   
            }, function (error) {
               console.log("error");
                 $scope.infoModal.task=task;
              console.log(task);   
            });
             
 
	    $scope.infoModal.show();

	};

   $scope.hideModal = function() {
          $scope.infoModal.hide();
           
        };

	$scope.finishItem=function(task)
	{
		taskService.finishTask(task)
            .success(function (result) {
             console.log(task,"success");
             window.location.reload();//apiden dondugumuzde sayfanın yenılenmesı ıcın
            }, function (error) {
               console.log("error");   
            });
	};
})


app.controller("subTaskmodal",function($scope,dataService,taskService,$state,$ionicModal)
{
 
 

  var taskType="";
  $scope.taskteams=[];
  $scope.subTask={};

$scope.hideSubModal=function()
{
  $scope.subTaskmodal.hide();
}


  taskService.getTypes().then(function (result) {
                $scope.types = result.data; 
                
            }, function (error) {
               console.log("error");
           });

$scope.typechange=function(type)//tür seçimi yapılır
{
  taskType=type.AD;//burada dublicate hatasına luzum yok cunku zaten tek bır degısken var array yok
  console.log(taskType);
}
$scope.teamchange=function(team)//ekibe eleman ekledikce eleman kaydedilir
{//aynı elemanı tekrar kaydettiğinde sorun dublicate error alınıyor
if($scope.taskteams.indexOf(team) !== -1) {
 console.log('var olan bir elemanı eklemeye çalıştı!');
}
else if(team==undefined)
{
  console.log("boş eleman eklemeye calıstı");
}
else
{
    $scope.taskteams.push(team);
}
  console.log($scope.taskteams);

}
$scope.checkteam=function()//ekibe eleman seçildikçe dom da eklenenlerin isimleri görünür
{
 
if ($scope.taskteams.length > 0) {//eleman eklenen yerın 
   return true;
   }//eleman secıldıgınde gorunmesı ıcın
  else {
   
   return false;
  }
}
$scope.removeTaskteam=function(taskteam)
{
  //tıklananı almam lazım
  var index = $scope.taskteams.indexOf(taskteam);
  $scope.taskteams.splice(index, 1); 
  console.log($scope.taskteams);
}

$scope.saveTask=function()
{

    $scope.recordTask={

    Title:$scope.subTask.Title,
    Description:$scope.subTask.taskDescription,
    endDate:$scope.subTask.taskeDate,
    startDate:$scope.subTask.tasksDate,
    Type:taskType,
    ProjectID:$scope.subTaskmodal.subTask.ProjectID,
    team:$scope.taskteams,
    taskid:$scope.subTaskmodal.subTask.taskid
    
  };
  console.log($scope.taskTitle)

  if ($scope.recordTask.Title == undefined || $scope.recordTask.endDate==undefined || $scope.recordTask.startDate==undefined){
    alert('Boş alan bırakılamaz');
    console.log($scope.subTask.recordTask); 
}
else
{
  if($scope.recordTask.endDate<$scope.recordTask.startDate)
  {
    alert("zaman seçiminde hata");
  }
  else
  { 
  		 console.log("",$scope.recordTask);
        taskService.insertSubTask($scope.recordTask)
            .success(function (response) { 
               console.log("recordTask");
                dataService.initializeData();  
              window.location.reload();//apiden dondugumuzde sayfanın yenılenmesı ıcın
            }, function(error) {
             console.log("error");
            });

            
       }

}//end else scope
}
});

       
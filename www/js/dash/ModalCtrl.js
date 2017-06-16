app.controller("ModalCtrl",function($scope,taskService,dataService)
{
  $scope.taskteams=[];
  $scope.teams = [];
  var taskType="";
  getTypes();
  getProjects();
        function getTypes() {
        taskService.getTypes()
            .then(function (result) {
                $scope.types = result.data;      
            }, function (error) {
               console.log("error",$scope.types);
             
             
            });
    };
   function getProjects() {
        taskService.getProjects()
            .then(function (result) {
                $scope.projects = result.data; 
               
                    console.log("projects",$scope.projects);
                    
            }, function (error) {
               console.log("error",$scope.projects);
             
             
            });


    };


 $scope.onchange=function()//proje değiştikçe takım değişir
{
 
  taskService.getTeam($scope.item.PROJEID)
            .then(function (result) {
                $scope.teams = result.data;
                 $scope.taskteam = $scope.teams[0];
                    console.log("Teams",$scope.teams);
                      
            }, function (error) {
               console.log("error",$scope.teams);
             
             
            });

    };

$scope.typechange=function()//tür seçimi yapılır
{
  taskType=$scope.type.AD;//burada dublicate hatasına luzum yok cunku zaten tek bır degısken var array yok
  console.log(taskType);
}
$scope.teamchange=function(team)//ekibe eleman ekledikce eleman kaydedilir
{//aynı elemanı tekrar kaydettiğinde sorun dublicate error alınıyor
if($scope.taskteams.indexOf(team) !== -1) {
 console.log('var olan bir elemanı eklemeye çalıştı!');
}
else if($scope.team==undefined)
{
  console.log("boş elemanı seçmeye calıstı");
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
   return true;}//eleman secıldıgınde gorunmesı ıcın
  else {
   
   return false;
  }

}
$scope.removeTaskteam=function(taskteam)
{
  //tıklananı almam lazım
  var index = $scope.taskteams.indexOf(taskteam);
  $scope.taskteams.splice(index, 1); 
  console.log("$scope.taskteams",$scope.taskteams);    
}
$scope.saveTask=function()
{
   
  var subTaskofTask_taskid = dataService.retrieveData();

    $scope.recordTask={
    Title:$scope.taskTitle,
    Description:$scope.taskDescription,
    endDate:$scope.taskeDate,
    startDate:$scope.tasksDate,
    Type:taskType,
    ProjectID:$scope.item.PROJEID,
    team:$scope.taskteams
    
  };
  if ($scope.recordTask.ProjectID==undefined || $scope.recordTask.Title == undefined || $scope.recordTask.endDate==undefined || $scope.recordTask.startDate==undefined){
    alert('Boş alan bırakılamaz');
    console.log(recordTask); 
}
else
{
  if($scope.recordTask.endDate<$scope.recordTask.startDate)
  {
    alert("zaman seçiminde hata");
  }
  else
  { 
   taskService.insertTask($scope.recordTask)
            .success(function (response) { 
                console.log("Success");
                 console.log("recordTask",$scope.recordTask);  
              window.location.reload();//apiden dondugumuzde sayfanın yenılenmesı ıcın
            }, function(error) {
             console.log("error");
            });
     
       }

}//end else scope
}
})

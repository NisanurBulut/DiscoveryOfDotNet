app.factory('taskService', ['$http', function ($http) {

    
    var taskServiceFactory = {};
    
 var serviceBase = 'http://localhost:50493/api';

  
    var _getTasks = function (id) {

        return $http.get(serviceBase + '/Task/GetAllTasks?id='+id).then(function (results) {
           
           return results; 
        });
      
  
          
    };
     var _getUpperTasks = function (id) {

        return $http.get(serviceBase + '/Task/GetAllUpperTasks?id='+id).then(function (results) {
           
           return results; 
        });
      
          
          
    };
	var _getokTasks = function (id) {

        return $http.get(serviceBase + '/Task/GetAllComplatedTasks?id='+id).then(function (results) {
            return results;
        });
    };
 

    var _getProjects = function () {

        return $http.get(serviceBase + '/Project/GetAllProjects').then(function (results) {
            return results;
        });
    };
    var _getTypes = function () {

        return $http.get(serviceBase + '/Project/GetAllTypes').then(function (results) {
            return results;
        });
    };
      var _getTeam = function (item) {
        
        return $http.get(serviceBase + "/Project/GetTeam/"+item).then(function (results) {
            return results;
        });
    };

        var _insertTask = function (task) {

        return $http.post(serviceBase + '/Task/PostTask',task);
       
    };
        var _removeTask = function (task) {

        return $http.post(serviceBase + '/Task/PutRemoveTask',task);
       
    };
     var _finishTask = function (task) {

        return $http.post(serviceBase + '/Task/PutFinishTask',task);
       
    };
    var _getSubTask = function (tid) {
        return $http.get(serviceBase + "/Task/GetAllSubTasks/?tid="+tid).then(function (results) {
            return results;
        });
    };
      var _insertSubTask = function (task) {

        return $http.post(serviceBase + '/Task/PostSubTask',task);
       
    };

  
 
    taskServiceFactory.getTasks = _getTasks; 
    taskServiceFactory.getokTasks = _getokTasks;
    taskServiceFactory.getProjects = _getProjects;
    taskServiceFactory.getTypes = _getTypes;
    taskServiceFactory.getTeam = _getTeam;
    taskServiceFactory.insertTask =_insertTask;
    taskServiceFactory.removeTask =_removeTask;
    taskServiceFactory.finishTask =_finishTask;
    taskServiceFactory.getSubTask =_getSubTask;
    taskServiceFactory.insertSubTask =_insertSubTask;
    taskServiceFactory.getUpperTasks=_getUpperTasks;
    return taskServiceFactory;

}])
app.service('dataService',function(){

   var cache={};
  var isAvailable=false;

   this.saveData = function(data){
       cache.ProjectName= data.ProjectName;
       cache.teamcahce=data.team;
       cache.taskid=data.taskid;
       cache.ProjectID=data.ProjectID;
   };

 this.initializeData = function(){
      cache =undefined;
   };

   this.retrieveData = function(){
      return cache;
   };

this.setisAvailable=function(data_tasks){

if(data_tasks.indexOf("Success")!==-1)
{
  isAvailable= true;
  console.log("set edildi");

}

else{
 isAvailable= false;
console.log("set edildi success içermiyor");

}

}
 this.retrieveisAvailable = function(){
      return isAvailable;
   };
});

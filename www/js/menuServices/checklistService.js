app.factory('ChecklistService', ['$http', function ($http) {

   var serviceBase = 'http://95.0.224.70/AsistanProjectAPI/';
    var checklistServiceFactory = {};

    var _getCheckList = function () {

        return $http.get(serviceBase + 'api/CheckList/GetAllCheckList').then(function (results) {
            return results;
        });
    };

       checklistServiceFactory.getCheckList = _getCheckList;

        var _insertCheckList = function (todo) {

        return $http.post(serviceBase + 'api/CheckList/POSTchecklist', todo);
       
    };

    checklistServiceFactory.insertCheckList = _insertCheckList;
 

var _updateCheckList = function (todo) {
        return $http.put(serviceBase+'api/CheckList/PutCheckList?' ,todo);
           
    };

  checklistServiceFactory.updateCheckList = _updateCheckList;


var _controlCheckList = function (todo) {
        return $http.put(serviceBase+'api/CheckList/Putcheck?' ,todo);
           
    };

  checklistServiceFactory.controlCheckList = _controlCheckList;

    return checklistServiceFactory;

}]);
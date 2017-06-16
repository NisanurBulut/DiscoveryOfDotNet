app.controller('commentTaskCtrl', function($scope,$state,$ionicModal, $ionicScrollDelegate) {

 $scope.hidecommentTask=function(task)
 {
 	$scope.commentTask.hide();
 }
var alternate;

$scope.hideTime = true;
  $scope.sendMessage = function() {
  alternate = !alternate;

    var d = new Date();
  d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: alternate ? '12345' : '54321',
      text: $scope.data.message,
      time: d
    });

    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };
 $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];
});
var app2=angular.module('app2',[]);
app2.controller('ctrl1',function($scope){
  $scope.randomNum1 =Math.floor((Math.random() *10) + 1);
  $scope.randomNum2 =Math.floor((Math.random() *10) + 1);
});
app2.controller('gooddbz',function($scope){
  var charecters1=["Son Goku" , "Son Gohan" , "Prince Vegeta" , " Son Goten" , "Prince Trunks"];

  $scope.charsave= charecters1[Math.floor((Math.random() * 5))];
});
app2.controller('baddbz',function($scope){
  var charecters2=["Raditz" , "Naapa" , "Frieza" , "Magin Buu" , "Lord Beerus"];

  $scope.charattack= charecters2[Math.floor((Math.random() * 5))];
});

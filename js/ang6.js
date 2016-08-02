var app6=angular.module('app6',[]);
app6.controller('heroCtrl',function($scope,$rootScope){
  $scope.hero=[
    {realName: "Tony Stark",heroName: "Iron Man"},
    {realName: "Peter Parker", heroName: "Spider Man"},
    {realName: "Dr. Banter", heroName: "Hulk"},
    {realName: "Natarajan", heroName: "Aryan"},
    {realName: "Bruce Wayne", heroName: "Batman"}
  ];
  $scope.getHeroData = function(){
    heroSearch($scope.heroName);
  };
  function heroSearch(name){
    $scope.heroData="Not Found";

    for(var i=0;i<$scope.hero.length;i++){

      if($scope.hero[i].heroName===name){
        //console.log($scope.hero[i].heroName);
          $scope.heroData=$scope.hero[i].realName + " is the " + $scope.hero[i].heroName;
        }
      }
    }
    $scope.$on("heroUpdated",function(event,args){
      console.log("Real:" +args.realName + " Hero : " +args.heroName);
      $scope.hero.push({
        realName:args.realName, heroName: args.heroName
  });
});
$scope.addHeroData=function(realName,heroName){
  $rootScope.$broadcast("heroUpdated",
  {
  realName: realName, heroName: heroName
});
console.log("Real: " +realName + "Hero :" +heroName);
};
});

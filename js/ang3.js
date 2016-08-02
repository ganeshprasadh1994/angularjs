var app3 = angular.module('app3', []);

app3.controller('gListCtrl', function($scope) {

  $scope.groceries = [
    {item: "Domato", purchased: false},
    {item: "Botato", purchased: false},
    {item: "Aaniyan", purchased: false},
    {item: "Pirinjal", purchased: false},
    {item: "Kali Plawar" purchased:false},
    {item: "Kaarat" purchased:false},
    {item: "Peetrootu" purchased:false }
  ];

  $scope.getList = function(){
    return $scope.showList ? "ulgrolist.html" : "grolist.html";
  };

});

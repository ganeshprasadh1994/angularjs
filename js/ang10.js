angular.module('app10',[])
  .directive("bbPlayerList",function(){
    return function(scope,element,attrs){
    var data=scope[attrs["bbPlayerList"]];
    if(angular.isArray(data)){
      var arrayItem=attrs["arrayItem"];
      var listElem=angular.element("<ul>");
      element.append(listElem);
      for(var i=0;i<data.length;i++){
        listElem.append(angular.element('<li>')
        .text(scope.$eval(arrayItem,data[i])));
      }
      listElem.after(angular.element("<span id='mays'>").text("Ram CM"));
      listElem.prepend(angular.element("<span id='cobb'>").text("Ty Cobb"));
      angular.element(document.querySelector('#mays')).remove();

      var gehrigHTML="<span id='gehrig'>Gehrig Lou</span>";
      var replacement=angular.element(gehrigHTML);
      angular.element(document.querySelector('#cobb'))
      .replaceWith(replacement);
    }
  }
})
.controller("mainCtrl",function($scope){
  $scope.bbPlayers=[
    {name:"Barry Allen",avg:98.44,hr:944,obp:90.1},
    {name:"Tyrion Lannister",avg:45.44,hr:248,obp:40.1},
    {name:"Lodhak Mathak",avg:78.44,hr:694,obp:67.1},
    {name:"Thomas the Cat",avg:100,hr:1000,obp:100},
  ]
});

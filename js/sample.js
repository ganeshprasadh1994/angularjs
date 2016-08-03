var myApp = angular.module('myApp', []);

myApp.controller('checkBoxController', function ($scope) {
		$scope.bikes=[{name:"Apache",color:"white"},
                      //{name:"Pulsar",color:"black"},
                      //{name:"Panigale",color:"white"},
                      {name:"Hornet",color:"red"},
                      // {name:"Gixxer",color:"black"},
                      // {name:"Shine", color:"black"},
                      // {name:"Stunner", color:"red"},
                      {name:"Hayabusa",color:"black"}];
		$scope.selection=[];
		// toggle selection for a given employee by name
		$scope.toggleSelection = function toggleSelection(color) {
	    var idx = $scope.selection.indexOf(color);

	    // is currently selected
	    if (idx > -1) {
	      $scope.selection.splice(idx, 1);
	    }

	    // is newly selected
	    else {
        $scope.selection.push(name);
	      $scope.selection.push(color);
	    }
	  };
});

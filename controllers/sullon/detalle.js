app.controller("SullonDetalleCtrl", function($scope, SullonFtry, $stateParams){
    var id = $stateParams.id;
    SullonFtry.get(id).success(function(data){
        $scope.producto = data;
    })
})
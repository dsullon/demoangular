app.controller("SullonCtrl", function($scope, SullonFtry){
    $scope.data = 0;
    $scope.producto = {};
    SullonFtry.getAll().success(function(data){
        $scope.listaProducto = data;
        console.log(data);
    });

    $scope.cambiarValor = function(){
        SullonFtry.get($scope.data).success(function(data){
            $scope.producto = data;
        })
        console.log($scope.data);
    }
})
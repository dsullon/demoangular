app.controller("ComboCtrl", function($scope, ComboFtry) {
    //$scope.listaProducto = []; crea estructura vacia
    ComboFtry.getAll().success(function(data){
        $scope.listaCombo = data;
        console.log(data);
    });

}
)
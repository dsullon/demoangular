app.controller("CartaCtrl", function($scope, CartaFtry) {
    //$scope.listaProducto = []; crea estructura vacia
    CartaFtry.getAll().success(function(data){
        $scope.listaProducto = data;
        console.log(data);
    });

}




) //cartafactroy ejemplo de singleton
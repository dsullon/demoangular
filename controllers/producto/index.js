app.controller('ProductoCtrl', function ($scope, ProductoFtry) { //se inyecta $scope x dependencia
    $scope.isLoading = true;
    $scope.data;     // data una propiedad dentro de mi clase ProductCtrl 
    ProductoFtry.getAll().success(function (data) {
        $scope.listaProducto = data;
        $scope.isLoading = false;
    });

    $scope.eliminar = function(id){
        alert(id);
    };

    //creamos un metodo mostrar mensaje
    $scope.mostrarMensaje = function(){
        alert("hola mundo");
    };
    // scope es el modelo para la vista
    $scope.cambiarValor = function(){
        alert($scope.data);
    };

})
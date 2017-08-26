app.controller('ProductoCtrl', function ($scope, ProductoFtry) {
    $scope.isLoading = true;
    $scope.data;
    ProductoFtry.getAll().success(function (data) {
        $scope.listaProducto = data;
        $scope.isLoading = false;
    });

    $scope.eliminar = function(id){
        alert(id);
    };


    $scope.mostrarMensaje =  function(){
        alert('Hola UPC');
    };

    $scope.cambiarValor = function(){
        alert($scope.data);
    };
})
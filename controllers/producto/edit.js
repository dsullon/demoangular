app.controller('ProductoEditarCtrl', function ($scope, $stateParams, ProductoFtry) {
    var id = $stateParams.id;  // para recuerar el indice del producto a modificar indicada en el configu.router
    $scope.isLoading = true;
    ProductoFtry.get(id).success(function (data) {
        $scope.producto = data;
        $scope.isLoading = false;
        console.log(data);
    });

    $scope.eliminar = function(id){
        alert(id);
    }
})
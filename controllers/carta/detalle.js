app.controller("CartaDetalleCtrl", function($scope, $stateParams, CartaFtry) {
    var id = $stateParams.id; //id definido en el config.router y figura en la vista tambien
    CartaFtry.get(id).success(function(data){
        $scope.producto = data;
        console.log(data);
    })      
})







app.controller('PedidosCtrl', ['$scope', 'PedidosService', '$stateParams', '$ionicFilterBar', function ($scope, PedidosService, $stateParams ,$ionicFilterBar) {
	console.log('pedidos');
	$scope.pedidos = PedidosService.getPedidos();
	
	
	
    $scope.vm = this,
        items = [],
        filterBarInstance = null;

    $scope.vm.items = $scope.pedidos

    $scope.vm.showFilterBar = function () {
		
		console.log('filter');
		
     $scope.vm.filterBarInstance = $ionicFilterBar.show({
        items: $scope.vm.items,
        update: function (filteredItems) {
          $scope.vm.items = filteredItems;
        },
        filterProperties: 'data',
		cancelText: 'Cancelar'
      });
    };
	
}])
.controller('TimelinePedidoCtrl', ['$scope', 'PedidosService', '$stateParams', function ($scope, PedidosService, $stateParams) {
	console.log('timeline-pedidos');
	
	
}]);
app.controller('DetalhePedidoCtrl', ['$scope', 'PedidosService', '$stateParams', function ($scope, PedidosService, $stateParams) {
	
	
	// Detalhes pedidoId
	var pedidoId = $stateParams.pedidoId;
	if(pedidoId){
		$scope.pedido =  PedidosService.getPedido(pedidoId);	
	}
	
}]);
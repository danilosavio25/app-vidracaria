app.controller('ProdutosCtrl', ['$scope', 'ProdutosService', '$stateParams', '$ionicFilterBar', function ($scope, ProdutosService, $stateParams, $ionicFilterBar) {
	
	$scope.produtos = ProdutosService.getProdutos();
	$scope.categorias = ProdutosService.getCategorias();
	
	
	
    $scope.vm = this,
        items = [],
        filterBarInstance = null;

    $scope.vm.items = $scope.produtos;

    $scope.vm.showFilterBar = function () {
		
		console.log('filter');
		
     $scope.vm.filterBarInstance = $ionicFilterBar.show({
        items: $scope.vm.items,
        update: function (filteredItems) {
          $scope.vm.items = filteredItems;
        },
        filterProperties: 'nome',
		cancelText: 'Cancelar'
      });
    };

   

	
	
}]);
app.controller('CategoriasCtrl', ['$scope', 'ProdutosService', '$stateParams', function ($scope, ProdutosService, $stateParams) {
	console.log('categ');
	$scope.categorias = ProdutosService.getCategorias();
	
}]);
app.controller('DetalheProdutoCtrl', ['$scope', 'ProdutosService', '$stateParams', function ($scope, ProdutosService, $stateParams) {
	
	
	// Detalhes produtoId
	var produtoId = $stateParams.produtoId;
	if(produtoId){
		$scope.produto =  ProdutosService.getProduto(produtoId);	
	}
	
   $scope.abaDescricao = true;
	
	
	
	
	$scope.mostraAba = function(aba){
		console.log("mostraAba");
		if(aba == 0){
			$scope.abaDescricao = true;
			//document.getElementById('aba-descricao').className = 'aba-active';
				
			document.getElementById("aba-descricao").classList.add("aba-active");
			document.getElementById("aba-especificacoes").classList.remove("aba-active");
			
		}else{
			$scope.abaDescricao = false;
			document.getElementById("aba-especificacoes").classList.add("aba-active");
			document.getElementById("aba-descricao").classList.remove("aba-active");
		}
	}
	
	$scope.mostraAba(0);
}]);
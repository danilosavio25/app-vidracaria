app.factory('ProdutosService', function () {
	var produtos = [
		{
			id: 1,
			nome: 'Vidro temperado Maneiro',
			categoria: 'Temperados',
			descricao:'Cinco vezes mais resistente a choques térmicos do que um vidro comum com espessuras semelhantes, o vidro temperado é considerado um vidro de segurança. Em caso de quebra, fragmenta-se sem pedaços pequenos, pouco cortantes, podendo ser removidos com maior facilidade e segurança. Por ser mais resistente, pode ser utilizado em aplicações estruturais autoportantes sem a necessidade de caixilhos.',
			preco: 10,
			especificacoes:{
				tamanho: 'Personalizável',
				tipo: 'Temperado'
			},
			imagem: {
				url: './img/vidro-temperado.jpg'
			}
		},
		{
			id: 2,
			nome: 'Vidro laminado Invokado',
			categoria: 'Laminados',
			descricao:'Também considerado um vidro de segurança, o vidro laminado é composto por duas ou mais placas de vidro, unidas por uma ou mais camadas intermediárias de PVB (polivinil butiral), por esta razão, mais resistente a impactos.',
			preco: 15,
			especificacoes:{
				tamanho: 'Personalizável',
				tipo: 'Laminado'
			},
			imagem: {
				url: './img/vidro-laminado.jpg'
			}
		},
		{
			id: 3,
			nome: 'Vidro duplo D2',
			categoria: 'Duplos/Insulados',
			descricao:'O vidro Insulado é insuperável quando a intenção é aproveitar ao máximo a luz natural, com bloqueio do calor proveniente da radiação solar. Também proporciona grande conforto acústico, com maior bloqueio do som. O vidro duplo é também denominado insulado. Na verdade, trata-se de um sistema de duplo envidraçamento, com o benefício da camada interna de ar desidratado.',
			preco: 20,
			especificacoes:{
				tamanho: 'Personalizável'
			},
			imagem: {
				url: './img/vidro-duplo.png'
			}
			
		},
		{
			id: 4,
			nome: 'Espelho Meo',
			categoria: 'Espelhos',
			descricao:'Espelho para se arrumar em qualquer lugar.',
			preco: 8,
			especificacoes:{
				tamanho: '15x10',
				tipo: 'Espelho'
			},
			imagem: {
				url: './img/vidro-espelho.jpg'
			}
			
		},
		{
			id: 5,
			nome: 'Vidro auto limpante Deci',
			categoria: 'AutoLimpante',
			descricao:'Especialmente projetos para uso externo, os vidros autolimpantes vieram para revolucionar a forma e frequência da limpeza em fachadas, jardins de inverno, sacadas e instalações suspensas e de difícil acesso de uso de detergentes, contribuindo com meio ambiente.',
			preco: 12,
			especificacoes:{
				tamanho: 'Personalizável',
				tipo: 'Auto limpante'
			},
			imagem: {
				url: './img/vidro-autoLimpante.jpg'
			}
			
		},
		{
			id: 6,
			nome: 'Vidro auto limpante Bomdemais',
			categoria: 'AutoLimpante',
			descricao:'Especialmente projetos para uso externo, os vidros autolimpantes vieram para revolucionar a forma e frequência da limpeza em fachadas, jardins de inverno, sacadas e instalações suspensas e de difícil acesso de uso de detergentes, contribuindo com meio ambiente.',
			preco: 15,
			especificacoes:{
				tamanho: 'Personalizável',
				tipo: 'Auto limpante'
			},
			imagem: {
				url: './img/vidro-autoLimpante.jpg'
			}
			
		},
		{
			id: 7,
			nome: 'Espelho Teto',
			categoria: 'Espelhos',
			descricao:'Espelho maravilhoso para teto.',
			preco: 45,
			especificacoes:{
				tamanho: '400x200',
				tipo: 'Espelho'
			},
			imagem: {
				url: './img/vidro-espelho.jpg'
			}
			
		},
		{
			id: 10,
			nome: 'Espelho Banheiro',
			categoria: 'Espelhos',
			descricao:'Espelho de banheiro',
			preco: 8,
			especificacoes:{
				tamanho: '20x15',
				tipo: 'Espelho'
			},
			imagem: {
				url: './img/vidro-espelho.jpg'
			}
			
		},
		{
			id: 2,
			nome: 'Vidro laminado Duperu',
			categoria: 'Laminados',
			descricao:'Também considerado um vidro de segurança, o vidro laminado é composto por duas ou mais placas de vidro, unidas por uma ou mais camadas intermediárias de PVB (polivinil butiral), por esta razão, mais resistente a impactos.',
			preco: 22,
			especificacoes:{
				tamanho: 'Personalizável',
				tipo: 'Laminado'
			},
			imagem: {
				url: './img/vidro-laminado.jpg'
			}
		}
	];

	var categorias = [
		{
			id: 1,
			nome: 'Temperados',
			produtos:{
				quantidade: 1
			}
		},
		{
			id: 2,
			nome: 'Laminados',
			produtos:{
				quantidade: 2
			}
		},
		{
			id: 3,
			nome: 'Duplos/Insulados',
			produtos:{
				quantidade: 1
			}
		},
		{
			id: 4,
			nome: 'Espelho',
			produtos:{
				quantidade: 3
			}
		},
		{
			id: 5,
			nome: 'AutoLimpante',
			produtos:{
				quantidade: 2
			}
		}
	
	
	];
	var getProdutos = function () {
		return produtos;
	};

	var getProduto = function (id) {

		for(var i = 0; i < produtos.length; i++){
			if(produtos[i].id == id){
				return produtos[i];
				break;
			}
		}


	};
	
	var getCategorias = function () {
		return categorias;
	};
	

	return {
		getProdutos: getProdutos,
		getProduto: getProduto,
		getCategorias: getCategorias
	};
});

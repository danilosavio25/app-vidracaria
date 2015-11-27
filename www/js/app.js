// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('vidracaria', ['ionic', 'ngCordova', 'jett.ionic.filter.bar']);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
});

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})
	.state('app.produtos', {
		url: '/produtos',
		views: {
			'menuContent': {
				templateUrl: 'templates/produtos.html',
				controller: 'ProdutosCtrl'
			}
		}
	})
	.state('app.detalhe-produto', {
		url: '/detalhe-produto/:produtoId',
		views: {
			'menuContent': {
				templateUrl: 'templates/detalhe-produto.html',
				controller: 'DetalheProdutoCtrl'
			}
		}
	})
	.state('app.categorias', {
		url: '/categorias',
		views: {
			'menuContent': {
				templateUrl: 'templates/categorias.html',
				controller: 'CategoriasCtrl'
			}
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/produtos');
})
.config(function($ionicConfigProvider,$ionicFilterBarConfigProvider) {
    $ionicConfigProvider.backButton.text('');
	$ionicFilterBarConfigProvider.placeholder('Buscar');
});

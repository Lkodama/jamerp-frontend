angular.module('jamerp',['ngRoute'])
.config(function($routeProvider,$locationProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		});

		$routeProvider.when('/agendamento', {
			templateUrl: 'partials/agendamento.html',
			controller: 'MainController'
		});

		$routeProvider.when('/produtos', {
			templateUrl: 'partials/produtos.html',
			controller: 'ProdutosController'
		});

		$routeProvider.when('/estudio', {
			templateUrl: 'partials/estudio.html',
			controller: 'MainController'
		});

		$routeProvider.when('/funcionario', {
			templateUrl: 'partials/funcionario.html',
			controller: 'MainController'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});
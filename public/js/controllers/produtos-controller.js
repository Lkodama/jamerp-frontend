angular.module('jamerp').controller('ProdutosController', function ($scope,$http) {
    $scope.produto = {};
    $scope.filtro = '';
    $scope.produtos = null;

   var loadProdutos = function(){
        $http.get('http://localhost:8080/v1/produtos')
        .success(function(produtos){
            $scope.produtos = produtos;
            console.log(produtos);
        })
        .error(function(erro){
            console.log(erro);
        });
    }

     
    loadProdutos();

    $scope.salvar = function () {
        if ($scope.produtos.includes($scope.produto)) {
            var index = $scope.produtos.indexOf($scope.produto);
            if (index != -1) {
                $scope.produtos.splice(index, 1, $scope.produto);
            }
        } else {
            $scope.produtos.push($scope.produto);
        }

        $scope.produto = {};
    };

    $scope.limpar = function () {
        $scope.produto = {};
    };

    $scope.remover = function (produto) {
        var index = $scope.produtos.indexOf(produto);
        if (index != -1) {
            $scope.produtos.splice(index, 1);
        }

    }

    $scope.alterar = function (produto) {
        $scope.produto = produto;
    }

    

    
});
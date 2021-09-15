angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, $http) {
    $scope.nameAplication = "Lista Telefônica";
    $scope.contatos = [
        { nome: $filter('uppercase')("Pedro"), data: new Date(), telefone: "999997777", cor: "red" },
        { nome: "João", data: new Date(), telefone: "999997777", cor: "green" },
        { nome: "Tiago", data: new Date(), telefone: "988886666", cor: "blue" },
    ];

    $scope.operadoras = [
        { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
        { nome: "Vivo", codigo: 15, preco: 1, categoria: "Celular" },
        { nome: "Tim", codigo: 16, preco: 1.50, categoria: "Celular" },
        { nome: "Claro/Net", codigo: 47, preco: 1.50, categoria: "Fixo" },
    ];

    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    }

    $scope.apagerContato = function (contatos) {
        $scope.contatos = contatos.filter((contato) => {
            if (!contato.selecionado) {
                return contato;
            }
        });
    };

    $scope.existeSelecionado = function (contatos) {
        return contatos.some((contato) => {
            return contato.selecionado;
        });
    }

    $scope.ordenarPor = function (campo) {
        $scope.criterioBuscar = campo;
        $scope.direcaoDaBusca = !$scope.direcaoDaBusca;
    };

});
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, $http) {
    $scope.nameAplication = "Lista Telefônica";

    let carregarContatos = () => $http.get("http://localhost:8888/contatos")
        .success(function (data) {
            $scope.contatos = data;
        });

    let carregarOperadoras = () => $http.get("http://localhost:8888/operadoras")
        .success(function (data) {
            console.log(data);
            $scope.operadoras = data;
        });

    let carregaInformacao = () => {
        carregarContatos();
        carregarOperadoras();
    }

    carregaInformacao();

    $scope.contatos = [];

    $scope.operadoras = [];

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
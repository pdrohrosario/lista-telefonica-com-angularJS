angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, $http, contatosAPI, operadorasAPI, codigoGenerator) {
    $scope.nameAplication = "Lista Telefônica";

    let carregarContatos = () => 
        contatosAPI.getContatos().success(function (data) {
            $scope.contatos = data;
        }).error(function (data, status){
            $scope.error = "Não foi possivel carregar os contatos!";
        });

    let carregarOperadoras = () => operadorasAPI.getOperadoras()
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
        contato.codigo = codigoGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function (data){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
        
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
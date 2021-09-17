angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
    var _getContatos =  () => {
        return $http.get(config.basePath + "/contatos");
    }

    var _saveContato = (contato) => {
        return $http.post(config.basePath + "/contatos", contato);
    }

    return{ 
        getContatos:_getContatos,
        saveContato:_saveContato
    };
})
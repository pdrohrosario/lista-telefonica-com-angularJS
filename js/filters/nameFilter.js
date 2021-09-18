angular.module('listaTelefonica').filter("name", function(){
    return function (input) {
        let listaDeNomes = input.split(" ");
        let nomeFormatados = listaDeNomes.map(function(nome){
            if(/(da|de|do)/.test(nome)){
                return nome;
            }
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return nomeFormatados.join(" ");
    }
});
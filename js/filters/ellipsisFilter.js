angular.module("listaTelefonica").filter("ellipsis", function(config) {
    return function (input,size) {
        if(input.length <= size || input.length <= config.lengthMin) 
            return input;
        let nomeCurto = input.substring(0, (size || config.lengthMin )) + "...";
        return nomeCurto;
    }
})
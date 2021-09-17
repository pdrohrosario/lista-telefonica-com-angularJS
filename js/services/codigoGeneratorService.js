angular.module("listaTelefonica").provider("codigoGenerator", function (){
    let _length = 20;

    this.getLenght = function () { return _length; };

    this.setLenght = function(length){ _length = length; };

    this.$get = function () {
        return{
            generate: function () {
                let codigo = "";
                while(codigo.length < _length){
                    codigo += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return codigo;
            }
        }
    }
})
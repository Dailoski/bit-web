function generatorNiza(broj,element){
    'use strict'
    var niz = [];
    if (element===undefined){
        element=null;
    }
    for (var i = 0; i < broj; i++) {
        niz[i]=element;
        
    }
    return niz;
}
console.log(generatorNiza(6,324))
function bezFalsy(niz) {
    'use strict'
    var  s='';
    for (var i = 0; i < niz.length; i++) {
        var element = niz[i];
        if(element){
            s+=element;
        }
    }return s;

}
console.log(bezFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));
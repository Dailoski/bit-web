 function nizUStringBezUljeza(p) {
     'use strict'
    var p=[NaN, 0, 15, false, -22, '', undefined, 47, null];
    var s='';
    for (var i = 0; i < p.length; i++) {
        var element = p[i];
        if(typeof element==='string' ||typeof element==="number"
        ||typeof element==="boolean"){
            if(element===element){
            s+=element;
            }
        }
        
        }
        return s;
    }
    console.log(nizUStringBezUljeza());
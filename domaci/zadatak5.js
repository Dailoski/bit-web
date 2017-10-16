
function poslednjihN(niz,n){
    'use strict'
    var pom=[];
    if (n===undefined||n===0){
        pom[0]= niz[niz.length-1];
        return pom;
    }
for (var i = 0; i < n; i++) {
    pom[i]=niz[niz.length-n+i];
    
}
return pom;

}
console.log(poslednjihN([1,2,3,2,3],3));


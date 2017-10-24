function sortStringaBrojeva(string){
    'use strict'
    var niz=string.split('');
    var pom;
    var x='';
    for (var i = 0; i < niz.length; i++) {
        for (var j = i+1; j < niz.length; j++) {
        if(niz[j]<niz[i]){
        pom=niz[i];
        niz[i]=niz[j];
        niz[j]=pom;    
        }//console.log(niz); //stampanje sorta korak po korak
      } 
      
      }for(i=0;i<niz.length;i++){
        x+=niz[i];
    } return x;
}
console.log(sortStringaBrojeva("21014524354210101"));

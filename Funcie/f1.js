/*//printara
function print(a) {
    console.log(a);
}
//prvi
function isString(s) {
    if (typeof s === "string") {
        return true;
    } else {
        return false;
    }

}
//drugi 
function isBlank(x) {
    if (x === " ") {
        return true;
    } else {
        return false;
    }
}
//treci
function konkatenacija(string, n) {
    var s = string;
    for (var index = 0; index < n - 1; index++) {
        s = s + " " + string;
    }
    return s;
}
//cetvrti
function humanizuj(broj) {
    var lastone = broj.toString().split('').pop();
    var hum;
    if (broj % 100 === 11 || broj % 100 === 12 || broj % 100 === 13) {
        hum = broj + 'th';
        return hum;
    } else {
        switch (lastone) {
            case '1':
                hum = broj + 'st';
                return hum;
            case '2':
                hum = broj + 'nd';
                return hum;
            case "3":
                hum = broj + 'rd';
                return hum;
            default:
                hum = broj + 'th';
                return hum;
        }
    }
}
//peti
function istiClanovi(string, slovo) {
    var pom = string.toLowerCase();
    var pom2 = slovo.toLowerCase();
    var niz = pom.split("");
    var brojac = 0;
    if (isString(string)) {

        for (var index = 0; index < niz.length; index++) {
            if (niz[index] === pom2) {
                brojac += 1;
            }

        } return brojac;


    } else {
        console.log("Molim vas unesite slova pod navodnike.");
        return;
    }
}


//sesti

function nadjiPoziciju(stringo, slovo) {
    var pom = stringo.toLowerCase();
    var pom2 = slovo.toLowerCase();
    for (var index = 0; index < pom.length; index++) {
        if (pom[index] === pom2) {
            return index + 1;
        }

    } return -1;

}
function zamenaRazmaka(string, znak){
    s=string.toLowerCase();
    x='';
    if(znak===undefined){
        znak="-";
    }
    for (var i = 0; i < s.length; i++) {
        if(s[i]===" " ){
            x=x+znak;
        }else {
            x=x+string[i];
        }
    }return x;
}
function skracivanjeStringa(string,n){
    x='';
    for (var i = 0; i < n+1; i++) {
        x+=string[i];
        
    }
    x+='...';
    return x;
}*/
function sortStringaBrojeva(string){
    'use strict'
    var niz=string.split('');
    var min, pom;
    for (var i = 0; i < niz.length; i++) {
        min=i;
        for (var j = i+1; j < niz.length; j++) {
        if(niz[j]<niz[min]){
        pom=niz[min];
        niz[min]=niz[j];
        niz[j]=pom;    
        }console.log(niz);
      } 
      var x='';
      
      }for(i=0;i<niz.length;i++){
        x+=niz[i];
    } return x;
}
console.log(sortStringaBrojeva("46532"));




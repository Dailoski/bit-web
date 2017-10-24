var niz=[1,2,3,4,5,6,7];
var niz1=[];
var brojac=[0];

for (var index = 0; index < niz.length; index++) {
    if ((niz[index]%2)!=0) {
    niz1[brojac]=niz[index];
    brojac++;
    
    }
    
}
console.log(niz1);
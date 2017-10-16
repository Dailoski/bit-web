function dodajUString(str1,str2,mesto){
	'use strict'
	var niz1=[];
	var niz2=[];
	var niz3=[];
	var resenje="";
	var n ="Niste lepo uneli parametre, redosled je string, string pa pozicija na koju zelite da ubacite drugi string u prvi.";
if(mesto===undefined){
	mesto=0;
}else{
	mesto = mesto-1;
}
if(typeof str1==="string" && typeof str2==="string" && typeof mesto==="number" && mesto>=0 && mesto<=str1.length){
	 niz1=str1.split("");
	 niz2=str2.split("");
	 for(var i=0;i<niz1.length+niz2.length;i++){
	 	 if (i===mesto){
	 	 	 for (var j=0;j<niz2.length;j++){
	 	 	 	niz3[i]=niz2[j];
	 	 	 	if(j<niz2.length-1){
	 	 	 	i++;}
	 	 	 }
	 	 }else if(i<mesto){
	 	 	 niz3[i]=niz1[i];
	 	 }else{
	 	 	
	 	 	 niz3[i]=niz1[i-niz2.length];
	 
	 	 }
	  }for(i=0; i<niz3.length;i++){
	  	resenje+=niz3[i];
	  }
	  return resenje;
}else {
	return n;
}
}

console.log(dodajUString("Neka rendom recenica.","DODATAK",12));


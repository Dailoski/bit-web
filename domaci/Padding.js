function padding(str, leftORright, desiredLength){
    var res='';
    
    if(leftORright=== "right"){
        res=str.padEnd(desiredLength,"!@#$%&");
        return res;
    }else if(leftORright==="left"){
        res=str.padStart(desiredLength, "!@#$%&");
        return res;
    }else {
        return 'Pogresno ste uneli podatke, zeljeni unos je: string,left(or right),broj'
    }
}
console.log(padding("StringToPad", "right",128));
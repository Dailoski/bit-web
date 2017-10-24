function capitalizeFirst(str){
    var x='';
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (i===0) {
            x+= element.toUpperCase();
        }else{
            x+=element;
        }
    } return x;
}
console.log(capitalizeFirst('sSta je bilo!!!'));
function  reverseCase(str){
    str2='';
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element == element.toUpperCase()) {
            str2+=element.toLowerCase();
        }else {
            str2+=element.toUpperCase();
        }
    }
    return str2;
}
console.log(reverseCase('TeST'));
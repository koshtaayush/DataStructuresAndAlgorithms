/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
    var string = str.trim();
    if(str == ""){
        return 0;
    }else if(typeof(Number(string.charAt(0))) != "number"){
        if(string.charAt(0) != "-" || string.charAt(0) != "+"){
            return 0;
        }
    }else if(str == "+" || str == "-"){
        return 0;
    }

    var upper = Math.pow(2, 31);
    var lower = upper*-1;

    var res = "";

    var pos = 0;
    var hasCharacter = "";
    
    if(string.charAt(0) == "-" || string.charAt(0) == "+"){
        if(string.charAt(1) == "-" || string.charAt(1) == "+"){
            return 0;
        }

        hasCharacter = string.charAt(0);
        pos++;
    }
    
    while(!isNaN(Number(string.charAt(pos))) && pos<str.length){
        res = res + string.charAt(pos);
        pos++;
    }

    if(hasCharacter != ""){
        res = hasCharacter + res;
    }

    res = Number(res);
    if(res < 0 && res<lower){
        return lower;
    }else if(res > 0 && res>(upper - 1)){
        return upper;
    }

    return res;

};

console.log(myAtoi("4193 with words"));

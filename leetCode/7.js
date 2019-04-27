//Given a 32-bit signed integer, reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if(x == 0){
        return 0;
    }
    
    while(x % 10 == 0){
        x = x/10;
    }

    var isNegative = false;
    if(x < 0){
        isNegative = true;
        x = x * -1;
    }
    var length = x.toString().length;
    var res = "";
    for(var i=length-1; i>=0; i--){
        res += x.toString().charAt(i);
    }

    if(isNegative){
        res = "-" + res;
    }
    
    var upper = Math.pow(2, 31);
    var lower = upper * -1;

    if(!isNegative && Number(res) > upper - 1){
        return 0;   
    }
    
    if(isNegative && Number(res) < lower){
        return 0;
    }
    
    return Number(res);
};

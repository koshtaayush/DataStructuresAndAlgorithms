/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if(x < 0){
       return false;
    }
    
    
    var str = x.toString();
    var res = str.split("").reverse().join("");
    
    var num = Number(res);
    
    var upper = Math.pow(2, 31);
    var lower = upper * -1;
    
    if(isNaN(num)){
       return false;
    }else{
        if(num > 0 && num > (upper-1)){
           return false;
        }
    }
    
    if(num == x){
        return true;
    }else{
        return false;        
    }
};

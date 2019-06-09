/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    
    var res = [];
    
    for(let i=0; i<T.length; i++){
        var n = T[i];
        var pushed = false;
        for(let j=i+1; j<T.length; j++){
            if(T[j] > T[i]){
               res.push(j-i);
                pushed = true;
                break;
            }
        }
        if(pushed == false){
            res.push(0);
        }
    }
    
    return res;
    
};

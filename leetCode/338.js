/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    
    var res = [];
    
    for(let i=0; i<=num; i++){
        
        var n = i;
        var count = 0;
        
        while(n > 0){
            n &= (n-1);
            count++;
        }
        
        res.push(count);
    }
    
    return res;
    
};

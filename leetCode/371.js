/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(x, y) {
    
    while (y != 0)  
        { 
            // carry now contains common 
            // set bits of x and y 
            var carry = x & y; 
  
            // Sum of bits of x and  
            // y where at least one  
            // of the bits is not set 
            x = x ^ y; 
  
            // Carry is shifted by  
            // one so that adding it  
            // to x gives the required sum 
            y = carry << 1; 
        } 
        return x; 
    
};

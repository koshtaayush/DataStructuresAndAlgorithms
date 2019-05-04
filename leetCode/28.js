/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    if(needle.length == 0){
        return 0;
    }
    
    for(let i=0; i<haystack.length; i++){
        
        if(haystack.charAt(i) == needle.charAt(0)){
            var isPresent = true;
            var count = 0;
            for(let j=0; j<needle.length; j++){
                if(haystack.charAt(i+j) != needle.charAt(j)){
                    isPresent = false;
                    break;
                }else{
                    count++;
                }  
            }
            if(isPresent == true && count == needle.length){
                return i;
            }
        }
        
    }
    
    return -1;
};

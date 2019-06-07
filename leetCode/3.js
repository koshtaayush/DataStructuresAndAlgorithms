/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(s.length == 0){
       return 0;
    }
    
    if(s.length == 1){
       return 1;
    }
    
    var prev = [];
    
    for(let i=0; i<s.length-1;i++){
        var temp = [];
        var c = s.charAt(i);
        temp.push(c);
        
        for(var j=i+1; j<=s.length-1; j++){
            if(temp.indexOf(s.charAt(j)) == -1){
                temp.push(s.charAt(j));
            }else{
                break;
            }    
        }
        
        if(temp.length > prev.length){
            prev.length = 0;
            prev = temp.slice();
        }
        
    }
    
    return prev.length;
    
    
    
};

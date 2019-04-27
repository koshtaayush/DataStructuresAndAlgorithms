/**
 * @param {string[]} strs
 * @return {string}
 */

// Input: ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) {

    if(strs.length == 0){
        return "";
    }else if(strs.length == 1){
        return strs[0];
    }
    
    var len = strs.length;
    var first = strs[0];
    var fl = first.length;
    var lcp = "";

    for(let i=0; i<fl; i++){
        var ch = first.charAt(i);
        var isSame = true;
        for(let j=1; j<len; j++){
            var word = strs[j];
            if(ch != word.charAt(i)){
                isSame = false;
            }
        }

        if(isSame == false){
            break;
        }else{
            lcp += ch;
        }
    }

    return lcp;
    
};

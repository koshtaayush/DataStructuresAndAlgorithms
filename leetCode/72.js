/**
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

    Insert a character
    Delete a character
    Replace a character
    
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    var matrix = Array(word2.length + 1).fill(null).map(() => Array(word1.length + 1).fill(null));
    
    //fill the first column
    for(let rI=0; rI<word2.length+1; rI++){
        matrix[rI][0] = rI;
    }
    
    //fill the first row 
    for(let cI=0; cI<word1.length+1; cI++){
        matrix[0][cI] = cI;
    }
    
    for(let rI=1; rI<word2.length+1; rI++){
        for(let cI=1; cI<word1.length+1; cI++){
            if(word1.charAt(cI-1) == word2.charAt(rI-1)){
                matrix[rI][cI] = matrix[rI-1][cI-1];
            }else{
                let min = Math.min(Number(matrix[rI-1][cI]), Number(matrix[rI][cI-1]), Number(matrix[rI-1][cI-1]));
                matrix[rI][cI] = min+1;
            }
        }
    }
    
    return matrix[word2.length][word1.length];
    
};

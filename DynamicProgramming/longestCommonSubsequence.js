//string1 and string2 are two strings to be compared 

function lcs(string1, string2){
    
    //construction of lcs matrix
    var lcsMatrix = Array(string2.length + 1).fill(null).map(() => Array(string1.length + 1).fill(null));

    //fill first row with 0's
    for(var i=0; i<string1.length; i++){
        lcsMatrix[0][i] = 0;
    }

    //fill first column with 0's
    for(var j=0; j<string2.length; j++){
        lcsMatrix[j][0] = 0;
    }

    //fill the rest of the matrix according to the conditions
    //
    for(let rowIndex=1; rowIndex<=string2.length; rowIndex++){
        for(let colIndex=1; colIndex<=string1.length; colIndex++){

            //if characters are same then then fill the lcs by 1 + diagonal element
            if( string2.charAt(rowIndex - 1) == string1.charAt(colIndex - 1) ){
                lcsMatrix[rowIndex][colIndex] = 1 + lcsMatrix[rowIndex-1][colIndex-1];
            }else{
            //if characters are different we fill the lcs by max of element above and left
            //max(lcsMatrix[rowIndex-1][colIndex], lcsMatrix[rowIndex][colIndex-1])
                lcsMatrix[rowIndex][colIndex] = Math.max(
                    lcsMatrix[rowIndex-1][colIndex], lcsMatrix[rowIndex][colIndex-1]
                );
            }
        }
    }

    //if the length of the largest common subsequence is 0 return empty string
    if(!lcsMatrix[string2.length][string1.length]){
        return "";
    }

    //for constructing the longest common subsequence we iterate over the matrix
    var longestSubsequence = "";
    let rowIndex = string2.length;
    let colIndex = string1.length;

    while(rowIndex > 0 || colIndex > 0){
        
        if(string2.charAt(rowIndex-1) == string1.charAt(colIndex-1)){
            //move to diagonal element
            //whenever you move to diagonal element you add the character to the longest common subsequence
            longestSubsequence += string1.charAt(colIndex-1);
            rowIndex--;
            colIndex--;
        }else if(lcsMatrix[rowIndex][colIndex] === lcsMatrix[rowIndex][colIndex - 1]){
            //move left
            colIndex--;
        }else{
            //move up
            rowIndex--;
        }
    }
    return longestSubsequence;

}

var s1 = "abcdaf";
var s2 = "acbcf";

console.log("Length " +lcs(s1, s2).length);
console.log(lcs(s1, s2).split("").reverse().join(""));
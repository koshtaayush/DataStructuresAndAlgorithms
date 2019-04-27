/**
* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
* (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

* And then read line by line: "PAHNAPLSIIGYIR"
*/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    var length = s.length;

    var arr = [];
    for(var i=0; i<numRows; i++){
        arr.push([]);
    }

    var l=0;
    while(l<length){

        //for vertical down 
        for(var i=0; i<numRows && l<length; i++){
            arr[i].push(s.charAt(l));
            l++;
        }

        //for diagonally up
        for(var j=numRows-2; j>=1 && l<length; j--){
            arr[j].push(s.charAt(l));
            l++;
        }
    }

    var res = "";
    for(var x=0; x<numRows; x++){
        for(var y=0; y<arr[x].length; y++){
            res += arr[x][y];
        }
    }
    
    return res;
    
};

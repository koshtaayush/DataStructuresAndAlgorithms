/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  
    let rows = matrix.length;
    let columns = matrix[0].length;
    
    for(let i=0; i<rows; i++){
        for(let j=0; j<i; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for(let k=0; k<rows; k++){
        let start = 0;
        let end = columns-1;
        
        while(start < end){
            let t = matrix[k][start];
            matrix[k][start] = matrix[k][end];
            matrix[k][end] = t;
            start++;
            end--
        }
    }
    
    
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    let col0 = true;
    let rows = matrix.length;
    let column = matrix[0].length;
    
    for(let i=0; i<rows; i++){
        if(matrix[i][0] == 0){
            col0 = false;
        }
        
        for(let j=1; j<column; j++){
            if(matrix[i][j] == 0){
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    
    for(let i=rows-1; i>=0; i--){
        for(let j=column-1; j>=1; j--){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
               matrix[i][j] = 0;
            }           
        }
        if(col0 == false){
               matrix[i][0] = 0;
        }
    }
};

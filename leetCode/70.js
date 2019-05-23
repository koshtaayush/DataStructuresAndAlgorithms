/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    var arr = [];
    arr[0] = 1;
    arr[1] = 2;
    
    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    
    console.log(arr);
    return arr[n-1];
    
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var left = [];
    var right = [];
    
    var l = height.length;
    
    left [0] = height[0];
    for(let i=1; i<l; i++){
        left[i] = Math.max(left[i-1], height[i]);
    }
    
    right[l-1] = height[l-1];
    for(let j=l-2; j>=0; j--){
        right[j] = Math.max(right[j+1], height[j]);
    }
    
    var water = 0;
    for(let k=0; k<l; k++){
        water += Math.abs(Math.min(left[k], right[k]) - height[k]);
    }
    
    return water;
    
};

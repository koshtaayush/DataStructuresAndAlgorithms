/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(prices.length == 0){
        return 0;
    }
    
    if(prices.length == 1){
        return 0;
    }
    
    var maxDiff = prices[1] - prices[0];
    var minElem = prices[0];
    
    for(let i=1; i<prices.length; i++){
        if((prices[i] - minElem) > maxDiff){
            maxDiff = prices[i] - minElem;
        }
        
        if(prices[i] < minElem){
            minElem = prices[i];
        }
    }
    
    if(maxDiff < 0){
        return 0;
    }else{
        return maxDiff;
    }
    
};

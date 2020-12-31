/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    let mySet = new Set();
    nums.forEach((v) => mySet.add(v))
    
    let longestStreak = 0;
    
    nums.forEach((x) => {
        if(!mySet.has(x-1)){
            let currentNum = x;
            let currentStreak = 1;
            
            while(mySet.has(currentNum+1)){
                currentNum = currentNum + 1;
                currentStreak = currentStreak + 1;
            }
            
            if(longestStreak < currentStreak){
               longestStreak = currentStreak
            }
        }
    })
    
    return longestStreak;
};

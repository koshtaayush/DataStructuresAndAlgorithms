/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    
    if(trust.length < N-1){
       return -1;
    }
    
    var trusts = Array(N+1).fill(0);
    var trustedBy = Array(N+1).fill(0);

    trust.forEach((v) => {
        var pair = v;
        
        trusts[pair[0]]++;
        trustedBy[pair[1]]++;
    })
    
    for(var i=1; i<=N ; i++){
        if(trusts[i] == 0 && trustedBy[i] == N-1){
            return i
        }
    }
    
    return -1
};

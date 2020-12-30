/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(A, m, B, n) {
    
    let i=m-1;
    let j=n-1;
    let k = m+n-1;
    while(i >=0 && j>=0)
    {
        if(A[i] > B[j])
            A[k--] = A[i--];
        else
            A[k--] = B[j--];
    }
    while(j>=0)
    A[k--] = B[j--];
    
};

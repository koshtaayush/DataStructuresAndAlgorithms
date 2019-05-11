/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    
    const res = {val : 0};
    sum(root, res);
    return res.val;
};

var sum = function(root, res){
    if(!root){
        return 0;
    }else{
        let leftSum = sum(root.left, res);
        let rightSum = sum(root.right, res);
        res.val += Math.abs(leftSum - rightSum);
        return root.val + leftSum + rightSum;
    }
}

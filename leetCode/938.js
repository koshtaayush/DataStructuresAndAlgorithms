/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    
    var res = {val : []};
    traversal(root, res);
    var sum = 0;
    for(let i=0; i<res.val.length; i++){
        if(res.val[i] >= L && res.val[i] <= R){
            sum += res.val[i];
        }
    }
    
    return sum;
    
};

var traversal = function(node, res){
    if(node != null){
        traversal(node.left, res);
        res.val.push(node.val);
        traversal(node.right, res);
    }
}

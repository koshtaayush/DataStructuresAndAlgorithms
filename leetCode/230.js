/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var res = {val: []}
    inOrder(root, res);
    
    return res.val[k-1];
};

var inOrder = function(node, res){
    
    if(node != null){
        inOrder(node.left, res);
        res.val.push(node.val);
        inOrder(node.right, res);
    }
}

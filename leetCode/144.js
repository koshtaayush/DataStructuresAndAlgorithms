/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    
    var res = {val : []};
    
    preOrder(root, res);
    
    return res.val;

};

var preOrder = function(node, res){
    if(node != null){
        res.val.push(node.val);
        preOrder(node.left, res);
        preOrder(node.right, res);
    }
}

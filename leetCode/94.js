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
var inorderTraversal = function(root) {
    var res = {val : []};
    
    inOrder(root, res);
    
    return res.val;

};

var inOrder = function(node, res){
    if(node != null){
        inOrder(node.left, res);
        res.val.push(node.val);
        inOrder(node.right, res);
    }
}

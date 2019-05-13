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
var postorderTraversal = function(root) {
    
    var res = {val : []};
    
    postOrder(root, res);
    
    return res.val;

};

var postOrder = function(node, res){
    if(node != null){
        postOrder(node.left, res);
        postOrder(node.right, res);
        res.val.push(node.val);
    }
}

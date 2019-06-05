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
var diameterOfBinaryTree = function(root) {
    
    if(root == null){
        return 0;
    }
    
    var lheight = height(root.left);
    var rheight = height(root.right);
    
    var ld = diameterOfBinaryTree(root.left);
    var rd = diameterOfBinaryTree(root.right);
    
    return Math.max(Math.max(ld, rd), lheight+rheight);
    
};

var height = function(node){
    if(node == null){
        return 0;
    }
    var lh = height(node.left);
    var rh = height(node.right);
    return 1 + Math.max(lh, rh);
}

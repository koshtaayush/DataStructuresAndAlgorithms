/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(root == null){
        return null;
    }
    
    var q = [];
    q.push(root);
    
    while(q.length != 0){
        var node = q.shift();
        var left = node.left;
        node.left = node.right;
        node.right = left;
        
        if(node.left != null){
            q.push(node.left);
        }
        
        if(node.right != null){
            q.push(node.right);
        }
    }
    
    return root;
};

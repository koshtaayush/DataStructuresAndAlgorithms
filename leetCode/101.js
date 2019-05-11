/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    return isMirror(root, root);
    
};

var isMirror = function(node1, node2){
    if(node1 == null || node2 ==  null){
        return true;
    }
    
    if (node1 != null && node2 != null && node1.key == node2.key){
        return (isMirror(node1.left, node2.right) 
                    && isMirror(node1.right, node2.left)); 
    }
            
  
    return false; 
}

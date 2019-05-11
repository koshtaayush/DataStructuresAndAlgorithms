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
var isUnivalTree = function(root) {
    
    const res = {val: []}
    if(root != null){
        var check = root.val
        inOrder(root, res);   
    }
    
    for(let i=0; i<res.val.length; i++){
        if(res.val[i] != check){
               return false
        }
    }
    
    return true;
    
    
    
};

var inOrder = function(root, res){
    if(root != null){
        inOrder(root.left, res);
        res.val.push(root.val);
        inOrder(root.right, res);
    }
}

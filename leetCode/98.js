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
var isValidBST = function(root) {
    
    var res = {val: []}
    inOrder(root, res);
    
    return isSorted(res.val);
    
};

var inOrder = function(node, res){
    
    if(node != null){
        inOrder(node.left, res);
        res.val.push(node.val);
        inOrder(node.right, res);
    }
}

var isSorted = function(arr){
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i] <= arr[i-1]){
            
            return false;
        }
    }
    return true;
}

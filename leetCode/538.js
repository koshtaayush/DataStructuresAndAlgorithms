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
var convertBST = function(root) {
    const res = {val : []};
    
    inOrder(root, res);
    greaterTree(root, res);
    
    return root;
};

var inOrder = function(root, res){
    if(root != null){
        inOrder(root.left, res);
        res.val.push(root.val);
        inOrder(root.right, res);
    }
}

var greaterTree = function(root, res){
    if(root != null){
        greaterTree(root.left, res);
        let x = 0;
        
        for(let i=0; i<res.val.length; i++){
            if(res.val[i] > root.val){
                x +=res.val[i];
            }
        }
        
        root.val = x + root.val;
        greaterTree(root.right, res);
    
    }
}

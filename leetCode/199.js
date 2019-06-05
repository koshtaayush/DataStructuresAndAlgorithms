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
var rightSideView = function(root) {
    
    if(root == null){
        return [];
    }
    
    var rightView = [];
    var q = [];
    
    q.push(root);
    q.push(null);
    
    var curr = [];
    
    while(q.length > 0){
        var temp = q.shift();
        if(temp != null){
            curr.push(temp.val);
            
            if(temp.left != null){
                q.push(temp.left);
            }
            
            if(temp.right != null){
                q.push(temp.right);
            }
        }else{
            rightView.push(curr[curr.length-1]);
            curr.length = 0;
            if(q.length !=0 ){
                q.push(null);
            }
        }
    }
    
    return rightView;
    
    
};

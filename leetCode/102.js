/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    
    var q = [];
    var curr = [];
    var res = [];
    
    if(root == null){
       return res;
    }
    
    q.push(root);
    q.push(null);

    while(q.length  > 0){
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
            var l = [];
            
            curr.forEach(v => {
                l.push(v);
            });
            
            res.push(l);
            
            curr.length = 0;
            if(q.length != 0){
                q.push(null);
            }
        }
}
    return res;
};

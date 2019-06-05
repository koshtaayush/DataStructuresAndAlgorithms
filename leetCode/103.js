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
var zigzagLevelOrder = function(root) {
    
    var res =[];
    var q = [];
    var curr = [];
    
    if(root == null){
       return [];
       }
    
    q.push(root);
    q.push(null);
    var order = 0;
    
    while(q.length>0){
        var temp = q.shift(q[0]);
        if(temp != null){
            curr.push(temp.val);      
            if(temp.left != null){
                q.push(temp.left);
            }
            if(temp.right != null){
                q.push(temp.right);
            }
        }else{
            
            if(order % 2 == 0){
                res.push(curr.slice());
            }else{
                res.push(curr.reverse().slice());
            }
            order++;
            curr.length = 0;
            if(q.length != 0){
                q.push(null);
            }
        }
    }
    return res;
};

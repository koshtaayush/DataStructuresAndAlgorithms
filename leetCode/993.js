/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (!root) return false;

    var queue = [root];
    let xSeenInCurrLevel = false;
    let ySeenInCurrLevel = false;

    while (queue.length > 0) {
        var curSize = queue.length;

        for (let i = 0; i < curSize; i++) {
            const curr = queue.shift();

            if (curr.left && curr.right) {
                if ((curr.left.val === x || curr.left.val === y) && (curr.right.val === x || curr.right.val === y)) {
                    return false;
                }
            }

            if (curr.val === x) xSeenInCurrLevel = true;
            else if (curr.val === y) ySeenInCurrLevel = true;

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        if (xSeenInCurrLevel && ySeenInCurrLevel) return true;
        
        xSeenInCurrLevel = false;
        ySeenInCurrLevel = false;
    }

    return false;
};

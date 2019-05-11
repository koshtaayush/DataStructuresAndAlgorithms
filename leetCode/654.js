/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = (nums, low = 0, high = nums.length - 1) => {
    if (low > high) return null
    let i = low
    for (let j = low + 1; j <= high; j++) {
        if (nums[j] > nums[i]) i = j
    }
    const root = new TreeNode(nums[i])
    root.left = constructMaximumBinaryTree(nums, low, i - 1)
    root.right = constructMaximumBinaryTree(nums, i + 1, high)
    return root
};

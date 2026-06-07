/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        const maxDepthUtil = function(root){
            if(!root) return 0;

            let lres = maxDepthUtil(root.left);
            let rres = maxDepthUtil(root.right);

            return Math.max(lres,rres) + 1;
        }
        return maxDepthUtil(root);
    }
}

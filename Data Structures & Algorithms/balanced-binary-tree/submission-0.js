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
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;

        const isBalancedUtil = function(root){
            if(!root) return 0;

            let lres = isBalancedUtil(root.left);
            let rres = isBalancedUtil(root.right);

            if(Math.abs(lres-rres) > 1){
                isBalanced = false;
            }
            return Math.max(lres,rres) + 1;
        }

        isBalancedUtil(root);
        return isBalanced;

    }
}

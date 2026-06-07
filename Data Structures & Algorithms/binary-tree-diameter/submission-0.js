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
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const diameterOfBinaryTreeUtil = function(root){
            if(!root) return 0;
            
            let lres = diameterOfBinaryTreeUtil(root.left);
            let rres = diameterOfBinaryTreeUtil(root.right);
            
            console.log(lres);
            console.log(rres);
            diameter = Math.max(lres+rres,diameter);
            return Math.max(lres,rres) + 1;

        }

        diameterOfBinaryTreeUtil(root);
        return diameter;


    }
}

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
     * @return {number[]}
     */
    postorderTraversal(root) {
        let res = [];
        const postorder = function(root){
            if(!root) return;
            postorder(root.left);
            postorder(root.right);
            res.push(root.val);
        }
        postorder(root);
        return res;
    }
}

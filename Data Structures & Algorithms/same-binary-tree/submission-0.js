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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {


        const isSameTreeUtil = function(p,q){

            if(!p && !q) return 1;
            if(!p || !q) return -1;
            
            let lres = isSameTreeUtil(p.left, q.left);
            let rres = isSameTreeUtil(p.right, q.right);

            if(lres == -1 || rres == -1) return -1;
             
             if(p.val != q.val){
                return -1;
             }

             return 1;

        }

        return isSameTreeUtil(p,q) == 1;
    }
}

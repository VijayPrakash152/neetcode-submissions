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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isIdentical(root1, root2) {
         const isIdenticalUtil = function(a, b){
            if(!a && !b) return true;
            if(!a || !b) return false;
             
             let lres = isIdenticalUtil(a.left,b.left);
             if(!lres) return false;
             let rres = isIdenticalUtil(a.right,b.right);
             if(!rres) return false;
             
             if(a.val != b.val) return false;

             return true;

         }
        return isIdenticalUtil(root1,root2);

    }


    isSubtree(root, subRoot) {
       if(!root && !subRoot) return true;
       if(!root || !subRoot) return false;
       let ans = false;

        const isSubtreeUtil = (a, b) => {
            if(!a) return false;
            if(a.val == b.val){
                ans = this.isIdentical(a, b);
                if(ans) return true;
            }

            let lres = isSubtreeUtil(a.left,b);
            if(lres) return true;
            let rres = isSubtreeUtil(a.right,b);
            if(rres) return true;

            return false;

        }

        return isSubtreeUtil(root,subRoot);

    }
}

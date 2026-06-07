/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        let res = [];
        const postorder = function(root){
            if(!root) return;
            for(let child of root.children){
                postorder(child);
            }
            res.push(root.val);
        }
        postorder(root);
        return res;
    }
}

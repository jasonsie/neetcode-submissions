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
    rightSideView(root) {
    let res = [];
    let que = [];
    if (root) {
        que.push(root);
    }

    while (que.length > 0) {
        const len = que.length;
        const node = que[len - 1];
        const _que = [];

        if (node) res.push(node.val);
        for (let i of que) {
            if (i.left) _que.push(i.left);
            if (i.right) _que.push(i.right);
        }
        que = _que;
    }

    return res;
}
}

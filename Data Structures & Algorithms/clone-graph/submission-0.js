/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map();
        return this.bfs(node, oldToNew);
    }

    bfs(node, oldToNew) {
        if (!node) return null
        let que = [node];
        oldToNew.set(node, new Node(node.val));

        while (que.length > 0) {
            const crt = que.shift();
            const crtCopy = oldToNew.get(crt);

            for (const nei of crt.neighbors) {
                if (!oldToNew.has(nei)) {
                    oldToNew.set(nei, new Node(nei.val));
                    que.push(nei);
                }
                crtCopy.neighbors.push(oldToNew.get(nei));
            }

        }

        return oldToNew.get(node);
    }
}







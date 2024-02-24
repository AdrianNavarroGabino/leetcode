/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function goodNodes(root: TreeNode | null): number {
    function countGoodNodes(root: TreeNode | null, previousValue: number): number {
        if (root === null) {
            return 0;
        }

        const count: number = root.val >= previousValue ? 1 : 0;
        const val: number = Math.max(root.val, previousValue);

        return countGoodNodes(root.left, val) + countGoodNodes(root.right, val) + count;
    }

    return countGoodNodes(root, root.val);
};
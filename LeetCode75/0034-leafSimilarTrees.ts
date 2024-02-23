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

const getLeaves = (root: TreeNode | null, result: number[]): void => {
    if (root.left === null && root.right === null) {
        result.push(root.val);
    } else {
        if (root.left !== null) {
            getLeaves(root.left, result);
        }
        if (root.right !== null) {
            getLeaves(root.right, result);
        }
    }
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let result1: number[] = [];
    let result2: number[] = [];
    getLeaves(root1, result1);
    getLeaves(root2, result2);

    return result1.length === result2.length && result1.every((el, i) => el === result2[i]);
};
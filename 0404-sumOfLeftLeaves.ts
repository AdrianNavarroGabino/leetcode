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

function sumOfLeftLeaves(root: TreeNode | null, left: boolean = false): number {
  if (root.left === null && root.right === null) {
    return left ? root.val : 0;
  }

  return (root.left !== null ? sumOfLeftLeaves(root.left, true) : 0) +
    (root.right !== null ? sumOfLeftLeaves(root.right, false) : 0);
};
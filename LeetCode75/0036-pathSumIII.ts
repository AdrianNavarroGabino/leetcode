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

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0;
    
    let count = 0;
    
    function pathSumAux(node: TreeNode | null, currentSum: number, sumMap: Map<number, number>) {
        if (!node) return;
        
        currentSum += node.val;
        count += sumMap.get(currentSum - targetSum) || 0;
        
        sumMap.set(currentSum, (sumMap.get(currentSum) || 0) + 1);
        
        pathSumAux(node.left, currentSum, sumMap);
        pathSumAux(node.right, currentSum, sumMap);
        
        sumMap.set(currentSum, sumMap.get(currentSum)! - 1);
    }
    
    pathSumAux(root, 0, new Map([[0, 1]]));
    
    return count;
};
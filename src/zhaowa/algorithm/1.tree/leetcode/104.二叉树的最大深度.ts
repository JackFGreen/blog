// https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/

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

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/**
输入：root = [3,9,20,null,null,15,7]
输出：3
示例 2：

输入：root = [1,null,2]
输出：2
 */

// function maxDepth(root: TreeNode | null): number {
//   if (!root) return 0
//   return bfs(root)
// }

// function bfs(root: TreeNode) {
//   let level = 0

//   const queue: TreeNode[] = []
//   queue.push(root)

//   while (queue.length) {
//     const len = queue.length
//     for (let i = 0; i < len; i++) {
//       const cur = queue.shift()!

//       if (cur.left) queue.push(cur.left)
//       if (cur.right) queue.push(cur.right)
//     }
//     level++
//   }

//   return level
// }

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  return dfs(root, 0)
}

// 递归回溯，向下递归时 h 都是 0，回溯时+1
function dfs(root: TreeNode, h: number) {
  if (!root) return h
  return Math.max(dfs(root.left!, h), dfs(root.right!, h)) + 1
}


function tmp(root: TreeNode, h: number) {
  if (!root) return h
  return tmp(root.left!, h) + 1
    // tmp(root.left!, h) + 1 => return 0+1+1+1+1
    //   tmp(root.left!, h) + 1 => return 0+1+1+1
    //     tmp(root.left!, h) + 1 => return 0+1+1
    //       tmp(root.left!, h) + 1 => return 0+1
    //         return 0
}

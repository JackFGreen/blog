// https://leetcode.cn/problems/diameter-of-binary-tree/

/**
给你一棵二叉树的根节点，返回该树的 直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。
 */

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

/**
输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
示例 2：

输入：root = [1,2]
输出：1
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0
  let len = 0

  function dfs(root) {
    if (!root) return 0

    const lh = dfs(root.left)
    const rh = dfs(root.right)

    len = Math.max(len, lh + rh)

    return Math.max(lh, rh) + 1
  }

  dfs(root)

  console.log(len)
  return len
}

const node1 = {
  val: 1,
  left: {
    val: 2,
  },
}
diameterOfBinaryTree(node1)

const node2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
  },
}
diameterOfBinaryTree(node2)

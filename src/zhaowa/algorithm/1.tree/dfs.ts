import { TreeNode, node1 } from './structure'

function dfsDLR(root: TreeNode) {
  if (!root) return

  console.log(root.value)
  dfsDLR(root.left!)
  dfsDLR(root.right!)
}
console.log('---前序遍历')
dfsDLR(node1)

function dfsLDR(root: TreeNode) {
  if (!root) return

  dfsLDR(root.left!)
  console.log(root.value)
  dfsLDR(root.right!)
}
console.log('---中序遍历')
dfsLDR(node1)

function dfsLRD(root: TreeNode) {
  if (!root) return

  dfsLRD(root.left!)
  dfsLRD(root.right!)
  console.log(root.value)
}
console.log('---后序遍历')
dfsLRD(node1)


export class TreeNode {
  value: number
  left?: TreeNode
  right?: TreeNode
  constructor(value: number, left?: TreeNode, right?: TreeNode) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node2 = new TreeNode(2, node3, node4)

const node7 = new TreeNode(7)
const node6 = new TreeNode(6, node7)
const node5 = new TreeNode(5, node6)

const node1 = new TreeNode(1, node2, node5)
// console.log(node1)

export { node1 }
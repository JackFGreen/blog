import { TreeNode, node1 } from './structure'

function bfs(root: TreeNode) {
  if (!root) return

  const queue: TreeNode[] = []

  // 放入第一层
  queue.push(root)

  let level = 0

  // 遍历每一层
  while (queue.length) {
    // 固定 len，放在 for 里面由于 push 会是动态的，每一层数据会乱
    const len = queue.length

    for (let i = 0; i < len; i++) {
      // 取出当前层数据
      const cur = queue.shift()!

      console.log(cur.value)

      // 放入下一层，len 是固定的，所以 push 的数据在下一次 while
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }

    console.log('---level', ++level)
  }
}

bfs(node1)

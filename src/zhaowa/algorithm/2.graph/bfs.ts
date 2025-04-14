type Graph = Array<Array<number>>

const graph: Graph = [
  [4, 3, 1], // 0
  [3, 2, 4], // 1
  [3], // 2
  [4], // 3
  [], // 4
]

const visited: boolean[] = []

function bfs(graph: Graph, start: number) {
  if (!graph) return

  const queue: number[] = []

  // 放入第一层
  queue.push(start)

  let level = 0

  // 遍历每一层
  while (queue.length) {
    console.log('---level', level++)

    // 固定 len，放在 for 里面由于 push 会是动态的，每一层数据会乱
    const len = queue.length

    for (let i = 0; i < len; i++) {
      // 取出当前层数据
      const cur = queue.shift()!

      // 已经访问过了，跳过，queue 里面可能有重复的
      if (visited[cur]) continue

      // 访问当前节点
      console.log(cur)

      // 标记为已访问
      visited[cur] = true

      // 放入下一层，len 是固定的，所以 push 的数据在下一次 while
      for (const neighbor of graph[cur]) {
        if (!visited[neighbor]) {
          queue.push(neighbor)
        }
      }
    }
  }
}

bfs(graph, 0)

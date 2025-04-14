type Graph = Array<Array<number>>

const graph: Graph = [
  [4, 3, 1], // 0
  [3, 2, 4], // 1
  [3], // 2
  [4], // 3
  [], // 4
]

const visited: boolean[] = []
const path: number[] = []

function dfs(graph: Graph, start: number) {
  if (visited[start]) return

  // 前序遍历 04312
  console.log(start)

  // 标记为已访问
  visited[start] = true

  path.push(start)
  console.log(path)

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor)
  }

  // 后序位置
  path.pop()
}

dfs(graph, 0)

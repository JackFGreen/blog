const data = [
  {
    id: '1',
    name: 'test1',
    children: [
      {
        id: '11',
        name: 'test11',
        children: [
          {
            id: '111',
            name: 'test111'
          },
          // {
          //   id: '112',
          //   name: 'test112'
          // }
        ]
      },
      {
        id: '12',
        name: 'test12',
        children: [
          {
            id: '121',
            name: 'test121'
          },
          {
            id: '122',
            name: 'test122'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'test2',
    children: [
      {
        id: '112',
        name: 'test112'
      }
    ]
  }
]

const value = '112'
const fn = (value) => {
  let tree = []

  /**
   * |----1----|----2----|----3----|
   * =push=>   =push=>   =push=>
   * <=pop=   <=pop=   <=pop=
   */
  function find (arr, value) {
    for (let i = 0; i < arr.length; i++) {
      const e = arr[i];
      const id = e.id

      if (id === value) {
        tree.push(id)
        console.log(tree)
        break
      } else {
        if (e.children) {
          tree.push(id)
          find(e.children, value)
          // 判断子级是否有，有则中断父级
          if (tree.includes(value)) break
        }
        // 退出当前的层级
        if (i + 1 === arr.length) tree.pop()
      }
    }
  }
  find(data, value)

  console.log(tree)
}
fn(value) // 输出 [1， 11， 112]

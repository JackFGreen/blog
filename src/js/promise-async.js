/**
 * promise 测试
 * node >= 7.6 需要支持 async/await
 * 建议使用 nvm 切换 node 版本
 * @Author: Jack
 * @Date: 2018-01-09 23:57:51
 * @Last Modified by: Jack
 * @Last Modified time: 2018-02-19 18:31:32
 */

// 2s 后执行
function after2 (x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(x)
      reject(x)
    }, 2000)
  })
}

// 5s 后执行
function after5 (x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x)
      // reject(x)
    }, 5000)
  })
}

/**
 * 测试 Promise.all Promise.race
 * all && race 都会执行完全部 Promise，无论是否有 resolve || reject
 */
// 全部 resolve 才会执行 then 返回 [resolve1, resolve2]
// 只要有 reject 就执行 catch 只返回最先完成的 reject 不管之前之后有无 resolve
// Promise.all([after2(2), after5(5)])
//   .then((res) => {
//     console.log('then')
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log('catch')
//     console.log(err)
//   })

// 返回最先完成的 resolve || reject
// Promise.race([after2(2), after5(5)])
//   .then((res) => {
//     console.log('then')
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log('catch')
//     console.log(err)
//   })

/**
 * 测试 async/await
 * await 必须在 async 函数中
 * error 必须处理 try catch || .catch
 */
async function testAfter2 () {
  const a = await after2(2)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('catch err')
      console.log(err)
    })
  console.log('last1...')
  console.log(a)
  return 'a'
}
async function testAfter5 () {
  try {
    const a = await after5(5)
    console.log('await success')
    console.log(a)
  } catch (err) {
    console.log('await err')
    console.log(err)
  }
  console.log('last2...')
}

function testAsync () {
  console.log('testAsync1')
  // 需要处理 error
  const a = testAfter2()
  // 以下继续执行
  console.log(a)
  testAfter5()
  console.log('testAsync2')
}
testAsync()

async function asf() {
  try {
    throw new Error('fail')
    return true
  } catch (err) {
    console.log('asf err')
    throw err
  }
}

async function run() {
  try {
    const res = await asf()
    console.log(res)
  } catch (err) {
    console.log('run err')
    console.error(err)
  }
}

run()

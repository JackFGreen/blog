let MY_ARROW_FN_ENABLED

try {
  // new Function('(()==>{})')
  new Function('(()=>{})')
  MY_ARROW_FN_ENABLED = true
} catch (err) {
  console.log(err)
  MY_ARROW_FN_ENABLED = false
}

console.log(MY_ARROW_FN_ENABLED)

const url = MY_ARROW_FN_ENABLED ? './new.js' : './old.js'
console.log(url)

const myScript = document.createElement('script')
myScript.src = url
document.body.append(myScript)

myScript.onload = () => {
  console.log(myFn)
}

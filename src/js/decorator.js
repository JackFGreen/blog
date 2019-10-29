function addVal(val) {
  return target => {
    target.val = val
  }
}
function enable(target) {
  target.enable = true
}

@enable
@addVal('val')
class App {}

console.log(App.val, App.enable)

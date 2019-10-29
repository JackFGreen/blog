// add(1); 			// 1
// add(1)(2);  	// 3
// add(1)(2)(3)；// 6
// add(1)(2, 3); // 6
// add(1, 2)(3); // 6
// add(1, 2, 3); // 6

function add() {
  let args = [].slice.call(arguments)
  let fn = function() {
    let fn_args = [].slice.call(arguments)
    return add.apply(null, args.concat(fn_args))
  }
  fn.toString = function() {
    console.log('toString')
    return args.reduce((a, b) => a + b)
  }
  return fn
}
const result = add(1)(2)
console.log(result)

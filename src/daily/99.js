// 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
const data = 1234
function reverse(n) {
  const num1 = n / 10
  const num2 = n % 10
  if (num1 < 1) return n
  const num = Math.floor(num1)
  const result = `${num2}${reverse(num)}`
  console.log(result)
  return result
}
reverse(data)

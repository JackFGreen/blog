define('React', function () {
  return {
    name: 'React',
  }
})
console.log('define after React', define)

define('Vue', function () {
  return {
    name: 'Vue',
  }
})
console.log('define after Vue', define)

define(function () {
  console.log('define run without modules')
})

define(['React', 'Vue'], function (...modules) {
  console.log('define run with modules')
  console.log(...modules)
})

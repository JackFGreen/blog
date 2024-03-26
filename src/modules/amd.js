/**
define([
  'require',
  'dependency'
], function(require, factory) {
  'use strict';
  
});
 */

const define = function (id, deps, fn) {
  define.mods = define.mods || {}

  // 注册模块
  if (typeof id === 'string') {
    if (typeof deps === 'function') {
      define.mods[id] = deps()
      return
    }
  }

  // 加载模块
  if (Array.isArray(id)) {
    if (typeof deps === 'function') {
      const modules = id.map((o) => ({ [o]: define.mods[o] }))
      return deps(...modules)
    }
  }

  // 直接执行
  if (typeof id === 'function') {
    return id()
  }

  throw new Error('define error')
}
define.amd = true

globalThis.define = define

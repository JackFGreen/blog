/**
 * 27.图片懒加载
 * 可以给img标签统一自定义属性data-src='default.png'，当检测到图片出现在窗口之后再补充src属性，此时才会进行图片资源加载。
 */

function lazyLoad() {
  const imgs = document.getElementsByTagName('img')
  const scrollTop = document.documentElement.scrollTop
  const innerHeight = window.innerHeight
  const bottomTop = scrollTop + innerHeight
  
  for (const img of imgs) {
    const offsetTop = img.offsetTop
    if (offsetTop > scrollTop && offsetTop < bottomTop) {
      console.log('in screen')
      console.log(img)
      img.src = img.dataset.src
    }
  }
}

window.addEventListener('scroll', lazyLoad)
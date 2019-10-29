/**
 * 基础版
有如下一段 xml, 请使用 js 将其转换成如下 json 对象. 要求使用纯 JS 代码自行实现解析逻辑, 不可引用任何外部 xml 解析库, 不可参考社区或开源实现, 也不可使用浏览器自带 DOMParser API.
 */

// 原始 xml
const xml = `
<list>
  <item>content1</item>
  <item>content2</item>
  <item>content3</item>
  <item>
    <name>hema</name>
    <value>frontend</value>
  </item>
</list>
`

// 目标 json
const json = {
  tag: 'list',
  children: [
    {
      tag: 'item',
      children: 'hello world'
    },
    {
      tag: 'item',
      children: 'content2'
    },
    {
      tag: 'item',
      children: 'content3'
    },
    {
      tag: 'item',
      children: [
        {
          tag: 'name',
          children: 'hema'
        },
        {
          tag: 'value',
          children: 'frontend'
        }
      ]
    }
  ]
}

function xml2json(xml) {
  let result

  // TODO: your code here

  return result
}

// console: true
console.log(JSON.stringify(xml2json(xml)) === JSON.stringify(json))

/**
str 0-str.length
1. if <> -> tag
  1.1. if str -> tag.children: string
  1.2. if <> -> tag.children: []
    1.2.1 -> loop 1
2. if </> -> end
 */

const startTag = /\<([a-z]+)\>/
const endTag = /\<\/([a-z]+)\>/

function matchStartTag(str) {
  const res = str.match(startTag)
  console.log(res)
  return res
}
matchStartTag(xml)

function run(str) {
  const len = xml.length
  let n = 0
  let tagTmp = ''
  const obj = {}

  while (n < len) {
    const s = xml[n]
    if (s === '<') tagTmp = ''
    if (s) tagTmp += s

    const curTag = matchStartTag(tagTmp)
    if (curTag) {
      if (obj.tag) {
        if (!obj.children) obj.children = []
        const sub = {}
        sub.tag = curTag
        obj.children.push(sub)
        tagTmp = ''
      } else {
        obj.tag = curTag[1]
        tagTmp = ''
      }
    } else {
      if (!s.includes('<')) {
        if (obj.children) {
          const lastChild = obj.children.pop()
          lastChild.children = s
        } else {
          obj.children = s
        }
      }
    }
  }

  return obj
}
console.log(run(xml))

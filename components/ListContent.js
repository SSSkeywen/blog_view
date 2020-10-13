/*
 * @Author: mikey.wf 
 * @Date: 2020-10-13 10:26:23 
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-10-13 10:37:36
 */
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import '../styles/pages/index.scss'

const ListContent = (data) => {
  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,  //容错
    sanitize: false, // 原始输出，忽略HTML标签
    tables: true, // 允许输出表格
    breaks: false, //支持换行符
    smartLists: true, // 自动渲染列表
    highlight: function (code) {  // 代码高亮
      return hljs.highlightAuto(code).value
    }
  })
  return (
    <>
      <div className="list-context"
        dangerouslySetInnerHTML={{ __html: marked(data.data) }}
      ></div>
    </>
  )
}
export default ListContent
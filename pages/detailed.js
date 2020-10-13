/*
 * @Author: mikey.wf 
 * @Date: 2020-09-28 14:51:14 
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-10-13 09:59:19
 */

import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../styles/pages/detailed.scss'
// import Breadcrumb from 'antd/lib/breadcrumb'
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from '@ant-design/icons';
// import ReactMarkdown from 'react-markdown'
// import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'

import servicePath from '../config/apiUrl'


const Detailed = (props) => {

  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

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

  let html = marked(props.article_content)

  return (
    <div>
      <Head>
        <title>Detailed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href={"/list?id=1&title=" + props.typeName}>{props.typeName}</a></Breadcrumb.Item>
                <Breadcrumb.Item>XXXx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="detailed-title">
              {props.title}
            </div>
            <div className="list-icon center">
              <span><CalendarOutlined />{props.addTime}</span>
              <span><FolderOutlined />{props.typeName}</span>
              <span><FireOutlined />{props.view_count}人</span>
            </div>
            <div className="detailed-content"
              dangerouslySetInnerHTML={{ __html: html }}
            >
              {/* <ReactMarkdown
                source={markdown}
                escapeHtml={false}
              /> */}
              {/* {html} */}
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {/* <MarkNav
                className="article-menu"
                source={html}
                headingTopOffset={0}
                ordered={false}
              /> */}
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById + id).then((res) => {
      console.log(res)
      resolve(res.data.data[0])
    })
  })
  return promise
}

export default Detailed

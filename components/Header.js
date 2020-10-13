/*
 * @Author: mikey.wf 
 * @Date: 2020-09-27 10:18:09 
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-10-13 09:40:46
 */
import React, { useState, useEffect } from 'react';
import '../styles/components/header.css'
import '../styles/components/header.scss'
import { Row, Col, Menu } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2122762_jpe5kxqkefi.js',
});

import {
  HomeOutlined,
  YoutubeOutlined,
  MessageOutlined,
  SmileOutlined,
} from '@ant-design/icons';

const Header = () => {
  const [navArray, serNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        (res) => {
          return res.data.data
        }
      )
      serNavArray(result)
    }
    fetchData()
  }, [])

  const handleClik = (e) => {
    if (e.key === '0') {
      Router.push('/')
    } else {
      Router.push('/list?id=' + e.key + '&title=' + e.item.props.title)
    }
  }


  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={12} xl={10}>
          <Link href={{ pathname: '/' }}><a>
            <span className="header-logo">技术胖</span>
            <span className="header-txt">专注前端开发，每年100集免费视频。</span>
          </a></Link>
        </Col>
        <Col className="menu-div" xs={0} sm={0} md={14} lg={9} xl={7}>
          <Menu mode="horizontal" onClick={handleClik}>
            <Menu.Item key="0" icon={<HomeOutlined />}>
              {/* <IconFont type="icon-shipin" /> */}
              首页
          </Menu.Item>
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.Id} title={item.typeName}>
                    {
                      (
                        () => {
                          // let data = < + item.icon + Outlined />

                          // return data
                          switch (item.Id) {
                            case 1:
                              return <YoutubeOutlined />
                            case 2:
                              return <MessageOutlined />
                            case 3:
                              return <SmileOutlined />
                            default:
                              return null
                          }
                        }

                      )()

                    }
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
export default Header
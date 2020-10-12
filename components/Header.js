/*
 * @Author: mikey.wf 
 * @Date: 2020-09-27 10:18:09 
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-09-28 14:40:20
 */
import React from 'react';
import '../styles/components/header.css'
import '../styles/components/header.scss'

import { Row, Col, Menu } from 'antd'

import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
} from '@ant-design/icons';

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-logo">技术胖</span>
        <span className="header-txt">专注前端开发，每年100集免费视频。</span>
      </Col>
      <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="video" icon={<YoutubeOutlined />}>
            视频
          </Menu.Item>
          <Menu.Item key="life" icon={<SmileOutlined />}>
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header
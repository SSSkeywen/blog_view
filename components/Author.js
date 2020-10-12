/*
 * @Author: mikey.wf 
 * @Date: 2020-09-28 16:10:32 
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-09-28 16:29:46
 */
import { Avatar, Divider } from 'antd'
import '../styles/components/author.scss'
import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined,
} from '@ant-design/icons';

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div> <Avatar size={50} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
      <div className="author-introduction">
        <span>个人介绍：个人介绍个人介绍个人介绍个人介绍</span>
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
        <Avatar size={28} icon={<QqOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />
      </div>
    </div>
  )
}
export default Author
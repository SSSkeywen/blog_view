/*
 * @Author: mikey.wf 
 * @Date: 2020-10-12 09:48:55 
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-10-12 14:47:49
 */
let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getArticleList: ipUrl + 'getArticleList', // 首页接口
  getArticleById: ipUrl + 'getArticleById/', // 详细也接口
  getTypeInfo: ipUrl + 'getTypeInfo', // 文章类别
  getListById: ipUrl + 'getListById/', // 根据类别ID获得文章列表
}

export default servicePath
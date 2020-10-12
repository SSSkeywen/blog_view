/*
 * @Author: mikey.wf 
 * @Date: 2020-09-27 10:08:13 
 * @Last Modified by: mikey.wf
 * @Last Modified time: 2020-09-27 14:43:10
 */
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = file => { }
// }

// module.exports = withCss({})
module.exports = withSass(withCss({}))
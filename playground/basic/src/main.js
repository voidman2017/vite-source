import { msg } from './lib.js'
import lodashEs from 'lodash-es' // node_modules中的三方依赖在开发时会被处理成 /node_modules/.vite/deps/lodash.js?v=bab3b6bb  （https://juejin.cn/post/7193355148737904696）
// import lodashEs from '../node_modules/lodash-es/lodash.js'
import { a } from './b.js'

console.log(msg)
console.log(a())
console.log(lodashEs.join(['a', 'b', 'c'], '~'))

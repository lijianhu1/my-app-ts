import { createStore } from 'redux'  // 引入createStore方法
import reduce from '../reducer'
const store = createStore(reduce,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());       // 创建数据存储仓库
export default store

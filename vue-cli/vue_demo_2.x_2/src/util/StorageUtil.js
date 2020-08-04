// 使用localstrong存储数据的工具模块
// 1.函数  --- 一个功能
// 2.对象 ---- 多个功能

const TODOS = 'todos'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODOS, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS) || '[]')
  }
}

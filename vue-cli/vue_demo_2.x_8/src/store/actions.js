import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_ALL_COMPLETED, RECEIVE_TOODS } from './mutation-types'
import storageUtils from '../utils/storageUtils'
export default {
  // 添加TODO
  addToDo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  // 删除TODO
  deleteToDo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  // 全选或全不选
  selectAll ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check})
  },
  // 删除全部选中的
  deleteAllCompleted ({commit}) {
    commit(DELETE_ALL_COMPLETED)
  },
  // 异步获取TODOs并更新状态
  reqTodos ({commit}) {
    setTimeout(() => {
      // 读取数据
      const todos = storageUtils.readTodos()
      commit(RECEIVE_TOODS, todos)
    }, 1000)
  }
}

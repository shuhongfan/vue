import { ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_ALL_COMPLETED, RECEIVE_TOODS } from './mutation-types'

export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL_TODOS] (state, {check}) {
    state.todos.forEach(todo => (todo.complete = check))
  },
  [DELETE_ALL_COMPLETED] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [RECEIVE_TOODS] (state, todos) {
    state.todos = todos
  }
}

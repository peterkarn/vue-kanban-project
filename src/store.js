import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: {
      todo: [],
    },
    columns: [
      {
        id: 'x',
        title: 'Test',
      },
      {
        id: 'y',
        title: 'test 2',
      }
    ],
    nextId: 1,
    colId: 1,
  },
  mutations: {
    addColumn(state) {
      state.columns.push({
        id: state.colId += 1,
        title: 'New Column',
      })
    },
    removeColumn(state, idx) {
       state.columns.splice(idx, 1)
    },
    addTaskToProperColumn(state, newTascToCol) {
      state.tasks.todo.push(Object.assign(newTascToCol, {id: state.nextId}))
      state.nextId += 1;
    },
    // updateTasks(state, tasks) {
    //   // state.tasks.todo = tasks
    //   // console.log(tasks);
    // },
    removeTask(state, id) {
      let properTask = state.tasks.todo.find(task => task.id == id);
      let properTaskIndex = state.tasks.todo.indexOf(properTask)
      state.tasks.todo.splice(properTaskIndex, 1)
    }
  },
});
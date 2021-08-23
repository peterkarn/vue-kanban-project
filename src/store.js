import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    boards: [],
    columns: [],
    todo: [],
    boardId: 1,
    colId: 0,
  },
  mutations: {
    addColumn(state, boardId) {
      state.columns.push({
        title: 'New Column',
        board: boardId
      })
    },
    addBoard(state, newBoard) {
      state.boards.push({
        id: state.boardId += 1,
        title: newBoard.title
      })
    },
    removeColumn(state, idx) {
      state.columns.splice(idx, 1);
    },
    addTaskToProperColumn(state, newTascToCol) {
      state.todo.push(newTascToCol);
    },
    removeTask(state, id) {
      let properTask = state.todo.find(task => task.id == id);
      let properTaskIndex = state.todo.indexOf(properTask);
      state.todo.splice(properTaskIndex, 1);
    },
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
    updateTask(state, updatedTask) {
      const index = _.findIndex(state.todo, {
        id: updatedTask.id
      });
      state.todo.splice(index, 1, updatedTask)
    },
    reorderTasks(state, { tasks }) {
      console.log(state.todo); //объект state c тасками до модификации
      
      console.log(tasks); //объект который приходит из column - computed - dragables - set
    }
  },
  actions: {
    addColumn(context, boardId) {
      context.commit('addColumn', boardId)
    },
    addBoard(context, newBoard) {
      context.commit('addBoard', newBoard)
      
    },
    removeColumn(context) {
      if (confirm('Delete column?')) {
        context.commit('removeColumn')
      }
    },
    removeTask(context) {
       if (confirm('Delete task?')) {
         context.commit('removeTask')
       }
    },
    updateTask(context, updatedTask) {
      context.commit('updateTask', updatedTask);
    },
  }
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store
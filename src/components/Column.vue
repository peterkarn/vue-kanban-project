<template>

  <div class="card">
    <div class="card-topline">
      <h3 @click="editColumnTitle = true" v-if="!editColumnTitle">{{column.title}}</h3>
      <input @blur="editColumnTitle = false" v-else type="text" v-model="column.title">
      <button @click="removeColumn" class="btn btn-danger">x</button>
    </div>
    <ul class="card-body">
      <!-- <draggable v-model="draggables" group="default"> -->
        <template v-for="task in tasks">
          <li 
            v-show="task.column == idx"
            :key="task.i">
            <task-component
              @sendDataToModal="$emit('sendDataToModal', task)"
              :task="task"
            ></task-component>
          </li>
        </template>
      <!-- </draggable> -->
    </ul>
    <add-new-task-to-column
      :indx="idx"
    ></add-new-task-to-column>
  </div>
  
</template>

<script>


import {mapState, mapActions} from 'vuex';
import AddNewTaskToColumn from './addNewTaskToColumn.vue';

// import Draggable from 'vuedraggable';


import Task from "./Task.vue";
  export default {
    name: "Column",
    props: {
      idx: Number,
      column: Object,
      id: [String, Number],
      boardId: [String, Number]
    },
    data() {
      return {
        editColumnTitle: true,
      }
    },
    components: {
      'task-component' : Task,
      AddNewTaskToColumn,
      // Draggable,
    },
    methods: {
      ...mapActions(['removeColumn'])
    },
    computed:{
      ...mapState({tasks: state => state.todo}),
        // draggables: {
        //   get() {
        //     console.log(this);
        //     return this.tasks;
        //   },
        //   set(tasks) {
        //     console.log(tasks);
        //     this.$store.commit('updateTasks', {
        //       tasks,
        //     })
        //   }
      // }
    } 
  }
</script>

<style>
  .card {
    padding: 10px;
  }
  .card-topline {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .card-topline h3 {
    border-bottom: 1px solid rgba(255, 255, 255, 0.0);
  }

  .card-topline input {
    font-size: 1.75rem;
    height: 42px;
    margin-right: 10px;
    border: none;
    outline: 1px solid rgba(255, 255, 255, 0.507);
  }

  .card-body {
    list-style: none;
  }
  .card-form {
    display: grid;
    gap: 10px;
  }
  .card-form input {
    outline: none;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    transition: all 0.25s;
    background: inherit;
    color: white;
  }
</style>
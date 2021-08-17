<template>
  <div class="backlog-view">
    <add-new-task></add-new-task>
    <div class="card" 
      v-for="task in tasks"
      :key="task.id"
    >
      <div class="card-block">
        <h5 class="card-title">
          <span>{{task.id}} </span>{{task.text}}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddNewTask from "./AddNewTask.vue";

  export default {
    name: 'TaskCreator',
    components: {
      AddNewTask
    },
    computed: mapState({
      tasks: state => state.tasks.todo
    })
  }
</script>
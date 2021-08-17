<template>
   <form class="card-form" action="#">
    <div v-show="addingTask">
      <input v-model="taskDdata.title" type="text" placeholder="Title">
      <input v-model="taskDdata.description" type="text" placeholder="Brief description">
      <textarea v-model="taskDdata.fullDescr" placeholder="Full description"></textarea>
    </div>
    <button v-if="!addingTask" class="btn btn-primary" @click="addingTask = true">
      Add Task
    </button>
    <div v-else class="btn-group">
      <button type="reset" class="btn btn-danger" @click="resetForm">
        Reset
      </button>
      <button type="submit"  class="btn btn-primary" @click.prevent="addTaskToColumn(indx)">
        Submit
      </button>
    </div>
  </form>        
</template>

<script>
  export default {
    props: {
      indx: Number
    },
     data() {
      return{
        addingTask: false,
        taskDdata: {
          title: '',
          description: '',
          fullDescr: ''
        }
      }
    },
    methods: {
       resetForm() {
        this.taskDdata.title = '';
        this.taskDdata.description = '';
        this.taskDdata.fullDescr = '';
        this.addingTask = false;
      },
      addTaskToColumn(indx) {
        this.$store.commit('addTaskToProperColumn', {
            column: indx,
            title: this.taskDdata.title,
            descr: this.taskDdata.description,
            fullDescr: this.taskDdata.fullDescr,
          })
          this.addingTask = false;
          this.resetForm();
      },
    },
    computed: {

    }
  }
</script>

<style>
  textarea {
    width: 100%;
    margin-top: 10px;
    resize: none;
    background-color: transparent;
    color: #fff
  }
  textarea:focus {
    box-shadow: none;
    outline: 1px solid #fff;
  }
</style>
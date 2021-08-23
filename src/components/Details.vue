<template>
  <div class="card mt-5" v-if="properTask">
    <h2 class="card-title">
      Heading {{properTask.descr}}
    </h2>
    <p>
      id = {{properTask.id}}
    </p>
    <p>
      Created at {{properTask.date}}
    </p>
    <p>
      Description {{properTask.fullDescr}}
    </p>
    <button @click="removeHandle" class="btn btn-danger">
      Delete Task
    </button>
    {{properTask}}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import _ from 'lodash';


  export default {
    name: 'TaskCreator',
    components: {

    },
    props: {

    },
    methods: {
       ...mapActions(['removeTask']),
       removeHandle() {
         this.removeTask()
         this.properTask = null
       }
    },
    computed: {
      ...mapState({ tasks: state => state.todo }),
      properTask() {
        const index = _.findIndex(this.tasks, {
        id: this.$route.params.id
      });
        return this.tasks[index]
      }
    } 
  }
</script>
<style scoped>
  .card {
    display: flex;
    flex-direction: column;
  }
</style>
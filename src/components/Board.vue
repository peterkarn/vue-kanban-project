<template>
<div class="board">
  <div>
    <button class="add-column btn btn-primary" @click="addColumn"> +</button>
    <ul class="board row">
      <li class="col-12 col-md-6 col-lg-4"
        v-for="(column, idx) in columns"
        :key="column.id"> 
        <column
          @sendDataToModal="log"
          :column="column" 
          :idx="idx" 
          :id="column.id">
        </column>
      </li>
    </ul>
  </div>
  <b-button v-b-modal.modal> Modal</b-button>
  <b-modal id="modal">
    <h5 class="card-title">
      <input type="text" v-model.lazy="taskForModal.title">
    </h5>
    <input  type="text" v-model="taskForModal.descr">
    <textarea  v-model="taskForModal.fullDescr"></textarea>
  </b-modal>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Column from "./Column.vue";

  export default {
    name: 'Board',
    components: {
      Column,
    },
    data() {
      return {
        taskForModal: {}
      }
    },
    methods: {
      addColumn() {
        this.$store.commit('addColumn')
      },
      log(task) {
        this.taskForModal = task;
        console.log(this.taskForModal); 
      }
    },
    computed: { 
      ...mapState({columns: state => state.columns}), 
    }
  }
</script>

<style scoped>
  .board {
    padding: 0;
    list-style: none;
  }

  .add-column {
    margin: 30px 0 30px;
  }
</style>
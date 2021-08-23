<template>
<div class="board">
  <div>
    <div>
      <router-link class="btn btn-secondary" to="/">Back to boards list</router-link>
    </div>
    <button class="add-column btn btn-primary" @click="addColumn($route.params.id)"> +</button>
    <ul class="board row">
      <template v-for="(column, idx) in columns">
      <li class="col-12 col-md-6 col-lg-4"
        v-show="$route.params.id == column.board"
        :key="column.id"
      > 
        <column
          @sendDataToModal="showModal"
          :column="column" 
          :idx="idx" 
          :id="column.id"
          >
        </column>
      </li>
      </template>
    </ul>
  </div>
  <b-modal 
    id="modal"
    @hide="handleHide"
  >
    <h5 class="card-title">
      <input type="text" v-model="taskForModal.title">
    </h5>
    <input  type="text" v-model="taskForModal.descr">
    <textarea  v-model="taskForModal.fullDescr"></textarea>
  </b-modal>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Column from "./Column.vue";

  export default {
    name: 'Board',
    props: {
      boardId: Number
    },
    components: {
      Column,
    },
    data() {
      return {
        taskForModal: {}
      }
    },
    methods: {
      handleHide(bvEvt) {
        if (bvEvt.trigger === 'ok') {
          this.$store.dispatch('updateTask', this.taskForModal);
        } else {
            return false
        }
      },
      showModal(task) {
        this.taskForModal = {...task};
        this.$bvModal.show('modal')
      },
      ...mapActions(['addColumn', 'updateTask']),
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
<template>
  <div>
    <button @click="boardsModalHandler" class="btn btn-primary mb-5">
      Add Board
    </button>
    <p>Your boards</p>
    <template v-if="boards.length">
      <ul v-for="board in boards" 
        :key="board.id"
        class="list-group"
        >
        <li class="ist-group-item list-group-item-action">
          <router-link
          class="board-link"
            :to="{name: 'board', params: {id: board.id}}"
          >
          {{board.title}}
         </router-link>
        </li>
      </ul> 
    </template>
    <p v-else>
      Create your firs board
    </p>
  <b-modal 
    id="modal-board"
    @hide="handleHide"
  >
    <h3 class="card-title">
      Name of new board
    </h3>
    <input v-model="newBoard.title" type="text">
  </b-modal>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
  export default {
    data() {
      return {
        newBoard: {
          title: ''
        },
      }
    },
    methods: {
      boardsModalHandler() {
        this.$bvModal.show('modal-board')
      },
      handleHide(bvEvt) {
        if (bvEvt.trigger === 'ok') {
          this.$store.dispatch('addBoard', this.newBoard);
          this.newBoard.title = ''
        } else {
           this.newBoard.title = ''
          return false
        }
      },
      ...mapActions(['addBoard']),
    },
    computed: {
      ...mapState({boards: state => state.boards}),
    }
  }
</script>

<style scoped>
  .list-group {
    list-style: none;
  }

  .board-link {
    display: block;
    font-size: 20px;
    padding: 5px;
  }
</style>

<template>
<div class="card task-item">
    <div class="card-block">
      <h5 class="card-title">
        <span v-if="!editTitle" @click="editTitle = true">{{task.title}}</span>
        <input v-else type="text" v-model="task.title" @blur="editTitle = false">
      </h5>
      <p class="card-descr" v-if="!editDescr" @click="editDescr = true">{{task.descr}}</p>
      <input v-else type="text" v-model="task.descr" @blur="editDescr = false">
      <p class="card-full-descr"> {{task.fullDescr}}</p>
      <div class="card-btns">
        <button @click="removeTask" class="btn btn-danger">Remove</button>
        <!-- <b-button v-b-modal.modal class="btn btn-primary">Edit</b-button> -->
        <button @click="sendDataToModal" class="btn btn-primary">View</button>
      </div>
    </div>
    <!-- <b-modal id="modal">
       <h5 class="card-title">
        <span v-if="!editTitle" @click="editTitle = true">{{task.title}}</span>
        <input v-else type="text" v-model="task.title" @blur="editTitle = false">
      </h5>
      <p class="card-descr" v-if="!editDescr" @click="editDescr = true">{{task.descr}}</p>
      <input v-else type="text" v-model="task.descr" @blur="editDescr = false">
      <p class="card-full-descr" v-if="!editFullDescr" @click="editFullDescr = true">{{task.fullDescr}}</p>
      <textarea v-else v-model="task.fullDescr" @blur="editFullDescr = false"></textarea>
    </b-modal> -->
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: Object
    },
    data() {
      return {
        editTitle: false,
        editDescr: false,
        editFullDescr: false,
      }
    },
    methods: {
      removeTask() {
        const id = this.task.id
        this.$store.commit('removeTask', id)
      },
      sendDataToModal() {
        this.$emit('sendDataToModal', this.task)
      }
    }
  }
</script>

<style>

  .card.task-item {
    background: #627180;
  }
  
  .card-title:hover, .card-descr:hover, .modal-dialog .card-full-descr:hover {
    cursor: pointer;
    outline: 2px solid rgba(255, 255, 255, 0.315)
  }

  .card-ful-descr {
    width: 100%;
    font-size: 12px;
     display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-btns {
    display: flex;
    gap: 5px;
    justify-content: space-between;
  }

  .card-btns button{
    flex:0 1 33,333%
  }


  input {
    outline: none;
      border: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      width: 100%;
      transition: all 0.25s;
      background: inherit;
      color: white;
  }
</style>
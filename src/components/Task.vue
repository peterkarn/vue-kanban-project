<template>
<div class="card task-item">
    <div class="card-block">
      <p class="card-date">{{task.date}}</p>
        <p class="card-title" v-if="!editTitle" @click="editTitle = true">{{task.title}}</p>
        <input v-else type="text" v-model="task.title" @blur="editTitle = false">
      <p class="card-descr" v-if="!editDescr" @click="editDescr = true">{{task.descr}}</p>
      <input v-else type="text" v-model="task.descr" @blur="editDescr = false">
      <p class="card-full-descr"> {{task.fullDescr}}</p>
      <div class="card-btns">
        <button @click="removeTask" class="btn btn-danger">Remove</button>
        <button @click="sendDataToModal" class="btn btn-primary">Edit</button>
        <router-link class="btn btn-success" :to="'/details/' + task.id">View</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
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
        editCard: false
      }
    },
    methods: {
      removeTask() {
        const id = this.task.id
        this.$store.commit('removeTask', id)
      },
      sendDataToModal() {
        this.$emit('sendDataToModal', this.task)
      },
      ...mapActions(['removeTask', 'reinitStore'])
    }
  }
</script>

<style>

  .card.task-item {
    background: #627180;
  }

  .card-date {
    font-size: 12px;
    opacity: 0.7;
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
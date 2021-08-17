<template>
  <div class="add-item">
    <form action="#" method="post" v-on:submit.prevent="submitForm">
        <input v-model="taskText" type="text" placeholder="Add new task">
        <button class="btn btn-primary" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "AddNewTask",
    data() {
      return {
        taskText: ''
      }
    },
    props: {

    },
    methods: {
      submitForm() {
        if(this.taskText) {
          this.$store.commit('addTask', {
            text: this.taskText
          })
        }
        this.taskText = ''
      }
    },
    computed: {

    }
  }
</script>

<style>
.add-item form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}
.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: white;
}
.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}
</style>
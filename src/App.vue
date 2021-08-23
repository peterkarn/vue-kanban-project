<template>
  <div class="app" id="app">
    <div class="page-header">
      <h1>Kanban Board</h1>
      <p>vuejs based</p>
      <hr>
    </div>
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'app',
    beforeCreate() {
      this.$store.commit('initialiseStore');
    }
  };
</script>

<style>
  .app {
    padding-top: 50px;
  }
  .page-header h1 {
    font-weight: 300;
  }
  .card {
    margin-bottom: 10px;
  }
  .card:last-child {
    margin-bottom: 25px;
  }
  .card-block {
    padding: 15px;
  }
</style>
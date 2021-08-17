<template>
    <div class="menubar">
      <div class="btn-group" role="group" aria-label="Menu bar">
        <router-link :class="activeClass('/board')" to="/board">Board</router-link>
        <router-link :class="activeClass('/taskcreator')" to="/taskcreator">Create Task</router-link>
      </div>
    </div>       
</template>

<script>

  export default {
   name: 'TopBar',
   methods: {
     activeClass(path) {
       return {
         btn: true,
         'btn-primary': this.$route.path === path,
         'btn-secondary': this.$route.path !== path
       }
     }
   }
  }
</script>
<template>
  <div class="Task">
    <p>{{taskData.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    taskData: Object
  },
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="TagSelector">
    <div v-for="(lang, index) in languages" :key="index" @click="lang.selected = !lang.selected" :class="{selected: lang.selected}">{{lang.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'TagSelector',
  data() {
    return {
      languages: [
        {name: 'php', selected: false},
        {name: 'html', selected: false},
        {name: 'css', selected: false},
        {name: 'nodejs', selected: false},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .TagSelector div {
    display: inline-block;
    padding: 10px;
    border: 1px solid #ededed;
    border-radius: 2px;
    margin-right: 4px;
  }
  .TagSelector .selected {
      background-color: green;
      color:  white;
    }
</style>

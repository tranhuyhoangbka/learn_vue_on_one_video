<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Menu />
    <input type="text" v-model="name">
    <input type="checkbox" v-model="accept"> Toi dong y dieu khoan
    <div v-bind:id="id">{{name}}</div>
    <div v-show="isShow">
      <h1>La lap trinh vien</h1>
    </div>
    <div v-if="isShow">
      <h1>An hien theo v-if</h1>
    </div>
    <button @click="isShow = !isShow">
      <span v-if="isShow">An</span>
      <span v-else>Hien</span>
    </button>
    <div>
      <input type="text" :disabled="inputDisabled">
      <button @click="inputDisabled = !inputDisabled">Mo/khoa</button>
    </div>
    <h1 :class="{selected: selected}">Hay chon di</h1>
    <button @click="selected = !selected">chon/khongchon</button>
    <input type="text" v-model="channelName">
    <p>{{channelName}}</p>
    <input type="text" v-model="channelNames[0]">
    <input type="text" v-model="channelNames[1]">
    <p>{{channelNames[0]}} {{channelNames[1]}}</p>
    <button v-on:click="channelName = 'hoang tran'">Click</button>
    <form action="/abc">
      <input type="text" v-model="channel.name">
      <input type="text" ref="channelType" placeholder="c type">
      <button type="submit" @click.prevent="channel.name = 'ABC'">Click</button>
      <button type="button" @click="showChannelType">show c type</button>
    </form>
    <div>
      <input type="text" v-model="newTask">
      <button @click="addTask">Add Task</button>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input type="checkbox" v-model="task.done">
          <span :class="{done: task.done}">{{task.content}}</span>
        </li>
      </ul>
    </div>
    <div>
      <h1>A new task list</h1>
      <Task v-for="(task, index) in tasks" :key="index" :taskData="task" />
    </div>
    <TagSelector />
    <p>tong tien: {{tongTien | phantach}} <button @click="tongTien += 20000">Tang</button></p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Task from './components/Task.vue'
import TagSelector from './components/TagSelector.vue'

export default {
  name: 'App',
  data() {
    return {
      name: 'bui van hoang',
      accept: true,
      isShow: true,
      id: 12,
      inputDisabled: true,
      selected: true,
      channelName: 'laptrinh vien TV',
      channelNames: ['changel 1', 'chan2'],
      channel: {name: 'text name'},
      tasks: [
        {content: 'di cho', done: false},
        {content: 'nau an', done: true},
        {content: 'tam', done: false},
        {content: 'giat', done: false},
      ],
      newTask: '',
      tongTien: 1000000
    }
  },
  mounted() {
    // call api
  },
  methods: {
    showChannelType: function() {
      let c_type = this.$refs.channelType.value;
      alert(c_type);
    },
    addTask: function() {
      this.tasks.push({content: this.newTask, done: false});
    }
  },
  watch: {
    newTask: function(newValue, oldValue){
      console.log('data changed ' + newValue);
      console.log('data changed ' + oldValue);
    }
  },
  filters: {
    phantach: function(sotien){
      return sotien.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
  },
  components: {
    HelloWorld,
    Menu,
    Task,
    TagSelector
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.selected {
  color:  red;
}
.done {
  text-decoration: line-through;
}
</style>
